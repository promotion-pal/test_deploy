import { InputEmail } from '@/features/form';
import Image from 'next/image';

export function SubscriptionService() {
  return (
    <section className='container'>
      <div className='relative mt-14 rounded-3xl bg-gradient-to-t from-[#03A0D9] to-blue px-5 py-14 text-white md:flex md:justify-between md:pr-24'>
        <div className='w-2/12'>
          <Image
            src={'/image/icon/bag.svg'}
            alt='Чемодан'
            width={130}
            height={130}
            className='absolute right-3 top-2 md:-top-16 md:left-7 md:h-64 md:w-64'
          />
        </div>

        <div className='md:w-2/6'>
          <p className='w-2/3 text-2xl font-bold md:w-full md:text-3xl'>
            Самые лучшие предложения
          </p>

          <p className='mt-5 text-lg font-regular md:mt-3'>
            Подпишитесь на полезную рассылку от платформы Mirtravel и сделайте
            отдых выгодным и интересным!
          </p>
        </div>

        <div className='mt-12 md:mt-0 md:w-3/12'>
          <InputEmail />

          <p className='mt-2 md:text-sm'>
            Заполняя форму, вы соглашаетесь с{' '}
            <a className='underline' href='#'>
              политикой обработки персональных данных
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
