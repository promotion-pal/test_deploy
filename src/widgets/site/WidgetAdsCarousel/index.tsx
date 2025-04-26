import {
  WidgetAdCard,
  WidgetAdCardSkeleton,
} from '@/entities/widget-ad/ui/WidgetAdCard';
import { adsService } from '@/features/api/site/ads';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';

interface WidgetAdsCarouselProps {
  category: 'main' | 'transport' | 'housing' | 'tour' | 'excursion';
}

export async function WidgetAdsCarousel({ category }: WidgetAdsCarouselProps) {
  const data = await adsService.getWidgetAds(category);

  return (
    <Carousel>
      <CarouselContent>
        {data.map((ad, i) => (
          <CarouselItem
            className='flex basis-full justify-center sm:basis-auto'
            key={i}
          >
            <WidgetAdCard data={ad} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function WidgetAdsCarouselSkeleton() {
  return (
    <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <WidgetAdCardSkeleton />
      <WidgetAdCardSkeleton className='hidden md:block' />
      <WidgetAdCardSkeleton className='hidden lg:block' />
      <WidgetAdCardSkeleton className='hidden xl:block' />
    </div>
  );
}
