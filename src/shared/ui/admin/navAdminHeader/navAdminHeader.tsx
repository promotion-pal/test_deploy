import { cn } from '@/shared/utils';
import { Bell, House, MessageSquareText, Pin } from 'lucide-react';
import Link from 'next/link';
import style from './navAdminHeader.module.css';

interface NavAdminHeaderProps {
  className?: string;
  iconSize?: number;
}
export const NavAdminHeader = ({
  className = '',
  iconSize,
}: NavAdminHeaderProps) => {
  return (
    <div className={cn(style.navAdminHeader, '', className)}>
      <Link href={'/'}>
        <House width={iconSize} height={iconSize} />
      </Link>
      <Link href={'#'}>
        <MessageSquareText width={iconSize} height={iconSize} />
      </Link>
      <Link href={'#'}>
        <Pin width={iconSize} height={iconSize} />
      </Link>
      <Link href={'#'}>
        <Bell width={iconSize} height={iconSize} />
      </Link>
    </div>
  );
};
