import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

export function useDateRangePicker(defaultDateRange?: DateRange) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    defaultDateRange
  );
  const [isOpen, setIsOpen] = useState(false);

  const formatDateRange = () => {
    if (!dateRange?.from) return '';

    if (dateRange.to) {
      return `${format(dateRange.from, 'dd MMM', { locale: ru })} - ${format(dateRange.to, 'dd MMM', { locale: ru })}`;
    }

    return format(dateRange.from, 'dd MMM', { locale: ru });
  };

  return {
    dateRange,
    setDateRange,
    isOpen,
    setIsOpen,
    formattedDateRange: formatDateRange(),
  };
}
