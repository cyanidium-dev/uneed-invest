import StarInfoBox from "@/components/shared/box/StarInfoBox";

const Investment = () => {
  return (
    <section className="h-[619px] overflow-hidden pb-[45px] pt-[100px] max-sm:h-[700px]">
      <div className="container relative h-full max-w-[500px] xl:max-w-[1280px]">
        <div className="mb-11 flex flex-col gap-4">
          <h2 className="text-[24px] font-bold uppercase leading-[1.22]">
            Від <span className="text-accent">$100</span> до частки у{" "}
            <span className="text-accent">прибутковому об&apos;єкті</span>
          </h2>
          <p className="max-w-[193px] font-manrope text-[12px] font-light leading-[1.22] max-xl:mr-[127px]">
            Не потрібно великих інвестицій. Ви можете приєднатися до проєкту з
            мінімальним внеском та почати отримувати прибуток від реального
            бізнесу.
          </p>
        </div>

        <div className="mb-11 flex max-w-[193px] flex-col gap-4 max-xl:mr-[127px]">
          <h2 className="text-[24px] font-bold uppercase leading-[1.22]">
            Ви маєте шматочок
          </h2>
          <p className="font-manrope text-[12px] font-light leading-[1.22]">
            Ми використовуємо токенізацію, щоб розділити нерухомість на цифрові
            частки. Це дозволяє кожному мати «кусочок» апартаментів — без
            необхідності купувати все приміщення.
          </p>
        </div>

        <StarInfoBox
          text="Твоя частка в майбутньому"
          boxClassName="absolute -left-[16px] -z-[10] bottom-0 pl-[38px] pr-[120px] w-[307px]"
          starVariant="accent-light"
        />

        <div className="absolute -right-[149px] bottom-0 h-[342px] w-[275px] rounded-xl border-4 border-solid border-accent bg-light xl:h-[491px] xl:w-[360px]">
          Image
        </div>
      </div>
    </section>
  );
};

export default Investment;
