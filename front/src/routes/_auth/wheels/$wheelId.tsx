import { createFileRoute } from '@tanstack/react-router';

import { db2, Schema2 } from '@/db/baseSchema';
import { UniqueWheelPage } from '@/pages/UniqueWheel';

export const Route = createFileRoute('/_auth/wheels/$wheelId')({
  loader: async ({ params }) => {
    const wheel = await db2.wheels.get(params.wheelId as Schema2['wheels']['Id']);
    return { wheel: wheel?.data };
  },
  component: () => <UniqueWheelPage />,
});
