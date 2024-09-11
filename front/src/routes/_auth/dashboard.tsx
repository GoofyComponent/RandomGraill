import { createFileRoute } from '@tanstack/react-router';

import { HomeComponent } from '@/components/project/HomeComponent';

export const Route = createFileRoute('/_auth/dashboard')({
  component: () => <DashboardPage />,
});

const DashboardPage = () => {
  return <HomeComponent />;
};
