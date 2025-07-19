import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/icons";
import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

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
          <AnimatedWrapper animation={fadeInAnimation({ x: -50 })}>
            <Link href="/" className="cursor-pointer">
              <Logo className="mb-[60px] w-[171px] xl:-mt-2" />
            </Link>
          </AnimatedWrapper>

          <AnimatedWrapper
            animation={fadeInAnimation({ y: -50, delay: 0.4 })}
            className="md:mb-10 md:flex md:flex-row md:gap-[190px] xl:gap-[122px]"
          >
            <FooterNav />
            <FooterInfo />
          </AnimatedWrapper>

          <AnimatedWrapper
            animation={fadeInAnimation({ y: -50, delay: 0.7 })}
            className="md:flex md:flex-row md:gap-40 xl:flex-col xl:gap-10"
          >
            <FooterContacts />
            <FooterSocials />
          </AnimatedWrapper>
        </div>

        <FooterCopyright />
      </div>

      <AnimatedWrapper
        animation={fadeInAnimation({ delay: 0.6 })}
        className="absolute right-0 top-0 object-cover xl:hidden"
      >
        <Image
          src="/images/footer/footer-decor-mob.svg"
          alt="Декоративне зображення"
          width={204}
          height={598}
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ y: -50, scale: 0.8, delay: 0.5 })}
        className="absolute right-[135px] top-0 hidden object-cover xl:block"
      >
        <Image
          src="/images/footer/footer-decor-desk.svg"
          alt="Декоративне зображення"
          width={625}
          height={225}
        />
      </AnimatedWrapper>
    </footer>
  );
};

export default Footer;
