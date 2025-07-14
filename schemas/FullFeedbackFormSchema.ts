"use client";

import { z } from "zod";

import { nameRegex, onlyDigitsRegex } from "@/regex/feedbackFormRegex";

import {
  MESSAGE_LENGTH_VALIDATION,
  NAME_LENGTH_VALIDATION,
  NAME_REGEX_VALIDATION,
  TEL_LENGTH_VALIDATION,
  TEL_REGEX_VALIDATION,
} from "./validationMessages";

const useFullFeedbackFormSchema = () => {
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
    message: z.string().max(1000, MESSAGE_LENGTH_VALIDATION).optional(),
  });

  return feedbackFormSchema;
};

export type FullFeedbackFormSchema = z.infer<
  ReturnType<typeof useFullFeedbackFormSchema>
>;

export default useFullFeedbackFormSchema;
