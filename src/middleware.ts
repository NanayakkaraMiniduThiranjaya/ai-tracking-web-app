import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const runtime = 'nodejs'

// Define protected routes
const protectedRoutes = ["/dashboard"]

// Define public routes that should redirect if authenticated
const publicRoutes = ["/auth/signin", "/auth/error"]

export async function middleware(request: NextRequest) {
  const session = await auth()
  const { pathname } = request.nextUrl

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )

  // Check if the route is public
  const isPublicRoute = publicRoutes.some(route => 
    pathname.startsWith(route)
  )

  // If trying to access protected route without session, redirect to signin
  if (isProtectedRoute && !session) {
    const signInUrl = new URL("/auth/signin", request.url)
    signInUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(signInUrl)
  }

  // If trying to access auth pages with active session, redirect to dashboard
  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - public files (public folder)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
}
