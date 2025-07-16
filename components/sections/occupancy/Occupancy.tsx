import Image from "next/image";

import OccupancyListDesk from "./OccupancyListDesk";
import OccupancyListMob from "./OccupancyListMob";

const Occupancy = () => {
  return (
    <section className="relative overflow-hidden py-[74px] xl:pb-[144px] xl:pt-[126px]">
      <div className="container relative z-[1] max-w-[500px] xl:max-w-[1280px]">
        <h2 className="mb-4 text-[24px] font-bold uppercase leading-none xl:mb-16 xl:w-[528px] xl:text-[52px]">
          Як ми забезпечуємо заповнюваність апартаментів
        </h2>

        <OccupancyListMob />

        <OccupancyListDesk />
      </div>

      <Image
        src="/images/occupancy/occupancy-decor-desk.webp"
        alt="Декоративне зображення"
        width={482}
        height={417}
        className="absolute -bottom-[30px] left-1/4 max-xl:hidden"
      />
    </section>
  );
};

export default Occupancy;
