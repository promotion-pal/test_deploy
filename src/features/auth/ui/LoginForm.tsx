'use client';

import { authService } from '@/features/auth/api/auth';
import { Button } from '@/shared/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/shared/ui/form';
import formStyles from '@/shared/ui/form/Form.module.css';
import { Input } from '@/shared/ui/input';
import { fieldApiError } from '@/shared/utils/forms';
import { ModalType, useModalStore } from '@/widgets/modal';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginData } from '../model/types';
import { Socials } from './Socials';

export const LoginForm = ({ isModal = false }) => {
  const modalStore = useModalStore();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const form = useForm<LoginData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (form: FormData) => authService.login(form),
    onSuccess: (result) => {
      if (result.error) {
        fieldApiError('email', result.error, form.setError);
        fieldApiError('password', result.error, form.setError);
        setErrorMessage(result.error.detail || 'Произошла ошибка');
      } else {
        router.push('/');
      }
    },
    onError: (error) => {
      console.log(error);
      setErrorMessage(error.response.detail);
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
        Авторизация
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
              <FormItem className='mb-6'>
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

          <Button
            type='submit'
            radius='full'
            className='mb-4 w-full'
            disabled={isPending}
          >
            {isPending ? 'Вход...' : 'Войти'}
          </Button>

          {errorMessage && (
            <div className={formStyles.error}>{errorMessage}</div>
          )}
        </form>
      </Form>

      <div className='grid space-y-1 text-sm'>
        <Link
          onClick={handleLinkClick('forgot-password-request')}
          href='/auth/reset-password'
          className='hover:underline'
        >
          Забыли пароль?
        </Link>
        <Link
          onClick={handleLinkClick('register')}
          href='/auth/register'
          className='hover:underline'
        >
          Нет аккаунта? Зарегистрируйтесь
        </Link>
      </div>

      <div className='my-6 h-px bg-border' />

      <Socials className='mb-6' />

      <p className='text-xs'>
        Авторизуясь, вы соглашаетесь c{' '}
        <Link href='/privacy' className='underline'>
          обработкой персональных данных
        </Link>{' '}
        и{' '}
        <Link href='/terms' className='underline'>
          условиями пользовательских соглашений
        </Link>
      </p>
    </div>
  );
};
