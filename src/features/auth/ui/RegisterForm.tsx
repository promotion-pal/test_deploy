'use client';

import { Button } from '@/shared/ui/button';
import { Checkbox } from '@/shared/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import formStyles from '@/shared/ui/form/Form.module.css';
import { Input } from '@/shared/ui/input';
import { RadioSwitch } from '@/shared/ui/toogle';
import { cn } from '@/shared/utils';
import { fieldApiError } from '@/shared/utils/forms';
import { ModalType, useModalStore } from '@/widgets/modal';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { authService } from '../api/auth';
import { RegisterData } from '../model/types';

export const RegisterForm = ({ isModal = false }) => {
  const modalStore = useModalStore();

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [successMessage, setSuccessMessage] = useState<string | undefined>();

  const form = useForm<RegisterData>({
    defaultValues: {
      email: '',
      password: '',
      password_2: '',
      is_privacy_policy_confirmed: true,
      role: 'individual',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: authService.register,
    onSuccess: () => {
      setSuccessMessage('Письмо для подтверждения регистрации отправлено.');
    },
    onError: (error) => {
      const errorData = error.response as ApiError;
      fieldApiError('email', errorData, form.setError);
      fieldApiError('password', errorData, form.setError);
      fieldApiError('password_2', errorData, form.setError);
      setErrorMessage(errorData.detail);
    },
  });

  const handleLinkClick = useCallback(
    (type: ModalType) => (e: React.MouseEvent) => {
      if (!isModal) return;
      e.preventDefault();
      modalStore.openModal({ type });
    },
    [isModal, modalStore]
  );

  return (
    <div>
      <h3 className='mb-8 text-center text-lg font-semibold uppercase text-primary'>
        Регистрация
      </h3>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => mutate(values))}
          className='mb-4'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='mb-3'>
                <Input
                  type='email'
                  placeholder='Email'
                  size='lg'
                  variant='secondary'
                  required
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='mb-3'>
                <Input
                  type='password'
                  placeholder='Пароль'
                  size='lg'
                  variant='secondary'
                  required
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password_2'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <Input
                  type='password'
                  placeholder='Подтверждение пароля'
                  size='lg'
                  variant='secondary'
                  required
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='role'
            render={({ field }) => (
              <RadioSwitch
                value={field.value}
                onChange={field.onChange}
                className='mb-6 border-blue'
                activeClassName='bg-blue text-white'
                options={[
                  { value: 'individual', label: 'Физическое лицо' },
                  { value: 'business', label: 'Юридическое лицо' },
                ]}
              />
            )}
          />
          <FormField
            control={form.control}
            name='is_privacy_policy_confirmed'
            render={({ field }) => (
              <FormItem className={cn(formStyles.inlineItem, 'mb-6')}>
                <FormControl>
                  <Checkbox checked={true} onChange={field.onChange} required />
                </FormControl>
                <FormLabel className='text-sm'>
                  Я согласен с{' '}
                  <Link href='/privacy' className='underline'>
                    обработкой персональных данных
                  </Link>{' '}
                  и{' '}
                  <Link href='/terms' className='underline'>
                    условиями пользовательских соглашений
                  </Link>
                </FormLabel>
              </FormItem>
            )}
          />

          <Button
            type='submit'
            radius='full'
            className='mb-4 w-full'
            disabled={isPending}
          >
            Войти
          </Button>

          {errorMessage && (
            <div className={formStyles.error}>{errorMessage}</div>
          )}
          {successMessage && (
            <div className={formStyles.success}>{successMessage}</div>
          )}
        </form>
      </Form>

      <div className='my-4 h-px bg-border' />

      <Link
        onClick={handleLinkClick('login')}
        href='/auth/login'
        className='text-sm hover:underline'
      >
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
};
