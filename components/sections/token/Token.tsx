import Image from "next/image";

import { ShortLogo } from "@/components/icons";

import HowTokenWork from "./HowTokenWork";
import TokenICO from "./TokenICO";

const Token = () => {
  return (
    <section className="relative overflow-hidden bg-dark py-[55px] text-light">
      <div className="container relative z-[1] max-w-[500px] xl:max-w-[1280px]">
        <div className="xl:mb-[47px] xl:flex xl:justify-between">
          <div className="max-xl:mb-[56px] xl:w-[463px]">
            <h2 className="mb-5 text-[32px] font-bold uppercase leading-[1.22] text-accent xl:mb-9 xl:text-[50px]">
              Цього року ми створюємо{" "}
              <span className="text-light">
                токеN{" "}
                <ShortLogo className="mb-1 inline h-6 w-5 xl:mb-2 xl:h-[40px] xl:w-[32px]" />
                IG
              </span>
            </h2>
            <p className="font-manrope font-light leading-[1.22] xl:text-[20px]">
              ICO (Initial Coin Offering) — це публічний запуск нашого токена,
              що відкриває можливість інвесторам з усього світу стати частиною
              бізнесу нового покоління.
            </p>
          </div>

          <HowTokenWork />
        </div>
        <TokenICO />

        <div className="absolute -top-[250px] left-1/2 -z-[1] h-[1031px] w-[1047px] max-xl:block max-xl:-translate-x-1/2 xl:hidden">
          <Image
            src="/images/token/token-decor-top-mob.svg"
            alt="Декоративне зображення"
            fill
            className="object-cover"
          />
        </div>
        <Image
          src="/images/token/token-decor-top-desk.svg"
          alt="Декоративне зображення"
          width={819}
          height={830}
          className="absolute -top-[50px] left-0 -z-[1] hidden xl:block"
        />
      </div>
      <Image
        src="/images/token/token-decor-bot-mob.svg"
        alt="Декоративне зображення"
        width={302}
        height={283}
        className="absolute bottom-0 right-0 max-xl:block xl:hidden"
      />
      <Image
        src="/images/token/token-decor-bot-desk.svg"
        alt="Декоративне зображення"
        width={392}
        height={406}
        className="absolute bottom-0 right-0 hidden xl:block"
      />
    </section>
  );
};

export default Token;
