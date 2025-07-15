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
    </section>
  );
};
export default Estimate;
