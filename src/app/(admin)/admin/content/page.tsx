import { cn } from '@/shared/utils';
// import style from './page.module.css';

interface PageProps {
  className?: string;
}
export default function Page({ className = '' }: PageProps) {
  return <div className={cn('', '', className)}>Content</div>;
}
