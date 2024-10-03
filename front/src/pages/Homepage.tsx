import { Link, useLoaderData } from '@tanstack/react-router';
import { httpsCallable } from 'firebase/functions';
import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import CarouselCard from '@/components/project/carouselCard';
import Header from '@/components/project/header';
import { Wheel } from '@/components/project/wheel/wheel';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { functions } from '@/lib/firebase';
import useUserStore from '@/stores/useUserStore';
import { GetClosestRestaurantsResponse, Place } from '@/types/googleMaps';

const Homepage: React.FC = () => {
  const getPlacesCall = httpsCallable(functions, 'getClosestRestaurants');
  const { userPreferences } = useUserStore();

  const { userData } = useLoaderData({
    from: '/_auth',
  });
  const { wheels, favoriteWheel, isAdmin } = useLoaderData({
    from: '/_auth/homepage',
  });

  const [closePlace, setClosePlace] = useState<Place[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const places = (await getPlacesCall({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        radius: userPreferences ? userPreferences.rangeArea : 1000,
      })) as GetClosestRestaurantsResponse;

      //Set only the first 8 places
      setClosePlace(places.data.slice(0, 10));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isAdmin) {
      setOpenDialog(true);
    }
  }, [isAdmin]);

  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Header
        userName={userData.displayName}
        clickAvatarDirection="/account"
        userPhoto={userData.photoURL}
      />

      <div className="mb-4 h-full w-full px-2 sm:px-0">
        <div className="flex flex-wrap justify-center">
          {favoriteWheel && favoriteWheel.wheelId && (
            <>
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
                    textStroke={false}
                    onResult={(name) => {
                      console.log('name', name);
                    }}
                    wheelBorderColor="#FEF4D7"
                    disabled
                  />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="my-8 pl-2">
        <Link to="/wheels">
          <p className="flex flex-wrap pb-1">
            My wheels <ChevronRight />
          </p>
        </Link>
        <CarouselCard items={wheels} type="cardRoulette" />

        {isAdmin ? (
          <>
            {closePlace.length ? (
              <>
                <p className="flex flex-wrap pb-1 pt-2">Nearby restaurants</p>
                <CarouselCard items={closePlace} type="cardResto" />
              </>
            ) : (
              <>
                <p className="flex flex-wrap pb-1 pt-2">Nearby restaurants</p>
                <p className="text-center">No restaurants found nearby</p>
              </>
            )}
          </>
        ) : null}
      </div>

      {/* Message de maintenance pour les utilisateurs uniquement */}

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-5">App in maintenance</DialogTitle>
            <DialogDescription className="text-left">
              We are experiencing some difficulties at the moment, some features of the
              application have been disabled, however if you already owned wheels you can
              still spin them.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={closeDialog} type="button">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Homepage;
