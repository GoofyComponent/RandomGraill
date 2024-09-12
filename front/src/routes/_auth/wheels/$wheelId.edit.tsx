import { createFileRoute } from '@tanstack/react-router';
import { TypesaurusCore } from 'typesaurus';

import { db } from '@/db/baseSchema.ts';
import { WheelEditPage } from '@/pages/WheelEditPage.tsx';

export const Route = createFileRoute('/_auth/wheels/$wheelId/edit')({
  loader: async ({ params }) => {
    const { wheelId } = params;
    const wheel = await fetchWheel(wheelId as TypesaurusCore.Id<'wheels'>);
    wheel;
    return { wheel: wheel?.data };
  },
  component: () => <WheelEditPage />,
});

const fetchWheel = async (wheelId: TypesaurusCore.Id<'wheels'>) => {
  return db.wheels.get(wheelId);
};
