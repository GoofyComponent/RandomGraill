import { Link } from '@tanstack/react-router';
import { MapPin } from 'lucide-react';
import React, { useEffect } from 'react';

import { Button } from '../ui/button';
import CardResto from './cardResto';

interface ResultRouletteProps {
  result: {
    name: string;
    url: string;
    bgImage: string;
  };
  show: boolean;
  setShow: (show: boolean) => void;
}

const ResultRoulette: React.FC<ResultRouletteProps> = ({ result, show, setShow }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [show]);

  if (!show) {
    return null;
  }
  return (
    <div className="absolute left-[0] top-[0] z-20 flex h-full w-full flex-col items-center justify-center">
      <h3 className="my-6 text-2xl">Nous mangeons chez</h3>
      <div className="flex w-full scale-125 justify-center">
        <CardResto
          name={result.name}
          url={result.url}
          distance="100m"
          variant="default"
          bgImage={result.bgImage}
          clickable={true}
        />
      </div>
      <div className="mt-6">
        <Link className="mx-2" to={result.url}>
          <Button>
            Maps <MapPin className="mx-2" color="#ffffff" strokeWidth={1.25} />
          </Button>
        </Link>
        <Button className="mx-2" onClick={() => setShow(false)}>
          Fermer
        </Button>
      </div>
      <div className="absolute left-[0] top-[0] -z-10 h-full w-full bg-white opacity-90" />
    </div>
  );
};

export default ResultRoulette;
