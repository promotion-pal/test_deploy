// 'useClient';

// import { TypeEndPriceRent } from '@/features/radio/typeEndPriceRent/typeEndPriceRent';
// import { fetchInstance } from '@/shared/api';
// import { useNewAdRentHouse } from '@/shared/store/store';
// import { AlertDestructive } from '@/shared/ui/alerts/AlertDestructive';
// import { Button } from '@/shared/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/shared/ui/dropdown-menu';
// import { Input } from '@/shared/ui/input';
// import { Textarea } from '@/shared/ui/textarea';
// import { cn } from '@/shared/utils';
// import { Asterisk, ChevronDown } from 'lucide-react';
// import { useEffect } from 'react';
// import style from './mainInAd.module.css';

// interface TypeHousing {
//   id: number;
//   title: string;
// }
// interface MainInAdProps {
//   className?: string;
//   titleOld?: string;
// }
// export const MainInAd = ({ className = '', titleOld }: MainInAdProps) => {
//   // const { data: listHousingTypes } = useQuery({
//   //   queryKey: ['housingtype'],
//   //   queryFn: async () => {
//   //     const { data } = await fetchInstance.get<TypeHousing[]>(
//   //       'https://backend.devmirtraveler.ru/api/v1/site/dictionaries/housing-type/'
//   //     );
//   //     return data;
//   //   },
//   // });

//   const getListCategory = async () => {
//     const data = await fetchInstance.get('/site/dictionaries/housing-type/');
//     console.log(data);
//   };

//   useEffect(() => {
//     getListCategory();
//   }, []);

//   //логика инпутов
//   const { errors, validateAndSave, values, setValues } = useNewAdRentHouse(
//     (store) => store
//   );
//   const { title, text, address, housing_type } = values;
//   return (
//     <div className={cn(style.mainInAd, '', className)}>
//       <Input
//         value={title ?? ''}
//         onChange={(e) => validateAndSave({ title: e.target.value })}
//         className='w-full'
//         withBorder
//         label='Заголовок объявления '
//         placeholder='Поле для ввода'
//         //onBlur={(e) => validateAndSave({ title: e.target.value })}//отправляем на проверку
//       >
//         <Asterisk
//           className='absolute left-[151] top-1'
//           color='red'
//           width={15}
//           height={15}
//         />
//         {errors?.title && <AlertDestructive message={errors?.title} />}
//       </Input>

//       <Textarea
//         value={text ?? ''}
//         onChange={(e) => validateAndSave({ text: e.target.value })}
//         className='w-full'
//         withBorder
//         label='Описание'
//         placeholder='Текстовое поле для ввода'
//         //onBlur={(e) => validateAndSave({ text: e.target.value })}
//       >
//         <Asterisk
//           className='absolute left-[77] top-1'
//           color='red'
//           width={15}
//           height={15}
//         />
//         {errors?.text && <AlertDestructive message={errors?.text} />}
//       </Textarea>
//       <div className={style.addressBlock}>
//         <TypeEndPriceRent
//         // price_per_dayOld={data}
//         // price_per_hourOld={data}
//         // typeRentOld={data}
//         />
//         <div className={style.dropdown}>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 className='relative h-auto text-[0.8rem] font-medium text-gray'
//                 variant='white'
//               >
//                 {

//                 }
//                 {housing_type > 0
//                   ? `Тип объекта: ${listHousingTypes?.filter((el) => el.id === Number(housing_type))[0].title}`
//                   : 'Тип объекта:'}
//                 <span className='flex'>
//                   <ChevronDown />
//                   <Asterisk style={{ width: 15, height: 15 }} color='red' />
//                 </span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className='bg-white'>
//               <DropdownMenuSeparator />
//               <DropdownMenuRadioGroup
//                 value={String(housing_type)}
//                 onValueChange={(v) =>
//                   validateAndSave({ housing_type: Number(v) })
//                 }
//               >
//                 {listHousingTypes?.map((el) => (
//                   <DropdownMenuRadioItem
//                     key={el.id}
//                     className='cursor-pointer'
//                     value={String(el.id)}
//                   >
//                     {el.title}
//                   </DropdownMenuRadioItem>
//                 ))}
//               </DropdownMenuRadioGroup>
//             </DropdownMenuContent>
//           </DropdownMenu>
//           {housing_type === 0 && (
//             <div className='pl-3 text-gray'>Выберете из списка</div>
//           )}
//           {errors?.housing_type && (
//             <AlertDestructive message={errors?.housing_type} />
//           )}
//         </div>
//         <Textarea
//           value={address.full_address ?? ''}
//           onChange={(e) =>
//             validateAndSave({
//               address: {
//                 full_address: e.target.value,
//               },
//             })
//           }
//           className='w-full'
//           withBorder
//           label='Адрес'
//           placeholder='Текстовое поле для ввода'
//           //onBlur={(e) => validateAndSave({ address: e.target.value })}
//         >
//           <Asterisk
//             className='absolute left-[55] top-1'
//             color='red'
//             width={15}
//             height={15}
//           />
//           {errors?.address && <AlertDestructive message={errors?.address} />}
//         </Textarea>
//       </div>
//     </div>
//   );
// };

'use client';

import { TypeEndPriceRent } from '@/features/radio/typeEndPriceRent/typeEndPriceRent';
import { fetchInstance } from '@/shared/api';
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
import { Textarea } from '@/shared/ui/textarea';
import { cn } from '@/shared/utils';
import { Asterisk, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import style from './mainInAd.module.css';

interface TypeHousing {
  id: number;
  title: string;
}

interface MainInAdProps {
  className?: string;
  titleOld?: string;
}

export const MainInAd = ({ className = '', titleOld }: MainInAdProps) => {
  const [listHousingTypes, setListHousingTypes] = useState<TypeHousing[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Добавляем состояние загрузки
  const { errors, validateAndSave, values, setValues } = useNewAdRentHouse(
    (store) => store
  );
  const { title, text, address, housing_type } = values;

  const getListCategory = async () => {
    try {
      setIsLoading(true);
      const response = await fetchInstance.get<TypeHousing[]>(
        '/site/dictionaries/housing-type/'
      );
      setListHousingTypes(response);
    } catch (error) {
      console.error('Error fetching housing types:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getListCategory();
  }, []);

  const selectedHousingType = listHousingTypes.find(
    (el) => el.id === Number(housing_type)
  );

  return (
    <div className={cn(style.mainInAd, '', className)}>
      <Input
        value={title ?? ''}
        onChange={(e) => validateAndSave({ title: e.target.value })}
        className='w-full'
        withBorder
        label='Заголовок объявления'
        placeholder='Поле для ввода'
      >
        <Asterisk
          className='absolute left-[151px] top-1'
          color='red'
          width={15}
          height={15}
        />
        {errors?.title && <AlertDestructive message={errors?.title} />}
      </Input>

      <Textarea
        value={text ?? ''}
        onChange={(e) => validateAndSave({ text: e.target.value })}
        className='w-full'
        withBorder
        label='Описание'
        placeholder='Текстовое поле для ввода'
      >
        <Asterisk
          className='absolute left-[77px] top-1'
          color='red'
          width={15}
          height={15}
        />
        {errors?.text && <AlertDestructive message={errors?.text} />}
      </Textarea>

      <div className={style.addressBlock}>
        <TypeEndPriceRent />

        {!isLoading && (
          <div className={style.dropdown}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className='relative h-auto text-[0.8rem] font-medium text-gray'
                  variant='white'
                >
                  {housing_type > 0 && selectedHousingType
                    ? `Тип объекта: ${selectedHousingType.title}`
                    : 'Тип объекта:'}
                  <span className='flex'>
                    <ChevronDown />
                    <Asterisk style={{ width: 15, height: 15 }} color='red' />
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-white'>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={String(housing_type)}
                  onValueChange={(v) =>
                    validateAndSave({ housing_type: Number(v) })
                  }
                >
                  {listHousingTypes.map((el) => (
                    <DropdownMenuRadioItem
                      key={el.id}
                      className='cursor-pointer'
                      value={String(el.id)}
                    >
                      {el.title}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            {housing_type === 0 && (
              <div className='pl-3 text-gray'>Выберете из списка</div>
            )}
            {errors?.housing_type && (
              <AlertDestructive message={errors?.housing_type} />
            )}
          </div>
        )}

        <Textarea
          value={address?.full_address ?? ''}
          onChange={(e) =>
            validateAndSave({
              address: {
                full_address: e.target.value,
              },
            })
          }
          className='w-full'
          withBorder
          label='Адрес'
          placeholder='Текстовое поле для ввода'
        >
          <Asterisk
            className='absolute left-[55px] top-1'
            color='red'
            width={15}
            height={15}
          />
          {errors?.address && <AlertDestructive message={errors?.address} />}
        </Textarea>
      </div>
    </div>
  );
};
