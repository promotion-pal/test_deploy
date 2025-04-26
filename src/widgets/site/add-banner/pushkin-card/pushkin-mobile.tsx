import Image from 'next/image';
import { SubscribeNews } from './content/subscribe-news';

export function PushkinMobile() {
  return (
    <section className='relative md:hidden'>
      <div className='absolute inset-y-0 right-0 z-0 h-full w-full min-w-[370px]'>
        <Image
          src='/image/icon/ad/bg-pushkin-mobile.svg'
          alt='Фоновое изображение'
          fill
          className='object-contain object-right-bottom'
          quality={100}
        />
      </div>

      <div className='relative z-10 pl-5 pt-12'>
        <SubscribeNews />

        <Image
          src='/image/icon/ad/pushkin-karta-mobile.png'
          width={277}
          height={268}
          alt='Карта Пушкина'
          className='ml-auto mt-3'
        />
      </div>
    </section>
  );
}
