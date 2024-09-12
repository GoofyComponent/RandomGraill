import { createFileRoute, Outlet } from '@tanstack/react-router';

import { auth } from '@/lib/firebase';

export const Route = createFileRoute('/_auth')({
  loader: () => {
    const userData = auth.currentUser;
    return {
      userData,
    };
  },
  component: () => <AuthLayout />,
});

const AuthLayout = () => {
  return (
    <main className="h-full w-full bg-background">
      <Outlet />
    </main>
  );
};
