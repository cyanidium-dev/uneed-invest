import { cn } from "@/utils/cn";

import Star from "../decor/Star";
import { StarVariant } from "../decor/starVariants";
import InfoBox from "./InfoBox";
import { BoxVariant } from "./boxVariants";

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
      <Star starVariant={starVariant} starClassName={starClassName} />

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
