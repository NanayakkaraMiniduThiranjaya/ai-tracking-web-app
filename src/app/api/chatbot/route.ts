import { NextRequest, NextResponse } from 'next/server';
import { getChatbotResponse } from '@/ai/flows/chatbot';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    const result = await getChatbotResponse({ message });

    return NextResponse.json({ response: result.response });
  } catch (error) {
    console.error('Chatbot API Error:', error);
    return NextResponse.json(
      { error: 'Failed to get chatbot response' },
      { status: 500 }
    );
  }
}
