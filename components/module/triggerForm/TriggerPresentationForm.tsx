"use client";

import { useRef, useState } from "react";

import BaseButton from "@/components/shared/buttons/BaseButton";
import PresentationForm from "@/components/shared/form/PresentationForm";
import BaseModal from "@/components/shared/modal/BaseModal";
import { APPLICATION } from "@/constants/application";
import sendTelegramMessage from "@/services/sendTelegramMessage";
import { PresentationFormSchema } from "@/schemas/PresentationFormSchema";

const TriggerPresentationForm = () => {
  const [isError, setIsError] = useState(false);
  const [dialogResetKey, setDialogResetKey] = useState(0);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
    setDialogResetKey(prev => prev + 1);
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  const handleSubmit = async (
    data: PresentationFormSchema,
    reset: () => void
  ) => {
    const fullData = { ...data, messageFrom: APPLICATION.PARTNERSHIP };
    const success = await sendTelegramMessage(fullData);

    setIsError(!success);

    if (success) reset();

    openDialog();
  };

  return (
    <div>
      <BaseButton
        variant="light"
        className="w-full xl:w-[233px]"
        onClick={openDialog}
      >
        Отримати презентацію
      </BaseButton>

      <BaseModal dialogRef={dialogRef} onClose={closeDialog}>
        <div className="h-hull w-full px-7 py-10 text-center">
          <p
            id="modal-title"
            className="mb-3 text-[28px] font-bold uppercase leading-none"
          >
            Отримати презентацію
          </p>
          <p className="mx-auto mb-7 w-[202px] font-manrope font-light md:w-[250px] md:text-[16px]">
            Залиште номер телефону для отримання посилання на презентацію
          </p>

          <PresentationForm
            onSubmit={handleSubmit}
            isError={isError}
            resetTrigger={dialogResetKey}
          />
        </div>
      </BaseModal>
    </div>
  );
};

export default TriggerPresentationForm;
