'use client';

import { SliderImage } from '@/features/api/site/banners';
import { Button } from '@/shared/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel';
import { cn } from '@/shared/utils';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';
import style from './ImageSlider.module.css';

interface ImageSliderProps {
  className?: string;
  title: string;
  slides: SliderImage[];
  description?: string;
  autoplayDelay?: number;
}

export function ImageSlider({
  slides,
  title,
  description,
  autoplayDelay = 10000,
  className,
}: ImageSliderProps) {
  return (
    <div className={className}>
      <Carousel
        opts={{ loop: true }}
        plugins={[Fade(), Autoplay({ delay: autoplayDelay })]}
      >
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i} className='basis-full'>
              <div className={style.imageWrapper}>
                <Image
                  src={slide.image}
                  alt={`Slide ${i + 1}`}
                  fill
                  priority={i === 0}
                  className={style.image}
                />
                <div
                  className={cn(style.imageOverlay, 'image-overlay-gradient')}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className={style.content}>
          <div>
            <h3 className={style.title}>{title}</h3>
            {description && <p className={style.description}>{description}</p>}
            <Button variant='white' radius='full'>
              Подробнее
            </Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
