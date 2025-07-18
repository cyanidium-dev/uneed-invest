import Image from "next/image";

import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import StarInfoBox from "@/components/shared/box/StarInfoBox";
import { fadeInAnimation } from "@/helpers/animation";
import { advantagesData } from "@/data/advantagesData";

const AdvantagesListDesk = () => {
  return (
    <div className="flex-row gap-5 max-xl:hidden xl:flex">
      <AnimatedWrapper
        animation={fadeInAnimation({ x: -50, delay: 0.3 })}
        className="flex w-[455px] flex-col gap-5"
      >
        <StarInfoBox text={advantagesData[0][0]} boxVariant="dark" />
        <StarInfoBox text={advantagesData[0][1]} boxVariant="dark" />

        <div className="relative h-[194px] w-[455px] shrink-0 overflow-hidden rounded-xl">
          <Image
            src="/images/advantages/advantages-2-desk.webp"
            alt="Фото інтер'єру"
            fill
            sizes="455px"
            className="object-cover"
          />
        </div>

        <StarInfoBox text={advantagesData[1][0]} boxVariant="dark" />
        <StarInfoBox text={advantagesData[1][1]} boxVariant="dark" />
      </AnimatedWrapper>

      <div className="w-[645px]">
        <AnimatedWrapper
          animation={fadeInAnimation({ y: 50, delay: 0.5 })}
          className="mb-5 flex gap-5"
        >
          <div className="relative h-[354px] w-[170px] shrink-0 overflow-hidden rounded-xl">
            <Image
              src="/images/advantages/advantages-1-desk.webp"
              alt="Фото інтер'єру"
              fill
              sizes="170px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-end gap-5">
            <StarInfoBox text={advantagesData[2][0]} boxVariant="dark" />
            <StarInfoBox text={advantagesData[2][1]} boxVariant="dark" />
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper
          animation={fadeInAnimation({ x: 50, delay: 0.8 })}
          className="relative h-[253px] w-[645px] shrink-0 overflow-hidden rounded-xl"
        >
          <Image
            src="/images/advantages/advantages-3-desk.webp"
            alt="Фото інтер'єру"
            fill
            sizes="645px"
            className="object-cover"
          />
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default AdvantagesListDesk;
