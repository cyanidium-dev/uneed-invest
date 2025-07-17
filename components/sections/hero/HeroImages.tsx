"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";

const HeroImages = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <div className="absolute left-0 top-0 h-full w-full xl:w-1/2">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <Image
            src="/images/hero/hero-bg-desk.webp"
            alt="Фонове зображення"
            fill
            priority
            fetchPriority="high"
            loading="eager"
            sizes="(min-width: 1280px) 50vw, 100vw"
            className="object-cover"
          />

          <div className="absolute bottom-0 z-[1] h-[936px] w-[663px] bg-white/[37%] shadow-[inset_0px_3.5px_10.5px_rgba(0,0,0,0.25)] backdrop-blur-[28.7px] [border-radius:50%/50%] max-xl:left-1/2 max-xl:-translate-x-1/2 xl:-bottom-[299px] xl:-right-[88px] xl:h-[935px] xl:w-[948px]" />
        </div>

        {isDesktop && (
          <div className="absolute -right-[420px] bottom-0 !block xl:h-[306px] xl:w-[799px]">
            <Image
              src="/images/hero/hero-decor-bot-desk.svg"
              alt="Декоративне зображення"
              fill
              sizes="799px"
              priority
              fetchPriority="high"
              loading="eager"
            />
          </div>
        )}
      </div>

      {!isDesktop && (
        <Image
          src="/images/hero/hero-decor-mob.svg"
          alt="Декоративне зображення"
          width={183}
          height={381}
          className="absolute -bottom-[200px] left-0"
          priority
          loading="eager"
          fetchPriority="high"
        />
      )}

      {isDesktop && (
        <Image
          src="/images/hero/hero-decor-top-desk.svg"
          alt="Декоративне зображення"
          width={378}
          height={356}
          className="absolute right-0 top-0"
          priority
          loading="eager"
          fetchPriority="high"
        />
      )}
    </>
  );
};

export default HeroImages;
