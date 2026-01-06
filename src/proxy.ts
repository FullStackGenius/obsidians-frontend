// proxy.ts (root level)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('auth_token')?.value

  // 🔒 Protect admin dashboard + subroutes
  if (!token && pathname.startsWith('/admin/dashboard')) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  // 🔁 Prevent logged-in users from seeing login again
  if (token && pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}