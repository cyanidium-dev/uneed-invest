import { Star } from "@/components/icons";
import { cn } from "@/utils/cn";

import InfoBox from "./InfoBox";
import { BoxVariant, StarVariant, starVariantClasses } from "./boxVariants";

interface IStarInfoBoxProps {
  text: string;
  boxVariant?: BoxVariant;
  boxClassName?: string;
  starVariant?: StarVariant;
  starClassName?: string;
  textSize?: "sm" | "xl";
}

const StarInfoBox = ({
  text,
  boxVariant,
  boxClassName = "",
  starVariant = "light",
  starClassName = "",
  textSize = "xl",
}: IStarInfoBoxProps) => {
  return (
    <InfoBox
      variant={boxVariant}
      className={cn(
        "flex items-center gap-4 p-[18px] xl:gap-5 xl:px-[18px] xl:py-6",
        boxClassName
      )}
    >
      <Star
        className={cn(
          "size-6 shrink-0 rounded-full p-[2px] xl:size-10",
          starVariantClasses[starVariant],
          starClassName
        )}
      />

      <p
        className={cn(
          "font-manrope text-[12px] font-semibold uppercase leading-none",
          textSize === "xl" ? "xl:text-[16px]" : "xl:text-[12px]"
        )}
      >
        {text}
      </p>
    </InfoBox>
  );
};

export default StarInfoBox;
