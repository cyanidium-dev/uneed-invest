"use client";

import { useRef, useState } from "react";

import BaseButton from "@/components/shared/buttons/BaseButton";
import PresentationModal from "@/components/shared/modal/PresentationModal";
import ResponseModal from "@/components/shared/modal/ResponseModal";
import { APPLICATION } from "@/constants/application";
import sendTelegramMessage from "@/services/sendTelegramMessage";
import { PresentationFormSchema } from "@/schemas/PresentationFormSchema";

const TriggerPresentationForm = () => {
  const [isError, setIsError] = useState(false);
  const [dialogResetKey, setDialogResetKey] = useState(0);

  const presentationDialogRef = useRef<HTMLDialogElement>(null);
  const responseDialogRef = useRef<HTMLDialogElement>(null);

  const openPresentationDialog = () => {
    presentationDialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
    setDialogResetKey(prev => prev + 1);
  };

  const closePresentationDialog = () => {
    presentationDialogRef.current?.close();
    document.body.style.overflow = "";
  };

  const closeResponseDialog = () => {
    responseDialogRef.current?.close();
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

    closePresentationDialog();

    setTimeout(() => {
      responseDialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    }, 100);
  };

  return (
    <div>
      <BaseButton
        variant="light"
        className="w-full xl:w-[233px]"
        onClick={openPresentationDialog}
      >
        Отримати презентацію
      </BaseButton>

      <PresentationModal
        dialogRef={presentationDialogRef}
        isError={isError}
        onClose={closePresentationDialog}
        dialogResetKey={dialogResetKey}
        handleSubmit={handleSubmit}
      />

      <ResponseModal
        dialogRef={responseDialogRef}
        onClose={closeResponseDialog}
        isError={isError}
      />
    </div>
  );
};

export default TriggerPresentationForm;
