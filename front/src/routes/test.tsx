import { createFileRoute, redirect } from '@tanstack/react-router';

// import { Example } from '@/pages/Example';
import { WheelEditPage } from '@/pages/WheelEditPage.tsx';

export const Route = createFileRoute('/test')({
  beforeLoad: async () => {
    if (import.meta.env.MODE === 'production') {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: () => <WheelEditPage />,
});
