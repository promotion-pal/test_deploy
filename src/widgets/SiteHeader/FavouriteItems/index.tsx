import { HeartIcon } from 'lucide-react';
import style from './FavouriteItems.module.css';

export default function FavouriteItems() {
  return (
    <div className='relative cursor-pointer'>
      <HeartIcon stroke='currentColor' size={18} strokeWidth={1.5} />
      <div className={style.count}>6</div>
    </div>
  );
}
