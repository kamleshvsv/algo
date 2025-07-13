import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the hostname from the request
  const hostname = request.headers.get('host') || '';
  
  // Extract subdomain from hostname
  const subdomain = hostname.split('.')[0];
  
  // Handle different subdomains
  if (subdomain === 'tenant1') {
    // Rewrite to tenant1 pages
    return NextResponse.rewrite(new URL(`/tenant1${request.nextUrl.pathname}`, request.url));
  } else if (subdomain === 'docs') {
    // Rewrite to docs pages
    return NextResponse.rewrite(new URL(`/docs${request.nextUrl.pathname}`, request.url));
  } else if (subdomain === 'blog') {
    // Rewrite to blog pages
    return NextResponse.rewrite(new URL(`/blog${request.nextUrl.pathname}`, request.url));
  }
  
  // For localhost or main domain, serve main site
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};