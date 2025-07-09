import { aboutData } from "@/data/aboutData";

import StarInfoBox from "@/components/shared/box/StarInfoBox";

const AboutAdvantages = () => {
  return (
    <div className="xl:w-[265px]">
      <p className="mb-[56px] font-manrope text-[14px] font-light leading-[1.22] xl:mb-[90px] xl:text-[16px]">
        Наша компанія спеціалізується на пошуку привабливих об’єктів нерухомості
        яка приносить стабільний дохід від оренди для наших інвесторів
      </p>

      <ul className="flex flex-col gap-3">
        {aboutData.map(text => (
          <li key={text}>
            <StarInfoBox
              text={text}
              boxVariant="light"
              textSize="sm"
              boxClassName="xl:h-[87px]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutAdvantages;
