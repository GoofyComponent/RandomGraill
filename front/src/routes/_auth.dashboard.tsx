import { createFileRoute } from '@tanstack/react-router';

import { HomeComponent } from '@/components/HomeComponent.tsx';

export const Route = createFileRoute('/_auth/dashboard')({
  component: () => <DashboardPage />,
});

const DashboardPage = () => {
  return <HomeComponent />;
};
