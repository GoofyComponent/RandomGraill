import { createRootRoute, Outlet, redirect } from '@tanstack/react-router';
import React, { Suspense } from 'react';

import Navbar from '@/components/project/navbar';
import { auth } from '@/lib/firebase';

export const Route = createRootRoute({
  beforeLoad: async ({ location }) => {
    await auth.authStateReady();
    if (!auth.currentUser && location.pathname !== '/login') {
      throw redirect({
        to: '/login',
      });
    }
    if (auth.currentUser && location.pathname === '/login') {
      throw redirect({
        to: '/homepage',
      });
    }

    if (location.pathname === '/') {
      throw redirect({
        to: '/homepage',
      });
    }
  },
  component: () => (
    <>
      <div className="mb-16">
        <Outlet />
        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </div>
      <Navbar />
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
