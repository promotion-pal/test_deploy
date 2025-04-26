import { cn } from '@/shared/utils';
import { Mail, MessageCircle } from 'lucide-react';
import React from 'react';

type IconKey = 'email' | 'message';

const getIcon = (key: IconKey): React.ReactElement => {
  let icon;

  switch (key) {
    case 'email':
      icon = <Mail className='h-5 w-5' />;
      break;
    default:
      icon = <MessageCircle className='h-5 w-5' />;
  }

  return (
    <a
      className='rounded-full bg-white p-2 text-teal md:bg-teal md:text-white'
      href='#'
    >
      {icon}
    </a>
  );
};

interface IconButtonProps {
  iconKey: IconKey;
  link?: string;
  isMobile?: boolean;
}

const IconButton = ({ iconKey, link, isMobile = false }: IconButtonProps) => {
  const icon = getIcon(iconKey);

  if (isMobile) {
    return icon;
  }

  return (
    <div className='flex items-center gap-2'>
      {icon}
      {link && <a href='#'>{link}</a>}
    </div>
  );
};

export function SocialNetworkMobile() {
  return (
    <div className='flex space-x-4'>
      <IconButton iconKey='email' isMobile />
    </div>
  );
}

export function SocialNetworkDesktop({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col space-y-4', className)}>
      <IconButton iconKey='email' link='Mirtraveler@mail.ru' />
      <IconButton iconKey='email' link='Mirtraveler@mail.ru' />
      <IconButton iconKey='email' link='Mirtraveler@mail.ru' />
    </div>
  );
}
