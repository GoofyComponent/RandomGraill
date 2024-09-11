import { Link } from '@tanstack/react-router';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface CardRestoProps {
  name: string;
  url: string;
  headerBgColor?: string;
  variant?: 'default' | 'carousel' | 'disabled' | 'selected';
  usage?: 'add' | 'default';
  clickable?: boolean;
}

const CardRoulette: React.FC<CardRestoProps> = ({
  name,
  url,
  usage = 'default',
  headerBgColor = 'bg-secondary',
  variant = 'default',
  clickable = true,
}) => {
  const cardContent = (
    <Card
      className={`group relative ${variant === 'carousel' ? 'h-20' : 'h-24'} ${usage === 'default' ? '' : 'border-2 border-primary bg-primary'} w-full overflow-hidden transition-shadow hover:shadow-lg`}
    >
      {variant === 'selected' && (
        <div className="absolute inset-0 z-10 bg-primary opacity-50" />
      )}
      {variant === 'disabled' && (
        <div className="absolute inset-0 z-10 bg-white opacity-50" />
      )}

      {usage === 'add' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
      )}
      {usage !== 'add' && (
        <div
          className={`cardroulette absolute inset-0 z-0 h-full bg-cover bg-center transition-transform duration-300 ${
            clickable ? 'group-hover:scale-105' : ''
          }`}
          style={{ backgroundImage: `url('/src/assets/images/bgcardroulette.png')` }}
        />
      )}
      {usage !== 'add' && (
        <CardContent className="relative z-20 flex h-full flex-col justify-between p-0 text-white">
          <h3 className="text-xxs md:text-base">
            <span
              className={`${headerBgColor} inline-block rounded-lg rounded-bl-none rounded-tr-none px-2 py-1`}
            >
              {name}
            </span>
          </h3>
          {!clickable && (
            <Link to={url} className={`absolute right-2 top-2 text-white`}>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black bg-opacity-50">
                <span className="text-xs">•••</span>
              </div>
            </Link>
          )}
        </CardContent>
      )}
    </Card>
  );
  return clickable ? (
    <Link
      to={url}
      className={`block w-1/2 ${variant === 'carousel' ? 'max-w-40' : 'max-w-52'} `}
    >
      {cardContent}
    </Link>
  ) : (
    <div className={`block w-1/2 ${variant === 'carousel' ? 'max-w-40' : 'max-w-52'}`}>
      {cardContent}
    </div>
  );
};

export default CardRoulette;
