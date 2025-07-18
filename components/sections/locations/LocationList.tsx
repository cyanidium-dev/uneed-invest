import Image from "next/image";

import { ArrowIcon } from "@/components/icons";
import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import InfoBox from "@/components/shared/box/InfoBox";
import BaseButton from "@/components/shared/buttons/BaseButton";
import { locationData } from "@/data/locationData";

const LocationList = () => {
  return (
    <AnimatedList className="mb-[62px] grid gap-4 xl:grid-cols-2">
      <li className="hidden xl:block" aria-hidden="true" />

      {locationData.map(
        ({ address, boxVariant, imgUrl, href, place }, index) => (
          <AnimatedListItem key={index}>
            <InfoBox
              variant={boxVariant}
              className="relative flex gap-4 p-4 xl:p-[18px] xl:pr-6"
            >
              <Image
                src={imgUrl}
                alt={`Фото локації за адресою ${address}`}
                className="h-[80px] w-[102px] rounded-md xl:h-[129px] xl:w-[165px]"
              />

              <div className="flex flex-col gap-4 xl:justify-center xl:gap-[18px]">
                <p className="text-[18px] font-bold uppercase leading-none xl:w-[210px] xl:text-[24px]">
                  {place}
                </p>
                <p className="w-[130px] font-manrope text-[12px] font-light leading-none xl:w-[204px] xl:text-[16px]">
                  {address}
                </p>
              </div>

              {href && (
                <BaseButton
                  href={href}
                  variant="footer-nav"
                  className="absolute bottom-5 right-5 size-8 rounded-full bg-light p-[6px] xl:bottom-[44.5px] xl:right-6 xl:size-[78px] xl:p-6"
                >
                  <ArrowIcon className="size-5 xl:bottom-[44.5px] xl:size-[78px]" />
                </BaseButton>
              )}
            </InfoBox>
          </AnimatedListItem>
        )
      )}
    </AnimatedList>
  );
};

export default LocationList;
