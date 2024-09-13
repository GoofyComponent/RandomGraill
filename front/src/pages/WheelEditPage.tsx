import { useMutation } from '@tanstack/react-query';
import { useLoaderData, useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import CardResto from '@/components/project/cardResto.tsx';
import { Button } from '@/components/ui/button.tsx';
import { db, Schema } from '@/db/baseSchema.ts';

const updateWheel = (
  wheelId: Schema['wheels']['Id'],
  updatedData: Schema['wheels']['Data'],
) => {
  return db.wheels.update(wheelId, {
    restaurants: updatedData.restaurants,
  });
};

const getWheel = async (wheelId: Schema['wheels']['Id']) => {
  const wheelDoc = await db.wheels.get(wheelId);
  return wheelDoc ? wheelDoc.data : null;
};

export const WheelEditPage = () => {
  const { wheelId } = useParams({ strict: false });
  const { wheelData } = useLoaderData({
    from: '/_auth/wheels/$wheelId/edit',
  });

  const [wheel, setWheel] = useState<Schema['wheels']['Data']>(
    wheelData as Schema['wheels']['Data'],
  );

  useEffect(() => {
    async function loadWheelData() {
      if (wheelId) {
        try {
          const wheelData = await getWheel(wheelId);
          if (wheelData) {
            setWheel(wheelData || []);
            console.log('Data loaded successfully:', wheelData);
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des données de la roue:', error);
        }
      }
    }
    loadWheelData();
  }, [wheelId]);

  function switchActive(id: number) {
    const newRestaurants = wheel.restaurants.map((restaurant) => {
      if (restaurant.id === id) {
        return {
          ...restaurant,
          active: !restaurant.active,
        };
      }
      return restaurant;
    });

    setWheel({
      ...wheel,
      restaurants: newRestaurants,
    });
  }

  const mutation = useMutation({
    mutationFn: (updatedWheel: Schema['wheels']['Data']) =>
      updateWheel(wheelId, updatedWheel),
    onError: (error) => {
      console.log('error ', error);
    },
    onSuccess: () => {
      console.log('Mise à jour réussie !');
    },
  });

  // Fonction pour sauvegarder les modifications
  function handleClick() {
    console.log(wheel);
    mutation.mutate(wheel);
  }

  return (
    <>
      <h1>Edit wheel {wheelId}</h1>
      <div className="flex flex-wrap">
        {wheel.restaurants.map((restaurant) => {
          return (
            <div className="w-1/2 p-2" key={restaurant.id}>
              <CardResto
                clickable={false}
                onClick={() => {
                  switchActive(restaurant.id);
                }}
                key={restaurant.id}
                name={restaurant.name}
                distance={restaurant.distance}
                bgImage={restaurant.image}
                url={''}
                variant={restaurant.active ? 'default' : 'disabled'}
                id={restaurant.id}
                type=""
                note={0}
                priceRange=""
                desc=""
                mapLink=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-center">
        <Button
          className="px-4 py-2 font-bold text-white hover:bg-accent"
          {...(mutation.isPending && { disabled: true })}
          onClick={handleClick}
        >
          Save
        </Button>
      </div>
    </>
  );
};
