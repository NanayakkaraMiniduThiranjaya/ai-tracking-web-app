import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Dynamic import to avoid issues with server-side AI libraries
    const { getChatbotResponse } = await import('@/ai/flows/chatbot');
    const result = await getChatbotResponse({ message });

    return NextResponse.json({ response: result.response });
  } catch (error) {
    console.error('Chatbot API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to get chatbot response',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
