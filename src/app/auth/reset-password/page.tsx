import { ResetPasswordForm } from '@/features/auth/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Восстановление пароля',
};

export default function Page() {
  return <ResetPasswordForm />;
}
