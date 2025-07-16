import Image from "next/image";

import Circles from "@/components/shared/decor/Circles";
import { cn } from "@/utils/cn";
import { partnershipData } from "@/data/partnershipData";

const PartnershipSteps = () => {
  return (
    <div className="relative">
      <ul className="relative mx-auto flex max-w-[450px] flex-col xl:max-w-[1280px] xl:flex-row">
        {partnershipData.map(({ id, title }) => (
          <li
            key={id}
            className={cn(
              "relative z-[1] flex h-[160px] items-center bg-cover bg-no-repeat p-5 font-manrope font-bold uppercase odd:justify-end odd:bg-accent-light even:justify-between even:bg-accent max-xl:odd:text-right xl:h-[558px] xl:w-1/6 xl:flex-col-reverse xl:pb-[72px] xl:pt-10",
              id === 1 &&
                "bg-[url('/images/partnership/partnership-1-mob.webp')] xl:bg-[url('/images/partnership/partnership-1-desk.webp')]",
              id === 3 &&
                "bg-[url('/images/partnership/partnership-3-mob.webp')] xl:bg-[url('/images/partnership/partnership-3-desk.webp')]",
              id === 4 && "!bg-dark",
              id === 5 &&
                "bg-[url('/images/partnership/partnership-5-mob.webp')] xl:bg-[url('/images/partnership/partnership-5-desk.webp')]"
            )}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[140px] leading-[0.92] max-sm:text-[120px] xl:text-[200px] xl:leading-[1.22]">
              {id}
            </span>
            <span className="text-[14px] leading-[1.22] max-xl:max-w-[118px] xl:mx-auto xl:text-[20px]">
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

        <Image
          src="/images/partnership/partnership-decor-desk.svg"
          alt="Декоративне зображення"
          width={1300}
          height={1251}
          className="absolute -right-[200px] -top-[380px] max-xl:hidden"
        />
      </ul>

      <div className="absolute -right-[200px] -top-[180px] h-[520px] w-[539px] xl:hidden">
        <Image
          src="/images/partnership/partnership-decor-mob.svg"
          alt="Декоративне зображення"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default PartnershipSteps;
