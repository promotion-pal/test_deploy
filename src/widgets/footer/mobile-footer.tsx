import { paths } from '@/shared/assets/paths';
import { cn } from '@/shared/utils';
import { FormEmail, Partner, PersonalAccount, SiteMap } from './content';
import style from './style.module.css';
import { Brand, Phone } from './ui';
import { SocialNetworkMobile } from './ui/social-network';

export function MobileFooter() {
  const map = [
    { page: 'Главная', url: paths.pages.home },
    { page: 'Аренда жилья', url: paths.pages.houseRent },
    { page: 'Аренда транспорта', url: paths.pages.carRent },
    { page: 'Туры и экскурсии', url: paths.pages.tours },
    { page: 'Отдых и развлечения', url: paths.pages.leisure },
  ];

  return (
    <div className={cn('flex-col', style.footerMobile)}>
      <div className='flex items-center justify-between'>
        <Brand />
        <Phone phone={'8 800 555 35 35'} />
      </div>

      <div className='flex items-start justify-between'>
        <div>
          <SiteMap map={map} />
          <Partner />
          <PersonalAccount />
        </div>

        <SocialNetworkMobile />
      </div>

      <FormEmail />
    </div>
  );
}
