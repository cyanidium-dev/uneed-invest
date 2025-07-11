import Image from "next/image";

import { reviewData } from "@/data/reviewData";

import InfoBox from "@/components/shared/box/InfoBox";
import Star from "@/components/shared/decor/Star";
import { cn } from "@/utils/cn";

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

        <ul className="flex h-[340px] gap-[10px] xl:h-full xl:gap-5">
          {reviewData.map(({ imgSrc, name, text }, index) => (
            <li
              key={index}
              className="relative overflow-hidden rounded-xl max-xl:basis-1/2 xl:w-[265px]"
            >
              <Image
                src={imgSrc}
                alt={name}
                className="-z-10 h-full w-full rounded-xl"
                objectFit="cover"
                fill
              />

              <div
                className={cn(
                  "absolute left-0 rounded-xl p-3 text-light backdrop-blur-[26px] xl:px-10 xl:py-8",
                  index % 2 === 0 ? "bottom-0" : "top-0"
                )}
                style={{
                  background: "#5A5A5A3D",
                  boxShadow: "inset 0px 4px 12.6px #00000040",
                }}
              >
                <p className="mb-2 font-bold uppercase leading-none xl:text-[20px]">
                  {name}
                </p>
                <p className="font-manrope text-[10px] font-light leading-[1.4] xl:text-[14px]">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews;
