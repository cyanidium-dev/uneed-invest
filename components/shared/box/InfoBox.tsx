import { ReactNode } from "react";

import {
  BoxVariant,
  boxVariantClasses,
} from "@/components/shared/box/boxVariants";
import { cn } from "@/utils/cn";

interface IInfoBoxProps {
  children: ReactNode;
  variant?: BoxVariant;
  className?: string;
}

const InfoBox = ({
  children,
  className,
  variant = "accent",
}: IInfoBoxProps) => {
  return (
    <div className={cn("rounded-xl", boxVariantClasses[variant], className)}>
      {children}
    </div>
  );
};

export default InfoBox;
