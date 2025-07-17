"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Input } from "@heroui/input";

import { cn } from "@/utils/cn";

interface IFormFieldProps {
  label: string;
  name: string;
  type: string;
}

const FormField = ({ label, name, type }: IFormFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Input
          classNames={{
            base: "relative",
            label: cn(
              "text-light font-manrope text-[12px] leading-[20px] font-light group-data-[filled-within=true]:text-light",
              fieldState.error && "!text-error"
            ),
            inputWrapper: cn(
              "group-data-[focus=true]:border-accent-light",
              fieldState.error &&
                "!border-error group-data-[focus=true]:!border-error"
            ),
            input: cn(
              fieldState.error &&
                "!text-error group-data-[focus=true]:!text-error"
            ),
            helperWrapper: "absolute -bottom-[20px] left-0",
            errorMessage: "text-[12px] text-error",
          }}
          {...field}
          label={label}
          name={name}
          type={type}
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
