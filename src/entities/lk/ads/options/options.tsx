'useClient';
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
import { cn } from '@/shared/utils';
import { schemaAddAdsHouseForm } from '@/widgets/lk/addAds/schema';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { z } from 'zod';
import style from './options.module.css';

type FormData = {
  [K in keyof z.infer<typeof schemaAddAdsHouseForm>]: string | undefined;
};
interface OptionsProps {
  className?: string;
}
type FieldName = 'check_in_time' | 'check_out_time';
const initialFormState = {
  floor: '',
  sleep_place_count: '',
  area: '',
  guests: '',
  check_in_time: '',
  check_out_time: '',
};
const initialErrors: Record<FieldName, string | null> = {
  check_in_time: null,
  check_out_time: null,
};

export const Options = ({ className = '' }: OptionsProps) => {
  //логика dropdown
  const [roomCount, setRoomCount] = useState<string | undefined>();
  const orderingLabels: Record<string, string> = {
    1: '1 комната',
    2: '2 комнаты',
    3: '3 комнаты',
    4: '4 комнаты',
    5: '5 комнат',
    is_studio: 'Студия',
  };

  //логика инпутов
  const [userFormData, setUserFormData] = useState<Partial<FormData>>({});
  const [showErrors, setShowErrors] = useState(false);
  const { setValues, values, validateAndSave, errors } = useNewAdRentHouse(
    (store) => store
  );
  const {
    room_count,
    guests,
    area,
    floor,
    sleep_place_count,
    check_in_time,
    check_out_time,
  } = values;

  const formData = {
    ...initialFormState,
    //...userQuery.data, //здесь будут данные от сервера при обновлении объявления
    ...userFormData,
  };

  const validate = () => {
    const res = schemaAddAdsHouseForm.partial().safeParse(formData);
    if (res.success) {
      return undefined;
    }
    return res.error.format();
  };

  const handleRadio = (val: string | undefined) => {
    if (val && val === 'is_studio') {
      setValues({ is_studio: true, room_count: undefined });
    } else {
      setValues({ room_count: Number(val), is_studio: false });
    }
  };

  // const handleOnBlur = (e: React.FocusEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const errors = validate();
  //   if (errors) {
  //     setShowErrors(true);
  //     return;
  //   } else {
  //     const res = schemaAddAdsHouseForm.partial().safeParse(formData);
  //     if (res.success) {
  //       if (roomCount && roomCount === 'is_studio') {
  //         setValues({
  //           ...res.data,
  //           ...{ is_studio: true, room_count: undefined },
  //         });
  //       } else {
  //         setValues({
  //           ...res.data,
  //           ...{ room_count: Number(roomCount), is_studio: false },
  //         });
  //       }
  //     }
  //   }
  // };
  // const errors = showErrors ? validate() : undefined;
  return (
    <div className={cn(style.options, '', className)}>
      <h3 className={style.title}>Дополнительные опции</h3>
      <form className={style.container}>
        <div className={style.dropdown}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className='h-auto text-[0.8rem] font-medium text-gray'
                variant='white'
              >
                {room_count
                  ? `Количество комнат: ${orderingLabels[room_count]}`
                  : 'Количество комнат:'}
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white'>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={String(room_count)}
                onValueChange={handleRadio}
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
          {!room_count && (
            <div className='pl-3 text-gray'>Выберете из списка</div>
          )}
        </div>
        <Input
          type='number'
          className='w-full'
          withBorder
          label='Максимальное количество гостей'
          placeholder='Введите число'
          name='guests'
          value={guests ?? ''}
          onChange={(e) =>
            validateAndSave({
              guests:
                e.target.value === '' ? undefined : Number(e.target.value),
            })
          }
        >
          {errors?.guests && <AlertDestructive message={errors?.guests} />}
        </Input>
        <Input
          type='number'
          className='w-full'
          withBorder
          label='Площадь'
          placeholder='Введите число'
          name='area'
          value={area ?? ''}
          onChange={(e) =>
            validateAndSave({
              area: e.target.value === '' ? undefined : Number(e.target.value),
            })
          }
        >
          {errors?.area && <AlertDestructive message={errors?.area} />}
        </Input>
        {/* <Input
          type='number'
          className='w-full'
          withBorder
          label='Этаж'
          placeholder='Введите число'
          name='floor'
          value={floor ?? ''}
          onChange={(e) =>
            validateAndSave({
              floor: e.target.value === '' ? undefined : Number(e.target.value),
            })
          }
        >
          {errors?.floor && <AlertDestructive message={errors?.floor} />}
        </Input> */}
        <Input
          type='number'
          className='w-full'
          withBorder
          label='Количество спальных мест'
          placeholder='Введите число'
          name='sleep_place_count'
          value={sleep_place_count ?? ''}
          onChange={(e) =>
            validateAndSave({
              sleep_place_count:
                e.target.value === '' ? undefined : Number(e.target.value),
            })
          }
        >
          {errors?.sleep_place_count && (
            <AlertDestructive message={errors?.sleep_place_count} />
          )}
        </Input>
        <Input
          className='w-full'
          withBorder
          label='Время заезда'
          placeholder='Укажите время в формате hh:mm'
          name='check_in_time'
          value={check_in_time ?? ''}
          onChange={(e) => validateAndSave({ check_in_time: e.target.value })}
        >
          {errors?.check_in_time && (
            <AlertDestructive message={errors?.check_in_time} />
          )}
        </Input>
        <Input
          className='w-full'
          withBorder
          label='Время выезда'
          placeholder='Укажите время в формате hh:mm'
          name='check_out_time'
          value={check_out_time ?? ''}
          onChange={(e) => validateAndSave({ check_out_time: e.target.value })}
        >
          {errors?.check_out_time && (
            <AlertDestructive message={errors?.check_out_time} />
          )}
        </Input>
      </form>
    </div>
  );
};
