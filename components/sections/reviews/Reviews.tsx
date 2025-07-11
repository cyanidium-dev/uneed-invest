import InfoBox from "@/components/shared/box/InfoBox";
import Star from "@/components/shared/decor/Star";

import ReviewList from "./ReviewList";

const Reviews = () => {
  return (
    <section className="py-10">
      <div className="container flex max-w-[420px] flex-col gap-[10px] xl:h-[510px] xl:max-w-[1280px] xl:flex-row xl:gap-5">
        <InfoBox
          variant="glass-dark"
          className="relative flex gap-4 p-5 xl:gap-8 xl:p-8"
        >
          <div className="h-[226px] w-[100px] shrink-0 bg-[url('/images/reviews/reviews-main.webp')] bg-cover bg-no-repeat xl:h-[446px] xl:w-[198px]" />

          <div className="ml-auto mt-auto min-w-0 max-xl:basis-[164px] xl:w-[256px]">
            <h2 className="mb-4 text-[24px] font-bold uppercase leading-none max-sm:text-[20px] xl:text-[32px]">
              Приклади з життя
            </h2>
            <p className="font-manrope text-[12px] font-light leading-none xl:text-[16px]">
              переглянь історії успіху наших франчайзі!
            </p>
          </div>

          <Star
            starClassName="absolute size-[74px] top-[44px] left-[99px] xl:size-[177px] xl:top-[121px] xl:left-[197px]"
            starVariant="dark"
          />

          <Star
            starClassName="absolute size-[46px] top-5 left-[177px] xl:size-[104px] xl:top-[53px] xl:left-[392px]"
            starVariant="dark"
          />
        </InfoBox>

        <ReviewList />
      </div>
    </section>
  );
};

export default Reviews;
