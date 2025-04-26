import { cn } from '@/shared/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white font-semibold hover:bg-primary/90',
        secondary: 'bg-gray-light hover:bg-gray-light/90',
        teal: 'bg-teal text-white font-semibold hover:bg-teal/90',
        blue: 'bg-blue text-white font-semibold hover:bg-blue/90',
        white: 'bg-white hover:bg-white/90',
        outline: 'border text-gray',
        'outline-teal': 'bg-white border border-teal text-teal',
        action: 'bg-gray-light/30 text-white backdrop-blur-sm',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 [&:has(svg)]:px-3 [&:not(:has(svg))]:px-6',
        sm: 'h-9 text-sm [&:has(svg)]:px-2.5 [&:not(:has(svg))]:px-4',
        lg: 'h-12 px-6 text-lg',
        icon: 'h-10 w-10',
        'icon-sm': 'h-7 w-7 [&_svg]:size-3.5',
        fit: 'h-fit',
      },
      radius: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      radius: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
