# Fix Google OAuth for Netlify Production 🔧

## ❌ **Current Issue**
Google login button is not showing on your production site: `https://medicaresrilanka.netlify.app`

## 🔍 **Root Causes**
1. **Missing Production Redirect URI** in Google Cloud Console
2. **Environment Variables** not configured in Netlify
3. **NEXTAUTH_URL** points to localhost instead of production domain

## ✅ **Solution Steps**

### Step 1: Update Google Cloud Console

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/
   - Select your project

2. **Navigate to Credentials:**
   - Go to "APIs & Services" → "Credentials"
   - Find your OAuth 2.0 Client ID: `1088565278752-srk76k5aq95qrbj4eoo5qnef2csc7ocd.apps.googleusercontent.com`
   - Click on it to edit

3. **Add Production Redirect URI:**
   Add this exact URI to your "Authorized redirect URIs" list:
   ```
   https://medicaresrilanka.netlify.app/api/auth/callback/google
   ```

4. **Keep Development URIs:**
   Also keep these for local development:
   ```
   http://localhost:3000/api/auth/callback/google
   http://localhost:3001/api/auth/callback/google
   http://localhost:3002/api/auth/callback/google
   ```

5. **Save Configuration:**
   - Click "Save"
   - Wait 2-3 minutes for changes to propagate

### Step 2: Configure Netlify Environment Variables

1. **Go to Netlify Dashboard:**
   - Visit: https://app.netlify.com/
   - Select your site: `medicaresrilanka`

2. **Navigate to Environment Variables:**
   - Go to "Site configuration" → "Environment variables"
   - Or: "Site settings" → "Build & deploy" → "Environment variables"

3. **Add These Variables:**
   ```bash
   # NextAuth Configuration
   NEXTAUTH_URL=https://medicaresrilanka.netlify.app
   NEXTAUTH_SECRET=medicare-secret-key-change-in-production-make-this-longer-and-more-secure

   # MongoDB Database
   MONGODB_URI=mongodb+srv://thiranjaya2003_db_user:0LjTUcg0etWIv4xG@cluster0.qduzekm.mongodb.net/medicare_users?retryWrites=true&w=majority&appName=Cluster0

   # Google OAuth
   GOOGLE_CLIENT_ID=1088565278752-srk76k5aq95qrbj4eoo5qnef2csc7ocd.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=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

   # AI Configuration
   GEMINI_API_KEY=AIzaSyCBIHj0kH19jo_esHT6zEp8kD8oKtxq_S8
   GOOGLE_API_KEY=AIzaSyCBIHj0kH19jo_esHT6zEp8kD8oKtxq_S8
   ```

4. **Redeploy Your Site:**
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Deploy site"
   - Or push a new commit to trigger auto-deploy

### Step 3: Verify Configuration

After completing steps 1 & 2:

1. **Wait for deployment** to complete (2-3 minutes)
2. **Visit:** https://medicaresrilanka.netlify.app/auth/signup
3. **You should see:** "Continue with Google" button
4. **Test:** Click the button to verify OAuth works

## 🚨 **Important Notes**

### Security Considerations
- **Change NEXTAUTH_SECRET** to a long, random string for production
- **Never commit** production environment variables to Git
- **Use different secrets** for development and production

### Domain Verification
- Make sure your domain `medicaresrilanka.netlify.app` is exactly correct
- Include `https://` (not `http://`) for production
- No trailing slashes in the redirect URI

### Common Issues
- **Changes take time:** Google OAuth changes take 2-3 minutes to propagate
- **Cache issues:** Try incognito/private browsing if button doesn't appear
- **Environment variables:** Make sure they're set in Netlify, not just locally

## 🔧 **Quick Checklist**

- [ ] Add `https://medicaresrilanka.netlify.app/api/auth/callback/google` to Google Cloud Console
- [ ] Set `NEXTAUTH_URL=https://medicaresrilanka.netlify.app` in Netlify
- [ ] Add all other environment variables to Netlify
- [ ] Redeploy the site
- [ ] Test Google login on production

## 🎯 **Expected Result**

After completing these steps:
- ✅ Google login button will appear on your production site
- ✅ Users can sign in with Google on `https://medicaresrilanka.netlify.app`
- ✅ OAuth redirects will work correctly
- ✅ Authentication will function in production

The main issue is that your Google OAuth configuration doesn't know about your Netlify domain, so it's blocking the authentication request.
