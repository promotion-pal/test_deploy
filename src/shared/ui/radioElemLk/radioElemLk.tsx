import { cn } from '@/shared/utils';
import style from './radioElemLk.module.css';

interface RadioElemLkProps {
  className?: string;
  text: string;
  count: number;
  groupName: string;
  value: string;
  selected: string;
  onChange?: (value: string) => void;
}
export const RadioElemLk = ({
  className = '',
  text,
  count,
  groupName,
  value,
  selected,
  onChange,
}: RadioElemLkProps) => {
  const handleChange = () => onChange?.(value);
  const isChecked = value === selected;
  const inputId = `${groupName}_radio_item_with_value__${value}`;
  return (
    <div
      key={value}
      className={cn(style.radioElemLk, '', className)}
      data-checked={isChecked}
    >
      <div className={style.container}>
        <label className={style.text} htmlFor={inputId}>
          {text}
        </label>
        <div className={style.count}>{count}</div>
      </div>
      <input
        type='radio'
        name={groupName}
        id={inputId}
        className={style.input}
        value={value}
        onChange={handleChange}
      />
      <div className={style.line} />
    </div>
  );
};
