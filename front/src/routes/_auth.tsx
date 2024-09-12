import { createFileRoute, Outlet } from '@tanstack/react-router';

import Navbar from '@/components/project/navbar.tsx';
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
    <div className="width-full h-full">
      <Navbar />
      <Outlet />
    </div>
  );
};
