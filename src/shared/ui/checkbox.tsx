'use client';

import { cn } from '@/shared/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  variant?: 'check' | 'radio';
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, variant = 'check', ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 border bg-white disabled:cursor-not-allowed disabled:opacity-70',
      variant === 'check'
        ? 'rounded'
        : 'rounded-full data-[state=checked]:border-none',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator>
      {variant === 'check' ? (
        <Check className='h-3.5 w-3.5' />
      ) : (
        <div className='h-4 w-4 rounded-full ring-4 ring-inset ring-primary' />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
