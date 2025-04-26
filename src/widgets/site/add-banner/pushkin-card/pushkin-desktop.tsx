import Image from 'next/image';
import { SubscribeNews } from './content/subscribe-news';

export function PushkinDesktop() {
  return (
    <section className='relative hidden md:block'>
      <Image
        src='/image/icon/ad/bg-pushkin-desktop.svg'
        alt='Фоновое изображение'
        width={1200}
        height={220}
        quality={100}
        className='absolute left-12 z-0 h-full object-cover'
      />

      <Image
        src='/image/icon/ad/pushkin-karta-desktop.png'
        width={950}
        height={280}
        quality={100}
        alt='Карта Пушкина'
        className='absolute -bottom-1 right-2 z-20 h-auto w-[65%]'
      />

      <div className='relative z-10 pb-7 pl-[10%] pt-20'>
        <SubscribeNews />
      </div>
    </section>
  );
}
