import { Logo } from "@/components/icons";
import StarInfoBox from "@/components/shared/box/StarInfoBox";
import { ROUTES } from "@/config/routes";

import AboutAdvantages from "./AboutAdvantages";

const About = () => {
  return (
    <section
      id={ROUTES.ABOUT.id}
      className="overflow-hidden bg-dark pb-[60px] pt-10 text-light xl:pb-[68px] xl:pt-[95px]"
    >
      <div className="container relative flex max-w-[400px] flex-col gap-6 xl:max-w-[1280px] xl:flex-row-reverse">
        <div className="flex flex-col xl:mr-auto xl:flex-row-reverse xl:justify-end xl:gap-8">
          <div className="mb-[38px] flex w-[210px] flex-col gap-6 xl:w-[310px] xl:gap-9">
            <h2 className="text-[36px] font-bold uppercase leading-none xl:text-[52px]">
              Що таке
              <span className="flex items-end gap-2 leading-none">
                <Logo className="inline w-[171px] xl:mb-[6px] xl:w-[246px]" /> ?
              </span>
            </h2>

            <div className="size-3 rounded-full bg-accent xl:size-[26px]" />

            <p className="font-manrope text-[14px] font-light leading-[1.22] xl:text-[20px]">
              мережа розумних кімнат для подобової оренди
            </p>
          </div>

          <div className="h-[320px] w-full rounded-xl border-4 border-solid border-accent bg-light xl:h-[491px] xl:w-[360px]">
            Image
          </div>
        </div>

        <AboutAdvantages />

        <div className="relative h-[210px] w-full rounded-xl border-4 border-solid border-accent bg-light max-xl:mb-6 xl:absolute xl:-bottom-[89px] xl:-right-[31px] xl:h-[364px] xl:w-[555px]">
          Image
          <StarInfoBox
            text="5 апартаментів = 2300$ прибуток"
            starVariant="accent-light"
            boxClassName="absolute -bottom-[4px] -left-[4px] w-[calc(100%+8px)] xl:bottom-[17px] xl:w-[418px] xl:left-[106px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
