import { paths } from '@/shared/assets/paths';
import { CrescentIcon } from '@/shared/icons';
import { cn } from '@/shared/utils';
import classes from './navigation-card.module.css';
import { ButtonLink } from './ui/button';

export const NavigateTourseCard = () => {
  return (
    <div className={cn(classes.wrapper, classes.colorTours)}>
      <div className='flex'>
        <div className='mb-auto'>
          <p className='text-2xl font-bold text-white'>Туры и экскурсии</p>

          <ButtonLink href={paths.pages.tours} />
        </div>
      </div>

      <div className={cn(`absolute bottom-5 right-5 z-20`)}>
        <CrescentIcon width={220} height={220} />
      </div>
    </div>
  );
};
