"use client";

import { useRef, useState } from "react";

import BaseButton from "@/components/shared/buttons/BaseButton";
import PartnershipModal from "@/components/shared/modal/PartnershipModal";
import ResponseModal from "@/components/shared/modal/ResponseModal";
import { APPLICATION } from "@/constants/application";
import sendTelegramMessage from "@/services/sendTelegramMessage";
import { PartnershipFormSchema } from "@/schemas/PartnershipFormSchema";

const TriggerPartnershipForm = () => {
  const [isError, setIsError] = useState(false);
  const [dialogResetKey, setDialogResetKey] = useState(0);

  const partnershipDialogRef = useRef<HTMLDialogElement>(null);
  const responseDialogRef = useRef<HTMLDialogElement>(null);

  const openPartnershipDialog = () => {
    partnershipDialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
    setDialogResetKey(prev => prev + 1);
  };

  const closePartnershipDialog = () => {
    partnershipDialogRef.current?.close();
    document.body.style.overflow = "";
  };

  const closeResponseDialog = () => {
    responseDialogRef.current?.close();
    document.body.style.overflow = "";
  };

  const handleSubmit = async (
    data: PartnershipFormSchema,
    reset: () => void
  ) => {
    const fullData = { ...data, messageFrom: APPLICATION.PARTNERSHIP };
    const success = await sendTelegramMessage(fullData);

    setIsError(!success);

    if (success) reset();

    closePartnershipDialog();

    setTimeout(() => {
      responseDialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    }, 100);
  };

  return (
    <div>
      <BaseButton
        variant="accent"
        className="w-full xl:w-[204px]"
        onClick={openPartnershipDialog}
      >
        Стати партнером
      </BaseButton>

      <PartnershipModal
        dialogRef={partnershipDialogRef}
        onClose={closePartnershipDialog}
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

export default TriggerPartnershipForm;
