"use client";

import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import useFullFeedbackFormSchema, {
  FullFeedbackFormSchema,
} from "@/schemas/FullFeedbackFormSchema";

import BaseButton from "../buttons/BaseButton";
import Loader from "../loader/Loader";
import FormField from "./FormField";
import TextareaField from "./TextareaField";

interface IBaseFormProps {
  isFullForm?: boolean;
  onSubmit: (data: FullFeedbackFormSchema, reset: () => void) => Promise<void>;
}

const BaseForm = ({ isFullForm = false, onSubmit }: IBaseFormProps) => {
  const validationSchema = useFullFeedbackFormSchema();

  const methods = useForm<FullFeedbackFormSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: { name: "", phone: "", message: "" },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(data => onSubmit(data, reset))}
        className="flex w-full flex-col gap-4 max-xl:mx-auto xl:ml-auto xl:w-[365px] xl:gap-5"
      >
        <FormField name="name" type="text" label="Ім’я та прізвище" />

        <FormField name="phone" type="tel" label="Номер телефону" />

        {isFullForm && (
          <TextareaField
            name="message"
            type="text"
            label="Яку суму бажаєте інвестувати?"
          />
        )}

        <BaseButton
          variant="light"
          isDisable={isSubmitting}
          className="rounded-full"
          type="submit"
        >
          {isSubmitting ? <Loader /> : "Стати партнером"}
        </BaseButton>
      </form>
    </FormProvider>
  );
};

export default BaseForm;
