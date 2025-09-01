# Fix Google OAuth Client Secret 🔧

## ❌ **Current Issue**
Your Google Client Secret in `.env` doesn't match the current secret in Google Cloud Console.

## 🔍 **Problem Identified**
- **Console shows**: `****b3I1` (created 1 September 2025)
- **Your .env has**: `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` (older secret)
- **Result**: OAuth authentication fails, no Google login button shows

## ✅ **Solution Steps**

### Step 1: Get New Client Secret from Google Cloud Console

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/apis/credentials
   - Click your OAuth Client: `client 1`

2. **Create New Client Secret:**
   - In the "Client secrets" section
   - Click "ADD SECRET" button
   - Copy the new secret immediately (you won't be able to see it again)

3. **The new secret will look like:**
   ```
   GOCSPX-xxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Step 2: Update Your .env File

Replace the current `GOOGLE_CLIENT_SECRET` with the new one:

```env
# OAuth Providers
GOOGLE_CLIENT_ID=1088565278752-srk76k5aq95qrbj4eoo5qnef2csc7ocd.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your-new-secret-here
```

### Step 3: Deploy Changes

```bash
git add .
git commit -m "Update Google OAuth client secret"
git push origin main
```

## 🚀 **Alternative: Use Current Secret**

If you want to keep using the existing secret (ending in `b3I1`), you need to:

1. **Generate a new secret** in Google Cloud Console
2. **Copy it immediately** when shown
3. **Update your .env file** with the new secret
4. **Commit and push** the changes

## ⚠️ **Important Notes**

### Security
- **Never share** client secrets publicly
- **Copy the secret** immediately when Google shows it
- **Store it securely** - you can't view it again in the console

### Timing
- Changes may take **2-5 minutes** to take effect
- Try **incognito mode** to test without cache
- **Redeploy** your Netlify site after updating

## 🔍 **Verification Steps**

After updating the client secret:

1. **Wait 5 minutes** for changes to propagate
2. **Visit**: https://medicaresrilanka.netlify.app/auth/signup
3. **Check**: Google login button should appear
4. **Test**: Click button to verify OAuth works

## 🎯 **Current OAuth Configuration ✅**

Your OAuth settings are correctly configured:
- ✅ **Redirect URI**: `https://medicaresrilanka.netlify.app/api/auth/callback/google`
- ✅ **JavaScript Origins**: `http://localhost:3000`, `http://localhost:3001`
- ✅ **Client ID**: Matches your .env file
- ❌ **Client Secret**: Needs to be updated

Once you update the client secret, your Google login will work perfectly! 🚀
