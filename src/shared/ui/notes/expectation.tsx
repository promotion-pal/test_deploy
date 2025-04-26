import { cn } from '@/shared/utils';
import { Clock } from 'lucide-react';
import style from './notes.module.css';

interface ExpectationProps {
  className?: string;
  text: string;
}
export const Expectation = ({ className = '', text }: ExpectationProps) => {
  return (
    <aside
      role='status'
      aria-live='polite'
      className={cn(style.expectation, '', className)}
    >
      <Clock width={18} />
      <span>{text}</span>
    </aside>
  );
};
