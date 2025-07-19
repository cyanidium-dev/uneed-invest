import Image from "next/image";

import { motion } from "framer-motion";

import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import StarInfoBox from "@/components/shared/box/StarInfoBox";
import { fadeInAnimation } from "@/helpers/animation";

const Investment = () => {
  return (
    <section className="relative h-[700px] pb-[45px] pt-[100px] max-xl:h-[619px] max-xl:overflow-hidden xl:h-[782px] xl:pb-[135px] xl:pt-[105px]">
      <div className="container relative z-[1] h-full max-w-[500px] xl:max-w-[1280px]">
        <div className="mb-11 flex flex-col gap-4 xl:flex-row xl:justify-between">
          <AnimatedWrapper
            as={motion.h2}
            animation={fadeInAnimation({ y: -50 })}
            className="text-[24px] font-bold uppercase leading-[1.22] xl:w-[448px] xl:text-[44px]"
          >
            Від <span className="text-accent">$100</span> до частки у{" "}
            <span className="text-accent">прибутковому об&apos;єкті</span>
          </AnimatedWrapper>
          <div>
            <AnimatedWrapper
              as={motion.p}
              animation={fadeInAnimation({ y: -50, delay: 0.2 })}
              className="font-manrope text-[12px] font-light leading-[1.22] max-xl:mr-[127px] max-xl:max-w-[193px] xl:mb-[34px] xl:w-[320px] xl:text-[20px]"
            >
              Не потрібно великих інвестицій. Ви можете приєднатися до проєкту з
              мінімальним внеском та почати отримувати прибуток від реального
              бізнесу.
            </AnimatedWrapper>

            <AnimatedWrapper
              animation={fadeInAnimation({ y: 50, delay: 0.5 })}
              className="relative hidden h-[186px] w-[320px] overflow-hidden rounded-2xl border-4 border-solid border-accent bg-accent-light xl:block"
            >
              <Image
                src="/images/investment/investment-2.webp"
                alt="Фото інтер'єра"
                fill
                sizes="320px"
                className="rounded-2xl object-cover"
              />
            </AnimatedWrapper>
          </div>
        </div>

        <div className="flex max-xl:mb-11 max-xl:mr-[127px] max-xl:max-w-[193px] xl:justify-between">
          <AnimatedWrapper
            animation={fadeInAnimation({ x: -50, delay: 0.8 })}
            className="relative hidden h-[152px] w-[502px] overflow-hidden rounded-2xl border-4 border-solid border-accent bg-accent-light xl:block"
          >
            <Image
              src="/images/investment/investment-3.webp"
              alt="Інвестиційне зображення"
              fill
              sizes="502px"
              className="object-cover"
            />
          </AnimatedWrapper>

          <AnimatedWrapper
            animation={fadeInAnimation({ x: 50, delay: 0.5 })}
            className="flex flex-col gap-4 xl:w-[583px] xl:flex-col-reverse xl:justify-between"
          >
            <h2 className="text-[24px] font-bold uppercase leading-[1.22] xl:text-[44px]">
              Ви маєте шматочок
            </h2>
            <p className="font-manrope text-[12px] font-light leading-[1.22] xl:text-[20px]">
              Ми використовуємо токенізацію, щоб розділити нерухомість на
              цифрові частки. Це дозволяє кожному мати «кусочок» апартаментів —
              без необхідності купувати все приміщення.
            </p>
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper
          animation={fadeInAnimation({ x: 50, delay: 0.8 })}
          className="absolute -left-[16px] -z-[10] max-xl:bottom-0 xl:top-[254px]"
        >
          <StarInfoBox
            text="Твоя частка в майбутньому"
            boxClassName="pl-[38px] max-xl:pr-[120px] w-[307px] xl:pl-[92px] xl:w-[620px]"
            starVariant="accent-light"
          />
        </AnimatedWrapper>

        <AnimatedWrapper
          animation={fadeInAnimation({ y: -50, delay: 0.6 })}
          className="absolute -right-[149px] h-[342px] w-[275px] overflow-hidden rounded-2xl border-4 border-solid border-accent bg-accent-light max-xl:bottom-0 xl:right-[435px] xl:top-0"
        >
          <Image
            src="/images/investment/investment-1.webp"
            alt="Фото інтер'єра"
            fill
            sizes="275px"
            className="rounded-2xl object-cover"
          />
        </AnimatedWrapper>
      </div>

      <AnimatedWrapper
        animation={fadeInAnimation({ delay: 1 })}
        className="absolute right-0 top-0 max-xl:hidden"
      >
        <Image
          src="/images/investment/investment-gradient-desk.svg"
          alt="Декоративне зображення"
          width={375}
          height={1063}
        />
      </AnimatedWrapper>
    </section>
  );
};

export default Investment;
