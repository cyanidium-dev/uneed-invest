import Circles from "@/components/shared/decor/Circles";
import { cn } from "@/utils/cn";
import { partnershipData } from "@/data/partnershipData";

const PartnershipSteps = () => {
  return (
    <ul className="mx-auto flex max-w-[450px] flex-col xl:max-w-[1280px] xl:flex-row">
      {partnershipData.map(({ id, title }) => (
        <li
          key={id}
          className={cn(
            "relative flex h-[160px] items-center p-5 font-manrope font-bold uppercase odd:justify-end odd:bg-accent-light even:justify-between even:bg-accent max-xl:odd:text-right xl:h-[558px] xl:w-1/6 xl:flex-col-reverse xl:pb-[72px] xl:pt-10",
            id === 4 && "!bg-dark"
          )}
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] leading-[0.92] max-sm:text-[120px] xl:text-[200px] xl:leading-[1.22]">
            {id}
          </span>
          <span className="max-w-[118px] text-[14px] leading-[1.22] xl:text-[20px]">
            {title}
          </span>

          {id % 2 === 0 && (
            <Circles
              directionToSmall="left"
              color="bg-light"
              className="xl:mt-[36px] xl:-rotate-90"
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default PartnershipSteps;
