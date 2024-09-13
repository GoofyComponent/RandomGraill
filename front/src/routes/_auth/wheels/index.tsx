import { createFileRoute } from '@tanstack/react-router';

import LoaderPage from '@/components/project/loaderPage';
import { db2, Schema2 } from '@/db/baseSchema';
import { WheelsPage } from '@/pages/WheelsPage.tsx';
import useUserStore from '@/stores/useUserStore';

export const Route = createFileRoute('/_auth/wheels/')({
  loader: async () => {
    const userId = useUserStore.getState().user?.uid;
    const getUserWheels = await db2.user.get(userId as Schema2['user']['Id']);

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
      return {
        wheels: wheels,
      };
    }
  },
  component: () => <WheelsPage />,
  pendingComponent: () => <LoaderPage />,
  gcTime: 0,
  shouldReload: false,
});
