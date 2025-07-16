import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import InfoBox from "@/components/shared/box/InfoBox";
import Circles from "@/components/shared/decor/Circles";
import { fadeInAnimation, listVariants } from "@/helpers/animation";
import { investmentOptions } from "@/data/investmentOptions";

const HeroInvestment = () => {
  return (
    <div className="max-xl:mx-auto max-xl:w-full max-xl:max-w-[330px] xl:w-[471px]">
      {investmentOptions.map(({ label, variant, items, decor }) => (
        <div key={label} className="mb-7 last:mb-0 xl:mb-8 xl:first:mt-[80px]">
          <AnimatedWrapper
            animation={fadeInAnimation({ x: 50, delay: 0.5 })}
            className="mb-3 flex items-center justify-between xl:mb-5"
          >
            {decor && <Circles />}

            <h2 className="text-[24px] font-bold uppercase leading-none xl:text-[36px]">
              {label}
            </h2>
          </AnimatedWrapper>

          <AnimatedList
            animation={listVariants({ staggerChildren: 0.5 })}
            className="flex justify-between"
          >
            {items.map((item, i) => (
              <AnimatedListItem key={i}>
                <InfoBox
                  className={
                    "px-[10px] py-5 text-center font-montserrat text-sm font-semibold uppercase leading-[20px] text-white xl:px-[15px] xl:py-[34px]"
                  }
                  variant={variant}
                >
                  {item.label && (
                    <span className="mr-1 text-[8px] font-semibold xl:text-[12px]">
                      {item.label}
                    </span>
                  )}
                  <span className="text-[16px] font-bold max-sm:text-[12px] xl:text-[24px]">
                    {item.value}
                  </span>
                  {item.description && (
                    <span className="ml-1 text-[8px] font-semibold xl:text-[12px]">
                      {item.description}
                    </span>
                  )}
                </InfoBox>
              </AnimatedListItem>
            ))}
          </AnimatedList>
        </div>
      ))}
    </div>
  );
};

export default HeroInvestment;
