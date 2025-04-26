import { paths } from '@/shared/assets/paths';
import { HoopIcon } from '@/shared/icons';
import { cn } from '@/shared/utils';
import classes from './navigation-card.module.css';
import { ButtonLink } from './ui/button';

export const NavigateCarsRentCard = () => {
  return (
    <div className={cn(classes.wrapper, classes.colorCarRent)}>
      <div className='flex'>
        <div className='mt-auto'>
          <p className='text-2xl font-bold text-white'>Аренда транспорта</p>

          <ButtonLink href={paths.pages.carRent} />
        </div>
      </div>

      <div className={cn(`absolute right-0 top-12 z-20`)}>
        <HoopIcon width={200} height={200} />
      </div>
    </div>
  );
};
