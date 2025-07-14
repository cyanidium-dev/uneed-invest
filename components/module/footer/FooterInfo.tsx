import BaseButton from "@/components/shared/buttons/BaseButton";
import { siteConfig } from "@/config/site";

const FooterInfo = () => {
  return (
    <div className="max-md:mb-[60px]">
      <h4 className="mb-6 text-[16px] font-bold uppercase leading-[20px] tracking-[1px]">
        Інформація
      </h4>

      <ul className="-ml-2 flex flex-col xl:gap-[6px]">
        {siteConfig.info.map(({ href, label }) => (
          <li key={label}>
            <BaseButton href={href} variant="footer-nav">
              {label}
            </BaseButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterInfo;
