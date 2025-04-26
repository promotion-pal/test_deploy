'use client';

import { userService } from '@/features/api';
import { User } from '@/features/api/types/user';
import { Approved } from '@/shared/ui/notes';
import { cn } from '@/shared/utils';
import { useEffect, useState } from 'react';
import { BannerUL } from '../banners/bannerUL';
import style from './myDataLkUL.module.css';

interface MyDataLkULProps {
  className?: string;
  initialUser?: User;
}

export const MyDataLkUL = ({
  className = '',
  initialUser,
}: MyDataLkULProps) => {
  const [user, setUser] = useState<User | undefined>(initialUser);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const userData = await userService.getUser(22);
      console.log(userData);
      setUser(userData);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <div className={cn(style.myDataLkUL, className)}>Загрузка...</div>;
  }

  if (!user) {
    return (
      <div className={cn(style.myDataLkUL, className)}>Данные не найдены</div>
    );
  }

  return (
    <>
      <BannerUL />
      <section className={cn(style.myDataLkUL, className)}>
        <h2 className={style.title}>Мои данные</h2>
        <div className='mt-10 flex justify-between'>
          <h3 className={style.subtitle}>Персональные</h3>
          {/* <Button className='border-none' variant='outline-teal'>
            <Pen className={style.pen} />
            <span className={style.text_edit}>Изменить данные</span>
          </Button> */}
        </div>
        <div className={style.personal_container}>
          <div className='mt-5'>
            <span className={style.name}>ФИО</span>
            <div>
              {user.last_name} {user.first_name} {user.middle_name}
            </div>
          </div>
          <div>
            <span className={style.name}>Телефон</span>
            <div>{user.phone || 'Не указан'}</div>
          </div>
          <div>
            <span className={style.name}>Почта</span>
            <div className={style.change}>
              <span>{user.email}</span>
              {user.email_verified && <Approved text='Почта подтверждена' />}
            </div>
          </div>
          <div>
            <span className={style.name}>Роль</span>
            <div className={style.change}>
              <span>{user.role ? 'Физическое лицо' : ''}</span>
              {/* <Button className='text-teal' variant='link' size='fit'>
                Сменить роль
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* <section className={cn(style.myDataLkUL, className)}>
        <div className='flex justify-between'>
          <h3 className={style.subtitle}>Бизнес инфо</h3>
          <Button className='border-none' variant='outline-teal'>
            <Pen className={style.pen} />
            <span className={style.text_edit}>Изменить данные</span>
          </Button>
        </div>
        <div className={style.personal_container}>
          {businessUL.map((el, i) => (
            <div key={`${el}-${i}`} className={style.pers_block}>
              <span className={style.name}>{el}</span>
            </div>
          ))}
        </div>

        <Button className='mt-10' radius='full' variant='secondary'>
          <Paperclip />
          Прикрепить документы
        </Button>

        <div className={`${style.name} mt-3`}>
          Свидетельство ИНН/КПП для ООО, ОАО, ЗАО — ОГРНИП для ИП
        </div>

        <Button
          className='mt-10 bg-[#E7F7F7]'
          radius='full'
          variant='secondary'
          size='lg'
        >
          Отправить на модерацию
        </Button>
      </section> */}
    </>
  );
};
