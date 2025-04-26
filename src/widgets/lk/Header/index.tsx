'use client';

import { Button } from '@/shared/ui/button';
import { Logo } from '@/shared/ui/logo';
import { cn } from '@/shared/utils';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import styles from './LkHeader.module.css';

interface NavItem {
  label: string;
  href: string;
  exact?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Аккаунт', href: '/lk/my', exact: true },
  // { label: 'Мои документы', href: '/lk/docs' },
  // { label: 'Поддержка', href: '/lk/support' },
];

export function Header() {
  const pathname = usePathname();

  const activeLink = useMemo(() => {
    return NAV_ITEMS.findIndex((item) =>
      item.exact ? pathname === item.href : pathname.startsWith(item.href)
    );
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className='flex items-center gap-8'>
          <Link href='/'>
            <Logo />
          </Link>

          <nav className='hidden md:block'>
            <ul className='flex'>
              {NAV_ITEMS.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={cn(styles.link, {
                      [styles.activeLink]: activeLink === i,
                    })}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-4'>
            {/* <BellIcon size={20} /> */}
            <Link href='/lk/create-ads'>
              <PlusIcon size={20} className='visible lg:hidden' />
            </Link>
            {/* <MenuIcon size={20} className='visible md:hidden' /> */}
          </div>

          <Link href='/lk/create-ads'>
            <Button className='hidden lg:flex'>
              <PlusIcon />
              Создать объявление
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
