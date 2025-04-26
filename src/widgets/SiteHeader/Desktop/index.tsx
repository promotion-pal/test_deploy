'use client';

import {
  MailCircleIcon,
  TelegramCircleIcon,
  WhatsappCircleIcon,
} from '@/shared/icons';
import { Logo } from '@/shared/ui/logo';
import { HeaderProps } from '@/widgets/SiteHeader';
import Link from 'next/link';
import InfoBlock from '../InfoBlock';
import Navigation from '../Navigation';
import { ButtonHeader } from '../ui/button';
import style from './HeaderDesktop.module.css';

const HeaderDesktop = ({ data, role }: HeaderProps) => {
  return (
    <header className='fixed top-3 z-50 w-full'>
      <div className='container'>
        <div className='flex items-center rounded-2xl bg-white py-2.5 pr-10 shadow'>
          <Link href='/' className='p-5'>
            <Logo className='grid' />
          </Link>

          <div className='flex-1'>
            <div className={style.topSection}>
              <InfoBlock />
              <div className={style.socials}>
                <Link href={'mailto:' + data.email}>
                  <MailCircleIcon fill='black' />
                </Link>
                <Link href={data.whatsapp || '/'}>
                  <WhatsappCircleIcon fill='#5DD241' />
                </Link>
                <Link href={'https://t.me/' + data.telegram}>
                  <TelegramCircleIcon fill='#68DFF2' />
                </Link>
              </div>
            </div>
            <div className='h-px bg-border' />
            <div className={style.bottomSection}>
              <Navigation onClick={() => {}} />
              <div className={style.socials}>
                {/* <FavouriteItems /> */}
                {/* <Button
                  variant='secondary'
                  size='sm'
                  radius='full'
                  className='h-8'
                >
                  <NavigationIcon />
                  Москва
                </Button> */}
              </div>

              <ButtonHeader role={role} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
