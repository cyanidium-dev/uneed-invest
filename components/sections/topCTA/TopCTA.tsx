import StarInfoBox from "@/components/shared/box/StarInfoBox";
import BaseForm from "@/components/shared/form/BaseForm";

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

        <BaseForm />

        <div className="absolute -top-[112px] left-0 flex h-[610px] w-[742px] items-end bg-[url('/images/topCTA/topCTA-bg.webp')] bg-cover bg-no-repeat max-xl:hidden">
          <StarInfoBox
            text="5 апартаментів = 2300$ прибуток"
            boxVariant="light"
            starVariant="accent-dark"
            boxClassName="w-[418px]"
          />
        </div>
      </div>
    </section>
  );
};

export default TopCTA;
