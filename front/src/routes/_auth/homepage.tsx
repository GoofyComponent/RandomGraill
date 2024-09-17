import { createFileRoute } from '@tanstack/react-router';

import LoaderPage from '@/components/project/loaderPage';
import { db2, Schema2 } from '@/db/baseSchema';
import Homepage from '@/pages/Homepage';
import useUserStore from '@/stores/useUserStore';

export const Route = createFileRoute('/_auth/homepage')({
  loader: async () => {
    const userId = useUserStore.getState().user?.uid;
    const getUser = await db2.user.get(userId as Schema2['user']['Id']);
    const isAdmin = getUser?.data.isAdmin || false;

    const favoriteWheelId = getUser?.data.favoriteWheels || null;

    if (!getUser || !getUser.data.wheelsList) {
      return {
        wheelsId: [],
        wheels: [],
      };
    } else {
      const wheels = [];
      for await (const wheelId of getUser.data.wheelsList) {
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
        isAdmin,
        wheelsId: getUser.data.wheelsList.slice(0, 10),
        wheels: wheels.slice(0, 10),
        favoriteWheel: favoriteWheel,
      };
    }
  },
  component: () => <Homepage />,
  pendingComponent: () => <LoaderPage />,
  gcTime: 0,
  shouldReload: false,
});
