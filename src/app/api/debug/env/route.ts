import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Only allow in development or if a secret parameter is provided
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  
  if (process.env.NODE_ENV !== 'development' && secret !== 'debug-2025') {
    return NextResponse.json({ error: 'Not authorized' }, { status: 403 })
  }

  return NextResponse.json({
    environment: process.env.NODE_ENV,
    nextauthUrl: process.env.NEXTAUTH_URL,
    hasGoogleClientId: !!process.env.GOOGLE_CLIENT_ID,
    hasGoogleClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
    googleClientIdFirst10: process.env.GOOGLE_CLIENT_ID?.substring(0, 10) + '...',
    hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
    timestamp: new Date().toISOString()
  })
}
