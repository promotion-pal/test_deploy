import { cn } from '@/shared/utils';

interface WrapperNavigatioCartProps {
  className?: string;
  children: React.ReactNode;
}

export function WrapperNavigatioCard({
  className,
  children,
}: WrapperNavigatioCartProps) {
  return (
    <div className={cn('container mt-28 flex flex-col', className)}>
      <p className='text-2xl font-semibold md:text-4xl'>
        Может пригодиться в путешествии
      </p>
      <div className='space-y- mt-9 flex flex-col items-center justify-between md:flex-row md:space-x-4'>
        {children}
      </div>
    </div>
  );
}
