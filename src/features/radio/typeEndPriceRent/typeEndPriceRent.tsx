'use client';

import { useNewAdRentHouse } from '@/shared/store/store';
import { AlertDestructive } from '@/shared/ui/alerts/AlertDestructive';
import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { Input } from '@/shared/ui/input';
import { ChevronDown } from 'lucide-react';

import style from './typeRent.module.css';

export function TypeEndPriceRent() {
  //логика dropdown тип аренды
  const orderingLabels: Record<string, string> = {
    hourly: 'Часовая',
    daily: 'Суточная',
  };

  //логика инпутов
  const { setValues, values, validateAndSave, errors } = useNewAdRentHouse(
    (store) => store
  );
  const { rent_type, price_per_day, price_per_hour } = values;

  const handleOnBlur = () => {
    if (rent_type && rent_type === 'hourly') {
      setValues({ price_per_day: undefined });
    } else if (rent_type && rent_type === 'daily') {
      setValues({ price_per_hour: undefined });
    }
  };

  return (
    <form className={style.rentType}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className='h-auto text-[0.8rem] font-medium text-gray'
            variant='white'
          >
            {rent_type
              ? `Тип аренды: ${orderingLabels[rent_type]}`
              : 'Тип аренды: Часовая/Суточная'}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-white'>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={rent_type}
            onValueChange={(v) => {
              setValues({ rent_type: v });
              handleOnBlur();
            }}
          >
            <DropdownMenuRadioItem className='cursor-pointer' value='hourly'>
              Часовая
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem className='cursor-pointer' value='daily'>
              Суточная
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {rent_type === 'hourly' && (
        <Input
          type='number'
          name='price_per_hour'
          className='w-full'
          label='Цена за час'
          placeholder='Поле для ввода'
          value={price_per_hour ?? ''}
          onChange={(e) =>
            validateAndSave({ price_per_hour: Number(e.target.value) })
          }
        />
      )}
      {errors?.price_per_hour && (
        <AlertDestructive message={errors.price_per_hour} />
      )}
      {rent_type === 'daily' && (
        <Input
          type='number'
          name='price_per_day'
          className='w-full'
          label='Цена за сутки'
          placeholder='Поле для ввода'
          value={price_per_day ?? ''}
          onChange={(e) =>
            validateAndSave({ price_per_day: Number(e.target.value) })
          }
        />
      )}
      {errors?.price_per_day && (
        <AlertDestructive message={errors.price_per_day} />
      )}
      {!rent_type && (
        <Input
          className={style.warning}
          label='Цена за:'
          placeholder='Выберете тип аренды'
        />
      )}
    </form>
  );
}
