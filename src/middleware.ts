import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

// Remove runtime specification to use default edge runtime for middleware

// Define protected routes
const protectedRoutes = ["/dashboard"]

// Define public routes that should redirect if authenticated
const publicRoutes = ["/auth/signin", "/auth/error"]

export async function middleware(request: NextRequest) {
  // Use getToken instead of auth() for edge compatibility
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })
  
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
  if (isProtectedRoute && !token) {
    const signInUrl = new URL("/auth/signin", request.url)
    signInUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(signInUrl)
  }

  // If trying to access auth pages with active session, redirect to dashboard
  if (isPublicRoute && token) {
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
