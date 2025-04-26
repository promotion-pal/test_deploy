import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function ButtonLink({ href }: { href: string }) {
  return (
    <Link href={href} className={'mt-3 flex'}>
      <p className='font-regular; whitespace-nowrap rounded-full bg-white px-4 py-2'>
        Читать подробнее
      </p>
      <div className='ml-3 rounded-full bg-white p-2'>
        <ArrowUpRight />
      </div>
    </Link>
  );
}
