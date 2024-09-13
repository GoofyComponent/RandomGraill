import { User } from 'firebase/auth';

import { db2, Schema } from '@/db/baseSchema.ts';
import useAuthStore from '@/stores/useUserStore';

export async function createOrGetUser(
  user: User,
): Promise<ReturnType<typeof db2.user.upset>> {
  const oldUser = await db2.user.get(user.uid as Schema['user']['Id']);

  if (oldUser) {
    useAuthStore.getState().updatePreferences({
      rangeArea: oldUser.data.preferences?.radius ?? 500,
    });

    return await db2.user.upset(user.uid as Schema['user']['Id'], {
      name: user.displayName ?? 'N/A',
      email: user.email ?? 'N/A',
      preferences: oldUser.data.preferences ?? { radius: 500 },
      wheelsList: oldUser.data.wheelsList ?? [],
    });
  } else {
    return await db2.user.upset(user.uid as Schema['user']['Id'], {
      name: user.displayName ?? 'N/A',
      email: user.email ?? 'N/A',
      preferences: {
        radius: 500,
      },
      wheelsList: [],
    });
  }
}
