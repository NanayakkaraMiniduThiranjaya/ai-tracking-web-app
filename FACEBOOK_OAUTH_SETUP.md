# Facebook OAuth Setup Instructions

## Step 1: Create a Facebook App

1. **Go to Facebook Developers**: https://developers.facebook.com/
2. **Log in** with your Facebook account
3. **Click "Create App"**
4. **Choose "Consumer" app type**
5. **Fill in app details**:
   - **App Name**: MediCare (or your preferred name)
   - **Contact Email**: Your email address
   - **Category**: Health & Fitness

## Step 2: Configure Facebook Login

1. **In your app dashboard**, find **"Facebook Login"** and click **"Set Up"**
2. **Choose "Web"** platform
3. **Add your site URL**: `http://localhost:3000`

## Step 3: Get App Credentials

1. **Go to Settings > Basic** in your app dashboard
2. **Copy your App ID** (this will be your `FACEBOOK_CLIENT_ID`)
3. **Copy your App Secret** (this will be your `FACEBOOK_CLIENT_SECRET`)
   - You may need to click "Show" and enter your Facebook password

## Step 4: Configure Valid OAuth Redirect URIs

1. **Go to Facebook Login > Settings** in your app dashboard
2. **Add Valid OAuth Redirect URIs**:
   ```
   http://localhost:3000/api/auth/callback/facebook
   ```
3. **Save Changes**

## Step 5: Update Environment Variables

Update your `.env` file with the credentials from Step 3:

```bash
FACEBOOK_CLIENT_ID=your-actual-app-id-here
FACEBOOK_CLIENT_SECRET=your-actual-app-secret-here
```

## Step 6: Test the Integration

1. **Restart your development server**: `npm run dev`
2. **Go to**: http://localhost:3000/auth/signin or http://localhost:3000/auth/signup
3. **You should see the "Continue with Facebook" button**
4. **Test the login flow**

## Step 7: App Review (For Production)

For production use, you'll need to:

1. **Submit your app for review** by Facebook
2. **Add required permissions**:
   - `email` (usually auto-approved)
   - `public_profile` (usually auto-approved)
3. **Update redirect URIs** to include your production domain
4. **Switch app from "Development" to "Live" mode**

## Troubleshooting

### Common Issues:

1. **"App Not Set Up" Error**:
   - Make sure Facebook Login is added to your app
   - Check that the app is in the correct mode

2. **"Invalid OAuth access token" Error**:
   - Verify your App Secret is correct
   - Make sure the redirect URI matches exactly

3. **"This app is in development mode" Error**:
   - This is normal for development
   - Users need to be added as "App Testers" or the app needs to be reviewed

### Development Testing:

- **Add test users**: Go to Roles > Test Users in your Facebook app dashboard
- **Or add yourself as an App Tester**: Go to Roles > Roles

## Required Permissions

The basic permissions needed:
- ✅ `email` - To get user's email address
- ✅ `public_profile` - To get user's name and profile picture

## Current Status:
- ✅ Facebook OAuth integrated in code
- ✅ Facebook icon added to both sign-in and sign-up pages
- ❌ Facebook App ID and Secret needed
- ❌ Facebook app configuration needed

## Next Steps:
1. Create Facebook app (Steps 1-2)
2. Get credentials (Step 3)
3. Configure redirect URIs (Step 4)
4. Update .env file (Step 5)
5. Test the integration (Step 6)
