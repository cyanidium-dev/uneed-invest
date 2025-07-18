"use client";

import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import usePartnershipFormSchema, {
  PartnershipFormSchema,
} from "@/schemas/PartnershipFormSchema";

import BaseButton from "../buttons/BaseButton";
import Loader from "../loader/Loader";
import FormField from "./FormField";

interface IPartnershipFormProps {
  onSubmit: (data: PartnershipFormSchema, reset: () => void) => Promise<void>;
  resetTrigger: number;
}

const PartnershipForm = ({ onSubmit, resetTrigger }: IPartnershipFormProps) => {
  const validationSchema = usePartnershipFormSchema();

  const methods = useForm<PartnershipFormSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: { name: "", phone: "" },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    reset();
  }, [resetTrigger]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(data => onSubmit(data, reset))}
        className="flex w-full flex-col gap-4 max-xl:mx-auto xl:ml-auto xl:w-[365px] xl:gap-5"
      >
        <FormField
          name="name"
          type="text"
          label="Ім’я та прізвище"
          variant="dark"
        />

        <FormField
          name="phone"
          type="tel"
          label="Номер телефону"
          variant="dark"
        />

        <BaseButton
          variant="dark"
          isDisable={isSubmitting}
          className="rounded-full"
          type="submit"
        >
          {isSubmitting ? <Loader /> : "Отримати презентацію"}
        </BaseButton>
      </form>
    </FormProvider>
  );
};

export default PartnershipForm;
