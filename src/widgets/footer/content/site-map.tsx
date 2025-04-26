import { cn } from '@/shared/utils';
import classes from '../style.module.css';

interface SiteMapItem {
  page: string;
  url: string;
}

interface SiteMapProps {
  map: SiteMapItem[];
}

export function SiteMap({ map }: SiteMapProps) {
  return (
    <div className={cn(classes.contentList, classes.textBase)}>
      <p className='text-lg font-semibold text-primary'>Карта сайта</p>

      <nav className='flex flex-col gap-1'>
        {map.map((item, index) => (
          <a
            key={index}
            href={item.url || '#'}
            className='transition-colors hover:text-primary'
          >
            {item.page}
          </a>
        ))}
      </nav>
    </div>
  );
}
