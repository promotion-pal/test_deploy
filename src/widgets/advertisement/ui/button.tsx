import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function ButtonComfort({ className }: { className?: string }) {
  return (
    <Link
      href={'/'}
      className={cn('flex items-center justify-center space-x-3', className)}
    >
      <Button className='flex-1 rounded-full py-4 text-lg' variant={'white'}>
        Все удобства
      </Button>
      <Button variant='white' radius='full' size='icon'>
        <ArrowUpRight size={150} />
      </Button>
    </Link>
  );
}

export function ButtonContact({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        'w-full rounded-full bg-primary py-6 text-lg text-white',
        className
      )}
      variant={'white'}
    >
      Связаться
    </Button>
  );
}
