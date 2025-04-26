'use client';

import { Calendar } from '@/shared/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { DateRange } from 'react-day-picker';
import { useMediaQuery } from 'react-responsive';

interface DateRangePickerPopoverProps {
  children: React.ReactNode;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function DateRangePickerPopover({
  children,
  dateRange,
  setDateRange,
  isOpen,
  setIsOpen,
}: DateRangePickerPopoverProps) {
  const isMiniVariant = useMediaQuery({ maxWidth: 960 });
  const today = new Date();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          initialFocus
          mode='range'
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={isMiniVariant ? 1 : 2}
          disabled={{ before: today }}
        />
      </PopoverContent>
    </Popover>
  );
}
