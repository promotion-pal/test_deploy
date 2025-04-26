import { cn } from '@/shared/utils';
import classes from '../style.module.css';

export function Partner() {
  return (
    <div className={cn('mt-4 md:mt-0', classes.contentList, classes.textBase)}>
      <p className='text-lg font-semibold text-primary'>Стать партнером</p>
      <a href='#'>Контакты</a>
      <a href='#'>Реквизиты</a>
    </div>
  );
}
