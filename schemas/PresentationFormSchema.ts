"use client";

import { z } from "zod";

import { onlyDigitsRegex } from "@/regex/feedbackFormRegex";

import {
  TEL_LENGTH_VALIDATION,
  TEL_REGEX_VALIDATION,
} from "./validationMessages";

const usePresentationFormSchema = () => {
  const presentationFormSchema = z.object({
    phone: z
      .string()
      .min(7, TEL_LENGTH_VALIDATION)
      .max(15, TEL_LENGTH_VALIDATION)
      .regex(onlyDigitsRegex, TEL_REGEX_VALIDATION),
  });

  return presentationFormSchema;
};

export type PresentationFormSchema = z.infer<
  ReturnType<typeof usePresentationFormSchema>
>;

export default usePresentationFormSchema;
