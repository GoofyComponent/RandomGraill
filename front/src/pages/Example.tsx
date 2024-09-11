import CardResto from '@/components/project/cardResto';
import CardRoulette from '@/components/project/cardRoulette';
import CarouselCard from '@/components/project/carouselCard';
import { Button } from '@/components/ui/button';

export const Example = () => {
  const items = [
    {
      id: 1,
      title: 'Roulette Hetic',
      url: '/restaurant/le-petit-bistro',
      imageUrl:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
    },
    {
      id: 2,
      title: 'Roulette Hetic',
      url: '/restaurant/le-petit-bistro',
      imageUrl:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
    },
    {
      id: 3,
      title: 'Roulette Hetic',
      url: '/restaurant/le-petit-bistro',
      imageUrl:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
    },
    {
      id: 4,
      title: 'Roulette Hetic',
      url: '/restaurant/le-petit-bistro',
      imageUrl:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
    },
    {
      id: 5,
      title: 'Roulette Hetic',
      url: '/restaurant/le-petit-bistro',
      imageUrl:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
    },
    {
      id: 6,
      title: 'Roulette Hetic',
      url: '/restaurant/le-petit-bistro',
      imageUrl:
        'https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg',
    },
  ];
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

  return (
    <div>
      <Navbar />
      <p>Example</p>
      <CardResto
        bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
        name="Mcdo"
        distance="500m"
        url="/restaurant/le-petit-bistro"
        variant="default"
        clickable={true}
      />
      <div className="flex">
        <CardResto
          bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
          name="Mcdo"
          distance="500m"
          url="/restaurant/le-petit-bistro"
          variant="default"
          clickable={true}
        />
        <CardResto
          bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
          name="Mcdo"
          distance="500m"
          url="/restaurant/le-petit-bistro"
          variant="default"
          clickable={true}
        />
      </div>
      <CarouselCard items={itemResto} type="cardResto" />
    </div>
  );
};
