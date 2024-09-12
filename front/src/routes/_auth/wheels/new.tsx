import { createFileRoute } from '@tanstack/react-router';

import { NewWheelPage } from '@/pages/NewWheelPage';

export const Route = createFileRoute('/_auth/wheels/new')({
  component: () => <NewWheelPage />,
});
