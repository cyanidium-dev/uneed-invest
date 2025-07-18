import { motion } from "framer-motion";

import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import InfoBox from "@/components/shared/box/InfoBox";
import { fadeInAnimation } from "@/helpers/animation";

const BusinessGoals = () => {
  return (
    <div className="xl:h-full xl:w-[344px]">
      <AnimatedWrapper
        animation={fadeInAnimation({ x: 50, delay: 0.5 })}
        className="mb-[18px] xl:mb-[204px] xl:ml-auto xl:h-[260px] xl:w-[258px]"
      >
        <InfoBox className="p-5 xl:px-[26px] xl:py-[30px]">
          <p className="mb-[18px] text-[16px] leading-[1.22] xl:mb-[16px]">
            Наші цілі:
          </p>

          <ul className="flex flex-col gap-5 xl:gap-[10px]">
            <li>
              <span className="text-[24px] font-bold uppercase leading-[1.22]">
                10000+{" "}
                <span className="text-[14px] xl:text-[16px]">об’єктів</span>
              </span>
            </li>
            <li>
              <span className="text-[24px] font-bold uppercase leading-[1.22]">
                1 млрд.{" "}
                <span className="text-[14px] xl:text-[16px]">інвестиції</span>
              </span>
            </li>
            <li className="text-[22px] font-bold uppercase leading-[1.22]">
              <span>Відомий світовий бренд Uneed</span>
            </li>
          </ul>
        </InfoBox>
      </AnimatedWrapper>

      <AnimatedWrapper
        as={motion.p}
        animation={fadeInAnimation({ y: 50, delay: 0.6 })}
        className="font-manrope font-light leading-[1.22] xl:text-[18px]"
      >
        Ми відкриваємо двері до пасивного доходу для всіх, хто хоче більше
        свободи та стабільності — навіть без мільйонних стартів.
      </AnimatedWrapper>
    </div>
  );
};

export default BusinessGoals;
