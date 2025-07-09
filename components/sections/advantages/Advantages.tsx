import Marquee from "@/components/shared/marquee/Marquee";

import AdvantagesListDesk from "./AdvantagesListDesk";
import AdvantagesListMob from "./AdvantagesListMob";

const Advantages = () => {
  return (
    <section className="relative pb-[118px] pt-[74px] xl:pb-[191px] xl:pt-[133px]">
      <div className="container relative max-w-[500px] xl:max-w-[1280px]">
        <h2 className="mb-6 w-[210px] text-[24px] font-bold uppercase leading-none xl:absolute xl:right-20 xl:top-0 xl:w-[455px] xl:text-[52px]">
          Переваги нашої моделі
        </h2>

        <AdvantagesListMob />

        <AdvantagesListDesk />
      </div>

      <Marquee className="absolute bottom-0 left-0" />
    </section>
  );
};

export default Advantages;
