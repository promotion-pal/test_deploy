'use client';

import Image from 'next/image';
import { CalcRent, DialogCart } from './content';
import { ButtonComfort } from './ui';
interface Comfort {
  title: string;
  id?: number;
}

interface SpecificationsProps {
  pageId: number;
  title: string;
  image: string;
  conforts: Comfort[];
  apartmentSize: string;
  sleepPlaceCount: string;
  price: string;
}

export function Specifications({
  title,
  image,
  conforts,
  apartmentSize,
  sleepPlaceCount,
  price,
  pageId,
}: SpecificationsProps) {
  return (
    <section className='mt-5 rounded-lg bg-gray-light md:flex'>
      <div className='relative min-h-80 w-full md:h-[488px] md:w-[460px]'>
        <Image
          src={image}
          fill
          alt='Обложка объявления'
          className='rounded-lg object-fill'
        />
      </div>

      <div className='px-5 pb-10 pt-7 md:flex md:gap-x-7'>
        <div className='md:w-1/3'>
          <h2 className='text-3xl font-semibold'>{title}</h2>

          <ul className='mt-5 space-y-3'>
            <ListFeatures image='position' text={'Краснопресненская 6 МИН'} />
            <ListFeatures
              image='person'
              text={`${apartmentSize}, ${sleepPlaceCount}`}
            />
            <ListFeatures image='location' text={'Москва, Южное Бутово'} />
          </ul>

          <ul className='mt-11 flex flex-wrap justify-between gap-3 md:justify-normal'>
            {conforts.map((el) => (
              <ListComfort key={el.id} title={el.title} />
            ))}
          </ul>
          <ButtonComfort className='mt-10' />
        </div>

        <div className='mt-10 h-[2px] w-full rounded-xl bg-gray md:h-full md:w-[1px]' />

        <div className=''>
          <CalcRent price={price} sleepPlaceCount={sleepPlaceCount} />
          <DialogCart pageId={pageId} />
        </div>
      </div>
    </section>
  );
}

interface ListFeaturesProps {
  image: string;
  text: string;
}

const ListFeatures = ({ image, text }: ListFeaturesProps) => (
  <li className='flex'>
    <Image
      width={20}
      height={20}
      src={`/image/icon/advertisement/${image}.svg`}
      alt='Иконка'
    />
    <p className='ml-2 text-lg font-light text-gray-500'>{text}</p>
  </li>
);

const ListComfort = ({ title }: Comfort) => (
  <p className='rounded-lg bg-white px-2 py-1'>{title}</p>
);
