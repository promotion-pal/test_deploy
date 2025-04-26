import { cn } from '@/shared/utils';
import Image from 'next/image';
import style from './TopBanner.module.css';

interface TopBannerProps {
  children?: React.ReactNode;
  childrenPosition?: 'top' | 'bottom';
  className?: string;
  title: string;
  image: string;
  description?: string;
}

export function TopBanner({
  title,
  image,
  description,
  children,
  childrenPosition = 'top',
  className,
}: TopBannerProps) {
  return (
    <div
      className={cn(
        style.banner,
        'pb-16 pt-32 lg:pb-20 lg:pt-[12.5rem]',
        className
      )}
    >
      <div className={style.imageWrapper}>
        <Image src={image} alt={title} fill priority className={style.image} />
        <div className={cn(style.imageOverlay, 'image-overlay-gradient')} />
      </div>
      <div className='container'>
        {children && childrenPosition === 'top' && (
          <div className='mb-10'>{children}</div>
        )}

        <div className={style.content}>
          <h1 className={style.title}>{title}</h1>
          {description && <p className={style.description}>{description}</p>}
        </div>

        {children && childrenPosition === 'bottom' && (
          <div className='mt-10'>{children}</div>
        )}
      </div>
    </div>
  );
}
