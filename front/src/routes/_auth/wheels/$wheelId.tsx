import { createFileRoute } from '@tanstack/react-router';

import { db2, Schema2 } from '@/db/baseSchema';
import { UniqueWheelPage } from '@/pages/UniqueWheel';
import useUserStore from '@/stores/useUserStore';

export const Route = createFileRoute('/_auth/wheels/$wheelId')({
  loader: async ({ params }) => {
    const wheel = await db2.wheels.get(params.wheelId as Schema2['wheels']['Id']);
    const userId = useUserStore.getState().user?.uid;
    const getUserFavoriteWheelId = await db2.user.get(userId as Schema2['user']['Id']);
    const favoriteWheels = getUserFavoriteWheelId?.data.favoriteWheels || [];

    return { wheel: wheel?.data, favoriteWheels: favoriteWheels };
  },
  component: () => <UniqueWheelPage />,
  gcTime: 0,
  shouldReload: false,
});
