import Image from "next/image";

import StarInfoBox from "@/components/shared/box/StarInfoBox";
import BaseButton from "@/components/shared/buttons/BaseButton";
import Marquee from "@/components/shared/marquee/Marquee";
import { cn } from "@/utils/cn";

import HeroInvestment from "./HeroInvestment";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-[100px] pt-[242px] xl:pt-[189px]">
      <div className="container relative z-10 flex max-w-[1280px] flex-col xl:flex-row xl:justify-between">
        <div className="max-w-[457px] max-xl:mx-auto max-xl:mb-[177px]">
          <StarInfoBox
            boxVariant="light"
            text="Твоя частка в майбутньому"
            boxClassName="max-xl:hidden mb-[47px] w-[387px]"
          />

          <h1 className="mb-4 text-[32px] font-bold uppercase leading-none max-xl:h-[148px] max-xl:text-center xl:mb-9 xl:text-[52px]">
            Інвестуйте в мережу подобової оренди житла
          </h1>
          <p className="mb-10 font-manrope font-light leading-[1.22] max-xl:text-center xl:mb-[70px] xl:text-[20px]">
            Бізнес з повною автоматизацією: без ресепшену, без черг, без суєти
          </p>

          <div className="flex flex-col gap-3 xl:flex-row xl:justify-between">
            <BaseButton variant="accent" className="xl:w-[204px]">
              Стати партнером
            </BaseButton>
            <BaseButton variant="light" className="xl:w-[233px]">
              Отримати презентацію
            </BaseButton>
          </div>
        </div>

        <Marquee
          className={cn(
            "absolute max-xl:left-0 max-xl:top-[416px]",
            "xl:bottom-0 xl:left-0 xl:-rotate-90"
          )}
        />

        <HeroInvestment />
      </div>

      {/* <div className="absolute left-0 top-0 h-full w-full bg-[url('/images/hero/hero-bg-mob.webp')] bg-cover bg-no-repeat xl:w-1/2 xl:bg-[url('/images/hero/hero-bg-desk.webp')]" /> */}
      <div className="absolute left-0 top-0 h-full w-full xl:w-1/2">
        <Image
          src="/images/hero/hero-bg-mob.webp"
          alt="Hero background mobile"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 1279px) 100vw, 50vw"
          className="object-cover object-top xl:hidden"
        />
        <Image
          src="/images/hero/hero-bg-desk.webp"
          alt="Hero background desktop"
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 1280px) 50vw"
          className="hidden object-cover xl:block"
        />
      </div>

      <div className="absolute -bottom-[200px] left-0 h-[380px] w-[183px] bg-[url('/images/hero/hero-decor-mob.webp')] bg-cover bg-no-repeat xl:hidden" />
      <div className="absolute right-0 top-0 h-[356px] w-[378px] bg-cover bg-no-repeat max-xl:hidden xl:bg-[url('/images/hero/hero-decor-top-desk.webp')]" />
      <div className="absolute bottom-0 right-[23%] h-[306px] w-[799px] bg-cover bg-no-repeat max-xl:hidden xl:bg-[url('/images/hero/hero-decor-bot-desk.webp')]" />
    </section>
  );
};

export default Hero;
