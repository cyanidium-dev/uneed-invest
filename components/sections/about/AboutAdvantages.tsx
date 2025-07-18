import { motion } from "framer-motion";

import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import StarInfoBox from "@/components/shared/box/StarInfoBox";
import { fadeInAnimation, listVariants } from "@/helpers/animation";
import { aboutData } from "@/data/aboutData";

const AboutAdvantages = () => {
  return (
    <div className="xl:w-[265px]">
      <AnimatedWrapper
        as={motion.p}
        animation={fadeInAnimation({ x: 50, delay: 0.5 })}
        className="mb-[56px] font-manrope text-[14px] font-light leading-[1.22] xl:mb-[90px] xl:text-[16px]"
      >
        Наша компанія спеціалізується на пошуку привабливих об’єктів нерухомості
        яка приносить стабільний дохід від оренди для наших інвесторів
      </AnimatedWrapper>

      <AnimatedList
        animation={listVariants({ staggerChildren: 0.5 })}
        className="flex flex-col gap-3"
      >
        {aboutData.map(text => (
          <AnimatedListItem key={text}>
            <StarInfoBox
              text={text}
              boxVariant="light"
              textSize="sm"
              boxClassName="xl:h-[87px]"
            />
          </AnimatedListItem>
        ))}
      </AnimatedList>
    </div>
  );
};

export default AboutAdvantages;
