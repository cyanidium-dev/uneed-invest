import InfoBox from "@/components/shared/box/InfoBox";
import Circles from "@/components/shared/decor/Circles";
import { investmentOptions } from "@/data/investmentOptions";

const HeroInvestment = () => {
  return (
    <div className="max-xl:mx-auto max-xl:w-full max-xl:max-w-[330px] xl:w-[471px]">
      {investmentOptions.map(({ label, variant, items, decor }) => (
        <div key={label} className="mb-7 last:mb-0">
          <div className="mb-3 flex justify-between xl:mb-5">
            {decor && <Circles />}

            <h3 className="text-[24px] font-bold uppercase leading-none xl:text-[36px]">
              {label}
            </h3>
          </div>

          <ul className="flex justify-between">
            {items.map((item, i) => (
              <li key={i}>
                <InfoBox
                  className={
                    "px-[10px] py-5 text-center font-montserrat text-sm font-semibold uppercase leading-[20px] text-white"
                  }
                  variant={variant}
                >
                  {item.label && (
                    <span className="mr-1 text-[8px] font-semibold xl:text-[12px]">
                      {item.label}
                    </span>
                  )}
                  <span className="text-[16px] font-bold max-sm:text-[12px] xl:text-[24px]">
                    {item.value}
                  </span>
                  {item.description && (
                    <span className="ml-1 text-[8px] font-semibold xl:text-[12px]">
                      {item.description}
                    </span>
                  )}
                </InfoBox>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HeroInvestment;
