import { RegisterForm } from '@/features/auth/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Регистрация',
};

export default function Page() {
  return <RegisterForm />;
}
