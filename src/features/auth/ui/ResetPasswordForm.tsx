'use client';

export const ResetPasswordForm = () => {
  // const [errorMessage, setErrorMessage] = useState<string | undefined>();
  // const [successMessage, setSuccessMessage] = useState<string | undefined>();
  // const form = useForm<ResetPasswordData>({
  //   defaultValues: {
  //     email: '',
  //   },
  // });
  // const { mutate, isPending } = useMutation({
  //   mutationFn: authService.resetPassword,
  //   onSuccess: () => {
  //     setSuccessMessage('Письмо для сброса пароля отправлено.');
  //   },
  //   onError: (error) => {
  //     if (error instanceof HTTPError) {
  //       const errorData = error.data as ApiError;
  //       fieldApiError('email', errorData, form.setError);
  //       setErrorMessage(errorData.detail);
  //     }
  //   },
  // });
  // return (
  //   <div>
  //     <h3 className='mb-8 text-center text-lg font-semibold uppercase text-primary'>
  //       Восстановление пароля
  //     </h3>
  //     <Form {...form}>
  //       <form
  //         onSubmit={form.handleSubmit((values) => mutate(values))}
  //         className='mb-8 space-y-4'
  //       >
  //         <FormField
  //           control={form.control}
  //           name='email'
  //           render={({ field }) => (
  //             <FormItem>
  //               <Input
  //                 type='email'
  //                 placeholder='Email'
  //                 variant='secondary'
  //                 required
  //                 {...field}
  //               />
  //               <FormMessage />
  //             </FormItem>
  //           )}
  //         />
  //         <Button
  //           type='submit'
  //           radius='full'
  //           className='w-full'
  //           disabled={isPending}
  //         >
  //           Восстановить
  //         </Button>
  //         {errorMessage && (
  //           <div className={formStyles.error}>{errorMessage}</div>
  //         )}
  //         {successMessage && (
  //           <div className={formStyles.success}>{successMessage}</div>
  //         )}
  //       </form>
  //     </Form>
  //     <div className='mb-4 h-px bg-border' />
  //     <p className='text-sm'>
  //       На ваш почтовый ящик будет отправлено письмо с инструкциями. Следуйте
  //       им, чтобы восстановить пароль.
  //     </p>
  //   </div>
  // );
};
