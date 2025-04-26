import { bannersService } from '@/features/api/site/banners';
import {
  NavigateCarsRentCard,
  NavigateTourseCard,
} from '@/shared/ui/navigation-card';
import { NavigateRestCard } from '@/shared/ui/navigation-card/navigate-rest';
import { WrapperNavigatioCard } from '@/widgets/navigation-cards';
import { ImageSlider } from '@/widgets/site/ImageSlider';
import { TopBanner } from '@/widgets/site/TopBanner';
import {
  WidgetAdsCarousel,
  WidgetAdsCarouselSkeleton,
} from '@/widgets/site/WidgetAdsCarousel';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function LeisureEntertainmentPage() {
  const context = 'excursion';

  const { slider_images, slider_title, banner_title, banner_image } = (
    await bannersService.getBanners(context)
  )[0];

  return (
    <main className='pb-14 md:pb-20'>
      <TopBanner
        title={banner_title}
        image={banner_image}
        description='Найди свое лучшее путешествие здесь'
        className='lg:pt-[20rem]'
      >
        {/* <TravelSearchForm /> */}
      </TopBanner>

      <section className='container mt-16'>
        <ImageSlider
          title={slider_title}
          slides={slider_images}
          description={banner_title}
        />
      </section>

      <section className='container mt-16 lg:mt-20'>
        <h2 className='mb-5 text-2xl font-semibold lg:text-3xl'>
          Горящие предложения
        </h2>
        <Suspense fallback={<WidgetAdsCarouselSkeleton />}>
          <WidgetAdsCarousel category={context} />
        </Suspense>
      </section>

      <WrapperNavigatioCard>
        <NavigateCarsRentCard />
        <NavigateTourseCard />
        <NavigateRestCard />
      </WrapperNavigatioCard>
    </main>
  );
}
