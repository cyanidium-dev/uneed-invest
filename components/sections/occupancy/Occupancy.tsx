import InfoBox from "@/components/shared/box/InfoBox";
import Star from "@/components/shared/decor/Star";
import { cn } from "@/utils/cn";

const Occupancy = () => {
  const baseBox =
    "relative overflow-hidden flex h-[184px] flex-col justify-center px-6";
  const baseHeading = "mb-[18px] text-[18px] font-bold uppercase leading-none";
  const baseText = "font-manrope text-[12px] font-light leading-none";

  return (
    <section className="py-[74px]">
      <div className="container max-w-[500px]">
        <h2 className="mb-4 text-[24px] font-bold uppercase leading-none">
          Як ми забезпечуємо заповнюваність апартаментів
        </h2>

        <ul className="flex flex-col gap-4">
          <li>
            <InfoBox
              variant="glass"
              className={cn(
                baseBox,
                "justify-start bg-contain bg-no-repeat pt-6"
              )}
            >
              <h4 className={cn(baseHeading, "")}>Маркетингові Воронки</h4>
              <p className={cn(baseText, "")}>
                автоматизовані ланцюжки дотиків від першого інтересу до
                бронювання
              </p>

              <div className="absolute bottom-0 left-1/2 h-[73px] w-[92.5%] -translate-x-1/2 bg-[url('/images/occupancy/occupancy-1.webp')] bg-cover bg-no-repeat max-sm:h-[65px] xl:h-[106px]" />
            </InfoBox>
          </li>

          <li>
            <InfoBox variant="dark" className={cn(baseBox, "")}>
              <h4 className={cn(baseHeading, "w-[127px]")}>Платна реклама</h4>
              <p className={cn(baseText, "w-[180px]")}>
                професійний націлення в соцмережах, Google Ads та ремаркетинг
              </p>
              <div className="absolute right-0 top-0 h-[117px] w-[141px] bg-[url('/images/occupancy/occupancy-2-decor-top.webp')] bg-cover bg-no-repeat" />
              <div className="absolute bottom-0 right-0 h-[82px] w-[181px] bg-[url('/images/occupancy/occupancy-2-decor-bot.webp')] bg-cover bg-no-repeat" />
            </InfoBox>
          </li>

          <li className="flex gap-4">
            <InfoBox variant="glass" className={cn(baseBox, "text-center")}>
              <h4 className={cn(baseHeading, "")}>Робота з відгуками</h4>
              <p className={cn(baseText, "")}>
                активна модерація та підвищення рейтингів на Booking, Airbnb,
                Google
              </p>
            </InfoBox>

            <div className="h-[full] w-[102px] shrink-0 rounded-xl bg-[url('/images/occupancy/occupancy-3-mob.webp')] bg-cover bg-no-repeat" />
          </li>

          <li>
            <InfoBox variant="dark" className={cn(baseBox, "")}>
              <div className="ml-auto w-[160px] text-right">
                <h4 className={cn(baseHeading, "")}>
                  просування в Google-картах
                </h4>
                <p className={cn(baseText, "")}>
                  керуємо картками локацій, працюємо з гео-запитами
                </p>
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
              <h4 className={cn(baseHeading, "")}>Чат-боти для гостей</h4>
              <p className={cn(baseText, "")}>
                автоматичне підтвердження броні, відповіді на запитання, upsell
              </p>
            </InfoBox>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Occupancy;
