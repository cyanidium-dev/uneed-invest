import Image from "next/image";

import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import InfoBox from "@/components/shared/box/InfoBox";
import Star from "@/components/shared/decor/Star";
import { fadeInAnimation } from "@/helpers/animation";
import { ROUTES } from "@/config/routes";

import ReviewList from "./ReviewList";

const Reviews = () => {
  return (
    <section id={ROUTES.REVIEWS.id} className="scroll-mt-20 py-10">
      <div className="container relative flex max-w-[420px] flex-col gap-[10px] xl:h-[510px] xl:max-w-[1280px] xl:flex-row xl:gap-5">
        <AnimatedList>
          <AnimatedListItem>
            <InfoBox
              variant="glass-dark"
              className="relative flex gap-4 p-5 xl:gap-8 xl:p-8"
            >
              <div className="relative h-[226px] w-[100px] shrink-0 xl:h-[446px] xl:w-[198px]">
                <Image
                  src="/images/reviews/reviews-main.webp"
                  alt="Фото"
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>

              <div className="ml-auto mt-auto min-w-0 max-xl:basis-[164px] xl:w-[256px]">
                <h2 className="mb-4 text-[24px] font-bold uppercase leading-none max-sm:text-[20px] xl:text-[32px]">
                  Приклади з життя
                </h2>
                <p className="font-manrope text-[12px] font-light leading-none xl:text-[16px]">
                  переглянь історії успіху наших франчайзі!
                </p>
              </div>

              <Star
                starClassName="absolute size-[74px] p-[10px] top-[44px] left-[99px] xl:size-[177px] xl:top-[121px] xl:left-[197px] xl:p-6"
                starVariant="dark"
              />

              <Star
                starClassName="absolute size-[46px] top-5 p-[6px] left-[177px] xl:size-[104px] xl:top-[53px] xl:left-[392px] xl:p-[15px]"
                starVariant="dark"
              />
            </InfoBox>
          </AnimatedListItem>
        </AnimatedList>

        <AnimatedWrapper
          animation={fadeInAnimation({ y: -30, delay: 1 })}
          className="pointer-events-none absolute -top-[150px] left-[110px] -z-[10] h-[491px] w-[537px] object-cover max-xl:hidden xl:block"
        >
          <Image
            src="/images/reviews/reviews-decor-desk.svg"
            alt="..."
            width={537}
            height={491}
            className="h-full w-full object-cover"
          />
        </AnimatedWrapper>

        <ReviewList />
      </div>
    </section>
  );
};

export default Reviews;
