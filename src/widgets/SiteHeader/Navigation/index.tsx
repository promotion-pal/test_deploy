'use client';

import { paths } from '@/shared/assets/paths';
import { cn } from '@/shared/utils';
import { HouseIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import style from './Navigation.module.css';

interface NavigationProps {
  isMobile?: boolean;
  onClick: () => void;
}

const navItems = [
  { label: 'Главная', href: paths.pages.home },
  {
    label: 'Аренда жилья',
    href: paths.pages.houseRent,
    icon: <HouseIcon />,
  },
  // {
  //   label: 'Аренда транспорта',
  //   href: paths.pages.carRent,
  //   icon: <CarFrontIcon />,
  // },
  // {
  //   label: 'Туры и экскурсии',
  //   href: paths.pages.tours,
  //   icon: <EarthIcon />,
  // },
  // {
  //   label: 'Отдых и развлечения',
  //   href: paths.pages.leisure,
  //   icon: <TreePalmIcon />,
  // },
];

export default function Navigation({ isMobile, onClick }: NavigationProps) {
  const pathname = usePathname();

  <Link href={paths.pages.home}>
    <a>Главная</a>
  </Link>;

  const activeLink = useMemo(() => {
    return navItems.findIndex((el) => el.href === pathname);
  }, [pathname]);

  return (
    <nav>
      <ul className={cn(isMobile ? 'space-y-5' : 'flex flex-wrap space-x-10')}>
        {navItems.map((el, i) => (
          <li key={i}>
            <Link
              href={el.href}
              onClick={onClick}
              className={cn(
                style.link,
                !isMobile
                  ? {
                      [style.activeLink]: activeLink === i,
                    }
                  : 'text-lg text-white'
              )}
            >
              {!isMobile && el.icon}
              {el.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
