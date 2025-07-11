import StarInfoBox from "@/components/shared/box/StarInfoBox";

const Investment = () => {
  return (
    <section className="h-[700px] overflow-hidden pb-[45px] pt-[100px] max-xl:h-[619px] xl:h-[782px] xl:pb-[135px] xl:pt-[105px]">
      <div className="container relative h-full max-w-[500px] xl:max-w-[1280px]">
        <div className="mb-11 flex flex-col gap-4 xl:flex-row xl:justify-between">
          <h2 className="text-[24px] font-bold uppercase leading-[1.22] xl:w-[448px] xl:text-[44px]">
            Від <span className="text-accent">$100</span> до частки у{" "}
            <span className="text-accent">прибутковому об&apos;єкті</span>
          </h2>
          <div>
            <p className="font-manrope text-[12px] font-light leading-[1.22] max-xl:mr-[127px] max-xl:max-w-[193px] xl:mb-[34px] xl:w-[320px] xl:text-[20px]">
              Не потрібно великих інвестицій. Ви можете приєднатися до проєкту з
              мінімальним внеском та почати отримувати прибуток від реального
              бізнесу.
            </p>
            <div className="h-[186px] w-[320px] rounded-xl border-4 border-solid border-accent bg-light max-xl:hidden">
              Image
            </div>
          </div>
        </div>

        <div className="flex max-xl:mb-11 max-xl:mr-[127px] max-xl:max-w-[193px] xl:justify-between">
          <div className="h-[152px] w-[502px] rounded-xl border-4 border-solid border-accent bg-light max-xl:hidden">
            Image
          </div>

          <div className="flex flex-col gap-4 xl:w-[583px] xl:flex-col-reverse xl:justify-between">
            <h2 className="text-[24px] font-bold uppercase leading-[1.22] xl:text-[44px]">
              Ви маєте шматочок
            </h2>
            <p className="font-manrope text-[12px] font-light leading-[1.22] xl:text-[20px]">
              Ми використовуємо токенізацію, щоб розділити нерухомість на
              цифрові частки. Це дозволяє кожному мати «кусочок» апартаментів —
              без необхідності купувати все приміщення.
            </p>
          </div>
        </div>

        <StarInfoBox
          text="Твоя частка в майбутньому"
          boxClassName="absolute -left-[16px] -z-[10] max-xl:bottom-0 pl-[38px] max-xl:pr-[120px] w-[307px] xl:top-[254px] xl:pl-[92px] xl:w-[620px]"
          starVariant="accent-light"
        />

        <div className="absolute -right-[149px] h-[342px] w-[275px] rounded-xl border-4 border-solid border-accent bg-light max-xl:bottom-0 xl:right-[435px] xl:top-[0] xl:h-[342px] xl:w-[275px]">
          Image
        </div>
      </div>
    </section>
  );
};

export default Investment;
