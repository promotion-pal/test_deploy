'use client';
import { MenuItem } from '@/shared/ui/admin/menuItem/menuItem';
import { NameAdminHeader } from '@/shared/ui/admin/nameAdminHeader/nameAdminHeader';
import { NavAdminHeader } from '@/shared/ui/admin/navAdminHeader/navAdminHeader';
import { cn } from '@/shared/utils';
import {
  Bell,
  BriefcaseBusiness,
  ChartPie,
  CircleUserRound,
  FileText,
  LockOpen,
  LogOut,
  NotebookTabs,
  PencilLine,
  Settings,
  Wallet,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import style from './sideMenu.module.css';

interface SideMenuProps {
  className?: string;
  closeMenu: () => void;
}
const menuList = [
  {
    id: 1,
    icon: CircleUserRound,
    text: 'Пользователи',
    href: '/admin/employees',
  },
  {
    id: 2,
    icon: LockOpen,
    text: 'Доступ',
    href: '/admin/access',
  },
  {
    id: 3,
    icon: PencilLine,
    text: 'Контент',
    href: '/admin/content',
    count: 1,
  },
  {
    id: 4,
    icon: Bell,
    text: 'Уведомления',
    href: '/admin/notification',
    count: 1500,
  },
  {
    id: 5,
    icon: Wallet,
    text: 'Тарифы',
    href: '/admin/tariffs',
  },
];
const menuList2 = [
  {
    id: 1,
    icon: BriefcaseBusiness,
    text: 'Бизнес-пользователи',
    href: '/admin/business-users',
  },
  {
    id: 2,
    icon: FileText,
    text: 'Логи',
    href: '/admin/logs',
  },
  {
    id: 3,
    icon: NotebookTabs,
    text: 'Справочник',
    href: '/admin/notebook',
  },
  {
    id: 4,
    icon: ChartPie,
    text: 'Статистика',
    href: '/admin/statistics',
  },
  {
    id: 5,
    icon: Settings,
    text: 'Настройки',
    href: '/admin/settings',
  },
  {
    id: 6,
    icon: LogOut,
    text: 'Выход',
    href: '/',
  },
];
export const SideMenu = ({ className = '', closeMenu }: SideMenuProps) => {
  const pathname = usePathname();

  return (
    <aside className={cn(style.sideMenu, '', className)}>
      {<NavAdminHeader iconSize={19} className={style.desktopHidden} />}
      {<NameAdminHeader className={style.desktopHidden} />}
      <h3 className={style.title}>Управление</h3>
      <ul className={style.manage}>
        {menuList.map((el) => (
          <li key={el.id} onClick={closeMenu}>
            <MenuItem
              href={el.href}
              Icon={el.icon}
              text={el.text}
              count={el.count}
              datatype={el.href === pathname ? 'active' : undefined}
            />
          </li>
        ))}
      </ul>
      <h3 className={style.title}>Модерация</h3>
      <ul className={style.moder}>
        {menuList2.map((el) => (
          <li key={el.id} onClick={closeMenu}>
            <MenuItem
              href={el.href}
              Icon={el.icon}
              text={el.text}
              datatype={el.href === pathname ? 'active' : undefined}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
};
