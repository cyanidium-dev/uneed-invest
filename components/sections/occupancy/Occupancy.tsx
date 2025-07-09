import OccupancyListDesk from "./OccupancyListDesk";
import OccupancyListMob from "./OccupancyListMob";

const Occupancy = () => {
  return (
    <section className="py-[74px] xl:pb-[144px] xl:pt-[126px]">
      <div className="container relative max-w-[500px] xl:max-w-[1280px]">
        <h2 className="mb-4 text-[24px] font-bold uppercase leading-none xl:mb-16 xl:w-[528px] xl:text-[52px]">
          Як ми забезпечуємо заповнюваність апартаментів
        </h2>

        <OccupancyListMob />

        <OccupancyListDesk />
      </div>
    </section>
  );
};

export default Occupancy;
