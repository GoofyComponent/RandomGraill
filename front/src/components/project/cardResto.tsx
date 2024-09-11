import { Link } from '@tanstack/react-router';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface CardRestoProps {
  bgImage: string;
  name: string;
  distance: string;
  url: string;
  headerBgColor?: string;
  footerBgColor?: string;
  variant?: 'default' | 'carousel' | 'disabled' | 'selected';
  clickable?: boolean;
}

const CardResto: React.FC<CardRestoProps> = ({
  bgImage,
  name,
  distance,
  url,
  headerBgColor = 'bg-secondary',
  footerBgColor = 'bg-accent',
  variant = 'default',
  clickable = true,
}) => {
  const cardContent = (
    <Card
      className={`group relative ${variant === 'carousel' ? 'h-20' : 'h-24'} w-full overflow-hidden transition-shadow hover:shadow-lg`}
    >
      {variant === 'selected' && (
        <div className="absolute inset-0 z-10 bg-primary opacity-50" />
      )}
      {variant === 'disabled' && (
        <div className="absolute inset-0 z-10 bg-white opacity-50" />
      )}

      <div
        className={`absolute inset-0 z-0 h-full bg-cover bg-center transition-transform duration-300 ${
          clickable ? 'group-hover:scale-105' : ''
        }`}
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <CardContent className="relative z-20 flex h-full flex-col justify-between p-0 text-white">
        <h3 className="text-xxs md:text-xs">
          <span
            className={`${headerBgColor} inline-block rounded-lg rounded-bl-none rounded-tr-none px-2 py-1`}
          >
            {name}
          </span>
        </h3>
        <div
          className={`${footerBgColor} inline-block self-end rounded-lg rounded-bl-none rounded-tr-none px-2 py-1`}
        >
          <p className="text-xxs md:text-xs">{distance}</p>
        </div>
        {!clickable && (
          <Link to={url} className="absolute right-2 top-2 text-white">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black bg-opacity-50">
              <span className="text-xs">•••</span>
            </div>
          </Link>
        )}
      </CardContent>
    </Card>
  );
  return clickable ? (
    <Link
      to={url}
      className={`block w-full ${variant === 'carousel' ? 'max-w-40' : 'max-w-52'}`}
    >
      {cardContent}
    </Link>
  ) : (
    <div className={`block w-full ${variant === 'carousel' ? 'max-w-40' : 'max-w-52'}`}>
      {cardContent}
    </div>
  );
};

export default CardResto;
