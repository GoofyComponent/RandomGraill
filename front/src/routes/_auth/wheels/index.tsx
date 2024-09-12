import { createFileRoute } from '@tanstack/react-router';

import { WheelsPage } from '@/pages/WheelsPage.tsx';

export const Route = createFileRoute('/_auth/wheels/')({
  component: () => <WheelsPage />,
});
