import Image from "next/image";

import TriggerFeedbackForm from "@/components/module/triggerForm/TriggerFeedbackForm";
import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import Star from "@/components/shared/decor/Star";
import { fadeInAnimation } from "@/helpers/animation";

const MidCTA = () => {
  return (
    <section className="overflow-hidden bg-accent py-10 text-light xl:py-[112px]">
      <div className="container relative max-w-[500px] xl:max-w-[1280px]">
        <div className="mb-6 xl:mb-10 xl:ml-auto xl:w-[365px]">
          <AnimatedWrapper
            animation={fadeInAnimation({ x: -50 })}
            className="mb-6 max-xl:max-w-[285px] xl:mb-10 xl:ml-auto xl:w-[365px]"
          >
            <h2 className="mb-4 text-[24px] font-bold uppercase leading-none xl:text-[32px]">
              Інвестуйте розумно — навіть з невеликої суми
            </h2>
            <p className="font-manrope text-[12px] leading-none xl:text-[16px]">
              Отримайте персональну консультацію та відповіді на всі питання
            </p>
          </AnimatedWrapper>
        </div>
        <AnimatedWrapper animation={fadeInAnimation({ y: 50, delay: 0.3 })}>
          <TriggerFeedbackForm />
        </AnimatedWrapper>

        <AnimatedWrapper
          animation={fadeInAnimation({ scale: 0.8, delay: 0.4 })}
          className="absolute -top-[112px] left-0 flex h-[610px] w-[742px] items-end max-xl:hidden"
        >
          <Image
            src="/images/midCTA/midCTA-bg.webp"
            alt="Фонове зображення"
            fill
            sizes="742px"
            className="rounded-r-xl object-cover"
          />
          <Star
            starVariant="dark"
            starClassName="absolute -top-[60px] -right-[76px] p-[37px] xl:size-[245px]"
          />
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default MidCTA;
