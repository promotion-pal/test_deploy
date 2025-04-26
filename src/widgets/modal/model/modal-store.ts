import { create } from 'zustand';

export type ModalType =
  | 'login'
  | 'register'
  | 'forgot-password-request'
  | 'forgot-password';

type ModalStore = {
  isOpen: boolean;
  content?: React.ReactNode;
  type?: ModalType;
  className?: string;
  openModal: (options: {
    content?: React.ReactNode;
    type?: ModalType;
    className?: string;
  }) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  content: null,
  openModal: (options) => set({ isOpen: true, ...options }),
  closeModal: () => set({ isOpen: false, content: null }),
}));
