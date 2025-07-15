import { Logo } from "@/components/icons";

import FooterContacts from "./FooterContacts";
import FooterCopyright from "./FooterCopyright";
import FooterInfo from "./FooterInfo";
import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";

const Footer = () => {
  return (
    <footer className="relative bg-dark py-10 text-light xl:pb-12 xl:pt-[238px]">
      <div className="container max-w-[1280px] md:max-w-[800px] xl:max-w-[1280px]">
        <div className="md:mb-10 xl:flex xl:justify-between">
          <Logo className="mb-[60px] w-[171px] xl:-mt-2" />

          <div className="md:mb-10 md:flex md:flex-row md:gap-[190px] xl:gap-[122px]">
            <FooterNav />
            <FooterInfo />
          </div>

          <div className="md:flex md:flex-row md:gap-40 xl:flex-col xl:gap-10">
            <FooterContacts />
            <FooterSocials />
          </div>
        </div>

        <FooterCopyright />
      </div>

      <div className="absolute right-0 top-0 h-[589px] w-[204px] bg-[url('/images/footer/footer-decor-mob.svg')] bg-cover bg-no-repeat xl:right-[135px] xl:h-[225px] xl:w-[625px] xl:bg-[url('/images/footer/footer-decor-desk.svg')]" />
    </footer>
  );
};

export default Footer;
