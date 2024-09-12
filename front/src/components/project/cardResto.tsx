import { Link } from '@tanstack/react-router';
import { MapPin } from 'lucide-react';
import React from 'react';
import { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Button } from '../ui/button';
import { Stars } from '../ui/stars';

interface CardRestoProps {
  id: number;
  bgImage: string | null;
  name: string;
  distance: string;
  type: string;
  note: number;
  priceRange: string;
  desc: string;
  mapLink: string;
  headerBgColor?: string;
  footerBgColor?: string;
  variant?: 'default' | 'carousel' | 'disabled' | 'selected';
  clickable?: boolean;
  onClick?: () => void;
}

const CardResto: React.FC<CardRestoProps> = ({
  bgImage,
  name,
  distance,
  type,
  note,
  priceRange,
  desc,
  mapLink,
  headerBgColor = 'bg-secondary',
  footerBgColor = 'bg-accent',
  variant = 'default',
  clickable = true,
  onClick,
}) => {
  const defaultImage = '/src/assets/images/bg-card-resto.png';
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const cardContent = (
    <Card
      onClick={clickable ? openDialog : undefined}
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
        style={{ backgroundImage: `url(${bgImage || defaultImage})` }}
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
      </CardContent>
      {!clickable && (
        <div className="absolute right-2 top-2 z-20 text-white" onClick={openDialog}>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black bg-opacity-50">
            <span className="text-xs">•••</span>
          </div>
        </div>
      )}
    </Card>
  );

  const dialogCard = (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>
        <div>
          <p>{type}</p>
          <Stars className={name} note={note} />
          <img src={bgImage} />
          <p>Prix moyen : {priceRange}</p>
        </div>
        <DialogDescription>{desc}</DialogDescription>
        <DialogFooter className="sm:justify-center">
          <Link to={mapLink} target="_blank">
            <Button type="button">
              Maps <MapPin className="mr-2 h-5 w-6" />
            </Button>
          </Link>
          <DialogClose asChild>
            <Button onClick={closeDialog} type="button">
              Fermer
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return clickable ? (
    <div
      onClick={onClick}
      className={`block w-full pb-2 ${variant === 'carousel' ? 'max-w-40' : 'max-w-52'}`}
    >
      {cardContent}
      {dialogCard}
    </div>
  ) : (
    <div
      onClick={onClick}
      className={`block w-full pb-2 ${variant === 'carousel' ? 'max-w-40' : 'max-w-52'}`}
    >
      {cardContent}
      {dialogCard}
    </div>
  );
};

export default CardResto;
