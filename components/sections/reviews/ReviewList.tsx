import Image from "next/image";

import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import { cn } from "@/utils/cn";
import { reviewData } from "@/data/reviewData";

const ReviewList = () => {
  return (
    <AnimatedList className="flex h-[340px] gap-[10px] xl:h-full xl:gap-5">
      {reviewData.map(({ imgSrc, name, text }, index) => (
        <AnimatedListItem
          key={index}
          className="relative overflow-hidden rounded-xl max-xl:basis-1/2 xl:w-[265px]"
        >
          <Image
            src={imgSrc}
            alt={name}
            className="-z-10 size-full rounded-xl object-cover"
            fill
            sizes="(max-width: 1280px) 200px, 265px"
          />

          <div
            className={cn(
              "absolute left-0 rounded-xl p-3 text-light backdrop-blur-[26px] xl:px-10 xl:py-8",
              index % 2 === 0 ? "bottom-0" : "top-0"
            )}
            style={{
              background: "#5A5A5A3D",
              boxShadow: "inset 0px 4px 12.6px #00000040",
            }}
          >
            <p className="mb-2 font-bold uppercase leading-none xl:text-[20px]">
              {name}
            </p>
            <p className="font-manrope text-[10px] font-light leading-[1.4] xl:text-[14px]">
              {text}
            </p>
          </div>
        </AnimatedListItem>
      ))}
    </AnimatedList>
  );
};

export default ReviewList;
