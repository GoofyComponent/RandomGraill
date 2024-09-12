import Navbar from '@/components/project/navbar';
import React from 'react';
import { useLoaderData } from '@tanstack/react-router';
import { Wheel } from '@/components/project/wheel/wheel';
import CarouselCard from '@/components/project/carouselCard';
import { ChevronRight } from 'lucide-react';

const Homepage: React.FC = () => {
  const { userData } = useLoaderData({
    from: '/_auth',
  });

  const handleResult = (result: string) => {
    alert(`Selected item: ${result}`);
  };

  //=======================================FAKE DATA=======================================
  const itemRoue = [
    {
      id: 1,
      title: 'Add',
      url: '/roulette/add',
      imageUrl: '',
    },
    {
      id: 2,
      title: 'Roue HETIC',
      url: '/roulette/hetic',
      imageUrl: '',
    },
    {
      id: 3,
      title: 'Roux',
      url: '/roulette/roux',
      imageUrl: '',
    },
    {
      id: 4,
      title: 'Roue de secours',
      url: '/roulette/secours',
      imageUrl: '',
    },
  ];

  const itemResto = [
    {
      id: 1,
      title: 'Le Petit Bistro',
      url: '/restaurant/le-petit-bistro',
      imageUrl:
        'https://images-ext-1.discordapp.net/external/QypRwnb4IzcfYCZ_-SfPeUaimI8CXk_dwfBDoCOsUBg/https/www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg?format=webp&width=776&height=382',
      distance: '200m',
    },
    {
      id: 2,
      title: 'Chez Marie',
      url: '/restaurant/chez-marie',
      imageUrl:
        'https://images-ext-1.discordapp.net/external/QypRwnb4IzcfYCZ_-SfPeUaimI8CXk_dwfBDoCOsUBg/https/www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg?format=webp&width=776&height=382',
      distance: '350m',
    },
    {
      id: 3,
      title: 'Sushi Palace',
      url: '/restaurant/sushi-palace',
      imageUrl:
        'https://images-ext-1.discordapp.net/external/QypRwnb4IzcfYCZ_-SfPeUaimI8CXk_dwfBDoCOsUBg/https/www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg?format=webp&width=776&height=382',
      distance: '500m',
    },
    {
      id: 4,
      title: 'Burger King',
      url: '/restaurant/burger-king',
      imageUrl:
        'https://images-ext-1.discordapp.net/external/QypRwnb4IzcfYCZ_-SfPeUaimI8CXk_dwfBDoCOsUBg/https/www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg?format=webp&width=776&height=382',
      distance: '750m',
    },
    {
      id: 5,
      title: 'Pizza Express',
      url: '/restaurant/pizza-express',
      imageUrl:
        'https://images-ext-1.discordapp.net/external/QypRwnb4IzcfYCZ_-SfPeUaimI8CXk_dwfBDoCOsUBg/https/www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg?format=webp&width=776&height=382',
      distance: '1km',
    },
  ];
  //=======================================END FAKE DATA=======================================

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
        <p className="my-3 text-xl font-medium text-black">Favorite Wheel</p>
        <div className="h-5/6 w-5/6">
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
      <div className="my-3 pl-3">
        <p className="flex flex-wrap pb-1 pt-2">
          Mes roulettes <ChevronRight />
        </p>
        <CarouselCard items={itemRoue} type="cardRoulette" />
        <p className="flex flex-wrap pb-1 pt-2">
          Les restaurants proches <ChevronRight />
        </p>
        <CarouselCard items={itemResto} type="cardResto" />
      </div>
    </div>
  );
};

export default Homepage;
