import { cn } from '@/shared/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
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
export interface TextareaProps
  extends Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
}
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
      ...props
    },
    ref
  ) => {
    return (
      <div className='relative'>
        <textarea
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
          </span>
        )}
        {children}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
