import Image from "next/image";

import { ROUTES } from "@/config/routes";

import ExpensesList from "./ExpensesList";
import RevenueList from "./RevenueList";

const Estimate = () => {
  return (
    <section
      id={ROUTES.ESTIMATE.id}
      className="relative scroll-mt-20 overflow-hidden bg-dark py-[74px] text-light"
    >
      <div className="container relative z-[1] flex max-w-[500px] flex-col gap-12 xl:max-w-[1280px] xl:flex-row xl:gap-9">
        <ExpensesList />

        <RevenueList />
      </div>

      <Image
        src="/images/estimate/estimate-gradient-mob.svg"
        alt="Декоративне зображення"
        width={327}
        height={734}
        className="absolute left-0 top-0 xl:hidden"
      />
      <Image
        src="/images/estimate/estimate-gradient-desk.svg"
        alt="Декоративне зображення"
        width={331}
        height={419}
        className="absolute bottom-0 left-0 max-xl:hidden"
      />
    </section>
  );
};
export default Estimate;
