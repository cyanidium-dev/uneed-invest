import { ROUTES } from "@/config/routes";

import ExpensesList from "./ExpensesList";
import RevenueList from "./RevenueList";

const Estimate = () => {
  return (
    <section
      id={ROUTES.ESTIMATE.id}
      className="relative overflow-hidden bg-dark py-[74px] text-light"
    >
      <div className="container flex max-w-[500px] flex-col gap-12 xl:max-w-[1280px] xl:flex-row xl:gap-9">
        <ExpensesList />

        <RevenueList />
      </div>

      <div className="absolute left-0 h-[734px] w-[327px] bg-[url('/images/estimate/estimate-gradient-mob.svg')] bg-cover bg-no-repeat max-xl:top-0 xl:bottom-0 xl:h-[419px] xl:w-[331px] xl:bg-[url('/images/estimate/estimate-gradient-desk.svg')]" />
    </section>
  );
};
export default Estimate;
