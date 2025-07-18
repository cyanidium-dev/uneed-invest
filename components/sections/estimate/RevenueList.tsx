import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import InfoBox from "@/components/shared/box/InfoBox";
import Circles from "@/components/shared/decor/Circles";
import { fadeInAnimation } from "@/helpers/animation";
import { revenueData } from "@/data/revenueData";

const RevenueList = () => {
  return (
    <div className="xl:relative xl:w-[534px] xl:shrink-0">
      <AnimatedWrapper animation={fadeInAnimation({ x: 50, delay: 0.5 })}>
        <h2 className="mx-auto mb-7 text-center text-[24px] font-bold uppercase leading-[1.22] max-xl:w-[320px] max-sm:w-[280px] xl:mb-[115px] xl:text-right xl:text-[46px]">
          Який прибуток ви отримаєте?
        </h2>

        <div className="hidden xl:absolute xl:left-[57px] xl:top-[84px] xl:block">
          <Circles color="bg-light" />
        </div>
      </AnimatedWrapper>

      <AnimatedList className="flex flex-col gap-4 xl:gap-7">
        {revenueData.map(({ value, unit, description }, i) => (
          <AnimatedListItem key={i}>
            <InfoBox className="flex h-[151px] flex-col items-center justify-center gap-6 xl:h-[225px] xl:gap-5">
              <p className="text-[40px] font-bold uppercase leading-none xl:text-[78px]">
                <span>{value}</span>{" "}
                <span className="text-[16px] xl:text-[24px]">{unit}</span>
              </p>
              <p className="font-manrope text-[14px] font-light leading-[1.22] xl:text-[20px]">
                {description}
              </p>
            </InfoBox>
          </AnimatedListItem>
        ))}
      </AnimatedList>
    </div>
  );
};
export default RevenueList;
