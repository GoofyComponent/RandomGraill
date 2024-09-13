import { Link, useLoaderData } from '@tanstack/react-router';
import { Ellipsis } from 'lucide-react';
import { useState } from 'react';

import CardResto from '@/components/project/cardResto';
import Navbar from '@/components/project/navbar';
import ResultRoulette from '@/components/project/resultRoulettes';
import { Wheel } from '@/components/project/wheel/wheel';
import { Place } from '@/types/googleMaps';

export const UniqueWheelPage = () => {
  const { userData } = useLoaderData({
    from: '/_auth',
  });

  const { wheel } = useLoaderData({ from: '/_auth/wheels/$wheelId' });

  console.log('wheel', wheel);

  const [showResult, setShowResult] = useState(false);
  const [wheelResult, setWheelResult] = useState<Place | null>(null);
  const handleResult = (place_id: string) => {
    const selectedItem = wheel.restaurants.find(
      (restaurant: { place_id: string }) => restaurant.place_id === place_id,
    );
    console.log('selectedItem', selectedItem);
    if (selectedItem) {
      setWheelResult(selectedItem);
    }
    console.log('wheelResult', wheelResult);
    setShowResult(true);
  };

  return (
    <div>
      <div>
        <Navbar
          userName={userData.displayName}
          clickAvatarDirection="/account"
          userPhoto={userData.photoURL}
        />
      </div>
      <div className="h-full w-full px-2 sm:px-0">
        <div className="mb-4 flex flex-wrap justify-center">
          <div className="h-5/6 w-5/6 sm:w-1/4">
            <p className="my-3 text-center text-xl font-medium text-black">
              {wheel?.name}
            </p>
            <div className="absolute right-0 top-0 m-4">
              <Link to="/">
                <Ellipsis />
              </Link>
            </div>
            <Wheel
              items={wheel?.restaurants.map(
                (restaurant: { name: string; place_id: string }) => ({
                  name: restaurant.name,
                  place_id: restaurant.place_id,
                }),
              )}
              colors={['#FF7549', '#F6C14B', '#ff7700']}
              buttonColor="#FEF4D7"
              buttonTextColor="#000000"
              buttonBorderColor="#FEF4D7"
              needleColor="#FEF4D7"
              buttonLabel="Spin"
              textStroke={false}
              onResult={(name, place_id) => {
                console.log('name', name);
                handleResult(place_id);
              }}
              wheelBorderColor="#FEF4D7"
            />
          </div>
        </div>

        <div className="my-8">
          <p className="mb-2 flex flex-wrap">Les restaurants</p>
          <div className="-mx-1 flex flex-wrap">
            {wheel.restaurants.map((item: Place, index: number) => (
              <div key={index} className="mb-2 w-1/2 px-1 sm:w-1/3 md:w-1/4 lg:w-1/5">
                <CardResto
                  id={item.reference}
                  bgImage={item.photos && item.photos[0] ? item.photos[0].url : ''}
                  name={item.name}
                  clickable={true}
                  type={item.types && item.types[0] ? item.types[0] : ''}
                  note={item.rating}
                  priceRange={item.price_level ? item.price_level.toString() : ''}
                  desc={item.vicinity}
                  mapLink={`https://www.google.com/maps/place/?q=place_id:${item.place_id}`}
                />
              </div>
            ))}
          </div>
        </div>
        {wheelResult && (
          <ResultRoulette
            result={wheelResult}
            show={showResult}
            setShow={setShowResult}
          />
        )}
      </div>
    </div>
  );
};
