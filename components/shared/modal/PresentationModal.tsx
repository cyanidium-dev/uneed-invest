"use client";

import { RefObject } from "react";

import { PresentationFormSchema } from "@/schemas/PresentationFormSchema";

import PresentationForm from "../form/PresentationForm";
import BaseModal from "./BaseModal";

interface IPresentationModalProps {
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement>;
  dialogResetKey: number;
  handleSubmit: (
    data: PresentationFormSchema,
    reset: () => void
  ) => Promise<void>;
}

const PresentationModal = ({
  dialogRef,
  onClose,
  dialogResetKey,
  handleSubmit,
}: IPresentationModalProps) => {
  return (
    <BaseModal dialogRef={dialogRef} onClose={onClose}>
      <div className="h-hull w-full px-7 pt-10 text-center">
        <p
          id="modal-title"
          className="mb-3 text-[28px] font-bold uppercase leading-none md:mx-auto md:w-[300px]"
        >
          Отримати презентацію
        </p>
        <p className="mx-auto mb-7 w-[202px] font-manrope font-light md:w-full md:text-[16px]">
          Залиште номер телефону для отримання посилання на презентацію
        </p>

        <PresentationForm
          onSubmit={handleSubmit}
          resetTrigger={dialogResetKey}
        />
      </div>
    </BaseModal>
  );
};

export default PresentationModal;
