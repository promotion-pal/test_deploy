import { cn } from '@/shared/utils';
import { MessageCircle } from 'lucide-react';
import style from './labels.module.css';

interface FeedbackCountProps {
  className?: string;
  count: number;
}
export const FeedbackCount = ({
  className = '',
  count = 0,
}: FeedbackCountProps) => {
  const lastOne = Math.abs(count) % 10 === 1;
  const lastElev = Math.abs(count) % 100 !== 11;
  return (
    <div className={cn(style.feedback, '', className)}>
      <MessageCircle />
      <span>{`${count} ${lastOne && lastElev ? 'отзыв' : 'отзывов'}`}</span>
    </div>
  );
};
