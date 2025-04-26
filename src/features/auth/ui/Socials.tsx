import { BaseUrl } from '@/shared/config/apiConfig';
import { OKIcon, VKIcon, YandexIcon } from '@/shared/icons/social';
import { cn } from '@/shared/utils';
import Link from 'next/link';

function getSocialLoginUrl(provider: string) {
  return BaseUrl + `/site/auth/${provider}/login`;
}

export const Socials = ({ className }: { className?: string }) => (
  <div className={cn('flex justify-center gap-6', className)}>
    <Link href={getSocialLoginUrl('yandex')} title='Войти через Яндекс'>
      <YandexIcon />
    </Link>
    <Link href={getSocialLoginUrl('ok')} title='Войти через ОК'>
      <OKIcon />
    </Link>
    <Link href={getSocialLoginUrl('vk')} title='Войти через ВК'>
      <VKIcon />
    </Link>
  </div>
);
