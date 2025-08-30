import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth-server'
import dbConnect from '@/lib/mongoose'
import { User } from '@/models/User'

export async function GET(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await dbConnect()
    
    const user = await User.findOne({ email: session.user.email })
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({
      profile: user.profile,
      preferences: user.preferences
    })
  } catch (error) {
    console.error('Profile fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    await dbConnect()
    
    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      { 
        $set: {
          profile: body.profile,
          preferences: body.preferences
        }
      },
      { new: true, upsert: false }
    )

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({
      message: 'Profile updated successfully',
      profile: user.profile,
      preferences: user.preferences
    })
  } catch (error) {
    console.error('Profile update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
