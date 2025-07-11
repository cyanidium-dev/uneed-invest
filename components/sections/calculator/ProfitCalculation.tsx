"use client";

import { useState } from "react";

import { Select, SelectItem } from "@heroui/select";
import {
  SliderValues,
  calculationData,
  calculationVariants,
} from "@/data/calculationData";

import InfoBox from "@/components/shared/box/InfoBox";
import Range from "@/components/shared/range/Range";

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
    <div>
      <div className="mb-6 xl:mb-8 xl:flex xl:h-[67px] xl:justify-between">
        <Select
          className="max-xl:mb-6 xl:max-w-[360px]"
          variant="bordered"
          radius="sm"
          size="lg"
          aria-label="Обрати тип локації"
          // defaultSelectedKeys={calculationVariants[0].key}
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
      </div>

      <ul className="flex flex-col gap-3 xl:flex-row xl:justify-between xl:gap-5">
        {calculationData.map(item => (
          <li key={item.label} className="min-w-0 grow basis-1/3">
            <InfoBox variant="light" className="px-6 py-8">
              <Range
                item={item}
                value={state[item.id]}
                onChange={newValue => handleChange(item.id, newValue)}
              />
            </InfoBox>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfitCalculation;
