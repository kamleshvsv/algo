// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const url = request.nextUrl.clone();
//   const hostname = request.headers.get('host') || '';
  
//   // Get the subdomain from hostname
//   const subdomain = hostname.split('.')[0];

//   console.log('📡 Host:', hostname);
//   console.log('🏷️ Subdomain:', subdomain);
  
//   // Skip middleware for localhost and main domain
//   if (hostname.includes('localhost') || hostname.includes('127.0.0.1') || subdomain === 'www' || !hostname.includes('.')) {
//     return NextResponse.next();
//   }



//   // For subdomains, rewrite to tenant-specific pages
//   if (subdomain && subdomain !== 'www') {
//     url.pathname = `/tenant/${subdomain}${url.pathname}`;
//     return NextResponse.rewrite(url);
//   }
  
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// };

// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  if (
    hostname.startsWith('localhost') ||
    hostname.startsWith('127.0.0.1') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  if (subdomain && subdomain !== 'www') {
    const url = request.nextUrl.clone();
    url.pathname = `/tenant/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!favicon.ico).*)'], 
};
