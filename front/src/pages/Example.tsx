import CardResto from '@/components/project/cardResto';
import Navbar from '@/components/project/navbar';
import { Button } from '@/components/ui/button';

export const Example = () => {
  return (
    <div>
      <Navbar />
      <p>Example</p>
      <Button>Ceci est un button shadcn</Button>
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
    </div>
  );
};
