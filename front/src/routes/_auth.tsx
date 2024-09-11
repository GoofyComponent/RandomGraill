import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: () => <AuthLayout />,
});

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <Outlet />
    </div>
  );
};
