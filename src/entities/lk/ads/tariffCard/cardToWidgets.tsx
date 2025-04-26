'use client';
import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { cn } from '@/shared/utils';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import style from './tariffCard.module.css';

interface CardToWidgetsProps {
  className?: string;
  typeCard?: string;
}
export const CardToWidgets = ({
  className = '',
  typeCard,
}: CardToWidgetsProps) => {
  //логика dropdown
  const [period, setPeriod] = useState(1);
  const orderingLabels: Record<string, string> = {
    1: '1 день',
    3: '3 дня',
    7: '7 дней',
    14: '14 дней',
  };
  console.log(period);

  return (
    <div
      datatype={typeCard}
      className={cn(
        style.tariffCard,
        'relative flex flex-col justify-between',
        className
      )}
    >
      <div>
        <h3 datatype={typeCard} className={style.easytitle}>
          Top & Top
        </h3>
        <p className={style.text}>
          Размещает ваше объявление в прокручиваемом виджете на главной странице
          сайта. Виджет находится после первого блока или шапки сайта
        </p>
        <div className={style.filtrBlock}>
          <div className={style.city}>
            <h4>Город</h4>
            <div className={style.box}>Москва</div>
          </div>
          <div className={style.section}>
            <h4>Период</h4>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className={cn(style.box, 'relative z-10 mt-[5px] h-auto')}
                  variant='white'
                >
                  {orderingLabels[period]}
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-white'>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={String(period)}
                  onValueChange={(v) => setPeriod(Number(v))}
                >
                  {Object.values(orderingLabels).map((el, i) => (
                    <DropdownMenuRadioItem
                      key={i}
                      className='cursor-pointer'
                      value={Object.keys(orderingLabels)[i]}
                    >
                      {el}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {typeCard === 'firstrow' && (
            <div className={style.section}>
              <h4>Раздел</h4>
              <div className={style.box}>Аренда жилья</div>
            </div>
          )}
        </div>
        <div className={style.price}>{9999}/день</div>
      </div>
      <Button
        datatype={typeCard}
        size={'sm'}
        className={cn(style.button, 'text-inherit')}
        variant='outline'
      >
        Оплатить
      </Button>
    </div>
  );
};
