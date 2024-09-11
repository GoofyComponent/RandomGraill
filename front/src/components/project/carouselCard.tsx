import React from 'react';

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import CardResto from './cardResto';
import CardRoulette from './cardRoulette';

interface CarouselCardProps {
  items: Array<{ id: number; title: string; url: string; imageUrl: string }>;
  type: 'cardRoulette' | 'cardResto';
}

const CarouselCard: React.FC<CarouselCardProps> = ({ items, type }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {items.map((item) => (
          <div key={item.id} className="carousel-card">
            {type === 'cardRoulette' ? (
              <CarouselItem className="min-w-40">
                <CardRoulette
                  name={item.title}
                  url={item.url}
                  variant="carousel"
                  clickable={true}
                />
              </CarouselItem>
            ) : (
              <CarouselItem className="min-w-40">
                <CardResto
                  bgImage={item.imageUrl}
                  name={item.title}
                  distance="500m"
                  url={item.url}
                  variant="carousel"
                  clickable={true}
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
