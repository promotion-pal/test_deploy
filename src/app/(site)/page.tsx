import { bannersService } from '@/features/api/site/banners';
import { PushkinCard } from '@/widgets/site/add-banner';
import { ImageSlider } from '@/widgets/site/ImageSlider';
import { SubscriptionService } from '@/widgets/site/subscription-service';
import { TopBanner } from '@/widgets/site/TopBanner';
import { TravelSearchForm } from '@/widgets/site/TravelSearchForm';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const { slider_images, slider_title, banner_title, banner_image } = (
    await bannersService.getBanners('main_page')
  )[0];

  return (
    <main className='pb-10 md:pb-32'>
      <TopBanner
        title={banner_title}
        image={banner_image}
        description='Найди свое лучшее путешествие здесь'
        className='lg:pt-[20rem]'
      >
        <TravelSearchForm />
      </TopBanner>

      {/* <section className='container mt-16 lg:mt-20'>
        <h2 className='mb-5 text-2xl font-semibold lg:text-3xl'>
          Горящие предложения
        </h2>
        <Suspense fallback={<WidgetAdsCarouselSkeleton />}>
          <WidgetAdsCarousel category='main' />
        </Suspense>
      </section> */}

      <section className='container mt-16 lg:mt-20'>
        <ImageSlider
          title={slider_title}
          slides={slider_images}
          description={banner_title}
        />
      </section>

      <SubscriptionService />
      <PushkinCard />
    </main>
  );
}
