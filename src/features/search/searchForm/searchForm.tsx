import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/utils';
import { Search } from 'lucide-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from './searchForm.module.css';

interface SearchFormProps {
  className?: string;
  submit: (value: string) => void;
}
type Inputs = {
  search: string;
};
export const SearchForm = ({ className = '', submit }: SearchFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    submit(data.search);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(style.searchForm, '', className)}
    >
      <Input
        {...register('search')}
        className='p-0'
        size='lg'
        placeholder='Поиск'
      ></Input>
      <Button style={{ padding: '0' }} variant='white'>
        <Search className={style.searchIkon} />
      </Button>
    </form>
  );
};
