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

export default function SignInPage() {
  const [providers, setProviders] = useState<any>(null)
  const [providersLoaded, setProvidersLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState("")
  const { toast } = useToast()

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

  const handleSocialSignIn = async (providerId: string) => {
    setIsLoading(true)
    try {
      await signIn(providerId, { callbackUrl: "/dashboard" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign in. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      if (isLogin) {
        // Sign in with credentials
        const result = await signIn("credentials", { 
          email, 
          password, 
          redirect: false 
        })
        
        if (result?.error) {
          toast({
            title: "Error",
            description: "Invalid email or password.",
            variant: "destructive",
          })
        } else {
          window.location.href = "/dashboard"
        }
      } else {
        // Register new user
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        })

        if (response.ok) {
          toast({
            title: "Account created",
            description: "Please sign in with your new account.",
          })
          setIsLogin(true)
          setName("")
          setPassword("")
        } else {
          const data = await response.json()
          toast({
            title: "Error",
            description: data.error || "Failed to create account.",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
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
          <CardTitle className="text-2xl font-semibold">
            {isLogin ? "Welcome back" : "Create account"}
          </CardTitle>
          <CardDescription>
            {isLogin ? "Sign in to your account to continue" : "Create a new account to get started"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* OAuth Configuration Status */}
          {(!providers || Object.keys(providers).length === 0) && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Icons.alertTriangle className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    OAuth Not Configured
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Social sign-in is not available. Please configure your OAuth providers in the{" "}
                      <code className="bg-yellow-100 px-1 py-0.5 rounded text-xs">.env</code> file.
                    </p>
                    <p className="mt-1">
                      See <code>OAUTH_SETUP.md</code> for detailed instructions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Social Sign In Buttons */}
          <div className="space-y-2">
            {providers && providers.google && (
              <Button
                variant="outline"
                onClick={() => handleSocialSignIn("google")}
                disabled={isLoading}
                className="w-full"
              >
                <Icons.google className="mr-2 h-4 w-4" />
                Continue with Google
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

          {/* Email/Password Form */}
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                />
              </div>
            )}
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
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>

          {/* Toggle between sign in and sign up */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setName("")
                setPassword("")
              }}
              className="text-sm text-primary hover:underline"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            By signing in, you agree to our{" "}
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
