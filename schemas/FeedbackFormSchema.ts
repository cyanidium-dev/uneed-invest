"use client";

import { z } from "zod";

import { nameRegex, onlyDigitsRegex } from "@/regex/feedbackFormRegex";

const NAME_LENGTH_VALIDATION =
  "Ім'я та прізвище повинно містити від 2 до 250 символів";
const NAME_REGEX_VALIDATION =
  "Допустимі літери кирилиці та латиниці, дефіс, апостроф та лапки";
const TEL_LENGTH_VALIDATION = "Номер має містити від 7 до 15 цифр";
const TEL_REGEX_VALIDATION = "Поле може містити лише цифри";

const useFeedbackFormSchema = () => {
  const feedbackFormSchema = z.object({
    name: z
      .string()
      .min(2, NAME_LENGTH_VALIDATION)
      .max(250, NAME_LENGTH_VALIDATION)
      .regex(nameRegex, NAME_REGEX_VALIDATION),
    phone: z
      .string()
      .min(7, TEL_LENGTH_VALIDATION)
      .max(15, TEL_LENGTH_VALIDATION)
      .regex(onlyDigitsRegex, TEL_REGEX_VALIDATION),
  });

  return feedbackFormSchema;
};

export type FeedbackFormSchema = z.infer<
  ReturnType<typeof useFeedbackFormSchema>
>;

export default useFeedbackFormSchema;
