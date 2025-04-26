import { cn } from '@/shared/utils';
import { CircleCheck } from 'lucide-react';
import style from './notes.module.css';

interface ApprovedProps {
  className?: string;
  text: string;
}
export const Approved = ({ className = '', text }: ApprovedProps) => {
  return (
    <aside
      role='status'
      aria-live='polite'
      className={cn(style.approved, '', className)}
    >
      <CircleCheck width={15} fill='var(--clr-primary)' stroke='white' />
      <span>{text}</span>
    </aside>
  );
};
