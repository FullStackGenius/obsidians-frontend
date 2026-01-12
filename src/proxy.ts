import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('auth_token')?.value

  // 🔒 Protect ALL admin routes + sub-routes (dashboard, profile, settings, users, etc.)
  if (!token && pathname.startsWith('/admin/')) {
    // If no token → redirect to admin login
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  // 🔁 Prevent logged-in users from seeing login page again
  if (token && pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  // All good → continue
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',          // ← This covers /admin/profile, /admin/dashboard/xxx, /admin/users, etc.
    '/admin'                  // Also apply to exact /admin (login page)
  ]
}