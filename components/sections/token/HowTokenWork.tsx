import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import MarkedList from "@/components/shared/list/MarkedList";
import { fadeInAnimation } from "@/helpers/animation";
import { howTokenWork } from "@/data/tokenData";

const HowTokenWork = () => {
  return (
    <AnimatedWrapper
      animation={fadeInAnimation({ x: 50, delay: 0.3 })}
      className="max-xl:mb-[56px] xl:w-[463px]"
    >
      <h2 className="mb-5 text-[32px] font-bold uppercase leading-[1.22] xl:mb-[45px] xl:text-[50px]">
        Як це працює?
      </h2>
      <MarkedList
        data={howTokenWork}
        listClassName="xl:gap-[35px]"
        itemClassName="gap-6"
        markerClassName="bg-accent xl:size-[25px]"
        textClassName="text-[14px] xl:text-[20px] leading-[24px]"
      />
    </AnimatedWrapper>
  );
};

export default HowTokenWork;
