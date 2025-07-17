"use client";

import { ReactNode, RefObject, useEffect } from "react";

import { cn } from "@/utils/cn";

interface IBaseModalProps {
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement>;
  children: ReactNode;
  modalClassName?: string;
  backdropClassName?: string;
}

const BaseModal = ({
  dialogRef,
  onClose,
  children,
  modalClassName = "",
  backdropClassName = "",
}: IBaseModalProps) => {
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog?.addEventListener("close", onClose);

    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [dialogRef, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const rect = dialog.getBoundingClientRect();
    const clickX = e.clientX;
    const clickY = e.clientY;

    const isInDialog =
      clickX >= rect.left &&
      clickX <= rect.right &&
      clickY >= rect.top &&
      clickY <= rect.bottom;

    if (!isInDialog) {
      dialog.close();
      onClose();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className={cn("rounded-lg backdrop:bg-black/50", backdropClassName)}
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div
        className={cn(
          "relative flex h-[347px] w-[304px] flex-col items-center rounded-xl bg-light pt-9 md:w-[440px] md:pt-10",
          modalClassName
        )}
      >
        {children}
      </div>
    </dialog>
  );
};

export default BaseModal;
