import { createFileRoute } from '@tanstack/react-router';

import { UniqueWheelPage } from '@/pages/UniqueWheel';

export const Route = createFileRoute('/_auth/wheels/$wheelId')({
  component: () => <UniqueWheelPage />,
});
