import { TikTokIcon, YoutubeIcon } from "@/components/icons";
import BaseButton from "@/components/shared/buttons/BaseButton";
import { siteConfig } from "@/config/site";

const FooterSocials = () => {
  return (
    <div className="max-md:mb-10">
      <h4 className="mb-[18px] text-[16px] font-bold uppercase leading-[20px] tracking-[1px]">
        Соц. мережі
      </h4>

      <ul className="-ml-2 flex gap-5">
        <li>
          <BaseButton
            href={siteConfig.links.youtube}
            variant="footer-nav"
            ariaLabel="Посилання на ютуб канал"
          >
            <YoutubeIcon />
          </BaseButton>
        </li>

        <li>
          <BaseButton
            href={siteConfig.links.tikTok}
            variant="footer-nav"
            ariaLabel="Посилання на тік-ток канал"
          >
            <TikTokIcon />
          </BaseButton>
        </li>
      </ul>
    </div>
  );
};
export default FooterSocials;
