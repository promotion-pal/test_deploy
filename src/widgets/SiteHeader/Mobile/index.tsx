'use client';

import {
  MailCircleIcon,
  TelegramCircleIcon,
  WhatsappCircleIcon,
} from '@/shared/icons';
import { Logo } from '@/shared/ui/logo';
import { HeaderProps } from '@/widgets/SiteHeader';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../Navigation';
import { ButtonHeader } from '../ui/button';
import style from './HeaderMobile.module.css';

const HeaderMobile = ({ data, role }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const TriggerElement = isMenuOpen ? XIcon : MenuIcon;

  const closeMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={style.header}>
        <div className='flex justify-center'>
          <div className={style.headerLeft}>
            {/* <SearchIcon /> */}
            {/* <FavouriteItems /> */}
          </div>
          <Logo />
          <div className={style.headerRight}>
            <TriggerElement onClick={closeMenu} />
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className={style.menu}>
          <Navigation isMobile onClick={closeMenu} />
          <div className='my-6 h-px bg-border' />
          {/* <InfoBlock isMobile /> */}
          {/* <Button variant='blue' radius='full' className='mt-6'>
            <NavigationIcon />
            Москва
          </Button> */}

          <ButtonHeader role={role} />

          <div className={style.menuSocials}>
            <Link href={'mailto:' + data.email}>
              <MailCircleIcon />
            </Link>
            <Link href={data.whatsapp || '/'}>
              <WhatsappCircleIcon />
            </Link>
            <Link href={'https://t.me/' + data.telegram}>
              <TelegramCircleIcon />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMobile;
