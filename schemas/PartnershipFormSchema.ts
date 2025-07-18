"use client";

import { z } from "zod";

import { nameRegex, onlyDigitsRegex } from "@/regex/feedbackFormRegex";

import {
  NAME_LENGTH_VALIDATION,
  NAME_REGEX_VALIDATION,
  TEL_LENGTH_VALIDATION,
  TEL_REGEX_VALIDATION,
} from "./validationMessages";

const usePartnershipFormSchema = () => {
  const partnershipFormSchema = z.object({
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

  return partnershipFormSchema;
};

export type PartnershipFormSchema = z.infer<
  ReturnType<typeof usePartnershipFormSchema>
>;

export default usePartnershipFormSchema;
