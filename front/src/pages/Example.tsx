// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { useState } from 'react';

import CardResto from '@/components/project/cardResto';
import CarouselCard from '@/components/project/carouselCard';
import ResultRoulette from '@/components/project/resultRoulettes';
import { Wheel } from '@/components/project/wheel/wheel';
import { Button } from '@/components/ui/button';

export const Example = () => {
  const itemResto = [
    {
      id: 1,
      name: 'Le Petit Bistro',
      url: '/wheels/1',
      image:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
      pricerange: '10-20',
      distance: '200m',
    },
    {
      id: 2,
      name: 'Chez Marie',
      url: '/restaurant/chez-marie',
      image:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
      pricerange: '10-20',
      distance: '350m',
    },
    {
      id: 3,
      name: 'Sushi Palace',
      url: '/restaurant/sushi-palace',
      image:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
      pricerange: '10-20',
      distance: '500m',
    },
    {
      id: 4,
      name: 'Burger King',
      url: '/restaurant/burger-king',
      image:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
      pricerange: '10-20',
      distance: '750m',
    },
    {
      id: 5,
      name: 'Pizza Express',
      url: '/restaurant/pizza-express',
      image:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
      pricerange: '10-20',
      distance: '1km',
    },
  ];

  const [autoSpin, setAutoSpin] = useState(false);

  const handleResult = (result: string) => {
    alert(`Selected item: ${result}`);
  };

  const triggerSpin = () => {
    setAutoSpin(true);
    setTimeout(() => {
      setAutoSpin(false);
    }, 100);
  };
  const result = {
    name: 'Mcdo',
    url: '/restaurant/le-petit-bistro',
    bgImage:
      'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
  };
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <div className="h-full w-full px-2">
        <p>Example</p>
        <CardResto
          id={9}
          image="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
          name="Mcdo"
          type="Restauration rapide"
          note={3.5}
          priceRange="10-20€"
          desc="Ceci est un Mcdo"
          mapLink="https://maps.app.goo.gl/pgXCoYpoTXHGRdaN8"
          variant="default"
          size="default"
          textSize="lg"
          clickable={false}
        />

        <button onClick={() => setShowResult(true)}>Afficher ResultRoulette</button>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <CardResto
              id={9}
              image="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
              name="Mcdo"
              type="Restauration rapide"
              note={3.5}
              priceRange="10-20€"
              desc="Ceci est un Mcdo"
              mapLink="https://maps.app.goo.gl/pgXCoYpoTXHGRdaN8"
              variant="default"
              size="default"
              clickable={false}
            />
          </div>
          <div>
            <CardResto
              image="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
              name="Mcdo"
              type="Restauration rapide"
              note={3.5}
              priceRange="10-20€"
              desc="Ceci est un Mcdo"
              mapLink="https://maps.app.goo.gl/pgXCoYpoTXHGRdaN8"
              variant="default"
              size="default"
              clickable={true}
              id={9}
            />
          </div>
        </div>
        <CarouselCard items={itemResto} type="cardResto" />
        <div className="flex items-center justify-center">
          <Button onClick={triggerSpin}>External Spin</Button>
        </div>
        <div className="m-auto h-[400px] w-[400px] border border-black">
          <Wheel
            items={['Iteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeem 1', 'Item 2', 'Item 3']}
            colors={['#FFF', '#FFF', '#000']}
            buttonColor="#ff7700"
            buttonTextColor="#ff00a2"
            buttonBorderColor="#ff00ff"
            needleColor="#8000ff"
            buttonLabel="Go!"
            onResult={(result) => handleResult(result)}
            autoSpin={autoSpin}
            wheelBorderColor="#ff00ff"
            textStroke={false}
          />
        </div>
        <Button onClick={triggerSpin}>External Spin</Button>
        <ResultRoulette result={result} show={showResult} setShow={setShowResult} />
      </div>
    </>
  );
};
