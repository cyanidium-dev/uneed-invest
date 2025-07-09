import InfoBox from "@/components/shared/box/InfoBox";
import Star from "@/components/shared/decor/Star";
import { cn } from "@/utils/cn";

const OccupancyListDesk = () => {
  const baseBox =
    "relative overflow-hidden flex h-[184px] flex-col justify-center px-6";
  const baseHeading =
    "mb-[18px] text-[18px] font-bold uppercase leading-none xl:text-[24px]";
  const baseText =
    "font-manrope text-[12px] font-light leading-none xl:text-[16px]";

  return (
    <ul className="flex flex-col gap-4 max-xl:hidden xl:gap-5">
      <li>
        <InfoBox
          variant="glass"
          className={cn(
            baseBox,
            "justify-start bg-contain bg-no-repeat max-xl:pt-6 xl:absolute xl:right-20 xl:top-0 xl:h-[272px] xl:w-[455px] xl:p-9"
          )}
        >
          <h4 className={cn(baseHeading, "")}>Маркетингові Воронки</h4>
          <p className={cn(baseText, "")}>
            автоматизовані ланцюжки дотиків від першого інтересу до бронювання
          </p>

          <div className="absolute bottom-0 left-1/2 h-[73px] w-[92.5%] -translate-x-1/2 bg-[url('/images/occupancy/occupancy-1.webp')] bg-cover bg-no-repeat max-sm:h-[65px] xl:h-[106px]" />
        </InfoBox>
      </li>

      <div className="flex gap-5">
        <li>
          <InfoBox
            variant="dark"
            className={cn(baseBox, "xl:h-[219px] xl:w-[360px]")}
          >
            <h4 className={cn(baseHeading, "w-[127px]")}>Платна реклама</h4>
            <p className={cn(baseText, "w-[180px]")}>
              професійний націлення в соцмережах, Google Ads та ремаркетинг
            </p>
            <div className="absolute right-0 top-0 h-[117px] w-[141px] bg-[url('/images/occupancy/occupancy-2-decor-top.webp')] bg-cover bg-no-repeat" />
            <div className="absolute bottom-0 right-0 h-[82px] w-[181px] bg-[url('/images/occupancy/occupancy-2-decor-bot.webp')] bg-cover bg-no-repeat" />
          </InfoBox>
        </li>

        <li>
          <div className="h-[219px] w-[265px] rounded-xl bg-[url('/images/occupancy/occupancy-3-desk.webp')] bg-cover bg-no-repeat" />
        </li>

        <li>
          <InfoBox
            variant="dark"
            className={cn(baseBox, "xl:h-[219px] xl:w-[455px]")}
          >
            <div className="ml-auto w-[160px] text-right">
              <h4 className={cn(baseHeading, "")}>
                просування в Google-картах
              </h4>
              <p className={cn(baseText, "")}>
                керуємо картками локацій, працюємо з гео-запитами
              </p>
            </div>

            <Star
              starClassName="absolute top-1/2 -translate-y-1/2 size-[147px] p-6 -left-[47px] xl:size-[188px]"
              starVariant="dark"
            />
          </InfoBox>
        </li>
      </div>

      <div className="flex gap-5">
        <li>
          <div className="h-[219px] w-[550px] shrink-0 rounded-xl bg-[url('/images/occupancy/occupancy-5-desk.webp')] bg-cover bg-no-repeat" />
        </li>

        <li className="flex gap-4">
          <InfoBox
            variant="glass"
            className={cn(baseBox, "text-center xl:h-[219px] xl:w-[265px]")}
          >
            <h4 className={cn(baseHeading, "")}>Робота з відгуками</h4>
            <p className={cn(baseText, "")}>
              активна модерація та підвищення рейтингів на Booking, Airbnb,
              Google
            </p>
          </InfoBox>

          {/* <div className="h-[full] w-[102px] shrink-0 rounded-xl bg-[url('/images/occupancy/occupancy-3-mob.webp')] bg-cover bg-no-repeat xl:hidden" /> */}
        </li>

        <li className="flex gap-4">
          {/* <div className="h-[full] w-[102px] shrink-0 rounded-xl bg-[url('/images/occupancy/occupancy-5-mob.webp')] bg-cover bg-no-repeat" /> */}

          <InfoBox
            variant="dark"
            className={cn(baseBox, "text-center xl:h-[219px] xl:w-[265px]")}
          >
            <h4 className={cn(baseHeading, "")}>Чат-боти для гостей</h4>
            <p className={cn(baseText, "")}>
              автоматичне підтвердження броні, відповіді на запитання, upsell
            </p>
          </InfoBox>
        </li>
      </div>
    </ul>
  );
};
export default OccupancyListDesk;
