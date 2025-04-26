import { cn } from '@/shared/utils';
import Image from 'next/image';
import Link from 'next/link';
import classes from '../style.module.css';

export function PersonalAccount() {
  return (
    <Link
      href={'/'}
      className={cn('mt-9 flex items-center space-x-3', classes.title)}
    >
      <Image
        src={'/image/icon/account.svg'}
        width={15}
        height={15}
        alt='Иконка'
      />
      <p>Личный кабинет</p>
    </Link>
  );
}
