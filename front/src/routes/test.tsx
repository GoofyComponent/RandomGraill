import { createFileRoute, redirect } from '@tanstack/react-router';

// import { Example } from '@/pages/Example';
//import { WheelEditPage } from '@/pages/WheelEditPage.tsx';
import LoaderPage from '@/components/project/loaderPage.tsx';

export const Route = createFileRoute('/test')({
  beforeLoad: async () => {
    if (import.meta.env.MODE === 'production') {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: () => <LoaderPage />,
});
