import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'bg-inherit flex w-full py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        randomgraill: 'text-xl',
        locate: 'text-xl flex items-center justify-between',
      },
      size: {
        randomgraill: 'h-7 min-w-[375px] pt-4',
      },
    },
    defaultVariants: {
      variant: 'randomgraill',
      size: 'randomgraill',
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, onClick, ...props }, ref) => {
    return (
      <div className="flex w-full items-center border-b border-primary">
        <input
          className={cn(inputVariants({ variant, size }), className)}
          ref={ref}
          {...props}
          onClick={(e) => e.stopPropagation()}
        />
        {variant === 'locate' && (
          <div
            className="cursor-pointer"
            onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
              e.stopPropagation();
              onClick?.(e);
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66675 10H4.16675M4.16675 10C4.16675 13.2217 6.77842 15.8334 10.0001 15.8334M4.16675 10C4.16675 6.77836 6.77842 4.16669 10.0001 4.16669M15.8334 10H18.3334M15.8334 10C15.8334 13.2217 13.2217 15.8334 10.0001 15.8334M15.8334 10C15.8334 6.77836 13.2217 4.16669 10.0001 4.16669M10.0001 1.66669V4.16669M10.0001 15.8334V18.3334M12.5001 10C12.5001 11.3807 11.3808 12.5 10.0001 12.5C8.61937 12.5 7.50008 11.3807 7.50008 10C7.50008 8.61931 8.61937 7.50002 10.0001 7.50002C11.3808 7.50002 12.5001 8.61931 12.5001 10Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
