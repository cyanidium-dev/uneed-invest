import StarInfoBox from "@/components/shared/box/StarInfoBox";
import BaseButton from "@/components/shared/buttons/BaseButton";

const MoreLocations = () => {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
      <StarInfoBox
        text="Твоя частка в майбутньому"
        boxVariant="light"
        boxClassName="xl:w-[550px] xl:h-[87px]"
      />

      <div className="mx-auto w-[320px] text-[27px] font-bold uppercase leading-[1.41] xl:w-[550px] xl:text-[46px]">
        <p>Хочете переглянути</p>

        <div className="flex items-end gap-2">
          <BaseButton className="mb-[3px] w-[188px] text-[10px] leading-[20px] max-xl:h-8 xl:mb-[9px] xl:w-[313px] xl:text-[12px]">
            Перейти на сайт
          </BaseButton>
          <span>більше?</span>
        </div>
      </div>
    </div>
  );
};

export default MoreLocations;
