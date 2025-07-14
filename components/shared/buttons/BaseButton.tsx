"use client";

import type { ReactNode } from "react";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { cn } from "@/utils/cn";

interface IBaseButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "accent" | "light" | "dark" | "transparent" | "nav" | "footer-nav";
  className?: string;
  onClick?: () => void;
  target?: "_blank" | "_self";
  rel?: string;
  ariaLabel?: string;
  isDisable?: boolean;
  type?: "button" | "submit" | "reset";
}

const isExternalLink = (href?: string) => {
  return href
    ? href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
    : false;
};

const BaseButton = ({
  children,
  href,
  variant = "accent",
  className,
  onClick,
  target,
  rel,
  ariaLabel,
  isDisable,
  type = "button",
  ...rest
}: IBaseButtonProps) => {
  const isExternal = isExternalLink(href);
  const Component = href ? (isExternal ? "a" : Link) : "button";

  const buttonStyles = cn(
    "font-helvetica text-[12px] rounded-full font-bold uppercase leading-[20px] h-[50px]",
    variant === "accent" && "bg-accent text-light",
    variant === "light" && "bg-light text-dark",
    variant === "dark" && "bg-dark text-light",
    variant === "transparent" && "bg-transparent text-dark",
    variant === "nav" &&
      "bg-transparent h-8 text-dark min-w-fit px-2 font-manrope text-[14px] leading-[18px] tracking-[16%] xl:text-[14px] xl:font-medium xl:leading-[20px] xl:tracking-normal",
    variant === "footer-nav" &&
      "bg-transparent h-8 text-light min-w-fit px-2 font-manrope font-normal text-[14px] leading-[18px] tracking-[16%] xl:text-[14px] xl:font-medium xl:leading-[20px] xl:tracking-normal xl:hover:text-accent xl:focus:text-accent",
    className
  );

  return (
    <Button
      as={Component}
      href={href}
      onPress={onClick}
      target={isExternal ? "_blank" : target}
      rel={isExternal ? "noopener noreferrer" : rel}
      className={buttonStyles}
      aria-label={ariaLabel}
      disabled={isDisable}
      type={type}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
