import { Button } from '@/shared/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel';
import { FeedbackCount } from '@/shared/ui/labels/feedbackCount';
import { LikeLabel } from '@/shared/ui/labels/likeLabel';
import { RatingLabel } from '@/shared/ui/labels/ratingLabel';
import { ViewsCount } from '@/shared/ui/labels/viewsCount';
import { cn } from '@/shared/utils';
import { ArrowUpRight } from 'lucide-react';
import style from './myAdsLkB.module.css';

interface CardAdsHouseProps {
  className?: string;
  id: number;
  title: string;
  area: string;
  sleep_place_count: string;
  price: string;
  housing_type: string;
  address: string;
  text: string;
  favorites_count: number;
  rating: number;
  feedbacks_count: number;
  views_count: number;
}

export const CardAdsHouse = ({
  className = '',
  id,
  title,
  area,
  sleep_place_count,
  price,
  housing_type,
  address,
  text,
  favorites_count,
  rating,
  feedbacks_count,
  views_count,
}: CardAdsHouseProps) => {
  return (
    <div className={cn(style.card, '', className)}>
      <Carousel className='w-full'>
        <CarouselContent className={style.carContent}>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className={style.carItem} key={index}>
              <img
                src='https://laketahoeprints.com/cdn/shop/products/heavenly-lake-tahoe-aerial-brad-scott_fd1265ea-c512-41a6-96b4-0939184b1475.jpg?v=1578460648'
                className={style.img}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
    <CarouselNext /> */}
      </Carousel>
      <div className={style.cardInfo}>
        <div className={style.cardHeader}>
          <h3>{`${title} • ${area} m2 • ${sleep_place_count}`}</h3>
          <Button
            onClick={() => console.log(id)}
            variant='white'
            radius='full'
            size='icon'
          >
            <ArrowUpRight color='var(--clr-darkgrey)' />
          </Button>
        </div>
        <div className={style.lebels}>
          <div className={style.likeblock}>
            <LikeLabel count={favorites_count} />
            <RatingLabel count={rating} />
          </div>
          <div className={style.feedbackblock}>
            <FeedbackCount count={feedbacks_count} />
            <ViewsCount count={views_count} />
          </div>
        </div>
        <div className={style.price}>{price}</div>
        <div className={style.cardAddress}>
          <span>{housing_type}</span>
          {' • '}
          <span>{address}</span>
        </div>
        <div className={style.cardText}>{text}</div>
      </div>
    </div>
  );
};
