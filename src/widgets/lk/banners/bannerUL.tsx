import { ArrowUpRight } from '@/shared/icons';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';
import Image from 'next/image';
import firstimg from '../../../../public/1img_lk.png';
import secimg from '../../../../public/2img_lk.png';
import fhirdimg from '../../../../public/3img_lk.png';
import avia from '../../../../public/avia_lk.png';
import style from './bannerUL.module.css';

interface BannerULProps {
  className?: string;
}
export const BannerUL = ({ className = '' }: BannerULProps) => {
  return (
    <div className={cn(style.bannerUL, '', className)}>
      <h2 className={style.title}>Увеличьте свои продажи с MirTaveler</h2>
      <div className={style.text}>
        Привлекайте больше клиентов <br />
        и увеличивайте доходы с нашей платформой
      </div>
      <Image className={style.avia} src={avia} alt='wave' />
      <Image className={style.first} src={firstimg} alt='firstimg' />
      <Image className={style.sec} src={secimg} alt='secimg' />
      <Image className={style.fhird} src={fhirdimg} alt='fhirdimg' />
      <Button
        className={style.button}
        variant='white'
        radius='full'
        size='icon'
      >
        <ArrowUpRight stroke='var(--clr-darkgrey)' />
      </Button>
    </div>
  );
};
