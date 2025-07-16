import BaseButton from "@/components/shared/buttons/BaseButton";
import { siteConfig } from "@/config/site";

const FooterNav = () => {
  return (
    <div className="max-md:mb-[60px]">
      <h3 className="mb-6 text-[16px] font-bold uppercase leading-[20px] tracking-[1px]">
        Навігація
      </h3>

      <nav>
        {/* <ul className="-ml-2 flex flex-col xl:gap-[6px]"> */}
        <ul className="-ml-2 flex flex-col xl:grid xl:grid-flow-col xl:auto-rows-fr xl:grid-rows-4 xl:gap-x-[50px] xl:gap-y-[6px]">
          {siteConfig.navItems.map(({ href, label }) => (
            <li key={label}>
              <BaseButton href={href} variant="footer-nav">
                {label}
              </BaseButton>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterNav;
