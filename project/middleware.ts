import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Get the subdomain from hostname
  const subdomain = hostname.split('.')[0];
  
  // Skip middleware for localhost and main domain
  if (hostname.includes('localhost') || hostname.includes('127.0.0.1') || subdomain === 'www' || !hostname.includes('.')) {
    return NextResponse.next();
  }
  
  // For subdomains, rewrite to tenant-specific pages
  if (subdomain && subdomain !== 'www') {
    url.pathname = `/tenant/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};