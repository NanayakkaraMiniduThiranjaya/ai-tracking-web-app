"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { Suspense } from "react"

const errorMessages = {
  Configuration: "There is a problem with the server configuration.",
  AccessDenied: "You do not have permission to sign in.",
  Verification: "The sign in link is no longer valid. It may have been used already or it may have expired.",
  Default: "An error occurred during authentication.",
}

function ErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")
  
  const errorMessage = error && error in errorMessages 
    ? errorMessages[error as keyof typeof errorMessages] 
    : errorMessages.Default

  return (
    <Card className="w-full max-w-md relative z-10 bg-card/80 backdrop-blur-sm border border-border/50">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 rounded-full bg-destructive/10">
            <Icons.alertTriangle className="h-8 w-8 text-destructive" />
          </div>
        </div>
        <CardTitle className="text-2xl font-semibold text-destructive">
          Authentication Error
        </CardTitle>
        <CardDescription>
          {errorMessage}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Button asChild className="w-full">
            <Link href="/auth/signin">
              Try signing in again
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">
              Go back home
            </Link>
          </Button>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          If the problem persists, please{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact support
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[70%] bg-destructive/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[60%] bg-destructive/10 blur-[120px] rounded-full" />
      </div>

      <Suspense fallback={
        <Card className="w-full max-w-md relative z-10 bg-card/80 backdrop-blur-sm border border-border/50">
          <CardHeader className="text-center">
            <CardTitle>Loading...</CardTitle>
          </CardHeader>
        </Card>
      }>
        <ErrorContent />
      </Suspense>
    </div>
  )
}
