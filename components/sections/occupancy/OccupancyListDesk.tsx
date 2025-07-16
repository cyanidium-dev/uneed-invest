import InfoBox from "@/components/shared/box/InfoBox";
import Star from "@/components/shared/decor/Star";
import { cn } from "@/utils/cn";
import { occupancyData } from "@/data/occupancyData";

import { baseBox, baseHeading, baseText } from "./occupancyConfig";

const OccupancyListDesk = () => {
  const { chatbot, google, marketing, publicity, reviews } = occupancyData;

  return (
    <ul className="flex flex-col max-xl:hidden xl:gap-5">
      <li>
        <InfoBox
          variant="glass-dark"
          className={cn(
            baseBox,
            "justify-start bg-contain bg-no-repeat xl:absolute xl:right-20 xl:top-0 xl:h-[272px] xl:w-[455px] xl:p-9"
          )}
        >
          <p className={baseHeading}>{marketing.title}</p>
          <p className={baseText}>{marketing.description}</p>

          <div className="absolute bottom-0 left-1/2 w-[92.5%] -translate-x-1/2 bg-[url('/images/occupancy/occupancy-1.webp')] bg-cover bg-no-repeat xl:h-[106px]" />
        </InfoBox>
      </li>

      <li className="flex gap-5">
        <InfoBox
          variant="dark"
          className={cn(baseBox, "xl:h-[219px] xl:w-[360px]")}
        >
          <p className={cn(baseHeading, "w-[127px]")}>{publicity.title}</p>
          <p className={cn(baseText, "w-[180px]")}>{publicity.description}</p>
          <div className="absolute right-0 top-0 h-[128px] w-[155px] bg-[url('/images/occupancy/occupancy-2-decor-top.webp')] bg-cover bg-no-repeat" />
          <div className="absolute bottom-0 right-0 h-[90px] w-[199px] bg-[url('/images/occupancy/occupancy-2-decor-bot.webp')] bg-cover bg-no-repeat" />
        </InfoBox>

        <div className="h-[219px] w-[265px] rounded-xl bg-[url('/images/occupancy/occupancy-3-desk.webp')] bg-cover bg-no-repeat" />

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
      </li>

      <li className="flex gap-5">
        <div className="h-[219px] w-[550px] shrink-0 rounded-xl bg-[url('/images/occupancy/occupancy-5-desk.webp')] bg-cover bg-no-repeat" />

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
      </li>
    </ul>
  );
};
export default OccupancyListDesk;
