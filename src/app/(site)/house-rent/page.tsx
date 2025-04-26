import {
  adsService,
  GetSiteHousingAdsParams,
  GetSiteHousingAdsResponse,
} from '@/features/api/site/ads';
import { bannersService } from '@/features/api/site/banners';
import {
  NavigateCarsRentCard,
  NavigateTourseCard,
} from '@/shared/ui/navigation-card';
import { NavigateRestCard } from '@/shared/ui/navigation-card/navigate-rest';
import { WrapperNavigatioCard } from '@/widgets/navigation-cards';
import HousingAdsList from '@/widgets/site/HousingAdsList';
import { ImageSlider } from '@/widgets/site/ImageSlider';
import { TopBanner } from '@/widgets/site/TopBanner';
import { TravelSearchForm } from '@/widgets/site/TravelSearchForm';
import {
  WidgetAdsCarousel,
  WidgetAdsCarouselSkeleton,
} from '@/widgets/site/WidgetAdsCarousel';
import { Suspense } from 'react';

interface HouseRentPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function HouseRentPage({
  searchParams,
}: HouseRentPageProps) {
  const context = 'housing';

  const { slider_images, slider_title, banner_title, banner_image } = (
    await bannersService.getBanners(context)
  )[0];

  const showList = (await searchParams).list;
  const search = (await searchParams).search;
  const range_filter = (await searchParams).range_filter;

  const params = {} as GetSiteHousingAdsParams;

  if (typeof search === 'string') {
    params.search = search;
  }

  if (typeof range_filter === 'string') {
    params.range_filter = range_filter;
  }

  let data: GetSiteHousingAdsResponse | null = null;

  try {
    data = await adsService.getHousingAds(params);
  } catch (e) {}

  return (
    <main className='pb-14 md:pb-20'>
      <TopBanner
        title={banner_title}
        image={banner_image}
        description='Найди свое лучшее путешествие здесь'
        className='lg:pt-[20rem]'
      >
        <TravelSearchForm />
      </TopBanner>

      {showList === 'true' && (
        <HousingAdsList
          className='container mt-16'
          items={data?.results ?? null}
        />
      )}

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
