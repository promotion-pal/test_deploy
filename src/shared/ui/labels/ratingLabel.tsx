import { StarIcon } from '@/shared/icons';
import { cn } from '@/shared/utils';
import style from './labels.module.css';

interface RatingLabelProps {
  className?: string;
  count: number;
}
export const RatingLabel = ({
  className = '',
  count = 0,
}: RatingLabelProps) => {
  return (
    <div className={cn(style.likeLabel, 'bg-yellow', className)}>
      <StarIcon stroke='white' />
      <span>{count}</span>
    </div>
  );
};
