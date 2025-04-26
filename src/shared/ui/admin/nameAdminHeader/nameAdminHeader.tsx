import { cn } from '@/shared/utils';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import style from './nameAdminHeader.module.css';

interface NameAdminHeaderProps {
  className?: string;
}
export const NameAdminHeader = ({ className = '' }: NameAdminHeaderProps) => {
  return (
    <Link href={'#'} className={cn(style.nameAdminHeader, '', className)}>
      <div className={style.pers__up}>
        <div className={style.circle}></div>
        {'Иванов Петр'}
        <ChevronDown width={9} />
        <div>•••</div>
      </div>
    </Link>
  );
};
