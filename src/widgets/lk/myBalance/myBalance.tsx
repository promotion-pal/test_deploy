import { cn } from '@/shared/utils';
import style from './myBalance.module.css';

interface MyBalanceProps {
  className?: string;
}
export const MyBalance = ({ className = '' }: MyBalanceProps) => {
  return (
    <section className={cn(style.myBalance, '', className)}>
      <h2 className={style.title}>Мой баланс</h2>
      <div className={style.sumBlock}>
        <div className={style.sum}>
          <span className={style.name}>Баланс</span>
          <span className={style.total}>{`${0} P`}</span>
        </div>
        <div className={style.sum}>
          <span className={style.name}>Бонусы !</span>
          <span className={style.total}>{0}</span>
        </div>
      </div>
      <h3 className={style.subtitle}>История операций</h3>
      <div className='text-gray'>Операция пока не было</div>

      {/* <div className={style.table}>
        <div className={style.thead}>
          <div className='text-gray'>Дата • Время</div>
          <div className='text-gray'>Операция</div>
          <div className='text-gray'>Сумма</div>
          <div className='text-gray'>Статус</div>
        </div>
        <div className={style.row}>
          <div className={style.date}>12.12.2025 15:37</div>
          <div className={style.oper}>Приходная операция</div>
          <div className={style.tsum}>3042 Р</div>
          <div className={style.status}>Успешно</div>
        </div>
        <div className={style.row}>
          <div className={style.date}>12.12.2025 15:37</div>
          <div className={style.oper}>Приходная операция</div>
          <div className={style.tsum}>3042 Р</div>
          <div className={style.status}>Успешно</div>
        </div>
        <div className={style.row}>
          <div className={style.date}>12.12.2025 15:37</div>
          <div className={style.oper}>Приходная операция</div>
          <div className={style.tsum}>3042 Р</div>
          <div className={style.status}>Успешно</div>
        </div>
        <div className={style.row}>
          <div className={style.date}>12.12.2025 15:37</div>
          <div className={style.oper}>Приходная операция</div>
          <div className={style.tsum}>3042 Р</div>
          <div className={style.status}>Успешно</div>
        </div>
        <div className={style.row}>
          <div className={style.date}>12.12.2025 15:37</div>
          <div className={style.oper}>Приходная операция</div>
          <div className={style.tsum}>3042 Р</div>
          <div className={style.status}>Успешно</div>
        </div>
        <div className={style.tfooter}>Показать еще</div>
      </div> */}
    </section>
  );
};
