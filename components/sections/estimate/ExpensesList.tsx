import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import { fadeInAnimation, listVariants } from "@/helpers/animation";
import { expensesData } from "@/data/expensesData";

const ExpensesList = () => {
  return (
    <div className="xl:w-[550px] xl:shrink-0">
      <AnimatedWrapper animation={fadeInAnimation({ x: -50, delay: 0.2 })}>
        <h2 className="mb-4 text-[24px] font-bold uppercase leading-[1.22] text-accent max-xl:max-w-[320px] xl:mb-[26px] xl:text-[46px]">
          Розрахунок кімнати готельного типу
        </h2>
        <p className="mb-[37px] text-[16px] uppercase leading-[1.22] xl:mb-[60px] xl:text-[24px]">
          на 4-5 кімнат
        </p>
      </AnimatedWrapper>

      <AnimatedList
        animation={listVariants({ staggerChildren: 0.2 })}
        className="flex flex-col gap-3"
      >
        {expensesData.map(({ title, value }) => (
          <AnimatedListItem
            key={title}
            className="flex items-center justify-between rounded-full bg-light px-[16px] py-[6px] font-montserrat text-[10px] font-semibold uppercase leading-[20px] text-dark xl:px-5 xl:py-[11px] xl:text-[14px]"
          >
            <span>{title}</span>
            <span>{value}</span>
          </AnimatedListItem>
        ))}
      </AnimatedList>
    </div>
  );
};
export default ExpensesList;
