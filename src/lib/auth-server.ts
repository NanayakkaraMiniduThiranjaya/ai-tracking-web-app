import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
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
    })
  )
}

if (process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET) {
  providers.push(
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    })
  )
}

export const authConfig = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers,
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }
      return token
    },
    session({ session, token }) {
      if (session?.user && token) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      console.log('User signed in:', { user, isNewUser })
    },
    async createUser({ user }) {
      console.log('New user created:', user)
    },
  },
})

export const { handlers, auth, signIn, signOut } = authConfig
