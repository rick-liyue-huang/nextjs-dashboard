import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ['/'], // An array of routes that do not require authentication

  // after login or signup, redirect the user to the path they were trying to access
  afterAuth(auth, req) {
    if (auth.userId && auth.isPublicRoute) {
      let path = '/select-organization';
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    if (
      auth.userId &&
      !auth.orgId &&
      req.nextUrl.pathname !== '/select-organization'
    ) {
      const orgSelection = new URL('/select-organization', req.url);
      return NextResponse.redirect(orgSelection);
    }
  }, // The URL to redirect to after sign in
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
