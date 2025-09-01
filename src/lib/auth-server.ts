import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./mongodb"
import { credentialsProvider } from "./auth-credentials"

// Only include providers if credentials are available
const providers = []

// Always include credentials provider for email/password auth
providers.push(credentialsProvider)

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true, // Allows linking accounts with same email
    })
  )
}

export const authConfig = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers,
  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      if (trigger === "update" && session?.name) {
        token.name = session.name
      }
      return token
    },
    session({ session, token }) {
      if (session?.user && token) {
        session.user.id = token.id as string
      }
      return session
    },
    redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      console.log('User signed in:', { user: user.email, isNewUser })
    },
    async createUser({ user }) {
      console.log('New user created:', user.email)
    },
  },
  // Enable debug only in development
  debug: process.env.NODE_ENV === 'development',
})

export const { handlers, auth, signIn, signOut } = authConfig
