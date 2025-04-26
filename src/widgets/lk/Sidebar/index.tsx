'use client';

import { User, userService } from '@/features/api';
import { Stars } from '@/shared/ui/stars';
import { cn } from '@/shared/utils';
import {
  CircleUserRoundIcon,
  HeartIcon,
  LogOutIcon,
  WalletIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import styles from './LkSidebar.module.css';

interface NavItem {
  icon?: React.ComponentType<{ size?: number }>;
  label: string;
  href: string;
  className?: string;
  exact?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  // {
  //   label: 'Главная',
  //   href: '/lk',
  //   className: 'lg:mb-5',
  //   exact: true,
  // },
  {
    icon: CircleUserRoundIcon,
    label: 'Мои данные',
    href: '/lk/my',
  },
  {
    icon: WalletIcon,
    label: 'Мой баланс',
    href: '/lk/wallet',
  },
  {
    icon: HeartIcon,
    label: 'Мои объявления',
    href: '/lk/ads',
  },
  // {
  //   icon: ChartPieIcon,
  //   label: 'Статистика',
  //   href: '/lk/stats',
  // },
  // {
  //   icon: StarIcon,
  //   label: 'Отзывы',
  //   href: '/lk/reviews',
  // },
  // {
  //   icon: BellIcon,
  //   label: 'Уведомления',
  //   href: '/lk/notifications',
  // },
  // {
  //   icon: SettingsIcon,
  //   label: 'Настройки',
  //   href: '/lk/settings',
  //   className: 'lg:mt-7',
  // },
];

export function Sidebar({ initialUser }: { initialUser?: User }) {
  const pathname = usePathname();

  const activeLink = useMemo(() => {
    return NAV_ITEMS.findIndex((item) =>
      item.exact ? pathname === item.href : pathname.startsWith(item.href)
    );
  }, [pathname]);

  const [user, setUser] = useState<User | undefined>(initialUser);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const userData = await userService.getUser(22);
      setUser(userData);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!initialUser) {
      fetchUser();
    }
  }, [initialUser]);

  return (
    <aside className={styles.container}>
      <div className='mb-4 px-6'>
        {!isLoading && user && (
          <h2 className='mb-1 text-2xl font-semibold'>{user.first_name}</h2>
        )}
        <div className='flex items-center gap-2'>
          <span className='font-semibold'>{0}</span>
          <Stars rating={0} />
          <span className='text-gray'>{0} отзывов</span>
        </div>
      </div>

      <nav>
        <ul className={styles.navigationList}>
          {NAV_ITEMS.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={cn(
                  styles.link,
                  activeLink === i ? styles.activeLink : 'hover:bg-gray-light',
                  item.className
                )}
              >
                {item.icon && <item.icon size={18} />}
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                window.location.href = '/';
              }}
              className={cn(styles.link)}
            >
              <LogOutIcon size={18} />
              Выйти
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
