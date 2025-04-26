'use client';

import { useDateRangePicker } from '@/features/date-picker/hooks/useDateRangePicker';
import { DateRangePickerPopover } from '@/features/date-picker/ui/DateRangePickerPopover';
import { cn } from '@/shared/utils';
import { Loader2Icon, Search, XIcon } from 'lucide-react';
import styles from './TravelSearchForm.module.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function TravelSearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get('search') ?? '';
  const showList = searchParams.get('list') ?? '';

  const [destination, setDestination] = useState(initialSearch);
  const [loading, setLoading] = useState(false);

  const searchDateRange = searchParams.get('range_filter');

  const initialDateRange = useMemo(() => {
    if (!searchDateRange) {
      return undefined;
    }

    try {
      const parsedDateRange = JSON.parse(searchDateRange);

      return {
        from: parsedDateRange.booking_date?.from ? new Date(parsedDateRange.booking_date?.from) : undefined,
        to: parsedDateRange.booking_date?.to ? new Date(parsedDateRange.booking_date?.to) : undefined
      }

    } catch (error) {
      return undefined;
    }
  }, [searchDateRange]);

  const {
    dateRange,
    setDateRange,
    isOpen: isDatePickerOpen,
    setIsOpen: setIsDatePickerOpen,
    formattedDateRange,
  } = useDateRangePicker(initialDateRange);

  useEffect(() => {
    if (searchParams) {
      setLoading(false);
    }
  }, [searchParams]);

  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const searchParams = new URLSearchParams({ list: 'true' });

    if (destination) {
      searchParams.append('search', destination);
    }

    if (dateRange?.from && dateRange?.to) {
      const { from, to } = dateRange;

      from.setMinutes(from.getMinutes() - from.getTimezoneOffset());
      to.setMinutes(to.getMinutes() - to.getTimezoneOffset());

      searchParams.append('range_filter', JSON.stringify({
        booking_date: {
          from: from.toISOString().split('T')[0],
          to: to.toISOString().split('T')[0]
        }
      }));
    }

    router.push(`/house-rent?${searchParams.toString()}`);
  }, [destination, dateRange?.from, dateRange?.to]);

  return (
    <form
      className={styles.container}
      onSubmit={onSubmit}
    >
      <div className={cn(styles.section, 'hidden xl:block')}>
        <p className={styles.title}>Путешествие начинается здесь</p>
      </div>

        <div className={cn(styles.section, 'w-full md:w-auto')}>
          <input
            type='text'
            id='destination'
            name="search"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={cn(styles.input, 'peer pr-4')}
            placeholder=''
          />
          <label
            htmlFor='destination'
            className={cn(
              styles.label,
              'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-white/60'
            )}
          >
            куда?
          </label>
          <div className={styles.iconGroup}>
            {destination && (
              <button type='button' onClick={() => setDestination('')}>
                <XIcon />
              </button>
            )}
          </div>
        </div>

      <DateRangePickerPopover
        dateRange={dateRange}
        setDateRange={setDateRange}
        isOpen={isDatePickerOpen}
        setIsOpen={setIsDatePickerOpen}
      >
        <div className={cn(styles.section, 'w-full md:w-1/3 border-r-0')}>
          <input
            id='dates'
            className={cn(styles.input, 'peer pr-4')}
            placeholder=''
            readOnly
            value={formattedDateRange}
          />
          <label
            htmlFor='dates'
            className={cn(
              styles.label,
              'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-white peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-white/60'
            )}
          >
            когда?
          </label>
          <div className={styles.iconGroup}>
            {formattedDateRange && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDateRange(undefined);
                }}
              >
                <XIcon />
              </button>
            )}
          </div>
        </div>
      </DateRangePickerPopover>

      <button type='submit' className='px-10' disabled={loading}>
        {loading ? <Loader2Icon className='animate-spin' /> : <Search />}
      </button>
    </form>
  );
}
