import { createFileRoute, Outlet } from '@tanstack/react-router';

import LoaderPage from '@/components/project/loaderPage';
import { auth } from '@/lib/firebase';
import { db2, Schema2 } from '@/db/baseSchema';

export const Route = createFileRoute('/_auth')({
  loader: async () => {
    const userData = auth.currentUser;
    const getUser = await db2.user.get(userData?.uid as Schema2['user']['Id']);
    const isAdmin = getUser?.data.isAdmin || false;
    return {
      userData,
      isAdmin,
    };
  },
  component: () => <AuthLayout />,
  pendingComponent: () => <LoaderPage />,
  gcTime: 0,
  shouldReload: false,
});

const AuthLayout = () => {
  return (
    <main className="h-full w-full bg-background">
      <Outlet />
    </main>
  );
};
