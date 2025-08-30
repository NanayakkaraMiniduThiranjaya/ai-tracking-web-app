# Google OAuth Setup Instructions

## Your Current Credentials
- **Email**: miniduthiranjaya2003@gmail.com
- **Client Secret**: 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

## Missing: Google Client ID

To complete the Google OAuth setup, you need to get your **Google Client ID** from Google Cloud Console.

### Steps to Get Google Client ID:

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Select your project** (or create new one)
3. **Go to APIs & Services > Credentials**
4. **Find your OAuth 2.0 Client**
5. **Copy the Client ID** (it looks like: `xxxxx-xxxxx.apps.googleusercontent.com`)

### Add to Environment:
Once you have the Client ID, update your `.env` file:

```bash
GOOGLE_CLIENT_ID=your-client-id-here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
```

### Required Redirect URIs:
Make sure these are added in your Google Cloud Console OAuth settings:
- `http://localhost:3000/api/auth/callback/google`
- `http://localhost:3001/api/auth/callback/google`
- `http://localhost:3002/api/auth/callback/google`

### Database Information:
- **New Database**: `medicare_users` (specifically for user information)
- **Connection**: MongoDB Atlas cluster
- **Collections**: Users, Accounts, Sessions will be auto-created

## Current Status:
✅ Google Client Secret configured
❌ Google Client ID needed
✅ Email/Password authentication working
✅ MongoDB user database ready
✅ Sign-up page created
