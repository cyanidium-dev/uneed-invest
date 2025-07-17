import Image from "next/image";

import Marquee from "@/components/shared/marquee/Marquee";

import AdvantagesListDesk from "./AdvantagesListDesk";
import AdvantagesListMob from "./AdvantagesListMob";

const Advantages = () => {
  return (
    <section className="relative overflow-hidden pb-[118px] pt-[74px] xl:pb-[191px] xl:pt-[133px]">
      <div className="container relative z-[1] max-w-[500px] xl:max-w-[1280px]">
        <h2 className="mb-6 w-[210px] text-[24px] font-bold uppercase leading-none xl:absolute xl:right-20 xl:top-0 xl:w-[455px] xl:text-[52px]">
          Переваги нашої моделі
        </h2>

        <AdvantagesListMob />

        <AdvantagesListDesk />
      </div>

      <Marquee className="absolute bottom-0 left-0" />

      <Image
        src="/images/advantages/advantages-decor-top-mob.webp"
        alt="декоративне зображення"
        width={248}
        height={361}
        fetchPriority="low"
        className="absolute -top-[250px] left-0 object-cover xl:hidden"
      />
      <Image
        src="/images/advantages/advantages-decor-bot-mob.webp"
        alt="декоративне зображення"
        width={233}
        height={490}
        fetchPriority="low"
        className="absolute bottom-[80px] right-0 object-cover xl:hidden"
      />
      <Image
        src="/images/advantages/advantages-decor-desk.webp"
        alt="декоративне зображення"
        width={254}
        height={496}
        fetchPriority="low"
        className="absolute right-0 top-0 object-cover max-xl:hidden"
      />
    </section>
  );
};

export default Advantages;
