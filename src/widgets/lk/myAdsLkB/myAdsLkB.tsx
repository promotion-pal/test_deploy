'use client';

import { AdsLk } from '@/features/api';
import { lkAdsService } from '@/features/api/lk/ads';
import { headerSearch } from '@/shared/assets/lk_static';
import { cn } from '@/shared/utils';
import { useEffect, useState } from 'react';
import { CardAdsHouse } from './cardAdsHouse';
import style from './myAdsLkB.module.css';

interface MyAdsLkBProps {
  className?: string;
}

const title = 'title';
const area = 'area';
const sleep_place_count = 'sleep_place_count';
const price = 'от 3487 рублей в сутки';
const housing_type = 'Апартаменты';
const address = 'Какой то адрес';
const text =
  'Апартаменты оборудованы всем самым необходимым: Современная бытовая техника: телевизор, холодильник, микроволновка, чайник, стиральная машина, фен, утюг! Двуспальная кровать. Скоростной wi-fi и кабельное ТВ. Свежая постель, махровые полотенца, сушилк...';

export const MyAdsLkB = ({ className = '' }: MyAdsLkBProps) => {
  const [ads, setAds] = useState<AdsLk | {}>({});

  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const adsData = await lkAdsService.getAds();
      console.log(adsData);

      setAds(adsData);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  //поиск объявлений по статусу
  const [statusAds, setStatusAds] = useState(headerSearch[0].value);
  const handleStatusChange = (value: string) => {
    setStatusAds(value);
  };
  //Поиск совпадений текста по всем объявлениям
  const [search, setSearch] = useState<string>();

  //Сортировка объявлений
  const [ordering, setOrdering] = useState('');
  //Фильтр объявлений по типу жилья
  const [filterTypeHous, setFilterTypeHous] = useState('');
  //Фильтр объявлений по типу аренды (посуточно, почасовая)
  const [filterTypeRent, setFilterTypeRent] = useState('');

  // const { data, isLoading } = useFetchDataRentHousingAds();
  // console.log(data);

  return (
    <section className={cn(style.myAdsLkB, '', className)}>
      <h2 className={style.title}>Мои объявления</h2>
      {!isLoading ? (
        <>
          {/* <div className={style.header}>
            <SearchStatusLkAds
              searchParam={headerSearch}
              onChange={handleStatusChange}
              selected={statusAds}
              count={99}
              name='searchAdsLk'
            />
            <SearchForm submit={setSearch} />
          </div>
          <div className={style.sort}>
            <SortAdsLk ordering={ordering} setOrdering={setOrdering} />
            <FilterAdsLk
              onFilterTypeHouseChange={setFilterTypeHous}
              onFilterTypeRentChange={setFilterTypeRent}
            />
          </div> */}
          {ads.count > 0 ? (
            ads.results.map((el) => (
              <CardAdsHouse
                key={el.id}
                id={el.id}
                address={el.address}
                text={el.text}
                title={el.title}
                area={el.area}
                sleep_place_count={el.sleep_place_count}
                price={el.price}
                housing_type={el.housing_type}
                favorites_count={0}
                rating={0}
                feedbacks_count={0}
                views_count={0}
              />
            ))
          ) : (
            <div className='mt-5'>У вас пока нет объявлений</div>
          )}
        </>
      ) : (
        'Загрузка'
      )}
    </section>
  );
};
