'use client';

import { Dialog, DialogContent, DialogTitle } from '@/shared/ui/dialog';
import { useModalStore } from '@/widgets/modal';
import { modalPresets } from '@/widgets/modal/model/modal-presets';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export const Modal = () => {
  const { isOpen, content, type, className, closeModal } = useModalStore();

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent
        className={type ? modalPresets[type].className : className}
      >
        <VisuallyHidden>
          <DialogTitle>Моадльное окно</DialogTitle>
        </VisuallyHidden>
        {type ? modalPresets[type].content : content}
      </DialogContent>
    </Dialog>
  );
};
