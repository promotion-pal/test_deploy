import { cn } from '@/shared/utils';
import { FormEmail, Partner, PersonalAccount, SiteMap } from './content';
import style from './style.module.css';
import { Brand, Phone } from './ui';
import { SocialNetworkDesktop } from './ui/social-network';

export function FooterDesktop() {
  const map = [
    { page: 'Главная', url: '/' },
    { page: 'Аренда жилья', url: '/house-rent' },
    { page: 'Аренда транспорта', url: '/house-rent' },
    { page: 'Туры и экскурсии', url: '/house-rent' },
    { page: 'Отдых и развлечения', url: '/house-rent' },
  ];

  return (
    <div className={cn('justify-between', 'container', style.footerDesktop)}>
      <Brand />
      <SiteMap map={map} />

      <div className='flex flex-col justify-between pb-5'>
        <Partner />
        <PersonalAccount />
      </div>

      <div className='w-96'>
        <FormEmail />
      </div>

      <div className='flex flex-col'>
        <Phone phone={'8 800 555 35 35'} />
        <SocialNetworkDesktop className='mt-9' />
      </div>
    </div>
  );
}
