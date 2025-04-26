'use client';
import { cn } from '@/shared/utils';

import { useEffect, useState } from 'react';

interface TimeDisplayProps {
  className?: string;
}

export const TimeDisplay = ({ className = '' }: TimeDisplayProps) => {
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const updateTimer = () => {
      setTime(getCurrentTime());
    };
    updateTimer();
    const interval = setInterval(updateTimer, 60 * 1000);

    const secondsLeft = 60 - new Date().getSeconds();
    const syncTimeout = setTimeout(() => {
      updateTimer();
      clearInterval(interval);
      setInterval(updateTimer, 60 * 1000);
    }, secondsLeft * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(syncTimeout);
    };
  }, []);

  return <div className={cn('', '', className)}>{time}</div>;
};

export default TimeDisplay;
