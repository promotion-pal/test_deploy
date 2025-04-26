import { HeartIcon } from '@/shared/icons';
import { cn } from '@/shared/utils';
import style from './labels.module.css';

interface LikeLabelProps {
  className?: string;
  count: number;
}
export const LikeLabel = ({ className = '', count = 0 }: LikeLabelProps) => {
  return (
    <div className={cn(style.likeLabel, 'bg-primary', className)}>
      <HeartIcon />
      <span>{count}</span>
    </div>
  );
};
