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

      <div className="absolute -bottom-[30px] left-1/4 h-[417px] w-[482px] bg-cover bg-no-repeat max-xl:hidden xl:bg-[url('/images/occupancy/occupancy-decor-desk.webp')]" />
    </section>
  );
};

export default Occupancy;
