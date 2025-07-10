import { ROUTES } from "@/config/routes";

const Calculator = () => {
  return (
    <section id={ROUTES.CALCULATOR.id} className="bg-accent py-10 text-light">
      <div className="container max-w-[500px] xl:max-w-[1280px]">
        <h2 className="mb-4 w-[270px] text-[24px] font-bold uppercase leading-[1.22]">
          Скільки ви зароблятимете?
        </h2>
        <p className="mb-6 font-manrope font-light leading-[1.22] max-xl:max-w-[380px]">
          Введіть параметри і дізнайтеся прогнозований прибуток від одного або
          декількох апартаментів
        </p>
      </div>
    </section>
  );
};

export default Calculator;
