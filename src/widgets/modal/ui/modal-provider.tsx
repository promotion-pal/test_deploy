'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { Modal } from './modal';

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {children}
      <Modal />
    </>
  );
};
