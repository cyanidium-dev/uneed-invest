"use client";

import { useState } from "react";
import Image from "next/image";

import { Select, SelectItem } from "@heroui/select";

import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import AnimatedWrapper from "@/components/shared/animated/AnimatedWrapper";
import InfoBox from "@/components/shared/box/InfoBox";
import Range from "@/components/shared/range/Range";
import { fadeInAnimation } from "@/helpers/animation";
import {
  SliderValues,
  calculationData,
  calculationVariants,
} from "@/data/calculationData";

const ProfitCalculation = () => {
  const [state, setState] = useState({
    rooms: calculationData[0].defaultValue,
    price: calculationData[1].defaultValue,
    occupancy: calculationData[2].defaultValue,
  });

  const result = (state.rooms * state.price * state.occupancy) / 100;

  const handleChange = (
    id: keyof SliderValues,
    newValue: number | number[]
  ) => {
    setState(prev => ({
      ...prev,
      [id]: typeof newValue === "number" ? newValue : newValue[0],
    }));
  };

  return (
    <div className="relative">
      <div className="mb-6 xl:mb-8 xl:flex xl:h-[67px] xl:justify-between">
        <AnimatedWrapper animation={fadeInAnimation({ x: 50, delay: 0.3 })}>
          <Select
            className="shrink-0 max-xl:mb-6 xl:w-[360px]"
            variant="bordered"
            radius="sm"
            size="lg"
            aria-label="Обрати тип локації"
            defaultSelectedKeys={new Set([calculationVariants[0].key])}
            classNames={{
              value:
                "!text-light text-[14px] font-manrope font-light leading-none xl:text-[18px]",
              trigger: "xl:h-[67px]",
              selectorIcon: "size-6",
            }}
          >
            {calculationVariants.map(({ key, label }) => (
              <SelectItem key={key}>{label}</SelectItem>
            ))}
          </Select>
        </AnimatedWrapper>

        <AnimatedWrapper animation={fadeInAnimation({ x: -50, delay: 0.3 })}>
          <InfoBox
            variant="dark"
            className="flex items-center justify-between p-4 xl:w-[360px]"
          >
            <span className="font-manrope leading-none xl:text-[16px]">
              Чистий прибуток:
            </span>
            <span className="text-[18px] font-bold uppercase leading-none xl:text-[24px]">
              {result} грн
            </span>
          </InfoBox>
        </AnimatedWrapper>
      </div>

      <AnimatedList className="flex flex-col gap-3 xl:flex-row xl:justify-between xl:gap-5">
        {calculationData.map(item => (
          <AnimatedListItem key={item.label} className="min-w-0 grow basis-1/3">
            <InfoBox variant="light" className="px-6 py-8">
              <Range
                item={item}
                value={state[item.id]}
                onChange={newValue => handleChange(item.id, newValue)}
              />
            </InfoBox>
          </AnimatedListItem>
        ))}
      </AnimatedList>

      <AnimatedWrapper
        animation={fadeInAnimation({ y: 50, scale: 0.8, delay: 0.8 })}
        viewport={{ once: true, amount: 0 }}
        className="absolute -bottom-[440px] -right-[100px] -z-[1] h-[605px] w-[630px] xl:-right-[70px] xl:-top-[320px]"
      >
        <div className="relative h-[605px] w-[630px]">
          <Image
            src="/images/calculator/calculator-decor.svg"
            alt="Декоративне зображення"
            fill
            sizes="630px"
          />
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default ProfitCalculation;
