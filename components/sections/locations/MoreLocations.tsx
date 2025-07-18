import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import StarInfoBox from "@/components/shared/box/StarInfoBox";
import BaseButton from "@/components/shared/buttons/BaseButton";
import { fadeInAnimation } from "@/helpers/animation";

const MoreLocations = () => {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
      <AnimatedWrapper animation={fadeInAnimation({ x: -50, delay: 0.5 })}>
        <StarInfoBox
          text="Твоя частка в майбутньому"
          boxVariant="light"
          boxClassName="xl:w-[550px] xl:h-[87px]"
        />
      </AnimatedWrapper>

      <AnimatedWrapper
        animation={fadeInAnimation({ x: 50, delay: 0.5 })}
        className="mx-auto w-[320px] text-[27px] font-bold uppercase leading-[1.41] max-sm:w-[270px] max-sm:text-[20px] xl:w-[550px] xl:text-[46px]"
      >
        <p>Хочете переглянути</p>

        <div className="flex items-end gap-2">
          <BaseButton
            href="https://share.google/4yJxbMDL2Zg25qlIM"
            className="mb-[3px] w-[188px] text-[10px] leading-[20px] max-xl:h-8 max-sm:w-[130px] xl:mb-[9px] xl:w-[313px] xl:text-[12px]"
          >
            Перейти на сайт
          </BaseButton>
          <span>більше?</span>
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default MoreLocations;
