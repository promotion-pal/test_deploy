'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';
import { cn } from '../utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className='relative h-[5px] w-full grow overflow-hidden rounded-full bg-transparent'>
      <div className='absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-gray-300' />
      <SliderPrimitive.Range className='absolute h-[5px] bg-teal' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='bg-background focus-visible:ring-ring block h-4 w-4 rounded-full bg-teal shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50' />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
