# Google OAuth Redirect URI Fix 🔧

## ❌ **Current Error**
```
Error 400: redirect_uri_mismatch
Access blocked: This app's request is invalid
```

## 🔍 **Root Cause**
Your Google OAuth configuration doesn't include the correct redirect URI for your current development server port.

## ✅ **Solution Steps**

### 1. **Go to Google Cloud Console**
- Visit: [Google Cloud Console](https://console.cloud.google.com/)
- Select your project (or create one if needed)

### 2. **Navigate to OAuth Credentials**
- Go to "APIs & Services" → "Credentials"
- Find your OAuth 2.0 Client ID: `1088565278752-srk76k5aq95qrbj4eoo5qnef2csc7ocd.apps.googleusercontent.com`
- Click on it to edit

### 3. **Update Authorized Redirect URIs**
Add these URIs to your authorized redirect URIs list:

**Required URIs:**
```
http://localhost:3000/api/auth/callback/google
http://localhost:3001/api/auth/callback/google
http://localhost:3002/api/auth/callback/google
```

**Why multiple ports?**
- Next.js automatically finds available ports (3000, 3001, 3002, etc.)
- Adding multiple ensures it works regardless of which port is used

### 4. **Save the Configuration**
- Click "Save" in Google Cloud Console
- Wait a few minutes for changes to propagate

### 5. **Test the Login**
- Go to: http://localhost:3001/auth/signin
- Click "Continue with Google"
- Should now work without redirect URI error

## 🚀 **Alternative Quick Fix**

If you want to use a specific port consistently:

### Option A: Force Port 3000
```bash
# Stop all Node processes
taskkill /F /IM node.exe

# Start on specific port
npx next dev -p 3000
```

Then update `.env`:
```env
NEXTAUTH_URL=http://localhost:3000
```

### Option B: Use Current Port (3001)
Your `.env` is already updated to use port 3001:
```env
NEXTAUTH_URL=http://localhost:3001
```

Just add the redirect URI to Google Cloud Console as shown above.

## 🔧 **Development vs Production**

### Development (Local)
```env
NEXTAUTH_URL=http://localhost:3001
```
Redirect URI: `http://localhost:3001/api/auth/callback/google`

### Production (Netlify/Vercel)
```env
NEXTAUTH_URL=https://your-domain.com
```
Redirect URI: `https://your-domain.com/api/auth/callback/google`

## ✅ **Verification**

After updating Google Cloud Console:
1. Wait 2-3 minutes for changes to take effect
2. Try signing in with Google again
3. Should redirect successfully to dashboard

The error will be resolved once the redirect URIs are properly configured in Google Cloud Console!
