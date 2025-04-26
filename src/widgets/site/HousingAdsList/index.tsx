'use client';

import { useMemo } from 'react';

import { SiteHousingAdsResult } from '@/features/api/site/ads';
import { cn } from '@/shared/utils';
import MapContainer from '@/widgets/site/MapContainer';
import dynamic from 'next/dynamic';
import HousingAdItem from './HousingAdItem';

interface HousingAdsListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SiteHousingAdsResult[] | null;
  hasMore?: boolean;
}

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export default function HousingAdsList({
  className,
  items,
  ...props
}: HousingAdsListProps) {
  const points = useMemo(
    () =>
      items?.reduce<
        { key: number | string; position: [number, number]; text: string }[]
      >((acc, { id, address, price }) => {
        if (address.latitude && address.longitude && price) {
          acc.push({
            key: id,
            position: [Number(address.latitude), Number(address.longitude)],
            text: price.replaceAll(' ', '&nbsp;'),
          });
        }

        return acc;
      }, []) ?? [],
    [items]
  );

  if (!items || items.length === 0) {
    return (
      <div className={className} {...props}>
        <h5 className='text-xl'>По вашему запросу ничего не найдено</h5>
      </div>
    );
  }

  return (
    <div
      className={cn(className, 'grid grid-cols-1 gap-5 xl:grid-cols-2')}
      {...props}
    >
      <ul className='flex flex-col gap-5'>
        {items.map(
          ({
            id,
            title,
            photos,
            address,
            area,
            sleep_place_count,
            rating,
            price,
            rent_type,
            filtered_price,
            is_favorite,
          }) => (
            <li key={id}>
              <HousingAdItem
                id={id}
                title={title}
                photoUrl={photos?.[0]?.photo}
                station={address.station}
                city={address.city}
                street={address.street}
                area={area}
                sleepPlaceCount={sleep_place_count}
                rating={rating}
                price={price}
                rentType={rent_type}
                filteredPrice={filtered_price}
                isFavourite={is_favorite}
              />
            </li>
          )
        )}
      </ul>

      <MediaQuery minWidth={960}>
        {points.length > 0 && (
          <MapContainer center={points[0].position} points={points} />
        )}
      </MediaQuery>
    </div>
  );
}
