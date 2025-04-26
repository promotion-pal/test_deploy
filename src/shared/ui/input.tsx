import * as React from 'react';

import { cn } from '@/shared/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Asterisk } from 'lucide-react';

const inputVariants = cva(
  'flex justify-between h-10 w-full px-4 text-base text-foreground transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray disabled:cursor-not-allowed disabled:opacity-70',
  {
    variants: {
      variant: {
        default: 'bg-white',
        secondary: 'bg-gray-light',
      },
      size: {
        default: 'h-10',
        lg: 'h-12',
        xl: 'h-14',
      },
      radius: {
        default: 'rounded-lg',
        full: 'rounded-full',
      },
      withBorder: {
        true: 'border border-muted-foreground',
      },
    },
    defaultVariants: {
      size: 'default',
      radius: 'default',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      variant,
      size,
      radius,
      withBorder,
      label,
      children,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className='relative'>
        <input
          type={type}
          className={cn(
            inputVariants({
              variant,
              size,
              radius,
              withBorder,
            }),
            label && 'h-auto pb-1.5 pl-3 pt-[1.5rem]',
            className
          )}
          ref={ref}
          {...props}
        />
        {label && (
          <span className='pointer-events-none absolute left-3 top-1.5 text-[0.8rem] font-medium text-gray'>
            {label}
            {required && (
              <Asterisk
                className='absolute right-[-16] top-0'
                color='red'
                width={15}
                height={15}
              />
            )}
          </span>
        )}
        {children}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants };
