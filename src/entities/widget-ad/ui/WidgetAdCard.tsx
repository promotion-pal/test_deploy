'use client';

import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { Skeleton } from '@/shared/ui/skeleton';
import { cn } from '@/shared/utils';
import { ArrowUpRight, HeartIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { WidgetAd } from '../model/widget-ad';

interface WidgetAdCardProps {
  data: WidgetAd;
}

export function WidgetAdCard({ data }: WidgetAdCardProps) {
  const price =
    data.price_per_day ||
    data.price_per_hour ||
    data.price_per_tour ||
    data.price_per_excursion ||
    0;

  const oldPrice = price * 1.39;

  const address = [data.address?.city, data.address?.region]
    .filter(Boolean)
    .join(', ');

  return (
    <div className='group w-[340px] rounded-2xl bg-gray-light'>
      <div className='relative h-[230px] transition ease-in-out'>
        {data.photos.length > 0 && (
          <Image
            src={data.photos[0].photo}
            alt={data.title}
            fill
            className='rounded-2xl object-cover'
          />
        )}

        <div
          className={cn(
            'absolute inset-0 rounded-2xl transition group-hover:opacity-40',
            'image-overlay-gradient'
          )}
        />

        <div className='max-w-2/3 absolute left-4 top-4 flex flex-wrap gap-1'>
          {data.is_studio && <Badge variant='teal'>Студия</Badge>}
          {data.is_last_minute_tour && (
            <Badge variant='teal'>Горящий тур</Badge>
          )}
        </div>
        <Button
          className='absolute right-4 top-4'
          variant='action'
          radius='full'
          size='icon-sm'
        >
          <HeartIcon fill='currentColor' />
        </Button>
        <h1 className='absolute bottom-5 left-4 max-w-64 text-2xl font-medium text-white'>
          {data.title}
        </h1>
      </div>
      <div className='relative px-4 py-5'>
        <div className='mb-2 flex items-center justify-between'>
          <p className='text-sm'>{address}</p>
          {data.rating && (
            <Badge className='bg-yellow'>
              <StarIcon />
              {data.rating}
            </Badge>
          )}
        </div>
        <div className='mb-3'>
          <span className='text-sm text-gray line-through'>
            {oldPrice.toLocaleString('ru-RU')} р
          </span>
          <p className='text-2xl font-medium'>
            {price.toLocaleString('ru-RU')} р
            <span className='ml-1.5 text-base font-light'>
              {data.price_per_day ? '/ сутки' : data.price_per_hour && '/ час'}
            </span>
          </p>
        </div>
        <div className='text-xs'>
          <p>
            {data.guests && `Гостей: ${data.guests}`}
            {data.room_count && ` · Комнат: ${data.guests}`}
          </p>
          <p>{data.average_bill && `Средний чек: ${data.average_bill}`}</p>
        </div>
        <Button
          className='absolute bottom-5 right-4'
          variant='outline-teal'
          radius='full'
          size='icon'
          asChild
        >
          <Link href={`/${data.link}/${data.id}`}>
            <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function WidgetAdCardSkeleton({ className }: { className?: string }) {
  return <Skeleton className={cn('h-[24rem] rounded-2xl', className)} />;
}
