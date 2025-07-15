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
      </div>

      <div className="absolute bottom-0 right-0 h-[283px] w-[302px] bg-[url('/images/token/token-decor-bot-mob.svg')] bg-cover bg-no-repeat xl:h-[406px] xl:w-[392px] xl:bg-[url('/images/token/token-decor-bot-mob.svg')]" />
      <div className="absolute -left-[100px] -top-[120px] h-[1031px] w-[1047px] bg-[url('/images/token/token-decor-top-mob.svg')] bg-cover bg-no-repeat xl:-top-[50px] xl:left-0 xl:h-[830px] xl:w-[819px] xl:bg-[url('/images/token/token-decor-top-mob.svg')]" />
    </section>
  );
};

export default Token;
