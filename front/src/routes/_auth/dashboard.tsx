import { createFileRoute } from '@tanstack/react-router';

import { Example } from '@/pages/Example';

export const Route = createFileRoute('/_auth/dashboard')({
  component: () => <Example />,
});
