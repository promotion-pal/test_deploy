import { cn } from '@/shared/utils';

export function Text({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return <p className={cn('text-3xl font-semibold', className)}>{title}</p>;
}
