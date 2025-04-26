import { paths } from '@/shared/assets/paths';
import { SphereIcon } from '@/shared/icons';
import { cn } from '@/shared/utils';
import classes from './navigation-card.module.css';
import { ButtonLink } from './ui/button';

export const NavigateRestCard = () => {
  return (
    <div className={cn(classes.wrapper, classes.colorHouseRent)}>
      <div className='flex'>
        <div className='mb-9 mt-auto'>
          <p className='whitespace-nowrap text-2xl font-bold text-white'>
            Отдых и развлечение
          </p>

          <ButtonLink href={paths.pages.leisure} />
        </div>
      </div>

      <div className={cn(`absolute -top-14 right-3 z-20`)}>
        <SphereIcon width={220} height={220} />
      </div>
    </div>
  );
};
