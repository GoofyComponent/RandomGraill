import * as React from 'react';
import pizza from '@/assets/images/pizza.svg';
import pizzaDemi from '@/assets/images/pizza-demi.svg';
import { cn } from '@/lib/utils';

interface StarsProps {
  className?: string;
  note: number;
}

export const Stars: React.FC<StarsProps> = ({ note }) => {
  const noteText = note.toFixed(1);
  const fullPizzas = Math.floor(note);
  const hasHalfPizza = note % 1 >= 0.5;

  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < fullPizzas) {
      return <img key={i} src={pizza} alt="Pizza pleine" className={cn('h-6 w-6')} />;
    } else if (i === fullPizzas && hasHalfPizza) {
      return <img key={i} src={pizzaDemi} alt="Demi pizza" className={cn('h-6 w-6')} />;
    } else {
      return <div key={i} className={cn('h-6 w-6')} />;
    }
  });

  return (
    <div className="flex items-center">
      Note Google : {noteText}
      <div className="ml-2 flex">{stars}</div>
    </div>
  );
};
