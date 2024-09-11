import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

import FooterComponent from '@/components/FooterComponent.tsx';
import { auth } from '@/lib/firebase.ts';

export const Route = createFileRoute('/_auth')({
  beforeLoad: async () => {
    await auth.authStateReady();
    if (!auth.currentUser) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: () => <AuthLayout />,
});

const AuthLayout = () => {
  // const router = useRouter()
  // const navigate = Route.useNavigate()

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <Outlet />
      <FooterComponent />
    </div>
  );
};
