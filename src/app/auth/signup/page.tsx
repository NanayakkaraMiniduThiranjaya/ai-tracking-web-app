"use client"

import { signIn, getProviders } from "next-auth/react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function SignUpPage() {
  const [providers, setProviders] = useState<any>(null)
  const [providersLoaded, setProvidersLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const setAuthProviders = async () => {
      if (providersLoaded) return;
      try {
        const res = await getProviders()
        setProviders(res)
      } catch (error) {
        console.error('Failed to load providers:', error)
      } finally {
        setProvidersLoaded(true)
      }
    }
    setAuthProviders()
  }, [providersLoaded])

  const handleSocialSignUp = async (providerId: string) => {
    setIsLoading(true)
    try {
      await signIn(providerId, { callbackUrl: "/dashboard" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign up. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Register user first
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Account created successfully!",
          description: "You can now sign in with your credentials.",
        })
        
        // Auto sign in after successful registration
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        })

        if (result?.ok) {
          router.push("/dashboard")
        } else {
          router.push("/auth/signin")
        }
      } else {
        toast({
          title: "Registration failed",
          description: data.error || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[70%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[60%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <Card className="w-full max-w-md relative z-10 bg-card/80 backdrop-blur-sm border border-border/50">
        <CardHeader className="text-center">
          <Link href="/" className="flex items-center justify-center gap-2 mb-4">
            <Icons.logo className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent">
              MediCare
            </span>
          </Link>
          <CardTitle className="text-2xl font-semibold">Create your account</CardTitle>
          <CardDescription>
            Join MediCare and start your health journey today
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Social Sign Up Buttons */}
          <div className="space-y-2">
            {providers && providers.google && (
              <Button
                variant="outline"
                onClick={() => handleSocialSignUp("google")}
                disabled={isLoading}
                className="w-full"
              >
                <Icons.google className="mr-2 h-4 w-4" />
                Sign up with Google
              </Button>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email/Password Sign Up Form */}
          <form onSubmit={handleEmailSignUp} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password (min. 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Create Account
            </Button>
          </form>

          {/* Sign in link */}
          <div className="text-center">
            <Link
              href="/auth/signin"
              className="text-sm text-primary hover:underline"
            >
              Already have an account? Sign in
            </Link>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
