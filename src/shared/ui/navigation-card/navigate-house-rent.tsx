import { paths } from '@/shared/assets/paths';
import { GlobeGraphicIcon } from '@/shared/icons';
import { cn } from '@/shared/utils';
import classes from './navigation-card.module.css';
import { ButtonLink } from './ui/button';

export const NavigateHouseRentCard = () => {
  return (
    <div className={cn(classes.wrapper, classes.colorHouseRent)}>
      <div className='flex'>
        <div className='mt-auto'>
          <p className='text-2xl font-bold text-white'>Аренда жилья</p>

          <ButtonLink href={paths.pages.houseRent} />
        </div>
      </div>

      <div className={cn(`absolute right-0 top-0 z-20`)}>
        <GlobeGraphicIcon width={250} height={250} />
      </div>
    </div>
  );
};
