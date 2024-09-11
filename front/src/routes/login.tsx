import { createFileRoute } from '@tanstack/react-router';

import LoginForm from '@/components/project/LoginForm';

export const Route = createFileRoute('/login')({
  component: () => <LoginForm />,
});
