import { appConfig } from '@/shared/config/appConfig';
import { FooterLk } from '@/widgets/lk/footer';
import { Header } from '@/widgets/lk/Header';
import { Sidebar } from '@/widgets/lk/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Личный кабинет | ${appConfig.siteName}`,
};

export default async function LkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='mainWrapper bg-gray-light'>
      <Header />
      <div className='container mx-auto mt-5 flex flex-col gap-5 px-4 lg:mt-10 lg:flex-row lg:px-6'>
        <Sidebar />
        <div className='lg:w-[75%]'>{children}</div>
      </div>
      <FooterLk />
    </div>
  );
}
