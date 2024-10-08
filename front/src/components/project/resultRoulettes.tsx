import { Link } from '@tanstack/react-router';
import { MapPin } from 'lucide-react';
import React, { useEffect } from 'react';

import { Place } from '@/types/googleMaps';

import { Button } from '../ui/button';
import CardResto from './cardResto';

interface ResultRouletteProps {
  result: Place;
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
          id={result.reference}
          name={result.name}
          url=""
          variant="default"
          bgImage={result.photos && result.photos[0] ? result.photos[0].url : ''}
          clickable={false}
          type={result.types && result.types[0] ? result.types[0] : ''}
          note={result.rating}
          priceRange={result.price_level ? result.price_level.toString() : ''}
          desc={result.vicinity}
          mapLink={`http://maps.google.com/?q=${result.name}, ${result.vicinity}`}
        />
      </div>
      <div className="mt-6 flex flex-col sm:flex-row">
        <Link
          className="mx-2"
          to={`http://maps.google.com/?q=${result.name}, ${result.vicinity}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            Maps <MapPin className="mx-2" color="#ffffff" strokeWidth={1.25} />
          </Button>
        </Link>
        <Button className="mx-2 mt-2 sm:mt-0" onClick={() => setShow(false)}>
          Fermer
        </Button>
      </div>
      <div className="absolute left-[0] top-[0] -z-10 h-full w-full bg-white opacity-90" />
    </div>
  );
};

export default ResultRoulette;
