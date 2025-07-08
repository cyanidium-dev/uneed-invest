import StarInfoBox from "@/components/shared/box/StarInfoBox";
import BaseButton from "@/components/shared/buttons/BaseButton";

import LocationList from "./LocationList";
import MoreLocations from "./MoreLocations";

const Locations = () => {
  return (
    <section className="pb-[104px] pt-[46px] xl:pb-[130px] xl:pt-[117px]">
      <div className="container max-w-[500px] xl:max-w-[1280px]">
        <h2 className="mb-7 text-[32px] font-bold uppercase leading-none xl:mb-[21px] xl:text-[52px]">
          Наші працюючи локації
        </h2>

        <p className="mb-3 text-[18px] uppercase leading-none xl:text-[32px]">
          понад 15 об&apos;єктів
        </p>

        <div className="mb-[65px] flex items-center gap-4">
          <div className="size-3 rounded-full bg-accent xl:size-[26px]" />
          <span className="font-manrope text-[14px] font-light leading-[1.22] xl:text-[24px]">
            І це ще не все!
          </span>
        </div>

        <LocationList />

        <MoreLocations />
      </div>
    </section>
  );
};

export default Locations;
