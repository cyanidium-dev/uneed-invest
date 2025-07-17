"use client";

import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import usePresentationFormSchema, {
  PresentationFormSchema,
} from "@/schemas/PresentationFormSchema";

import BaseButton from "../buttons/BaseButton";
import Loader from "../loader/Loader";
import FormField from "./FormField";

interface IPresentationFormProps {
  isError: boolean;
  onSubmit: (data: PresentationFormSchema, reset: () => void) => Promise<void>;
  resetTrigger: number;
}

const PresentationForm = ({
  onSubmit,
  isError,
  resetTrigger,
}: IPresentationFormProps) => {
  const validationSchema = usePresentationFormSchema();

  const methods = useForm<PresentationFormSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: { phone: "" },
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

export default PresentationForm;
