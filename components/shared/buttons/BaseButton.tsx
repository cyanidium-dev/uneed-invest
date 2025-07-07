"use client";

import type { ReactNode } from "react";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { cn } from "@/utils/cn";

interface IBaseButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "accent" | "light";
  className?: string;
}

const BaseButton = ({
  children,
  href,
  variant = "accent",
  className,
  ...rest
}: IBaseButtonProps) => {
  const Component = href ? Link : "button";

  const buttonStyles = cn(
    "font-helvetica text-[12px] font-bold uppercase leading-[20px] h-[50px]",
    variant === "accent" && "bg-accent text-light",
    variant === "light" && "bg-light text-dark",
    className
  );

  return (
    <Button
      as={Component}
      radius="full"
      href={href}
      {...rest}
      className={buttonStyles}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
