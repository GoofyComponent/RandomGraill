import { createFileRoute, redirect } from '@tanstack/react-router';

import LoginForm from '@/components/LoginForm.tsx';
import { auth } from '@/lib/firebase.ts';

export const Route = createFileRoute('/login')({
  beforeLoad: async () => {
    await auth.authStateReady();
    if (auth.currentUser) {
      throw redirect({
        to: '/dashboard',
      });
    }
  },
  component: () => <LoginForm />,
});
