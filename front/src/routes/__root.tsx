import { createRootRoute, Outlet, redirect } from '@tanstack/react-router';
import React, { Suspense } from 'react';

import { auth } from '@/lib/firebase';
export const Route = createRootRoute({
  beforeLoad: async ({ location }) => {
    await auth.authStateReady();
    if (!auth.currentUser && location.pathname !== '/login') {
      throw redirect({
        to: '/login',
      });
    }

    if (location.pathname === '/' || location.pathname === '/login') {
      throw redirect({
        to: '/dashboard',
      });
    }
  },
  component: () => (
    <>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );
