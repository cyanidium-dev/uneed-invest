import InfoBox from "@/components/shared/box/InfoBox";
import { cn } from "@/utils/cn";

const BusinessStats = () => {
  const baseBoxStyles =
    "flex h-[154px] max-xl:max-w-[151px] flex-col justify-between xl:w-[223px] xl:h-[219px]";
  const baseValueStyles =
    "text-[56px] font-bold uppercase leading-none xl:text-[74px]";
  const baseDescriptionStyles =
    "font-manrope text-[12px] uppercase xl:text-[16px]";

  return (
    <ul className="relative mb-16 h-[348px] xl:absolute xl:left-[62px] xl:top-[170px]">
      <li className="absolute left-0 top-0 xl:left-[141px] xl:top-[158px]">
        <InfoBox
          variant="dark"
          className={cn(baseBoxStyles, "px-5 pb-5 pt-3 xl:p-9")}
        >
          <span className={baseValueStyles}>15+</span>
          <span className={baseDescriptionStyles}>
            працюючих об&apos;єктів в Києві
          </span>
        </InfoBox>
      </li>

      <li className="absolute right-0 top-[100px] xl:left-[391px] xl:top-3">
        <InfoBox
          variant="dark"
          className={cn(
            baseBoxStyles,
            "p-5 xl:px-[30px] xl:pb-[45px] xl:pt-[30px]"
          )}
        >
          <span className={cn(baseValueStyles, "text-[40px] xl:text-[58px]")}>
            5000+
          </span>
          <span className={baseDescriptionStyles}>задоволених клієнтів</span>
        </InfoBox>
      </li>

      <li className="absolute left-0 top-[200px] xl:-top-[80px] xl:left-[639px]">
        <InfoBox
          variant="dark"
          className={cn(baseBoxStyles, "px-5 pb-5 pt-3 xl:p-9")}
        >
          <span className={baseValueStyles}>8+</span>
          <span className={baseDescriptionStyles}>років стабільної роботи</span>
        </InfoBox>
      </li>
    </ul>
  );
};

export default BusinessStats;
