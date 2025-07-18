import Image from "next/image";

import TriggerFeedbackForm from "@/components/module/triggerForm/TriggerFeedbackForm";
import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import Star from "@/components/shared/decor/Star";
import { fadeInAnimation } from "@/helpers/animation";

const BotCTA = () => {
  return (
    <section className="overflow-hidden bg-accent py-10 text-light xl:py-[69px]">
      <div className="container relative max-w-[500px] xl:max-w-[1280px]">
        <div className="mb-6 xl:mb-10 xl:ml-auto xl:w-[365px]">
          <AnimatedWrapper
            animation={fadeInAnimation({ x: -50 })}
            className="mb-6 max-xl:max-w-[285px] xl:mb-10 xl:ml-auto xl:w-[365px]"
          >
            <h2 className="mb-4 text-[24px] font-bold uppercase leading-none xl:text-[32px]">
              Готові інвестувати в нерухомість, яка працює за вас?
            </h2>
            <p className="font-manrope text-[12px] leading-none xl:text-[16px]">
              Отримайте персональну консультацію та відповіді на всі питання
            </p>
          </AnimatedWrapper>
        </div>
        <AnimatedWrapper animation={fadeInAnimation({ y: 50, delay: 0.3 })}>
          <TriggerFeedbackForm isFullForm />
        </AnimatedWrapper>

        <AnimatedWrapper
          animation={fadeInAnimation({ scale: 0.8, delay: 0.4 })}
          className="absolute -top-[69px] left-0 flex h-[647px] w-[742px] items-end rounded-r-xl max-xl:hidden"
        >
          <Image
            src="/images/botCTA/botCTA-bg.webp"
            alt="Фонове зображення"
            fill
            sizes="742px"
            className="block rounded-r-xl object-cover"
          />
          <Star
            starVariant="dark"
            starClassName="absolute -bottom-[30px] -left-[74px] p-[37px] xl:size-[245px]"
          />
          <Star
            starVariant="dark"
            starClassName="absolute bottom-[162px] left-[196px] p-[21px] xl:size-[134px]"
          />
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default BotCTA;
