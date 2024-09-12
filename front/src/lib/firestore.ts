import { User } from 'firebase/auth';

import { db, Schema } from '@/db/baseSchema.ts';

export async function createOrGetUser(
  user: User,
): Promise<ReturnType<typeof db.user.upset>> {
  return await db.user.upset(user.uid as Schema['user']['Id'], {
    name: user.displayName ?? 'N/A',
    email: user.email ?? 'N/A',
    photoURL: user.photoURL ?? 'N/A',
  });
}
