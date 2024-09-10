import { createFileRoute, redirect } from '@tanstack/react-router';

import { auth } from '@/lib/firebase';

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    await auth.authStateReady();
    if (auth.currentUser) {
      throw redirect({
        to: '/dashboard',
      });
    } else {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: () => <HomeComponent />,
});

function HomeComponent() {
  return <div className="grid gap-2 p-2"></div>;
}
