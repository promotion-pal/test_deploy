'use client';

import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel';
import Image from 'next/image';

interface Photo {
  photo: string;
}

interface PhotoCollectionProps {
  items: Photo[];
  basePath?: string;
}

export function PhotoCollection({ items, basePath }: PhotoCollectionProps) {
  const hasPhotos = items?.some((item) => item.photo);

  if (!hasPhotos) {
    return (
      <div className='flex h-64 items-center justify-center rounded-lg bg-gray-100'>
        <span className='text-gray-500'>Нет доступных изображений</span>
      </div>
    );
  }

  return (
    <section className='my-4'>
      <Carousel>
        <CarouselContent>
          {items.map((item, index) => {
            if (!item.photo) return null;

            const imageUrl = basePath ? `${basePath}${item.photo}` : item.photo;

            return (
              <CarouselItem key={`photo-${index}`}>
                <div className='relative h-[200px] w-[300px]'>
                  <Image
                    src={imageUrl}
                    alt={`Фото жилья ${index + 1}`}
                    fill
                    className='rounded-lg object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    priority={index === 0}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                    }}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
