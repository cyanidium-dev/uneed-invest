import Image from "next/image";

import TriggerFeedbackForm from "@/components/module/triggerForm/TriggerFeedbackForm";
import StarInfoBox from "@/components/shared/box/StarInfoBox";

const TopCTA = () => {
  return (
    <section className="bg-accent py-10 text-light xl:py-[112px]">
      <div className="container relative max-w-[500px] xl:max-w-[1280px]">
        <div className="mb-6 max-xl:max-w-[285px] xl:mb-10 xl:ml-auto xl:w-[365px]">
          <h2 className="mb-4 text-[24px] font-bold uppercase leading-none xl:text-[32px]">
            Станьте
            <br />
            партнером нашого бРЕНДУ Uneed
          </h2>
          <p className="font-manrope text-[12px] leading-none xl:text-[16px]">
            Отримайте персональну консультацію та відповіді на всі питання
          </p>
        </div>

        <TriggerFeedbackForm />

        <div className="absolute -top-[112px] left-0 flex h-[610px] w-[742px] items-end max-xl:hidden">
          <Image
            src="/images/topCTA/topCTA-bg.webp"
            alt="Фонове зображення"
            fill
            sizes="742px"
            className="rounded-r-xl object-cover"
          />
          <StarInfoBox
            text="5 апартаментів = 2300$ прибуток"
            boxVariant="light"
            starVariant="accent-dark"
            boxClassName="w-[418px] relative z-[1]"
          />
        </div>
      </div>
    </section>
  );
};

export default TopCTA;
