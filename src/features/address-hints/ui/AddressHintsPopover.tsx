import type { AddressHint } from '@/features/api/site/address';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import React from 'react';

interface AddressHintsPopoverProps {
  children: React.ReactNode;
  onSelectHint: (hint: string) => void;
  hints: AddressHint[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function AddressHintsPopover({
  children,
  onSelectHint,
  hints,
  isOpen,
  setIsOpen,
}: AddressHintsPopoverProps) {
  return (
    <Popover open={isOpen && hints.length > 0} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className='w-[var(--radix-popover-trigger-width)] p-0'>
        <ul className='max-h-[300px] divide-y divide-border/50 overflow-auto'>
          {hints.map((hint, i) => {
            const [beforeComma, ...afterComma] = hint.value.split(',');
            return (
              <li
                key={i}
                className='cursor-pointer px-4 py-3 text-sm transition hover:bg-primary/10'
                onClick={() => {
                  onSelectHint(hint.value);
                  setIsOpen(false);
                }}
              >
                {afterComma ? (
                  <>
                    <p>{afterComma.join(',')}</p>
                    <span className='text-gray'>{beforeComma.trim()}</span>
                  </>
                ) : (
                  <p>{hint.value}</p>
                )}
              </li>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
