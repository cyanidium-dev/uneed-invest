"use client";

import { Controller, useFormContext } from "react-hook-form";

import { Input } from "@heroui/input";

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
            label:
              "text-light font-manrope text-[12px] leading-[20px] font-light group-data-[filled-within=true]:text-light ",
            inputWrapper: "group-data-[focus=true]:border-accent-light",
            errorMessage: "absolute -bottom-[8px] left-0 text-[12px] ",
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
