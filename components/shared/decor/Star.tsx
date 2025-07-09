import { Star as StarIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

import { StarVariant, starVariantClasses } from "./starVariants";

interface IStarProps {
  starVariant?: StarVariant;
  starClassName?: string;
}

const Star = ({ starClassName, starVariant = "light" }: IStarProps) => {
  return (
    <StarIcon
      className={cn(
        "size-6 shrink-0 rounded-full p-[2px] xl:size-10",
        starVariantClasses[starVariant],
        starClassName
      )}
    />
  );
};

export default Star;
