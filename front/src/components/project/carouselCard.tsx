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
      className="w-full"
    >
      <CarouselContent>
        {type === 'cardRoulette' && (
          <div className="carousel-card">
            <CarouselItem className="min-w-40">
              <CardRoulette
                id={0}
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
          <div key={item.id} className="carousel-card">
            {type === 'cardRoulette' ? (
              <CarouselItem className="min-w-40">
                <CardRoulette
                  id={item.id}
                  name={item.title}
                  url={item.url}
                  variant="carousel"
                  clickable={true}
                />
              </CarouselItem>
            ) : (
              <CarouselItem className="min-w-40">
                <CardResto
                  id={item.id}
                  bgImage={item.imageUrl || ''}
                  name={item.title}
                  url={item.url}
                  variant="carousel"
                  clickable={true}
                  type=""
                  note={0}
                  priceRange=""
                  desc=""
                  mapLink=""
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
