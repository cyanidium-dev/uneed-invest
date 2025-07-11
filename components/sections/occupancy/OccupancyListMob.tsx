import InfoBox from "@/components/shared/box/InfoBox";
import Star from "@/components/shared/decor/Star";
import { cn } from "@/utils/cn";
import { occupancyData } from "@/data/occupancyData";

import { baseBox, baseHeading, baseText } from "./occupancyConfig";

const OccupancyListMob = () => {
  const { chatbot, google, marketing, publicity, reviews } = occupancyData;

  return (
    <ul className="flex flex-col gap-4 xl:hidden">
      <li>
        <InfoBox
          variant="glass-dark"
          className={cn(
            baseBox,
            "justify-start bg-contain bg-no-repeat max-xl:pt-6"
          )}
        >
          <h4 className={baseHeading}>{marketing.title}</h4>
          <p className={baseText}>{marketing.description}</p>

          <div className="absolute bottom-0 left-1/2 h-[73px] w-[92.5%] -translate-x-1/2 bg-[url('/images/occupancy/occupancy-1.webp')] bg-cover bg-no-repeat max-sm:h-[65px]" />
        </InfoBox>
      </li>

      <li>
        <InfoBox variant="dark" className={baseBox}>
          <h4 className={cn(baseHeading, "w-[127px]")}>{publicity.title}</h4>
          <p className={cn(baseText, "w-[180px]")}>{publicity.description}</p>
          <div className="absolute right-0 top-0 h-[117px] w-[141px] bg-[url('/images/occupancy/occupancy-2-decor-top.webp')] bg-cover bg-no-repeat" />
          <div className="absolute bottom-0 right-0 h-[82px] w-[181px] bg-[url('/images/occupancy/occupancy-2-decor-bot.webp')] bg-cover bg-no-repeat" />
        </InfoBox>
      </li>

      <li className="flex gap-4">
        <InfoBox variant="glass-dark" className={cn(baseBox, "text-center")}>
          <h4 className={baseHeading}>{reviews.title}</h4>
          <p className={baseText}>{reviews.description}</p>
        </InfoBox>

        <div className="h-[full] w-[102px] shrink-0 rounded-xl bg-[url('/images/occupancy/occupancy-3-mob.webp')] bg-cover bg-no-repeat" />
      </li>

      <li>
        <InfoBox variant="dark" className={baseBox}>
          <div className="ml-auto w-[160px] text-right">
            <h4 className={baseHeading}>{google.title}</h4>
            <p className={baseText}>{google.description}</p>
          </div>

          <Star
            starClassName="absolute top-1/2 -translate-y-1/2 size-[147px] p-6 -left-[47px]"
            starVariant="dark"
          />
        </InfoBox>
      </li>

      <li className="flex gap-4">
        <div className="h-[full] w-[102px] shrink-0 rounded-xl bg-[url('/images/occupancy/occupancy-5-mob.webp')] bg-cover bg-no-repeat" />

        <InfoBox variant="dark" className={cn(baseBox, "text-center")}>
          <h4 className={baseHeading}>{chatbot.title}</h4>
          <p className={baseText}>{chatbot.description}</p>
        </InfoBox>
      </li>
    </ul>
  );
};
export default OccupancyListMob;
