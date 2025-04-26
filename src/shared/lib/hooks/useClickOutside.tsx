'use client';
import { useEffect } from 'react';

function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
  exceptions: React.RefObject<HTMLElement | null>[] = []
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      const clickedOutsideMain = ref.current && !ref.current.contains(target);
      const clickedOnException = exceptions.some(
        (exceptionRef) =>
          exceptionRef.current && exceptionRef.current.contains(target)
      );

      if (clickedOutsideMain && !clickedOnException) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutside;
