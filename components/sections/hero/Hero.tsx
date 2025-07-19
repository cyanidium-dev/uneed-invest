// import TriggerPartnershipForm from "@/components/module/triggerForm/TriggerPartnershipForm";
// import TriggerPresentationForm from "@/components/module/triggerForm/TriggerPresentationForm";
import dynamic from "next/dynamic";

import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import StarInfoBox from "@/components/shared/box/StarInfoBox";
import Marquee from "@/components/shared/marquee/Marquee";
import { cn } from "@/utils/cn";
import { fadeInAnimation } from "@/helpers/animation";

import HeroImages from "./HeroImages";
import HeroInvestment from "./HeroInvestment";

const TriggerPartnershipForm = dynamic(
  () => import("@/components/module/triggerForm/TriggerPartnershipForm")
);
const TriggerPresentationForm = dynamic(
  () => import("@/components/module/triggerForm/TriggerPresentationForm")
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-[100px] pt-[242px] max-xl:h-[1100px] xl:pt-[189px]">
      <div className="container relative z-10 flex max-w-[1280px] flex-col xl:flex-row xl:justify-between">
        <div className="max-w-[457px] max-xl:mx-auto max-xl:mb-[177px]">
          <AnimatedWrapper animation={fadeInAnimation({ x: 50 })}>
            <StarInfoBox
              boxVariant="light"
              text="Твоя частка в майбутньому"
              boxClassName="max-xl:hidden mb-[47px] w-[387px]"
            />
          </AnimatedWrapper>

          <AnimatedWrapper animation={fadeInAnimation({ y: -50, delay: 0.2 })}>
            <h1 className="mb-4 text-[32px] font-bold uppercase leading-none max-xl:max-h-[148px] max-xl:text-center xl:mb-9 xl:text-[52px]">
              Інвестуйте в мережу подобової оренди житла
            </h1>
            <p className="mb-10 font-manrope font-light leading-[1.22] max-xl:text-center xl:mb-[70px] xl:text-[20px]">
              Бізнес з повною автоматизацією: без ресепшену, без черг, без суєти
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper
            animation={fadeInAnimation({ y: 50, delay: 0.4 })}
            className="flex flex-col gap-3 xl:flex-row xl:justify-between"
          >
            <div className="flex flex-col gap-3 xl:flex-row xl:justify-between">
              <TriggerPartnershipForm />

              <TriggerPresentationForm />
            </div>
          </AnimatedWrapper>
        </div>

        <Marquee
          className={cn(
            "absolute max-xl:left-0 max-xl:top-[55%]",
            "xl:-left-[2550px] xl:top-0 xl:-rotate-90"
          )}
        />

        <HeroInvestment />
      </div>

      <HeroImages />
    </section>
  );
};

export default Hero;
