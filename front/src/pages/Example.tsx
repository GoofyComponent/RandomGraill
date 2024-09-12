import CardResto from '@/components/project/cardResto';
import CarouselCard from '@/components/project/carouselCard';
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

  return (
    <div>
      <Navbar />
    <div className="h-full w-full p-4">
      <p>Example</p>
      <CardResto
        bgImage="https://www.mcdo-strasbourg.fr/wp-content/uploads/2022/03/IMG_20220609_09374722-scaled-e1655131454477.jpg"
        name="Mcdo"
        distance="500m"
        url="/restaurant/le-petit-bistro"
        variant="default"
        clickable={true}
      />
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
      </div>
      <CarouselCard items={itemResto} type="cardRoulette" />
    </div>
  );
};
