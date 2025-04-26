import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';
import Image from 'next/image';
import style from './success.module.css';

interface SuccessProps {
  className?: string;
}
export const Success = ({ className = '' }: SuccessProps) => {
  return (
    <div className={cn(style.success, '', className)}>
      <h2 className={style.title}>Объявление отправлено на модернизацию</h2>
      <p className={style.maintext}>
        Объявление 
        <span className={style.linktoads}>
          Отель Cosmos Moscow VDNH Hotel (Космос ВДНХ)
        </span>
         успешно отправлено на модерацию. <br />
        Мы уведомим вас о результатах модерации в ближайшее время. <br />
        Спасибо за ваше терпение.
      </p>
      <div className={style.main}>
        <div className={style.left}>
          <p>Получайте больше просмотров</p>
          <p className='mt-4 text-gray'>
            Потенциальные покупатели будут видеть ваше объявление чаще, чем
            похожие предложения конкурентов, которые не воспользовались
            продвижением.
          </p>
          <div className={style.buttons}>
            <Button size='lg' radius='full'>
              Поднять просмотры
            </Button>
            <Button className={style.button} variant='link' size='lg'>
              Вернуться к объявлениям
            </Button>
          </div>
        </div>
        <div className={style.imgblock}>
          <Image
            width={310}
            height={310}
            src={'/lkSuccess.png'}
            alt='girl'
            priority={true}
            className={style.img}
          ></Image>
          <div className={style.circle1}>2x</div>
          <div className={style.circle2}>5x</div>
          <div className={style.circle3}>10x</div>
        </div>
      </div>
    </div>
  );
};
