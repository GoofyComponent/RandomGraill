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
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <Outlet />
    </div>
  );
};
