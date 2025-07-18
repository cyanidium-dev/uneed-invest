"use client";

import { RefObject } from "react";

import { PartnershipFormSchema } from "@/schemas/PartnershipFormSchema";

import PartnershipForm from "../form/PartnershipForm";
import BaseModal from "./BaseModal";

interface IPartnershipModalProps {
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement>;
  dialogResetKey: number;
  handleSubmit: (
    data: PartnershipFormSchema,
    reset: () => void
  ) => Promise<void>;
}

const PartnershipModal = ({
  dialogRef,
  onClose,
  dialogResetKey,
  handleSubmit,
}: IPartnershipModalProps) => {
  return (
    <BaseModal dialogRef={dialogRef} onClose={onClose}>
      <div className="h-hull w-full px-7 pt-10 text-center">
        <p
          id="modal-title"
          className="mb-3 text-[28px] font-bold uppercase leading-none md:mx-auto md:w-[300px]"
        >
          Станьте нашим партнером!
        </p>

        <PartnershipForm
          onSubmit={handleSubmit}
          resetTrigger={dialogResetKey}
        />
      </div>
    </BaseModal>
  );
};

export default PartnershipModal;
