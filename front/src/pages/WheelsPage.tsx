import { useLoaderData } from '@tanstack/react-router';

import CardRoulette from '@/components/project/cardRoulette.tsx';
import Navbar from '@/components/project/navbar';
import { Place } from '@/types/googleMaps';

export const WheelsPage = () => {
  const { userData } = useLoaderData({ from: '/_auth' });
  const { wheels } = useLoaderData({
    from: '/_auth/wheels/',
  });

  return (
    <div className="h-[calc(100vh-60px)] w-full">
      <Navbar
        userName={userData.displayName}
        clickAvatarDirection="/account"
        userPhoto={userData.photoURL}
      />
      <div className="mx-2 my-10 flex flex-wrap pb-10">
        <div className="w-1/2 sm:w-1/5">
          <CardRoulette usage="add" name={'add'} url={'/wheels/new'} id={'0'} />
        </div>
        {wheels.map((item: Place) => (
          <div className="w-1/2 sm:w-1/5">
            <CardRoulette
              id={item.reference}
              name={item.name}
              url={'/wheels/' + item.wheelId}
              clickable={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
