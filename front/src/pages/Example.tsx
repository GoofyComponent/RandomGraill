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
      title: 'Le Petit Bistro',
      url: '/restaurant/le-petit-bistro',
      imageUrl: 'https://example.com/petit-bistro.jpg',
      distance: '200m',
    },
    {
      id: 2,
      title: 'Chez Marie',
      url: '/restaurant/chez-marie',
      imageUrl: 'https://example.com/chez-marie.jpg',
      distance: '350m',
    },
    {
      id: 3,
      title: 'Sushi Palace',
      url: '/restaurant/sushi-palace',
      imageUrl: 'https://example.com/sushi-palace.jpg',
      distance: '500m',
    },
    {
      id: 4,
      title: 'Burger King',
      url: '/restaurant/burger-king',
      imageUrl: 'https://example.com/burger-king.jpg',
      distance: '750m',
    },
    {
      id: 5,
      title: 'Pizza Express',
      url: '/restaurant/pizza-express',
      imageUrl: 'https://example.com/pizza-express.jpg',
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
    <div className="h-full w-full px-4">
      <p>Example</p>
      <CardResto
        bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
        name="Mcdo"
        distance="500m"
        url="/restaurant/le-petit-bistro"
        variant="default"
        clickable={true}
      />
      <button onClick={() => setShowResult(true)}>Afficher ResultRoulette</button>
      <div className="flex flex-wrap">
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
        <div className="w-1/2 sm:w-1/5">
          <CardResto
            bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
            name="Mcdo"
            distance="500m"
            url="/restaurant/le-petit-bistro"
            variant="default"
            clickable={true}
          />
        </div>
      </div>
      <CarouselCard items={itemResto} type="cardRoulette" />

      <div className="m-auto h-[400px] w-[400px] border border-black">
        <Wheel
          items={['Item 1', 'Item 2', 'Item 3']}
          colors={['#ff0000', '#00ff00', '#0000ff']}
          buttonColor="#ff7700"
          buttonTextColor="#ff00a2"
          buttonBorderColor="#ff00ff"
          needleColor="#8000ff"
          buttonLabel="Go!"
          onResult={(result) => handleResult(result)}
          autoSpin={autoSpin}
          wheelBorderColor="#ff00ff"
        />
        <Button onClick={triggerSpin}>External Spin</Button>
      </div>
      <ResultRoulette result={result} show={showResult} setShow={setShowResult} />
    </div>
  );
};
