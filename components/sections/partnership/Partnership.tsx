import { ROUTES } from "@/config/routes";

import PartnershipSteps from "./PartnershipSteps";

const Partnership = () => {
  return (
    <>
      <section
        id={ROUTES.PARTNERSHIP.id}
        className="bg-dark pt-10 text-light xl:pt-[72px]"
      >
        <div className="container max-w-[450px] xl:max-w-[1280px]">
          <h2 className="mb-10 w-[320px] text-[24px] font-bold uppercase leading-none xl:mb-[72px] xl:w-[618px] xl:text-[52px] xl:leading-[1.22]">
            З чого починається партнерство
          </h2>
        </div>

        <PartnershipSteps />
      </section>

      <div className="h-10 bg-light xl:h-[87px]" />
    </>
  );
};

export default Partnership;
