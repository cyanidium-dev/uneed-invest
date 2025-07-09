import { advantagesData } from "@/data/advantagesData";

import StarInfoBox from "@/components/shared/box/StarInfoBox";

const AdvantagesListDesk = () => {
  return (
    <div className="flex-row gap-5 max-xl:hidden xl:flex">
      <div className="flex w-[455px] flex-col gap-5">
        <StarInfoBox text={advantagesData[0][0]} boxVariant="dark" />
        <StarInfoBox text={advantagesData[0][1]} boxVariant="dark" />

        <div className="h-[194px] w-[455px] shrink-0 rounded-xl bg-[url('/images/advantages/advantages-2-desk.webp')] bg-cover bg-no-repeat" />

        <StarInfoBox text={advantagesData[1][0]} boxVariant="dark" />
        <StarInfoBox text={advantagesData[1][1]} boxVariant="dark" />
      </div>

      <div className="w-[645px]">
        <div className="mb-5 flex gap-5">
          <div className="h-[354px] w-[170px] shrink-0 rounded-xl bg-[url('/images/advantages/advantages-1-desk.webp')] bg-cover bg-no-repeat" />

          <div className="flex flex-col justify-end gap-5">
            <StarInfoBox text={advantagesData[2][0]} boxVariant="dark" />
            <StarInfoBox text={advantagesData[2][1]} boxVariant="dark" />
          </div>
        </div>

        <div className="h-[253px] w-[645px] shrink-0 rounded-xl bg-[url('/images/advantages/advantages-3-desk.webp')] bg-cover bg-no-repeat" />
      </div>
    </div>
  );
};

export default AdvantagesListDesk;
