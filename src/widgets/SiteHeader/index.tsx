'use client';

import { TypeContacts } from '@/features/api/site/contacts';
import dynamic from 'next/dynamic';
import HeaderDesktop from './Desktop';
import HeaderMobile from './Mobile';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

export interface HeaderProps {
  data: TypeContacts;
  role?: string;
}

export function Header(props: HeaderProps) {
  const breakpoint = 960;

  return (
    <>
      <MediaQuery maxWidth={breakpoint}>
        <HeaderMobile {...props} />
      </MediaQuery>
      <MediaQuery minWidth={breakpoint}>
        <HeaderDesktop {...props} />
      </MediaQuery>
    </>
  );
}
