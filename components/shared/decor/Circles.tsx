import { cn } from "@/utils/cn";

interface ICirclesProps {
  color?: "bg-accent" | "bg-light";
  directionToSmall?: "right" | "left" | "down" | "up";
  className?: string;
}

const Circles = ({
  color = "bg-accent",
  directionToSmall = "right",
  className,
}: ICirclesProps) => {
  const wrapperStyles = cn(
    "flex items-center justify-center gap-[15px]",
    directionToSmall === "down" && "flex-col",
    directionToSmall === "left" && "flex-row-reverse",
    directionToSmall === "right" && "flex-row",
    directionToSmall === "up" && "flex-co-reverse",
    className
  );

  return (
    <div className={wrapperStyles}>
      <div className={cn("size-6 rounded-full xl:size-12", color)} />
      <div
        className={cn("size-3 rounded-full bg-accent xl:size-[25px]", color)}
      />
      <div
        className={cn(
          "size-[6px] rounded-full bg-accent xl:size-[13px]",
          color
        )}
      />
    </div>
  );
};

export default Circles;
