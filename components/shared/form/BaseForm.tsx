"use client";

import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import sendTelegramMessage from "@/services/sendTelegramMessage";
import useFeedbackFormSchema, {
  FeedbackFormSchema,
} from "@/schemas/FeedbackFormSchema";

import BaseButton from "../buttons/BaseButton";
import Loader from "../loader/Loader";
import FormField from "./FormField";

const BaseForm = () => {
  const validationSchema = useFeedbackFormSchema();

  const methods = useForm<FeedbackFormSchema>({
    resolver: zodResolver(validationSchema),
    defaultValues: { name: "", phone: "" },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FeedbackFormSchema) => {
    const success = await sendTelegramMessage(data);

    if (success) {
      reset();
    } else {
      alert("Помилка під час відправки");
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 max-xl:mx-auto xl:ml-auto xl:w-[365px] xl:gap-5"
      >
        <FormField name="name" type="text" label="Ім’я та прізвище" />

        <FormField name="phone" type="tel" label="Номер телефону" />

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
