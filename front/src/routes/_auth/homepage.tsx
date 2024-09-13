import { createFileRoute } from '@tanstack/react-router';

import { db2, Schema2 } from '@/db/baseSchema';
import Homepage from '@/pages/Homepage';
import useUserStore from '@/stores/useUserStore';

export const Route = createFileRoute('/_auth/homepage')({
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
        wheelsId: getUserWheels.data.wheelsList.slice(0, 10),
        wheels: wheels.slice(0, 10),
      };
    }
  },
  component: () => <Homepage />,
});
