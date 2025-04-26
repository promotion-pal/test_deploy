import { Button } from '@/shared/ui/button';
import { Approved, Expectation } from '@/shared/ui/notes';
import { cn } from '@/shared/utils';
import { Pen } from 'lucide-react';
import style from './myDataLkFL.module.css';

interface MyDataLkFLProps {
  className?: string;
}
const testEmailUL = 'test_user_bus@example.com';
export const MyDataLkFL = async ({ className = '' }: MyDataLkFLProps) => {
  return (
    <section className={cn(style.myDataLkFL, '', className)}>
      <h2 className={style.title}>Мои данные</h2>
      <div className='mt-10 flex justify-between'>
        <h3 className={style.subtitle}>Персональные</h3>
        <Button className='border-none' variant='outline-teal'>
          <Pen className={style.pen} />
          <span className={style.text_edit}>Изменить данные</span>
        </Button>
      </div>
      <div className={style.personal_container}>
        <div>
          <span className={style.name}>ФИО</span>
          <div>XXXXXXXXXXXXXXXXXXXX</div>
        </div>
        <div>
          <span className={style.name}>Телефон</span>
          <div>XXXXXXXXXXXXXXXXXXXX</div>
        </div>
        <div>
          <span className={style.name}>Физический адрес</span>
          <div>
            Индекс, страна, регион, населенный пункт, улица, дом, корпус,
            квартира
          </div>
        </div>
        <div>
          <span className={style.name}>Почта</span>
          <div className={style.change}>
            <span>kskdkdkdk@dddd.com</span>
            <Approved text='Почта подтверждена' />
          </div>
        </div>
        <div>
          <span className={style.name}>Роль</span>
          <div className={style.change}>
            <span>Физическое лицо</span>
            <Button className='text-teal' variant='link' size='fit'>
              Сменить роль
            </Button>
          </div>
        </div>
      </div>
      <Expectation text='Ожидание модерации' />
      <Approved text='Модерация подтверждена' />
    </section>
  );
};
