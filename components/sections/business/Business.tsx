import Circles from "@/components/shared/decor/Circles";
import Marquee from "@/components/shared/marquee/Marquee";

import BusinessGoals from "./BusinessGoals";
import BusinessStats from "./BusinessStats";

const Business = () => {
  return (
    <section className="relative h-[973px] overflow-hidden pb-[106px] pt-[65px] xl:h-[904px] xl:pt-[98px]">
      <div className="container relative flex h-full max-w-[400px] flex-col xl:max-w-[1280px] xl:flex-row xl:justify-between">
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
      </div>

      <Marquee className="absolute bottom-0 left-0" variant="dark" />
    </section>
  );
};

export default Business;
