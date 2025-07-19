import Image from "next/image";

import { StarIcon } from "@/components/icons";
import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import Marquee from "@/components/shared/marquee/Marquee";
import { fadeInAnimation } from "@/helpers/animation";
import { ROUTES } from "@/config/routes";

import FaqList from "./FaqList";

const Faq = () => {
  return (
    <section
      id={ROUTES.FAQ.id}
      className="relative scroll-mt-20 overflow-hidden pb-[113px] pt-10 xl:pb-[197px] xl:pt-[130px]"
    >
      <div className="container relative z-[10] max-w-[600px] xl:max-w-[1280px]">
        <AnimatedWrapper
          animation={fadeInAnimation({ x: -50 })}
          className="relative mb-6 overflow-hidden rounded-full bg-accent px-5 py-6 xl:mb-10 xl:p-11"
        >
          <h2 className="text-[18px] font-bold uppercase leading-[1.2] text-light xl:text-[48px]">
            Часті питання
          </h2>

          <StarIcon className="absolute -bottom-[15px] right-[101px] size-[44px] text-accent-light xl:-bottom-11 xl:right-[218px] xl:size-[100px]" />
          <StarIcon className="absolute right-[74px] top-[1px] size-[33px] text-accent-light xl:right-[158px] xl:top-0 xl:size-[73px]" />
          <StarIcon className="absolute -bottom-[5px] right-[43px] size-[44px] text-accent-light xl:-bottom-5 xl:right-[88px] xl:size-[100px]" />
          <StarIcon className="absolute -top-[8px] right-[11px] size-[55px] text-accent-light xl:-top-[22px] xl:right-[14px] xl:size-[124px]" />
          <StarIcon className="absolute -right-[2px] bottom-[1px] size-[33px] text-accent-light xl:-bottom-[6px] xl:-right-[15px] xl:size-[73px]" />
        </AnimatedWrapper>

        <AnimatedList>
          <AnimatedListItem>
            <FaqList />
          </AnimatedListItem>
        </AnimatedList>
      </div>

      {/* <AnimatedWrapper animation={fadeInAnimation({ x: 50, scale: 0.8 })}> */}
      <div className="absolute right-0 top-[450px] !-z-[1] h-[580px] w-[401px] object-cover max-xl:hidden">
        <Image
          src="/images/faq/faq-decor-desk.svg"
          alt="Декоративне зображення"
          fill
          sizes="401px"
        />
      </div>
      {/* </AnimatedWrapper> */}

      <Marquee className="absolute bottom-0 left-0" variant="dark" />
    </section>
  );
};

export default Faq;
