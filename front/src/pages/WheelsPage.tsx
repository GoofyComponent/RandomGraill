import CardRoulette from '@/components/project/cardRoulette.tsx';

const wheels = [
  {
    id: 1,
    name: 'Wheel 1',
    description: 'Wheel 1 description',
  },
  {
    id: 2,
    name: 'Wheel 2',
    description: 'Wheel 2 description',
  },
  {
    id: 3,
    name: 'Wheel 3',
    description: 'Wheel 3 description',
  },
  {
    id: 4,
    name: 'Wheel 1',
    description: 'Wheel 1 description',
  },
  {
    id: 5,
    name: 'Wheel 2',
    description: 'Wheel 2 description',
  },
  {
    id: 6,
    name: 'Wheel 3',
    description: 'Wheel 3 description',
  },
  {
    id: 7,
    name: 'Wheel 1',
    description: 'Wheel 1 description',
  },
  {
    id: 8,
    name: 'Wheel 2',
    description: 'Wheel 2 description',
  },
  {
    id: 9,
    name: 'Wheel 3',
    description: 'Wheel 3 description',
  },
];

export const WheelsPage = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap">
        <div className="w-1/2 sm:w-1/5">
          <CardRoulette usage="add" name={'add'} url={'/wheels/add'} />
        </div>
        {wheels.map((wheel) => (
          <div className="w-1/2 sm:w-1/5">
            <CardRoulette name={wheel.name} url={`/wheels/${wheel.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
