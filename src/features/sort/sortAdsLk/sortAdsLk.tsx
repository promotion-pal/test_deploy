'use client';

import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { ArrowDownUp, ChevronDown } from 'lucide-react';

interface SortProps {
  ordering: string;
  setOrdering: (value: string) => void;
}

export function SortAdsLk({ ordering, setOrdering }: SortProps) {
  const orderingLabels: Record<string, string> = {
    created_at: 'Дате создания',
    views_count: 'Количеству просмотров',
    feedbacks_count: 'Количеству отзывов',
    favorites_count: 'Количеству лайков',
    rating: 'Рейтингу',
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={ordering && 'font-semibold text-primary'}
          variant='white'
          style={{ padding: '0' }}
        >
          <ArrowDownUp color='#353535' />
          {ordering ? orderingLabels[ordering] : 'Сортировка'}
          <ChevronDown color='#353535' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-white'>
        <DropdownMenuLabel>Сортировка объявлений по:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={ordering} onValueChange={setOrdering}>
          <DropdownMenuRadioItem className='cursor-pointer' value='created_at'>
            Дате создания
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className='cursor-pointer' value='views_count'>
            Количеству просмотров
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className='cursor-pointer'
            value='feedbacks_count'
          >
            Количеству отзывов
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className='cursor-pointer'
            value='favorites_count'
          >
            Количеству лайков
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className='cursor-pointer' value='rating'>
            Рейтингу
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
