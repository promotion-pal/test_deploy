import { cn } from '@/shared/utils';
import { StarIcon } from 'lucide-react';

interface StarsProps {
  rating: number;
  maxStars?: number;
  size?: number;
  className?: string;
}

export const Stars = ({
  rating,
  maxStars = 5,
  size = 16,
  className = '',
}: StarsProps) => {
  return (
    <div className={cn('flex', className)}>
      {[...Array(maxStars)].map((_, i) => (
        <StarIcon
          key={i}
          size={size}
          className={cn(
            'fill-current',
            i + 1 <= Math.floor(rating)
              ? 'text-yellow'
              : i + 1 <= rating
                ? 'text-yellow'
                : 'text-gray-300'
          )}
        />
      ))}
    </div>
  );
};
