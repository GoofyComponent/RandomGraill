import { Link } from '@tanstack/react-router';
import { Ellipsis } from 'lucide-react';
import { useState } from 'react';

import CardResto from '@/components/project/cardResto';
import ResultRoulette from '@/components/project/resultRoulettes';
import { Wheel } from '@/components/project/wheel/wheel';

export const UniqueWheelPage = () => {
  const itemResto = [
    {
      name: 'Item 1',
      url: '/restaurant/le-petit-bistro',
      distance: '500m',
    },
    {
      name: 'Item 2',
      img: 'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
      url: '/restaurant/le-petit-bistro',
      distance: '500m',
    },
    {
      name: 'Item 3',
      img: 'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
      url: '/restaurant/le-petit-bistro',
      distance: '500m',
    },
    {
      name: 'Item 4',
      img: 'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
      url: '/restaurant/le-petit-bistro',
      distance: '500m',
    },
    {
      name: 'Item 5',
      img: 'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
      url: '/restaurant/le-petit-bistro',
      distance: '500m',
    },
    {
      name: 'Item 6',
      img: 'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
      url: '/restaurant/le-petit-bistro',
      distance: '500m',
    },
  ];
  const [showResult, setShowResult] = useState(false);
  const [wheelResult, setWheelResult] = useState<{
    name: string;
    url: string;
    bgImage: string;
  } | null>(null);
  const handleResult = (result: string) => {
    const selectedItem = itemResto.find((item) => item.name === result);
    if (selectedItem) {
      setWheelResult({
        name: selectedItem.name,
        url: selectedItem.url,
        bgImage: selectedItem.img,
      });
    }
    setShowResult(true);
  };

  return (
    <div className="h-full w-full px-2 sm:px-0">
      <div className="mb-4 flex flex-wrap justify-center">
        <p className="my-3 text-xl font-medium text-black">Favorite Wheel</p>
        <div className="h-5/6 w-5/6 sm:w-1/4">
          <div className="absolute right-0 top-0 m-4">
            <Link to="/">
              <Ellipsis />
            </Link>
          </div>
          <Wheel
            items={["McDonald's Vincennes", 'La Banquette', 'Street Wok']}
            colors={['#FF7549', '#F6C14B', '#ff7700']}
            buttonColor="#FEF4D7"
            buttonTextColor="#000000"
            buttonBorderColor="#FEF4D7"
            needleColor="#FEF4D7"
            buttonLabel="Spin"
            onResult={(result) => handleResult(result)}
            wheelBorderColor="#FEF4D7"
          />
        </div>
      </div>

      <div className="my-8">
        <p className="mb-2 flex flex-wrap">Les restaurants</p>
        <div className="-mx-1 flex flex-wrap">
          {itemResto.map((item, index) => (
            <div key={index} className="mb-2 w-1/2 px-1 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <CardResto
                id={index}
                bgImage={item.img}
                name={item.name}
                distance={item.distance}
                url="/restaurant/le-petit-bistro"
                variant="default"
                clickable={true}
              />
            </div>
          ))}
        </div>
      </div>
      <ResultRoulette
        result={wheelResult || { name: '', url: '', bgImage: '' }}
        show={showResult}
        setShow={setShowResult}
      />
    </div>
  );
};
