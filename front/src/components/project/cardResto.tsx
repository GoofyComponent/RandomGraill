import { Link } from '@tanstack/react-router';
import { cva } from 'class-variance-authority';
import { MapPin } from 'lucide-react';
import React, { useState } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import Stars from '../ui/stars';

interface CardRestoProps {
  id: string;
  image: string | null;
  name: string;
  type: string;
  note: number;
  priceRange: string;
  desc: string;
  mapLink: string;
  clickable?: boolean;
  onClick?: () => void;
  url?: string;
  variant?: 'default' | 'selected' | 'disabled'; // Ajout de la propriété variant
  size?: 'default' | 'md'; // Ajout de la propriété size
  textSize?: 'default';
}

const cardRestoVariant = cva(
  'group relative overflow-hidden transition-shadow shadow-lg ',
  {
    variants: {
      variant: {
        default: '',
        selected: '',
        disabled: '',
      },
      size: {
        default: 'w-full text-xl ',
        md: 'h-28 aspect-[6/4]',
      },
      textSize: {
        default: 'text-xs sm:text-base md:text-lg',
        xs: 'text-xs',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const CardResto: React.FC<CardRestoProps> = ({
  image,
  name,
  type,
  note,
  priceRange,
  desc,
  mapLink,
  variant = 'default',
  size = 'default',
  textSize = 'default',
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
      className={cn(
        cardRestoVariant({ variant, size, textSize }),
        clickable && 'cursor-pointer',
      )}
    >
      <CardContent className="relative z-20 flex h-full flex-col p-2 pb-1">
        <img
          className="h-auto w-full rounded-md object-cover"
          src={image ? image : defaultImage}
          alt={name}
        />
        <div className="flex items-center justify-between">
          <div className="flex flex-col px-2 pt-1">
            <div>{name}</div>
            <div className="text-grey_text">{priceRange}</div>
          </div>
          {!clickable && (
            <span onClick={openDialog} className="cursor-pointer p-2">
              •••
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const dialogCard = (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="rounded">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
        </DialogHeader>
        <div className="align-item">
          {type === undefined ? <p>No information</p> : <p>{type}</p>}
          {note === undefined ? <p>No rating</p> : <Stars note={note} />}
          <img
            className="mb-4 mt-4 aspect-video rounded object-cover"
            src={image ? image : defaultImage}
          />
          {priceRange === undefined ? (
            <p>No price range</p>
          ) : (
            <p>Price range : {priceRange}</p>
          )}
        </div>
        <DialogDescription>{desc}</DialogDescription>
        <DialogFooter className="flex flex-col sm:flex-row">
          <Link
            className="mb-3 flex justify-center"
            to={mapLink ? mapLink : ''}
            target="_blank"
          >
            <Button type="button">
              Maps <MapPin className="mr-2 h-5 w-6" />
            </Button>
          </Link>
          <DialogClose>
            <Button onClick={closeDialog} type="button">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return (
    <div onClick={onClick} className={`block w-full pb-2`}>
      {cardContent}
      {dialogCard}
    </div>
  );
};

export default CardResto;
