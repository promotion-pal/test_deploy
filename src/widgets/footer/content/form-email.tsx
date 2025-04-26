import { InputEmail } from '@/features/form';
import { cn } from '@/shared/utils';
import Link from 'next/link';
import classes from '../style.module.css';

export function FormEmail() {
  return (
    <div className='mt-auto md:mt-0'>
      <InputEmail />

      <p className={cn('mt-2', classes.textBase)}>
        Заполняя форму, вы соглашаетесь с{' '}
        <Link className='underline' href=''>
          политикой обработки персональных данных
        </Link>
      </p>
    </div>
  );
}
