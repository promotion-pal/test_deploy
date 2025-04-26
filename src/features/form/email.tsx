import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/utils';
import { ArrowUpRight } from 'lucide-react';

export function InputEmail({ className }: { className?: string }) {
  return (
    <div className={cn('flex', className)}>
      <Input className='w-full rounded-full' type='text' placeholder='Почта' />
      <Button
        className='ml-2 flex-shrink-0'
        variant='primary'
        radius='full'
        size='icon'
      >
        <ArrowUpRight />
      </Button>
    </div>
  );
}
