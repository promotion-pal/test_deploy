'use client';

import { cn } from '@/shared/utils';
import { ru } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={ru}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative',
        caption_label: 'font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex border-b pb-2',
        head_cell: 'w-10 font-normal text-sm',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-base focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary/20 [&:has([aria-selected].day-range-end)]:rounded-r-full',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-full [&:has(>.day-range-start)]:rounded-l-full first:[&:has([aria-selected])]:rounded-l-full last:[&:has([aria-selected])]:rounded-r-full'
            : '[&:has([aria-selected])]:rounded-full'
        ),
        day: 'h-10 w-10 rounded-full transition hover:bg-gray-light',
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected: 'bg-primary text-white hover:bg-primary/80',
        day_today: 'bg-accent text-accent-foreground',
        day_outside:
          'day-outside text-gray aria-selected:bg-transparent  aria-selected:text-gray',
        day_disabled: 'opacity-50',
        day_range_middle:
          'aria-selected:bg-transparent aria-selected:text-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft
            className={cn('h-6 w-6 text-primary', className)}
            {...props}
          />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight
            className={cn('h-6 w-6 text-primary', className)}
            {...props}
          />
        ),
      }}
      {...props}
    />
  );
}

Calendar.displayName = 'Calendar';

export { Calendar };
