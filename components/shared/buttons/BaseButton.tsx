"use client";

import type { ReactNode } from "react";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { cn } from "@/utils/cn";

interface IBaseButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "accent" | "light" | "dark" | "transparent" | "nav";
  className?: string;
  onClick?: () => void;
}

const BaseButton = ({
  children,
  href,
  variant = "accent",
  className,
  onClick,
  ...rest
}: IBaseButtonProps) => {
  const Component = href ? Link : "button";

  const buttonStyles = cn(
    "font-helvetica text-[12px] font-bold uppercase leading-[20px] h-[50px]",
    variant === "accent" && "bg-accent text-light",
    variant === "light" && "bg-light text-dark",
    variant === "dark" && "bg-dark text-light",
    variant === "transparent" && "bg-transparent text-dark",
    variant === "nav" &&
      "bg-transparent h-8 text-dark min-w-fit px-2 font-manrope text-[14px] leading-[18px] tracking-[16%] xl:text-[14px] xl:font-medium xl:leading-[20px] xl:tracking-normal",

    className
  );

  return (
    <Button
      as={Component}
      radius="full"
      href={href}
      onPress={onClick}
      {...rest}
      className={buttonStyles}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
