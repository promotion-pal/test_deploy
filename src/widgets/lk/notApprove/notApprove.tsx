import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';
import style from './notApprove.module.css';

interface NotApproveProps {
  className?: string;
}
export const NotApprove = ({ className = '' }: NotApproveProps) => {
  return (
    <div className={cn(style.notApprove, '', className)}>
      <h2 className={style.title}>
        Уведомление о результатах модерации объявления
      </h2>
      <p className={style.maintext}>
        Объявление 
        <span className={style.linktoads}>
          Отель Cosmos Moscow VDNH Hotel (Космос ВДНХ)
        </span>
         не прошло модерацию.
      </p>
      <p>Причина отклонения:</p>
      <p>....</p>
      <p>
        Пожалуйста, внесите необходимые изменения и отправьте объявление на
        повторную модерацию.
        <br /> Объявление было возвращено в черновики.
      </p>
      <p className='text-gray'>
        Если у вас возникнут вопросы или вам потребуется помощь, пожалуйста,
        свяжитесь с нашей службой поддержки.
      </p>
      <div className={style.buttons}>
        <Button
          size='lg'
          radius='full'
          variant={'secondary'}
          className={cn(style.button1, '')}
        >
          Редактировать объявление
        </Button>
        <Button
          size='lg'
          radius='full'
          className={cn(style.button2, 'text-inherit')}
          variant={'outline'}
        >
          Повторная модерация
        </Button>
        <Button className={style.button3} variant='link' size='lg'>
          Связаться с поддержкой
        </Button>
      </div>
    </div>
  );
};
