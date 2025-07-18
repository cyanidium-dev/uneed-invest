import Image from "next/image";

import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import InfoBox from "@/components/shared/box/InfoBox";
import Star from "@/components/shared/decor/Star";
import { cn } from "@/utils/cn";
import { occupancyData } from "@/data/occupancyData";

import { baseBox, baseHeading, baseText } from "./occupancyConfig";

const OccupancyListDesk = () => {
  const { chatbot, google, marketing, publicity, reviews } = occupancyData;

  return (
    <AnimatedList className="flex flex-col max-xl:hidden xl:gap-5">
      <AnimatedListItem className="xl:absolute xl:right-20 xl:top-0">
        <InfoBox
          variant="glass-dark"
          className={cn(
            baseBox,
            "justify-start bg-contain bg-no-repeat xl:h-[272px] xl:w-[455px] xl:p-9"
          )}
        >
          <p className={baseHeading}>{marketing.title}</p>
          <p className={baseText}>{marketing.description}</p>

          <div className="absolute bottom-0 left-1/2 w-[92.5%] -translate-x-1/2 bg-[url('/images/occupancy/occupancy-1.webp')] bg-cover bg-no-repeat xl:h-[106px]" />
        </InfoBox>
      </AnimatedListItem>

      <AnimatedListItem className="flex gap-5 xl:mt-5">
        <InfoBox
          variant="dark"
          className={cn(baseBox, "xl:h-[219px] xl:w-[360px]")}
        >
          <p className={cn(baseHeading, "w-[127px]")}>{publicity.title}</p>
          <p className={cn(baseText, "w-[180px]")}>{publicity.description}</p>
          <div className="absolute right-0 top-0 h-[128px] w-[155px]">
            <Image
              src="/images/occupancy/occupancy-2-decor-top.webp"
              alt="Декор верх occupancy"
              fill
              sizes="155px"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-0 h-[90px] w-[199px]">
            <Image
              src="/images/occupancy/occupancy-2-decor-bot.webp"
              alt="Декор низ occupancy"
              fill
              sizes="199px"
              className="object-cover"
            />
          </div>
        </InfoBox>

        <Image
          src="/images/occupancy/occupancy-3-desk.webp"
          alt="Фото приміщення"
          width={265}
          height={219}
          className="rounded-xl"
        />

        <InfoBox
          variant="dark"
          className={cn(baseBox, "xl:h-[219px] xl:w-[455px]")}
        >
          <div className="ml-auto w-[160px] text-right">
            <p className={baseHeading}>{google.title}</p>
            <p className={baseText}>{google.description}</p>
          </div>

          <Star
            starClassName="absolute top-1/2 -translate-y-1/2 p-6 -left-[47px] xl:size-[188px]"
            starVariant="dark"
          />
        </InfoBox>
      </AnimatedListItem>

      <AnimatedListItem className="flex gap-5">
        <Image
          src="/images/occupancy/occupancy-5-desk.webp"
          alt="Фото приміщення"
          width={550}
          height={219}
          className="shrink-0 rounded-xl"
        />

        <InfoBox
          variant="glass-dark"
          className={cn(baseBox, "text-center xl:h-[219px] xl:w-[265px]")}
        >
          <p className={baseHeading}>{reviews.title}</p>
          <p className={baseText}>{reviews.description}</p>
        </InfoBox>

        <InfoBox
          variant="dark"
          className={cn(baseBox, "text-center xl:h-[219px] xl:w-[265px]")}
        >
          <p className={baseHeading}>{chatbot.title}</p>
          <p className={baseText}>{chatbot.description}</p>
        </InfoBox>
      </AnimatedListItem>
    </AnimatedList>
  );
};
export default OccupancyListDesk;
