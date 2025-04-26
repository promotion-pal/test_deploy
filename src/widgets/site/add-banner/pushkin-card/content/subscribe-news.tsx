import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';
import { ArrowUpRight } from 'lucide-react';

interface SubscribeNewsProps {
  className?: string;
}

export function SubscribeNews({ className }: SubscribeNewsProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <p className='w-2/3 text-2xl font-semibold text-white md:w-80'>
        Все предложения по Пушкинской карте здесь
      </p>

      <div className='mt-10 flex items-center md:mt-4'>
        <Button variant={'white'} className='rounded-full text-sm'>
          Подписаться на рассылку
        </Button>

        <Button
          className='ml-2 flex-shrink-0'
          variant='secondary'
          radius='full'
          size='icon'
        >
          <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
}
