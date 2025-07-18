import Image from "next/image";

import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import Circles from "@/components/shared/decor/Circles";
import Marquee from "@/components/shared/marquee/Marquee";
import { fadeInAnimation } from "@/helpers/animation";

import BusinessGoals from "./BusinessGoals";
import BusinessStats from "./BusinessStats";

const Business = () => {
  return (
    <section className="relative h-[973px] overflow-hidden pb-[106px] pt-[65px] xl:h-[904px] xl:pt-[98px]">
      <div className="container relative z-[1] flex h-full max-w-[450px] flex-col xl:max-w-[1280px] xl:flex-row xl:justify-between">
        <AnimatedWrapper animation={fadeInAnimation({ x: -50 })}>
          <h2 className="text-[24px] font-bold uppercase leading-none max-xl:mb-6 max-xl:max-w-[320px] xl:w-[390px] xl:shrink-0 xl:text-[50px]">
            Ми будуємо більше,
            <br />
            ніж бізнес
          </h2>

          <div className="max-xl:hidden xl:absolute xl:left-0 xl:top-[190px] xl:block">
            <Circles />
          </div>
        </AnimatedWrapper>

        <BusinessStats />

        <BusinessGoals />

        <AnimatedWrapper
          animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
          className="absolute -top-[160px] left-[275px] -z-[1] h-[943px] w-[1116px] object-cover max-xl:hidden"
        >
          <Image
            src="/images/business/business-decor-desk.svg"
            alt="Декоративне зображення"
            width={1116}
            height={943}
          />
        </AnimatedWrapper>
      </div>
      <Marquee className="absolute bottom-0 left-0" variant="dark" />

      <AnimatedWrapper
        animation={fadeInAnimation({ x: 50, scale: 0.8, delay: 0.3 })}
        className="absolute right-0 top-[36px] object-cover xl:hidden"
      >
        <Image
          src="/images/business/business-decor-top-mob.svg"
          alt="Декоративне зображення"
          width={151}
          height={361}
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ y: 50, scale: 0.8, delay: 0.8 })}
        className="absolute bottom-[154px] left-0 object-cover xl:hidden"
      >
        <Image
          src="/images/business/business-decor-bot-mob.svg"
          alt="Декоративне зображення"
          width={209}
          height={605}
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.5 })}
        className="absolute left-[calc(50%_-_70px)] top-[172px] object-cover xl:hidden"
      >
        <Image
          src="/images/business/business-line-mob.svg"
          alt="Декоративне зображення"
          width={141}
          height={435}
        />
      </AnimatedWrapper>
    </section>
  );
};

export default Business;
