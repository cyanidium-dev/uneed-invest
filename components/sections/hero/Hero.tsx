import BaseButton from "@/components/shared/buttons/BaseButton";

import HeroInvestment from "./HeroInvestment";

const Hero = () => {
  return (
    <section className="bg-gray-300 pb-[100px] pt-[242px] xl:pt-[189px]">
      <div className="container flex max-w-[1280px] flex-col xl:flex-row">
        <div className="max-w-[457px] max-xl:mx-auto">
          <h1 className="mb-4 text-[32px] font-bold uppercase leading-none max-xl:text-center xl:mb-9 xl:text-[52px]">
            Інвестуйте в мережу подобової оренди житла
          </h1>
          <p className="font-manrope mb-10 font-light leading-[1.22] max-xl:text-center xl:mb-[70px] xl:text-[20px]">
            Бізнес з повною автоматизацією: без ресепшену, без черг, без суєти
          </p>

          <div className="mb-16 flex flex-col gap-3 xl:flex-row xl:justify-between">
            <BaseButton variant="accent" className="xl:w-[204px]">
              Стати партнером
            </BaseButton>
            <BaseButton variant="light" className="xl:w-[233px]">
              Отримати презентацію
            </BaseButton>
          </div>
        </div>

        <HeroInvestment />
      </div>
    </section>
  );
};

export default Hero;
