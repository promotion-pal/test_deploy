'use client';
import { MenuBurger } from '@/shared/icons';
import { NameAdminHeader } from '@/shared/ui/admin/nameAdminHeader/nameAdminHeader';
import { NavAdminHeader } from '@/shared/ui/admin/navAdminHeader/navAdminHeader';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import TimeDisplay from '@/shared/ui/time/timeDisplay';
import { cn } from '@/shared/utils';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import style from './adminHeader.module.css';

interface AdminHeaderProps {
  className?: string;
  showAsideMenu: () => void;
  isShowAsideMenu: boolean;
}
export const AdminHeader = ({
  className = '',
  showAsideMenu,
  isShowAsideMenu,
}: AdminHeaderProps) => {
  return (
    <header className={cn(style.adminHeader, '', className)}>
      <Link href={'/'} className={style.titleblock}>
        <span className={style.title}>MirTraveler</span>
      </Link>
      <NavAdminHeader className={style.mobileHidden} iconSize={19} />
      <form className={cn(style.searchForm, '', className)}>
        <Input className='h-auto p-0' size='lg' placeholder='Поиск'></Input>
        <Button style={{ padding: '0' }} variant='white'>
          <Search />
        </Button>
      </form>
      <div className={style.personal}>
        <NameAdminHeader className={style.mobileHidden} />
        <TimeDisplay className={`${style.time} ${style.mobileHidden}`} />
        {isShowAsideMenu ? (
          <MenuBurger className={style.burger} onClick={showAsideMenu} />
        ) : (
          <X className={style.burger} onClick={showAsideMenu} />
        )}
      </div>
    </header>
  );
};
