import { RadioElemLk } from '@/shared/ui/radioElemLk/radioElemLk';
import React from 'react';
import style from './searchLkAds.module.css';

interface SearchParam {
  label: string;
  value: string;
}
interface SearchLkAdsProps {
  className?: string;
  searchParam: SearchParam[];
  count: number;
  name: string;
  selected: string;
  onChange?: (value: string) => void;
}
const SearchStatusLkAds = ({
  searchParam,
  count,
  name,
  selected,
  onChange,
}: SearchLkAdsProps) => {
  const handleChange = (value: string) => onChange?.(value);
  return (
    <div className={style.filters}>
      {searchParam.map((el, i) => (
        <RadioElemLk
          key={`${el.value}${i}`}
          text={el.label}
          count={count}
          groupName={name}
          onChange={handleChange}
          value={el.value}
          selected={selected}
        />
      ))}
    </div>
  );
};
export default React.memo(SearchStatusLkAds);
