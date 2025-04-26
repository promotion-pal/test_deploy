import { cn } from '@/shared/utils';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import style from './menuItem.module.css';

interface MenuItemProps {
  className?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  href: string;
  datatype?: string;
  count?: number;
  size?: number;
}
export const MenuItem = ({
  className = '',
  Icon,
  size = 14,
  href,
  datatype,
  text,
  count,
}: MenuItemProps) => {
  return (
    <Link
      href={href}
      datatype={datatype}
      className={cn(style.menuItem, '', className)}
    >
      <div className={style.button}>
        <Icon width={size} height={size} />
        {text}
        {count && <span className='text-primary'>{`+${count}`}</span>}
      </div>
      <ChevronDown width={9} stroke='black' />
    </Link>
  );
};
