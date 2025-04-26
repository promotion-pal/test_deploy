'use client';

import { Amenities } from '@/entities/lk/ads/amenities/amenities';
import { ContactsAds } from '@/entities/lk/ads/contactsAds/contactsAds';
import { MainInAd } from '@/entities/lk/ads/mainInAd/mainInAd';
import { Options } from '@/entities/lk/ads/options/options';
import { AddImages } from '@/features/addImages/addImages';
import { lkAdsService } from '@/features/api/lk/ads';
import { useNewAdRentHouse } from '@/shared/store/store';
import { AlertDestructive } from '@/shared/ui/alerts/AlertDestructive';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import style from './addAds.module.css';

interface AddAdsProps {
  className?: string;
}
export const AddAds = ({ className = '' }: AddAdsProps) => {
  const [ad_pk, setAd_pk] = useState<string | null>(null);

  const { validateAll, valids, values, resetForm } = useNewAdRentHouse(
    (store) => store
  );
  const { title, text, address, contacts } = values;
  const isReady =
    title !== '' &&
    text !== '' &&
    address.full_address !== '' &&
    contacts.first_name !== '' &&
    contacts.last_name !== '' &&
    contacts.phone !== '' &&
    values.housing_type > 0;

  const [isLoading, setIsLoading] = useState(false);

  const sendForm = async () => {
    const ads = validateAll();
    console.log(ads);

    if (ads.valid) {
      try {
        setIsLoading(true);
        const userData = await lkAdsService.addAds(ads.data);
        console.log(userData);

        if (userData.error) return alert('Ошибка: ' + userData.error);

        window.location.href = '/lk/ads';
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={cn(style.addAds, '', className)}>
      <Link className={style.back} href={'/lk/my'}>
        <ChevronLeft width={15} height={15} /> Назад
      </Link>
      <h2 className={style.title}>Добавить объявление</h2>
      <MainInAd />
      <AddImages ad_pk={ad_pk} />
      <Options />
      <Amenities />
      <ContactsAds />
      <div className={style.buttons}>
        <Button
          size='lg'
          radius='full'
          className={style.button}
          onClick={sendForm}
          disabled={!isReady}
        >
          {isLoading ? 'Проверка' : 'Опубликовать'}
        </Button>
        <Button
          size='lg'
          radius='full'
          className={cn(style.button, 'text-inherit')}
          variant={'outline'}
          disabled={!isReady}
        >
          Сохранить как черновик
        </Button>
        <Button
          className={style.button}
          variant='link'
          size='lg'
          onClick={resetForm}
        >
          Отменить
        </Button>
      </div>
      {Object.keys(valids).length > 0 && (
        <AlertDestructive
          message={'Заполните все поля отмеченные звездочкой'}
        />
      )}
    </div>
  );
};
