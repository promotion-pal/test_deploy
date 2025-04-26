import { advertisementService } from '@/features/api/site/advertisement';
import { HouseAds } from '@/features/api/types/ads/house';
import SemanticUrl from '@/features/category';
import {
  BenefitLocation,
  EntryExit,
  ListNavigateAdvertisement,
  PhotoCollection,
  Reviews,
  Specifications,
} from '@/widgets/advertisement';
import Characteristic from '@/widgets/advertisement/characteristic';

export default async function House({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const pageId = parseInt((await params).id, 10);

  const house: HouseAds = await advertisementService.getHouse(pageId);

  return (
    <main className='pb-16 pt-20'>
      <div className='container'>
        <SemanticUrl />

        <h1 className='mt-14 text-3xl font-semibold'>{house.title}</h1>

        <ListNavigateAdvertisement />

        <PhotoCollection items={house.photos} />

        <BenefitLocation
          address='Москва, улица Воздвиженская, 56, корпус А'
          type={house.housing_type.title}
          roomCount={house.room_count}
        />

        <EntryExit entry={house.check_in_time} exit={house.check_out_time} />

        <Specifications
          pageId={pageId}
          conforts={house.comfort_items}
          title={house.title}
          image={house.photos[0].photo}
          apartmentSize={house.area}
          sleepPlaceCount={house.sleep_place_count}
          price={house.price}
        />

        <div className='md:flex md:gap-x-3'>
          <div className='md:w-1/2'>
            <Characteristic />
          </div>
          <div className='md:w-1/2'>
            <Reviews feedbacks={house.feedbacks} />
          </div>
        </div>
      </div>
    </main>
  );
}
