import Circles from "@/components/shared/decor/Circles";
import Marquee from "@/components/shared/marquee/Marquee";

import BusinessGoals from "./BusinessGoals";
import BusinessStats from "./BusinessStats";

const Business = () => {
  return (
    <section className="relative h-[973px] overflow-hidden pb-[106px] pt-[65px] xl:h-[904px] xl:pt-[98px]">
      <div className="container relative z-[1] flex h-full max-w-[450px] flex-col xl:max-w-[1280px] xl:flex-row xl:justify-between">
        <h2 className="text-[24px] font-bold uppercase leading-none max-xl:mb-6 max-xl:max-w-[320px] xl:w-[390px] xl:shrink-0 xl:text-[50px]">
          Ми будуємо більше,
          <br />
          ніж бізнес
        </h2>

        <div className="max-xl:hidden xl:absolute xl:left-20 xl:top-[190px] xl:block">
          <Circles />
        </div>

        <BusinessStats />

        <BusinessGoals />

        <div className="absolute -top-[160px] left-[275px] -z-[1] h-[943px] w-[1116px] bg-cover bg-no-repeat max-xl:hidden xl:bg-[url('/images/business/business-decor-desk.svg')]" />
      </div>

      <Marquee className="absolute bottom-0 left-0" variant="dark" />

      <div className="absolute right-0 top-[36px] h-[361px] w-[151px] bg-[url('/images/business/business-decor-top-mob.svg')] bg-cover bg-no-repeat xl:hidden" />
      <div className="absolute bottom-[154px] left-0 h-[605px] w-[209px] bg-[url('/images/business/business-decor-bot-mob.svg')] bg-cover bg-no-repeat xl:hidden" />
      <div className="absolute left-1/2 top-[172px] h-[435px] w-[141px] -translate-x-1/2 bg-[url('/images/business/business-line-mob.svg')] bg-cover bg-no-repeat xl:hidden" />
    </section>
  );
};

export default Business;
