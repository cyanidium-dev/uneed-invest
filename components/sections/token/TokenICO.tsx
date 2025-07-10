import { tokenICOData } from "@/data/tokenData";

import InfoBox from "@/components/shared/box/InfoBox";
import MarkedList from "@/components/shared/list/MarkedList";

const TokenICO = () => {
  return (
    <div>
      <h2 className="mb-5 text-[32px] font-bold uppercase leading-[1.22] text-accent xl:mb-[63px] xl:text-[50px]">
        Старт ico
      </h2>

      <ul className="flex flex-col gap-4 xl:h-[373px] xl:flex-row xl:gap-5">
        {tokenICOData.map(
          ({
            boxVariant,
            description,
            serviceList,
            title,
            markClassName,
            textClassName,
          }) => (
            <li key={title} className="h-full min-w-0 grow basis-1/3">
              <InfoBox
                variant={boxVariant}
                className="flex h-full flex-col p-5 max-xl:gap-6 xl:p-8"
              >
                <h4 className="text-[18px] font-bold uppercase leading-[1.22] xl:mb-6 xl:text-[32px]">
                  {title}
                </h4>
                <p className="font-manrope text-[12px] font-light leading-[1.22] xl:mb-[40px] xl:text-[16px]">
                  {description}
                </p>

                <MarkedList
                  data={serviceList}
                  markerClassName={markClassName}
                  textClassName={textClassName}
                />
              </InfoBox>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TokenICO;
