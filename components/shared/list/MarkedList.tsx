import { cn } from "@/utils/cn";

interface MarkedListProps {
  data: string[];
  listClassName?: string;
  itemClassName?: string;
  textClassName?: string;
  markerClassName?: string;
}

const MarkedList = ({
  data,
  listClassName,
  itemClassName,
  textClassName,
  markerClassName,
}: MarkedListProps) => {
  return (
    <ul className={cn("flex flex-col gap-4", listClassName)}>
      {data.map((text, index) => (
        <li
          key={index}
          className={cn("flex items-center gap-4", itemClassName)}
        >
          <span
            className={cn(
              "size-4 shrink-0 rounded-full bg-light xl:size-5",
              markerClassName
            )}
          />
          <span
            className={cn(
              "font-manrope text-[12px] font-light leading-[1.22] text-light xl:text-[16px]",
              textClassName
            )}
          >
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default MarkedList;
