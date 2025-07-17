"use client";

import { useRef, useState } from "react";

import BaseForm from "@/components/shared/form/BaseForm";
import FeedbackModal from "@/components/shared/modal/FeedbackModal";
import { APPLICATION } from "@/constants/application";
import sendTelegramMessage from "@/services/sendTelegramMessage";
import { FullFeedbackFormSchema } from "@/schemas/FullFeedbackFormSchema";

interface ITriggerFeedbackFormProps {
  isFullForm?: boolean;
}

const TriggerFeedbackForm = ({ isFullForm }: ITriggerFeedbackFormProps) => {
  const [isError, setIsError] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  const handleSubmit = async (
    data: FullFeedbackFormSchema,
    reset: () => void
  ) => {
    const fullData = { ...data, messageFrom: APPLICATION.FORM };
    const success = await sendTelegramMessage(fullData);

    setIsError(!success);

    if (success) reset();

    openDialog();
  };

  return (
    <div>
      <BaseForm onSubmit={handleSubmit} isFullForm={isFullForm} />

      <FeedbackModal
        dialogRef={dialogRef}
        onClose={closeDialog}
        isError={isError}
      />
    </div>
  );
};

export default TriggerFeedbackForm;
