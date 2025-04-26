'use client';
import { cn } from '@/shared/utils';
import { AdminHeader } from '@/widgets/admin/adminHeader/adminHeader';
import { SideMenu } from '@/widgets/admin/sideMenu/sideMenu';
import { useState } from 'react';
import style from './adminlayout.module.css';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={style.admin}>
      <AdminHeader
        isShowAsideMenu={isHidden}
        showAsideMenu={() => setIsHidden((prev) => !prev)}
        className={style.header}
      />
      <SideMenu
        closeMenu={() => setIsHidden(true)}
        className={cn(style.sidebar, !isHidden && style.open)}
      />
      <main className={style.admin_content}>{children}</main>
    </div>
  );
}
