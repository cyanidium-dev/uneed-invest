import { StarIcon } from "@/components/icons";

import FaqList from "./FaqList";

const Faq = () => {
  return (
    <section className="py-10">
      <div className="container max-w-[600px] xl:max-w-[1280px]">
        <div className="relative mb-6 overflow-hidden rounded-full bg-accent px-5 py-6 xl:mb-10 xl:p-11">
          <h2 className="text-[18px] font-bold uppercase leading-[1.2] text-light xl:text-[48px]">
            Часті питання
          </h2>

          <StarIcon className="text-accent-light absolute -bottom-[15px] right-[101px] size-[44px] xl:-bottom-11 xl:right-[218px] xl:size-[100px]" />
          <StarIcon className="text-accent-light absolute right-[74px] top-[1px] size-[33px] xl:right-[158px] xl:top-0 xl:size-[73px]" />
          <StarIcon className="text-accent-light absolute -bottom-[5px] right-[43px] size-[44px] xl:-bottom-5 xl:right-[88px] xl:size-[100px]" />
          <StarIcon className="text-accent-light absolute -top-[8px] right-[11px] size-[55px] xl:-top-[22px] xl:right-[14px] xl:size-[124px]" />
          <StarIcon className="text-accent-light absolute -right-[2px] bottom-[1px] size-[33px] xl:-bottom-[6px] xl:-right-[15px] xl:size-[73px]" />
        </div>

        <FaqList />
      </div>
    </section>
  );
};

export default Faq;
