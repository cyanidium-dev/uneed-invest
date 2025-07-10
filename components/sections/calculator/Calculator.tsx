import { ROUTES } from "@/config/routes";

import ProfitCalculation from "./ProfitCalculation";

const Calculator = () => {
  return (
    <section
      id={ROUTES.CALCULATOR.id}
      className="bg-accent py-10 text-light xl:py-[47px]"
    >
      <div className="container max-w-[500px] xl:max-w-[1280px]">
        <h2 className="mb-4 w-[270px] text-[24px] font-bold uppercase leading-[1.22] xl:mb-[18px] xl:w-[510px] xl:text-[52px]">
          Скільки ви зароблятимете?
        </h2>
        <p className="mb-6 max-w-[380px] font-manrope font-light leading-[1.22] xl:mb-[60px] xl:text-[20px]">
          Введіть параметри і дізнайтеся прогнозований прибуток від одного або
          декількох апартаментів
        </p>

        <ProfitCalculation />
      </div>
    </section>
  );
};

export default Calculator;
