import { CyanidiumLogo } from "@/components/icons";
import BaseButton from "@/components/shared/buttons/BaseButton";

const FooterCopyright = () => {
  const year = new Date().getFullYear();

  return (
    <div className="md:flex md:flex-row-reverse md:items-center md:justify-between">
      <div className="max-md:mb-10">
        <p className="font-raleway text-[7px] uppercase leading-[24.5px] tracking-[0.54px]">
          Created by
        </p>
        <BaseButton
          href="https://www.cyanidium.dev/"
          variant="footer-nav"
          className="-ml-2 -mt-2 font-raleway text-[14px] font-semibold uppercase leading-[24.5px] tracking-[0.54px]"
        >
          Code-site.art <CyanidiumLogo className="-mt-2" />
        </BaseButton>
      </div>

      <p className="font-manrope text-[16px] leading-[28.8px] tracking-[0.64px]">
        &copy; {year} Uneed Invest
      </p>
    </div>
  );
};

export default FooterCopyright;
