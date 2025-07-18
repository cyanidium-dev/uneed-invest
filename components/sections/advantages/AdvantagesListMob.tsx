import AnimatedList from "@/components/shared/animated/AnimatedList";
import AnimatedListItem from "@/components/shared/animated/AnimatedListItem";
import StarInfoBox from "@/components/shared/box/StarInfoBox";
import { advantagesData } from "@/data/advantagesData";

const AdvantagesListMob = () => {
  return (
    <AnimatedList className="mx-auto flex flex-col gap-3 xl:hidden">
      {advantagesData.map(([first, second], index) => (
        <AnimatedListItem
          key={index}
          className="flex w-full gap-3 even:flex-row-reverse"
        >
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
        </AnimatedListItem>
      ))}
    </AnimatedList>
  );
};

export default AdvantagesListMob;
