import BaseButton from "@/components/shared/buttons/BaseButton";
import { siteConfig } from "@/config/site";

const FooterContacts = () => {
  const tel = siteConfig.contacts.tel;
  const email = siteConfig.contacts.email;

  return (
    <div className="max-md:mb-[60px]">
      <h4 className="mb-6 text-[16px] font-bold uppercase leading-[20px] tracking-[1px]">
        Контакти
      </h4>

      <ul className="-ml-2 flex flex-col">
        <li>
          <BaseButton href={`tel:${tel}`} variant="footer-nav">
            {tel}
          </BaseButton>
        </li>
        <li>
          <BaseButton href={`mailto:${email}`} variant="footer-nav">
            {email}
          </BaseButton>
        </li>
      </ul>
    </div>
  );
};

export default FooterContacts;
