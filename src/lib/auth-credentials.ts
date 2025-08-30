import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import dbConnect from "@/lib/mongoose"
import { User } from "@/models/User"

export const credentialsProvider = CredentialsProvider({
  id: "credentials",
  name: "credentials",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
      return null
    }

    try {
      await dbConnect()
      
      const user = await User.findOne({ email: credentials.email })
      
      if (!user || !user.password) {
        return null
      }

      const isPasswordValid = await bcrypt.compare(
        credentials.password as string, 
        user.password as string
      )
      
      if (!isPasswordValid) {
        return null
      }

      return {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        image: user.image,
      }
    } catch (error) {
      console.error("Authentication error:", error)
      return null
    }
  }
})
