# OAuth Setup Guide for MediCare

## Google OAuth Setup

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a Project" → "New Project"
3. Enter project name: `MediCare-Auth`
4. Click "Create"

### 2. Enable Google Identity API
1. Go to "APIs & Services" → "Library"
2. Search for "Google Identity"
3. Click "Google Identity" and click "Enable"

### 3. Configure OAuth Consent Screen
1. Go to "APIs & Services" → "OAuth consent screen"
2. Select "External" (unless you have a Google Workspace)
3. Fill in required fields:
   - **App name**: MediCare
   - **User support email**: your-email@gmail.com
   - **Developer contact information**: your-email@gmail.com
4. Click "Save and Continue"
5. Skip scopes for now (click "Save and Continue")
6. Add test users (your email) if in testing mode
7. Click "Save and Continue"

### 4. Create OAuth 2.0 Credentials
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth 2.0 Client IDs"
3. Select "Web application"
4. Name: `MediCare Web Client`
5. **Authorized JavaScript origins**:
   - `http://localhost:3000`
   - `http://localhost:3001`
   - Add your production domain when ready
6. **Authorized redirect URIs**:
   - `http://localhost:3000/api/auth/callback/google`
   - `http://localhost:3001/api/auth/callback/google`
   - Add your production callback URL when ready
7. Click "Create"
8. **Copy the Client ID and Client Secret** - you'll need these!

### 5. Update Environment Variables
Replace the placeholder values in your `.env` file:

```bash
GOOGLE_CLIENT_ID=your-actual-google-client-id-here
GOOGLE_CLIENT_SECRET=your-actual-google-client-secret-here
```

## Facebook OAuth Setup (Optional)

### 1. Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "Create App" → "Consumer"
3. Enter app name: `MediCare`
4. Click "Create App"

### 2. Add Facebook Login
1. In your app dashboard, click "Add Product"
2. Find "Facebook Login" and click "Set Up"
3. Select "Web"
4. Enter Site URL: `http://localhost:3000`

### 3. Configure Valid OAuth Redirect URIs
1. Go to Facebook Login → Settings
2. Add Valid OAuth Redirect URIs:
   - `http://localhost:3000/api/auth/callback/facebook`
   - `http://localhost:3001/api/auth/callback/facebook`

### 4. Get App Credentials
1. Go to Settings → Basic
2. Copy your **App ID** and **App Secret**

### 5. Update Environment Variables
```bash
FACEBOOK_CLIENT_ID=your-facebook-app-id
FACEBOOK_CLIENT_SECRET=your-facebook-app-secret
```

## Testing
1. Restart your development server: `npm run dev`
2. Go to `http://localhost:3000/auth/signin`
3. Try signing in with Google/Facebook

## Troubleshooting
- Make sure all URLs match exactly (including http/https)
- Check that APIs are enabled in Google Cloud Console
- Verify environment variables are saved and server is restarted
- Check browser console for additional error details
