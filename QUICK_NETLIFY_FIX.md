# Quick Fix for Google Login on Netlify 🚀

## 🎯 **Your Issue**
Site: `https://medicaresrilanka.netlify.app` - Google login button not showing

## ⚡ **Quick Fix (2 Steps)**

### 1. **Google Cloud Console** (5 minutes)
1. Go to: https://console.cloud.google.com/apis/credentials
2. Click your OAuth Client ID
3. In "Authorized redirect URIs", add:
   ```
   https://medicaresrilanka.netlify.app/api/auth/callback/google
   ```
4. Click **Save**

### 2. **Netlify Dashboard** (5 minutes)
1. Go to: https://app.netlify.com/sites/medicaresrilanka/settings/env
2. Add these environment variables:

```bash
NEXTAUTH_URL = https://medicaresrilanka.netlify.app
NEXTAUTH_SECRET = your-secure-secret-key-here
GOOGLE_CLIENT_ID = 1088565278752-srk76k5aq95qrbj4eoo5qnef2csc7ocd.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET = 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
MONGODB_URI = mongodb+srv://thiranjaya2003_db_user:0LjTUcg0etWIv4xG@cluster0.qduzekm.mongodb.net/medicare_users?retryWrites=true&w=majority&appName=Cluster0
GEMINI_API_KEY = AIzaSyCBIHj0kH19jo_esHT6zEp8kD8oKtxq_S8
GOOGLE_API_KEY = AIzaSyCBIHj0kH19jo_esHT6zEp8kD8oKtxq_S8
```

3. Click **Save** and **Deploy site**

## ✅ **Test**
- Wait 3-5 minutes after deployment
- Visit: https://medicaresrilanka.netlify.app/auth/signup
- You should see the Google login button! 🎉

## 🔍 **Why This Happens**
- Google OAuth blocks requests from unauthorized domains
- Your app works locally but not in production
- Netlify needs environment variables set separately from your local `.env` file

This should fix your Google login issue! Let me know if you need help with any of these steps.
