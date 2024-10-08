import React from 'react';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Place } from '@/types/googleMaps';

import CardResto from './cardResto';
import CardRoulette from './cardRoulette';

interface CarouselCardProps {
  items: Place[];
  type: 'cardRoulette' | 'cardResto';
}

const CarouselCard: React.FC<CarouselCardProps> = ({ items, type }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        dragFree: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {type === 'cardRoulette' && (
          <div className="carousel-card">
            <CarouselItem className="min-w-40">
              <CardRoulette
                id={'0'}
                name="Add"
                url={`${window.location.origin}/wheels/new`}
                variant="carousel"
                usage="add"
                clickable={true}
              />
            </CarouselItem>
          </div>
        )}
        {items.map((item) => (
          <div key={item.reference} className="carousel-card">
            {type === 'cardRoulette' ? (
              <CarouselItem className="min-w-40">
                <CardRoulette
                  id={item.reference}
                  name={item.name}
                  url={'/wheels/' + item.wheelId}
                  variant="carousel"
                  clickable={true}
                />
              </CarouselItem>
            ) : (
              <CarouselItem className="min-w-[45vw]">
                <CardResto
                  id={item.reference}
                  image={item.image}
                  name={item.name}
                  variant="default"
                  size="default"
                  clickable={true}
                  type={item.types && item.types[0] ? item.types[0] : ''}
                  note={item.rating}
                  priceRange={item.pricerange}
                  desc={item.vicinity}
                  mapLink={`http://maps.google.com/?q=${item.name}, ${item.vicinity}`}
                />
              </CarouselItem>
            )}
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselCard;
