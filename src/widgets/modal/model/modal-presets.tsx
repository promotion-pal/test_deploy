import { ModalType } from './modal-store';

export const modalPresets: Record<
  ModalType,
  { content: React.ReactNode; className?: string }
> = {
  login: {
    content: <></>,
    className: 'max-w-md p-10',
  },
  register: {
    content: <></>,
    className: 'max-w-md p-10',
  },
  'forgot-password-request': {
    content: <></>,
  },
  'forgot-password': {
    content: <></>,
  },
};
