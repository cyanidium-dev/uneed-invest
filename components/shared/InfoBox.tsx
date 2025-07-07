import { ReactNode } from "react";

import { cn } from "@/utils/cn";

interface IInfoBoxProps {
  children: ReactNode;
  variant?: "accent" | "dark" | "light" | "glass";
  className?: string;
}

const InfoBox = ({ children, className, variant }: IInfoBoxProps) => {
  const boxStyles = cn(
    "rounded-xl",
    variant === "accent" && "bg-accent text-light",
    variant === "dark" && "bg-dark text-light",
    variant === "light" && "bg-light text-dark",
    variant === "glass" &&
      "bg-glass-bg backdrop-blur-glass shadow-inset-glass text-white",
    className
  );

  return <div className={boxStyles}>{children}</div>;
};

export default InfoBox;
