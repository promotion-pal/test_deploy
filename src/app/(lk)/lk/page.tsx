import { cn } from '@/shared/utils';
import { MyDataLkUL } from '@/widgets/lk';
import style from './page.module.css';

interface PageProps {
  className?: string;
}
export default async function Page({ className = '' }: PageProps) {
  return (
    <div className={cn(style.page, '', className)}>
      <MyDataLkUL />
      {/* <MyBalance />
      <MyDataLkFL />
      <MyAdsLkB />
      <AddAds />
      <Success />
      <NotApprove />
      <Tariffs />
      <div className='h-[300px] w-11'></div> */}
    </div>
  );
}
