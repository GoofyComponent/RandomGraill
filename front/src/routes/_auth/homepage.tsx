import { createFileRoute } from '@tanstack/react-router';

import LoaderPage from '@/components/project/loaderPage';
import { db2, Schema2 } from '@/db/baseSchema';
import Homepage from '@/pages/Homepage';
import useUserStore from '@/stores/useUserStore';

export const Route = createFileRoute('/_auth/homepage')({
  loader: async () => {
    const userId = useUserStore.getState().user?.uid;
    const getUserWheels = await db2.user.get(userId as Schema2['user']['Id']);

    const favoriteWheelId = getUserWheels?.data.favoriteWheels || null;

    if (!getUserWheels || !getUserWheels.data.wheelsList) {
      return {
        wheelsId: [],
        wheels: [],
      };
    } else {
      const wheels = [];
      for await (const wheelId of getUserWheels.data.wheelsList) {
        const getWheelById = await db2.wheels.get(wheelId);

        if (getWheelById) {
          getWheelById.data.wheelId = wheelId;
          wheels.push(getWheelById.data);
        }
      }

      let favoriteWheel = null;
      if (!favoriteWheelId) {
        favoriteWheel = wheels[0];
      } else {
        const getFavoriteWheel = await db2.wheels.get(favoriteWheelId);
        if (getFavoriteWheel) {
          favoriteWheel = getFavoriteWheel.data;
          favoriteWheel.wheelId = favoriteWheelId;
        } else {
          favoriteWheel = wheels[0];
        }
      }

      return {
        wheelsId: getUserWheels.data.wheelsList.slice(0, 10),
        wheels: wheels.slice(0, 10),
        favoriteWheel: favoriteWheel,
      };
    }
  },
  component: () => <Homepage />,
  pendingComponent: () => <LoaderPage />,
});
