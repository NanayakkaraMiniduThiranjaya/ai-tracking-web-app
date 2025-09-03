# Google Login Debug Guide 🔍

## 🎯 **Issue**: Google Login Button Not Showing on Production

Site: `https://medicaresrilanka.netlify.app/auth/signup`

## 🔧 **Debug Steps Added**

I've added debug logging and status messages to help identify the issue:

1. **Console Logging**: Browser console will show provider loading status
2. **Visual Status**: Warning message if OAuth is not configured
3. **Debug API**: `/api/debug/env?secret=debug-2025` to check environment variables

## 🚀 **Next Steps**

### Step 1: Commit Debug Changes
```bash
git add .
git commit -m "Add debug logging for OAuth providers"
git push origin main
```

### Step 2: Check Production Debug
After deployment, visit:
```
https://medicaresrilanka.netlify.app/api/debug/env?secret=debug-2025
```

This will show:
- Environment variables status
- Whether Google OAuth credentials are loaded
- NextAuth URL configuration

### Step 3: Check Browser Console
1. Visit: `https://medicaresrilanka.netlify.app/auth/signup`
2. Open browser developer tools (F12)
3. Check console for "Providers loaded:" message
4. Look for any error messages

### Step 4: Verify Environment Variables
Make sure your `.env` file contains:
```env
NEXTAUTH_URL=https://medicaresrilanka.netlify.app
NEXTAUTH_SECRET=medicare-production-secret-key-2025-secure-random-string
GOOGLE_CLIENT_ID=1088565278752-srk76k5aq95qrbj4eoo5qnef2csc7ocd.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your-actual-secret-here
```

## 🔍 **Common Issues & Solutions**

### Issue 1: Client Secret Mismatch
**Symptoms**: Providers load but Google provider is missing
**Solution**: Update `GOOGLE_CLIENT_SECRET` with current secret from Google Cloud Console

### Issue 2: Environment Variables Not Loaded
**Symptoms**: Debug API shows `hasGoogleClientId: false`
**Solution**: Ensure `.env` file is committed and deployed

### Issue 3: NextAuth URL Mismatch
**Symptoms**: OAuth fails silently
**Solution**: Verify `NEXTAUTH_URL` matches your Netlify domain exactly

### Issue 4: Google Cloud Console Configuration
**Symptoms**: OAuth redirect errors
**Solution**: Ensure redirect URI is correctly added:
```
https://medicaresrilanka.netlify.app/api/auth/callback/google
```

## 🧪 **Testing Checklist**

- [ ] Commit and push debug changes
- [ ] Check debug API response
- [ ] Review browser console logs
- [ ] Verify environment variables
- [ ] Test Google Cloud Console configuration
- [ ] Try incognito/private browsing
- [ ] Wait 2-3 minutes after changes

## 📊 **Expected Debug Output**

### Successful Configuration:
```javascript
Providers loaded: {
  credentials: { ... },
  google: { 
    id: "google",
    name: "Google",
    type: "oauth"
  }
}
```

### Failed Configuration:
```javascript
Providers loaded: {
  credentials: { ... }
  // No google provider
}
```

## 🎯 **Most Likely Issues**

1. **Client Secret**: Your Google client secret might be incorrect
2. **Environment Variables**: `.env` file not properly deployed
3. **Timing**: Changes still propagating (wait 2-3 minutes)

Run through these debug steps and let me know what you find! 🚀
