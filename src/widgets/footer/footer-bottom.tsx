import { cn } from '@/shared/utils';
import classes from './style.module.css';

export function FooterBottom() {
  return (
    <div
      className={cn(
        'mt-10 flex items-end justify-between md:container md:items-start',
        classes.textBase
      )}
    >
      <div className={'flex w-[70%] flex-wrap justify-between gap-x-5 gap-y-2'}>
        <p>
          При использовании материалов ссылка
          <br />
          на{' '}
          <a href='https://www.mirtraveler.ru' className='hover:underline'>
            www.mirtraveler.ru
          </a>{' '}
          обязательна
        </p>
        <a href='/privacy-policy' className='hover:underline'>
          Политика конфиденциальности
        </a>
        <a href='/terms-of-use' className='hover:underline'>
          Пользовательское соглашение
        </a>
      </div>

      <p>&copy; 2025 г.</p>
    </div>
  );
}
