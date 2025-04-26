'use client';
import { Button } from '@/shared/ui/button';
import { Slider } from '@/shared/ui/slider';
import { cn } from '@/shared/utils';
import { useState } from 'react';
import style from './tariffCard.module.css';

interface TariffCardProps {
  className?: string;
  typeCard?: string;
}
export const TariffCard = ({ className = '', typeCard }: TariffCardProps) => {
  const [sliderValue, setSliderValue] = useState([18]);
  console.log(sliderValue);

  return (
    <div datatype={typeCard} className={cn(style.tariffCard, '', className)}>
      <h3 className={style.easytitle}>
        <span>Максимум</span>
        <div className='text-gray'>
          от 
          <span>15 Р</span>
          /день
        </div>
      </h3>
      <p className={style.text}>
        Закрепляет объявление в 1-й строке (позиции) страницы списка объявлений.
        Стартовая ставка: 15 руб. за 24 часа. Шаг ставки: 5 руб. (для
        перебивания ставок)
      </p>
      <div className={style.filtrBlock}>
        <div className={style.city}>
          <h4>Город</h4>
          <div>Москва</div>
        </div>
        {typeCard === 'maximum' && (
          <div className={style.section}>
            <h4>Раздел</h4>
            <div>Аренда жилья</div>
          </div>
        )}
      </div>
      <div className={style.time}>
        Срок <span>{sliderValue[0]} дней</span>
      </div>
      <Slider
        className='mt-1'
        defaultValue={sliderValue}
        min={1}
        max={30}
        step={1}
        onValueChange={(v) => setSliderValue(v)}
      />
      <div className={style.interval}>
        <span>1</span>
        <span>30</span>
      </div>
      <div className={style.price}>{9999}/день</div>
      <Button
        datatype={typeCard}
        size={'sm'}
        className={cn(style.button, 'text-inherit')}
        variant={typeCard ? 'secondary' : 'outline'}
      >
        Оплатить
      </Button>
    </div>
  );
};
