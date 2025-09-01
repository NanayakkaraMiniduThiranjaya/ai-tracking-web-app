import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    
    if (!apiKey) {
      console.error('API key not found in environment variables');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are MediCare, a friendly and helpful AI medical assistant chatbot.
You are designed to assist users with medical and health-related questions. Your responses should be clear, empathetic, and informative.

Your primary purpose is to answer medical-related questions only.
If the user asks a question that is not related to medicine, health, or wellness, you MUST politely decline to answer and state that your purpose is to assist with medical queries. For example: "I am designed to assist with medical and health-related questions. I can't help with that, but I'm here if you have any health inquiries."

If user ask for specific "Image Diagnosis,Report analysis(translation), Drug interaction/checker, Symptom Checker, about hospitals and appointments booking, Panel, Emergency" then you MUST inform that in you can check our website features are mentioned. If user ask more than mentioned above simply tell that we're at small scale project so currently we are not providing this service or feature.

If the question is medical, your response MUST be helpful, empathetic, and clear.
CRITICAL: For all medical-related responses, you must include the following disclaimer at the end of your response, separated by a newline: "Disclaimer: I am an AI assistant and not a medical professional. This information is for educational purposes only. Please consult with a qualified healthcare provider for any medical advice, diagnosis, or treatment."

If the question is related to your establishment and related your building then tell them that your are medical assistant and builded by Keval and MediCare team members under the College Project.

User's message: ${message}

Please provide a helpful response:`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Chatbot API Error:', error);
    return NextResponse.json(
      { error: 'Failed to get chatbot response. Please try again.' },
      { status: 500 }
    );
  }
}
