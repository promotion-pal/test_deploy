import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import Link from 'next/link';
import { ButtonContact } from '../ui';

interface DialogCart {
  pageId: number;
}

export function DialogCart({ pageId }: DialogCart) {
  const contacts = [
    { link: '', image: '', text: '+7 920 8465069' },
    { link: '', image: '', text: 'Petrov@mail.ru' },
    { link: '', image: '', text: '+7 920 8465069' },
    { link: '', image: '', text: '@PetrovArendaNSK' },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ButtonContact onClick={() => pageId} className='mt-16' />
      </DialogTrigger>

      <DialogContent className='flex w-11/12 flex-col items-center rounded-lg px-14 pb-14'>
        <DialogTitle className='mt-9 text-xl font-semibold uppercase text-teal'>
          Арендодатель
        </DialogTitle>

        <p className='mt-2 text-center text-xl font-semibold'>
          Петров Николай Владиславович
        </p>

        {contacts.map((el, index) => (
          <ListContact
            key={index}
            link={el.link}
            text={el.text}
            image={el.image}
          />
        ))}
      </DialogContent>
    </Dialog>
  );
}

interface ListContactProps {
  link: string;
  image: string;
  text: string;
}

function ListContact({ link, image, text }: ListContactProps) {
  return (
    <Link href={link}>
      {/* <Image
        src={`/image/icon/advertisement/${image}.svg`}
        width={30}
        height={30}
        alt='Исонка сетей'
        className='rounded-lg object-fill'
      /> */}

      <p className='text-lg'>{text}</p>
    </Link>
  );
}
