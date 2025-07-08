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
}

const StarInfoBox = ({
  text,
  boxVariant,
  boxClassName = "",
  starVariant = "light",
  starClassName = "",
}: IStarInfoBoxProps) => {
  return (
    <InfoBox
      variant={boxVariant}
      className={cn(
        "flex items-center gap-4 p-4 xl:gap-5 xl:px-[18px] xl:py-6",
        boxClassName
      )}
    >
      <Star
        className={cn(
          "rounded-full p-[2px]",
          starVariantClasses[starVariant],
          starClassName
        )}
      />

      <p className="font-manrope text-[12px] font-semibold uppercase leading-none xl:text-[16px]">
        {text}
      </p>
    </InfoBox>
  );
};

export default StarInfoBox;
