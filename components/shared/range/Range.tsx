import { Slider } from "@heroui/slider";
import { CalculationItem } from "@/data/calculationData";

interface IRangeProps {
  item: CalculationItem;
  value: number;
  onChange: (value: number | number[]) => void;
}

const Range = ({ item, value, onChange }: IRangeProps) => {
  const { defaultValue, label, maxValue, minValue, step } = item;

  return (
    <Slider
      classNames={{
        track: "bg-dark h-[2px] mt-auto border-x-[0px]",
        filler: "bg-transparent h-[2px]",
        label: "font-manrope leading-none mb-[60px]",
        trackWrapper: "mb-8",
        startContent:
          "absolute bottom-[-32px] font-bold text-[18px] leading-none uppercase ",
        endContent:
          "absolute bottom-[-32px] right-0 font-bold text-[18px] leading-none uppercase ",
      }}
      //   className="max-w-md"
      defaultValue={defaultValue}
      label={label}
      maxValue={maxValue}
      minValue={minValue}
      step={step}
      size="sm"
      startContent={minValue}
      endContent={maxValue}
      onChange={onChange}
      hideValue={true}
      renderThumb={props => (
        <div
          {...props}
          className="group relative top-1/2 cursor-grab rounded-full bg-dark data-[dragging=true]:cursor-grabbing"
        >
          <div className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-[2px] bg-accent px-3 py-[6px] text-[18px] font-bold leading-none text-light xl:-top-10">
            {value}
          </div>
          <div className="size-[18px] rounded-full bg-dark transition-transform group-data-[dragging=true]:scale-80 xl:size-5" />
        </div>
      )}
    />
  );
};

export default Range;
