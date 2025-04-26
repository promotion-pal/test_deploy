import { cn } from '@/shared/utils';
import classes from '../style.module.css';

export function Phone({ phone }: { phone: string }) {
  return (
    <div>
      <h5 className='text-2xl font-semibold text-primary'>{phone}</h5>
      <p className={cn('mt-2 text-end text-xs', classes.textBase)}>
        Ежедневно с 9.00 до 18.00
      </p>
    </div>
  );
}
