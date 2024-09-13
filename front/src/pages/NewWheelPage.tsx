import { useLoaderData } from '@tanstack/react-router';
import { httpsCallable } from 'firebase/functions';
import { useEffect, useState } from 'react';

import CardResto from '@/components/project/cardResto';
import Navbar from '@/components/project/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { db2, Schema } from '@/db/baseSchema';
import { auth, functions } from '@/lib/firebase';
import useAuthStore from '@/stores/useUserStore';
import { GetClosestRestaurantsResponse, Place } from '@/types/googleMaps';

interface GetReadableAdressResponse {
  data: string;
}

export const NewWheelPage = () => {
  const { userData } = useLoaderData({ from: '/_auth' });

  const [formStep, setFormStep] = useState(1);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Navbar
        userName={userData.displayName}
        clickAvatarDirection="/account"
        userPhoto={userData.photoURL}
      />
      {formStep === 1 && (
        <StepOne
          onClick={() => setFormStep(2)}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
      {formStep === 2 && <StepTwo wheelName={inputValue} />}
    </>
  );
};

const StepOne = ({
  onClick,
  inputValue,
  setInputValue,
}: {
  onClick: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}) => {
  return (
    <div className="mx-4 flex h-screen flex-col items-center justify-center space-y-4">
      <Input
        placeholder="Type your wheel name"
        onClick={onClick}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button className="w-32" onClick={onClick}>
        Next
      </Button>
    </div>
  );
};

const StepTwo = ({ wheelName }: { wheelName: string }) => {
  const getReadableAdress = httpsCallable(functions, 'getReadableAdress');
  const getPlacesCall = httpsCallable(functions, 'getClosestRestaurants');
  const { userPreferences } = useAuthStore();

  const [inputValue, setInputValue] = useState('');
  const [adressReadable, setAdressReadable] = useState('');
  const [saveCoords, setSaveCoords] = useState({ lat: 0, lng: 0 });
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place[]>([]);

  const setAdress = async () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(async (position) => {
      const response = (await getReadableAdress({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })) as GetReadableAdressResponse;

      setSaveCoords({ lat: position.coords.latitude, lng: position.coords.longitude });
      console.log(response);
      setAdressReadable(response.data);
    });
  };

  const getPlaces = async () => {
    const places = (await getPlacesCall({
      lat: saveCoords ? saveCoords.lat : undefined,
      lng: saveCoords ? saveCoords.lng : undefined,
      address: inputValue,
      radius: userPreferences ? userPreferences.rangeArea : 500,
    })) as GetClosestRestaurantsResponse;
    console.log(places);
    setPlaces(places.data);
  };

  const saveWheel = async () => {
    if (selectedPlace.length === 0) return;

    await auth.authStateReady();
    if (!auth.currentUser) return;

    const wheel = {
      name: wheelName,
      restaurants: selectedPlace,
    };

    const newWheel = await db2.wheels.add(wheel);

    const previousWheels = await db2.user.get(
      auth.currentUser.uid as Schema['user']['Id'],
    );

    if (!previousWheels) {
      console.error('Previous wheels data is null');
      return;
    }

    const updatedWheelsList = previousWheels.data.wheelsList
      ? [...previousWheels.data.wheelsList, newWheel.id]
      : [newWheel.id];

    const user = await db2.user.upset(auth.currentUser.uid as Schema['user']['Id'], {
      wheelsList: updatedWheelsList,
      preferences: previousWheels.data.preferences || { radius: 0 }, // Ajoutez une valeur par défaut si nécessaire
    });

    console.log(user);
  };

  useEffect(() => {
    setInputValue(adressReadable);
  }, [adressReadable]);

  useEffect(() => {
    console.log(selectedPlace);
  }, [selectedPlace]);

  return (
    <div className="mx-4 flex h-[80vh] flex-col justify-center">
      <div className="my-6 space-y-3">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your adress"
          variant="locate"
          onClick={() => {
            setAdress();
          }}
        />
        <Button className="w-full" onClick={() => getPlaces()}>
          Search
        </Button>
      </div>

      <div className="h-fit overflow-y-auto">
        <div className="flex flex-wrap">
          {places.map((item, index) => (
            <div key={index} className="mb-2 w-1/2 px-1 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <CardResto
                id={index}
                bgImage={
                  item.photos && item.photos[0]
                    ? item.photos[0].url
                    : '/images/restaurant.jpg'
                }
                name={item.name}
                url="/restaurant/le-petit-bistro"
                variant={selectedPlace.includes(item) ? 'selected' : 'default'}
                clickable={false}
                onClick={() =>
                  setSelectedPlace(
                    selectedPlace.includes(item)
                      ? selectedPlace.filter((place) => place !== item)
                      : [...selectedPlace, item],
                  )
                }
                type={item.types && item.types[0] ? item.types[0] : ''}
                note={item.rating}
                priceRange={item.price_level ? item.price_level.toString() : ''}
                desc={item.vicinity}
                mapLink={`http://maps.google.com/?q=${item.name}, ${item.vicinity}`}
              />
            </div>
          ))}

          {places.length === 0 && (
            <p className="w-full text-center">Please search with a valid adress</p>
          )}
        </div>
      </div>

      <Button
        className="w-full"
        onClick={() => saveWheel()}
        disabled={places.length === 0 || selectedPlace.length === 0}
      >
        Save
      </Button>
    </div>
  );
};
