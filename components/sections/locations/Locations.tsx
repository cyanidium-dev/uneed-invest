import { ROUTES } from "@/config/routes";

import LocationList from "./LocationList";
import MoreLocations from "./MoreLocations";

const Locations = () => {
  return (
    <section
      id={ROUTES.LOCATIONS.id}
      className="relative overflow-hidden pb-[104px] pt-[46px] xl:pb-[130px] xl:pt-[206px]"
    >
      <div className="container relative z-[1] max-w-[500px] xl:max-w-[1280px]">
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

      <div className="absolute bottom-[200px] left-0 h-[345px] w-[222px] bg-[url('/images/locations/locations-decor-mob.webp')] bg-cover bg-no-repeat xl:hidden" />
      <div className="absolute left-1/4 top-[265px] h-[293px] w-[402px] bg-cover bg-no-repeat max-xl:hidden xl:bg-[url('/images/locations/locations-decor-top-desk.webp')]" />
      <div className="absolute bottom-[47px] left-0 h-[441px] w-[347px] bg-cover bg-no-repeat max-xl:hidden xl:bg-[url('/images/locations/locations-decor-bot-desk.webp')]" />
    </section>
  );
};

export default Locations;
