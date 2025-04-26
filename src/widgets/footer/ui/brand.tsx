import { appConfig } from '@/shared/config/appConfig';
import { cn } from '@/shared/utils';
import classes from '../style.module.css';

export function Brand() {
  return (
    <div>
      <h6 className='bg-gradient-to-r from-[#22b813] to-[#57a0dc] bg-clip-text text-4xl font-bold leading-[80%] text-transparent'>
        {appConfig.firstWord}
        <br />
        {appConfig.secondWord}
      </h6>

      <div className={cn('mt-3', classes.textBase)}>
        <p>&copy; ООО &laquo;МИТРА&raquo;</p>
        <p>Все права защищены</p>
      </div>
    </div>
  );
}
