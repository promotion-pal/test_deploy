import { CardToWidgets } from '@/entities/lk/ads/tariffCard/cardToWidgets';
import { TariffCard } from '@/entities/lk/ads/tariffCard/tariffCard';
import { Button } from '@/shared/ui/button';
import { PictureCardTariffs } from '@/shared/ui/pictureCards/lk/pictureCardTariffs';
import { cn } from '@/shared/utils';
import Image from 'next/image';
import style from './tariffs.module.css';

interface TariffsProps {
  className?: string;
}
export const Tariffs = ({ className = '' }: TariffsProps) => {
  return (
    <div className={cn(style.tariffs, '', className)}>
      <h2 className={style.title}>Простое размещение</h2>
      <div className={style.wrapper}>
        <article className={style.easybloc}>
          <h3 className={style.easytitle}>
            <span>Простое размещение</span>
            <span>0 Р</span>
          </h3>
          <p className={style.easytext}>
            Бесплатная публикация на <br />
            30 дней. Без выделения
          </p>
          <Button
            size={'sm'}
            className={cn(style.buttoneasy, 'text-inherit')}
            variant={'outline'}
          >
            Опубликовать
          </Button>
        </article>
        <PictureCardTariffs />
      </div>
      <h2 className={cn(style.title, 'mt-14')}>Размещение с приоритетом</h2>
      <div className={style.cards}>
        <TariffCard typeCard='maximum' />
        <TariffCard typeCard='constant' />
        <TariffCard />
      </div>
      <h2 className={cn(style.title, 'mt-14')}>Размещение в виджетах сайта</h2>
      <div className={style.cards2}>
        <article className={style.container}>
          <Image
            width={128}
            height={128}
            className={style.img163}
            src={'/image 163.png'}
            alt='imgCard'
          />
          <Image
            width={184}
            height={184}
            className={style.img168}
            src={'/image 168.png'}
            alt='imgCard'
          />
          <CardToWidgets typeCard='toptop' />
        </article>
        <article className={style.container}>
          <Image
            width={128}
            height={128}
            className={style.img167}
            src={'/image 167.png'}
            alt='imgCard'
          />
          <Image
            width={164}
            height={164}
            className={style.img166}
            src={'/image 166.png'}
            alt='imgCard'
          />
          <CardToWidgets typeCard='firstrow' />
        </article>
      </div>
    </div>
  );
};
