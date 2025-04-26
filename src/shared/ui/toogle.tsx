'use client';

import { cn } from '@/shared/utils';

interface RadioSwitchProps {
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  activeClassName?: string;
  className?: string;
}

const RadioSwitch = ({
  options,
  value,
  onChange,
  className,
  disabled,
  activeClassName = 'bg-primary text-white',
}: RadioSwitchProps) => {
  return (
    <div
      className={cn(
        'relative flex h-8 rounded-full border border-primary bg-white',
        disabled && 'opacity-70',
        className
      )}
    >
      {options.map((option) => (
        <label
          key={option.value}
          className={cn(
            'flex flex-1 cursor-pointer items-center justify-center rounded-full text-sm duration-200',
            value === option.value
              ? activeClassName
              : 'bg-white text-foreground',
            disabled && 'cursor-not-allowed'
          )}
        >
          <input
            type='radio'
            value={value}
            checked={value === option.value}
            onChange={() => !disabled && onChange?.(option.value)}
            className='sr-only'
            disabled={disabled}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export { RadioSwitch };
