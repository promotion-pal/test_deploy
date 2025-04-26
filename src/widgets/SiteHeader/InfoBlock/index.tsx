import { infoStatic } from '@/shared/assets/headerStatic';
import { cn } from '@/shared/utils';
import Link from 'next/link';
import style from './InfoBlock.module.css';

interface InfoBlockProps {
  isMobile?: boolean;
}

export default function InfoBlock({ isMobile }: InfoBlockProps) {
  return (
    <ul className={cn(isMobile ? 'space-y-5' : 'flex space-x-8')}>
      {infoStatic.map((el, i) => (
        <li key={i}>
          <Link
            href={el.path}
            className={cn(isMobile ? style.linkMobile : style.link)}
          >
            {/* {el.label} */}
          </Link>
        </li>
      ))}
    </ul>
  );
}
