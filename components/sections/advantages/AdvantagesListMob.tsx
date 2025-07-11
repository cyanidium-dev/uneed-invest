import StarInfoBox from "@/components/shared/box/StarInfoBox";
import { advantagesData } from "@/data/advantagesData";

const AdvantagesListMob = () => {
  return (
    <ul className="mx-auto flex flex-col gap-3 xl:hidden">
      {advantagesData.map(([first, second], index) => (
        <li key={index} className="flex w-full gap-3 even:flex-row-reverse">
          <div className="flex w-full flex-col gap-3">
            <StarInfoBox
              text={first}
              boxVariant="dark"
              textSize="sm"
              boxClassName="h-[60px]"
            />
            <StarInfoBox
              text={second}
              boxVariant="dark"
              textSize="sm"
              boxClassName="h-[60px]"
            />
          </div>

          <div
            className="h-[132px] w-[65px] shrink-0 rounded-xl bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('/images/advantages/advantages-${index + 1}-mob.webp')`,
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default AdvantagesListMob;
