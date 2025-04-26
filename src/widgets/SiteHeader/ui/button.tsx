import { Button } from '@/shared/ui/button';
import Link from 'next/link';

export function ButtonHeader({ role }: { role?: string }) {
  const href = role === 'guest' ? '/auth/login' : '/lk/my';
  const buttonText = role === 'guest' ? 'Войти' : 'Кабинет';

  return (
    <Link href={href}>
      <Button radius='full' className='mt-6 h-8 w-full md:mt-0 md:w-32'>
        {buttonText}
      </Button>
    </Link>
  );
}
