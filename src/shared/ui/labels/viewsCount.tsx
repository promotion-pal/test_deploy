import { UserIcon } from '@/shared/icons';
import { cn } from '@/shared/utils';
import style from './labels.module.css';

interface ViewsCountProps {
  className?: string;
  count: number;
}
export const ViewsCount = ({ className = '', count = 0 }: ViewsCountProps) => {
  const lastOne = Math.abs(count) % 10 === 1;
  const lastElev = Math.abs(count) % 100 !== 11;
  return (
    <div className={cn(style.feedback, '', className)}>
      <UserIcon stroke='#8F8F8F' />
      <span>{`${count} ${lastOne && lastElev ? 'просмотр' : 'просмотров'}`}</span>
    </div>
  );
};
