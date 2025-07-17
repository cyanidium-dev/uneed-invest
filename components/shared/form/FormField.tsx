"use client";

import {
  Controller,
  ControllerFieldState,
  useFormContext,
} from "react-hook-form";

import { Input } from "@heroui/input";

import { cn } from "@/utils/cn";

type inputVariants = "dark" | "light";

interface IFormFieldProps {
  label: string;
  name: string;
  type: string;
  variant?: inputVariants;
}

const FormField = ({
  label,
  name,
  type,
  variant = "light",
}: IFormFieldProps) => {
  const { control } = useFormContext();

  const mergeClasses = (
    fieldState: ControllerFieldState,
    variant: inputVariants
  ) => {
    const classNames = {
      base: "relative",
      label: cn(
        "font-manrope text-[12px] leading-[20px] font-light",
        variant === "light" &&
          "text-light group-data-[filled-within=true]:text-light",
        variant === "dark" &&
          "text-dark group-data-[filled-within=true]:text-dark",
        fieldState.error && "!text-error"
      ),
      inputWrapper: cn(
        "",
        variant === "light" && "group-data-[focus=true]:border-accent-light",
        variant === "dark" &&
          "border-dark group-data-[focus=true]:border-accent",
        fieldState.error &&
          "!border-error group-data-[focus=true]:!border-error"
      ),
      input: cn(
        fieldState.error && "!text-error group-data-[focus=true]:!text-error"
      ),
      helperWrapper: "absolute -bottom-[20px] left-0",
      errorMessage: "text-[12px] text-error",
    };

    return classNames;
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Input
          classNames={mergeClasses(fieldState, variant)}
          {...field}
          label={label}
          name={name}
          type={type}
          data-variant={variant}
          variant="bordered"
          radius="full"
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          ref={field.ref}
          errorMessage={fieldState.error?.message}
          isInvalid={!!fieldState.error}
        />
      )}
    />
  );
};

export default FormField;
