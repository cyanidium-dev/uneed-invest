"use client";

import Image from "next/image";

import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { fadeInAnimation } from "@/helpers/animation";

const HeroImages = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <div className="absolute left-0 top-0 h-full w-full xl:w-1/2">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <div className="relative h-[640px] w-full md:hidden">
            <Image
              src="/images/hero/hero-bg-mob.webp"
              alt="Фонове зображення"
              fill
              priority
              fetchPriority="high"
              loading="eager"
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <Image
            src="/images/hero/hero-bg-desk.webp"
            alt="Фонове зображення"
            fill
            priority
            fetchPriority="high"
            loading="eager"
            sizes="50vw"
            className="object-cover max-md:hidden"
          />

          <div className="absolute bottom-0 z-[1] max-xl:left-1/2 max-xl:-translate-x-1/2 xl:-bottom-[299px] xl:-right-[88px]">
            <AnimatedWrapper
              animation={fadeInAnimation({ scale: 0.8, delay: 0.4 })}
              className="h-[936px] w-[663px] bg-white/[37%] shadow-[inset_0px_3.5px_10.5px_rgba(0,0,0,0.25)] backdrop-blur-[28.7px] [border-radius:50%/50%] xl:h-[935px] xl:w-[948px]"
            />
          </div>

          <AnimatedWrapper
            animation={fadeInAnimation({ x: -50, scale: 0.8, delay: 1 })}
            className="absolute top-[300px] h-[556px] w-[309px] object-cover max-xl:right-0 xl:left-0 xl:top-0"
          >
            <Image
              src="/images/hero/hero-gradient.svg"
              alt="Фоновий градієнт"
              width={309}
              height={556}
              priority
              fetchPriority="high"
              loading="eager"
              className="object-cover max-xl:rotate-180"
            />
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper
          animation={fadeInAnimation({ y: 50, delay: 0.7, scale: 0.8 })}
          className="absolute -right-[420px] bottom-0 max-xl:hidden xl:h-[306px] xl:w-[799px]"
        >
          <Image
            src="/images/hero/hero-decor-bot-desk.svg"
            alt="Декоративне зображення"
            fill
            sizes="799px"
            priority={isDesktop}
            fetchPriority={isDesktop ? "high" : "auto"}
            loading={isDesktop ? "eager" : "lazy"}
          />
        </AnimatedWrapper>
      </div>

      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.5 })}
        className="absolute -bottom-[200px] left-0 xl:hidden"
      >
        <Image
          src="/images/hero/hero-decor-mob.svg"
          alt="Декоративне зображення"
          width={183}
          height={381}
          priority={!isDesktop}
          fetchPriority={!isDesktop ? "high" : "auto"}
          loading={!isDesktop ? "eager" : "lazy"}
        />
      </AnimatedWrapper>

      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 0.5 })}
        className="absolute right-0 top-0 max-xl:hidden"
      >
        <Image
          src="/images/hero/hero-decor-top-desk.svg"
          alt="Декоративне зображення"
          width={378}
          height={356}
          priority={isDesktop}
          fetchPriority={isDesktop ? "high" : "auto"}
          loading={isDesktop ? "eager" : "lazy"}
        />
      </AnimatedWrapper>
    </>
  );
};

export default HeroImages;
