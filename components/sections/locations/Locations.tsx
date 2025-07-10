import { ROUTES } from "@/config/routes";

import LocationList from "./LocationList";
import MoreLocations from "./MoreLocations";

const Locations = () => {
  return (
    <section
      id={ROUTES.LOCATIONS.id}
      className="pb-[104px] pt-[46px] xl:pb-[130px] xl:pt-[206px]"
    >
      <div className="container relative max-w-[500px] xl:max-w-[1280px]">
        <div className="xl:absolute xl:-top-[90px]">
          <h2 className="mb-7 text-[32px] font-bold uppercase leading-none xl:mb-[21px] xl:w-[490px] xl:text-[52px]">
            Наші працюючі локації
          </h2>

          <p className="mb-3 text-[18px] uppercase leading-none xl:text-[32px]">
            понад 15 об&apos;єктів
          </p>

          <div className="mb-[65px] flex items-center gap-4 xl:absolute xl:-right-[290px] xl:top-[30px]">
            <div className="size-3 rounded-full bg-accent xl:size-[26px]" />
            <span className="font-manrope text-[14px] font-light leading-[1.22] xl:text-[24px]">
              І це ще не все!
            </span>
          </div>
        </div>

        <LocationList />

        <MoreLocations />
      </div>
    </section>
  );
};

export default Locations;
