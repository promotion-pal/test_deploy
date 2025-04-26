import Image from 'next/image';
import Link from 'next/link';

export function ListNavigateAdvertisement() {
  const list = [
    { name: 'Отзывы', link: '', image: 'reviews' },
    { name: 'В избранное', link: '', image: 'favourites' },
    { name: 'Поделиться', link: '', image: 'share' },
  ];

  return (
    <section className='flex justify-between'>
      {list.map((el) => (
        <Link href={el.link} key={el.name} className='mt-10 flex space-x-2'>
          <p>{el.name}</p>
          <Image
            src={`/image/icon/advertisement/${el.image}.svg`}
            width={16}
            height={16}
            alt=''
          />
        </Link>
      ))}
    </section>
  );
}
