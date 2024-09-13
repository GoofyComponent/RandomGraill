// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { Link, useLoaderData } from '@tanstack/react-router';
import { httpsCallable } from 'firebase/functions';
import { ChevronRight } from 'lucide-react';
import React, { useEffect } from 'react';

import CarouselCard from '@/components/project/carouselCard';
import Navbar from '@/components/project/navbar';
import { Wheel } from '@/components/project/wheel/wheel';
import { functions } from '@/lib/firebase';
import { GetClosestRestaurantsResponse, Place } from '@/types/googleMaps';

const Homepage: React.FC = () => {
  const getPlacesCall = httpsCallable(functions, 'getClosestRestaurants');

  const { userData } = useLoaderData({
    from: '/_auth',
  });
  const { wheels, favoriteWheel } = useLoaderData({
    from: '/_auth/homepage',
  });

  const [closePlace, setClosePlace] = React.useState<Place[]>([]);

  const handleResult = (result: string) => {
    alert(`Selected item: ${result}`);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const places = (await getPlacesCall({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        radius: 500,
      })) as GetClosestRestaurantsResponse;

      //Set only the first 8 places
      setClosePlace(places.data.slice(0, 10));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <Navbar
          userName={userData.displayName}
          clickAvatarDirection="/account"
          userPhoto={userData.photoURL}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <p className="my-3 text-xl font-medium text-black">Favorite wheel</p>
        <div className="h-5/6 w-5/6">
          <Link to={`/wheels/${favoriteWheel.wheelId}`}>
            <Wheel
              items={favoriteWheel?.restaurants.map(
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
              onResult={(name, place_id) => {
                console.log('name', name);
                handleResult(place_id);
              }}
              wheelBorderColor="#FEF4D7"
              disabled
            />
          </Link>
        </div>
      </div>
      <div className="my-3 pl-3">
        <Link to="/wheels">
          <p className="flex flex-wrap pb-1 pt-2">
            My wheels <ChevronRight />
          </p>
        </Link>
        <CarouselCard items={wheels} type="cardRoulette" />

        {closePlace.length ? (
          <>
            <p className="flex flex-wrap pb-1 pt-2">Nerby restaurants</p>
            <CarouselCard items={closePlace} type="cardResto" />
          </>
        ) : (
          <>
            <p className="flex flex-wrap pb-1 pt-2">Nerby restaurants</p>
            <p className="text-center">No restaurants found nearby</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Homepage;
