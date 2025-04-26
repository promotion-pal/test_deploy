'use client';

import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { cn } from '@/shared/utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'data-[state=unchecked]:bg-input peer inline-flex h-[1.4rem] w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-light transition-colors disabled:cursor-not-allowed disabled:opacity-70 data-[state=checked]:bg-primary',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block size-[1.15rem] rounded-full bg-white ring-0 transition-transform data-[state=checked]:translate-x-[1.1rem] data-[state=unchecked]:translate-x-0'
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
