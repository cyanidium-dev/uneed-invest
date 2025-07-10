import { MarqueeLogo } from "@/components/icons";
import { cn } from "@/utils/cn";

interface IMarqueeProps {
  className?: string;
  variant?: "accent" | "dark";
}

const Marquee = ({ className = "", variant = "accent" }: IMarqueeProps) => {
  const logos = Array.from({ length: 20 });

  return (
    <div
      className={cn(
        "flex h-9 text-light xl:h-[56px]",
        variant === "accent" ? "bg-accent" : "bg-dark",
        className
      )}
    >
      {[...Array(2)].map((_, sectionIndex) => (
        <div
          key={sectionIndex}
          className="flex min-w-[50%] animate-[marquee_25s_linear_infinite] items-center xl:animate-[marquee_32s_linear_infinite]"
        >
          {logos.map((_, i) => (
            <MarqueeLogo
              key={i}
              className={cn("mx-[7px] w-[116px] xl:w-[146px]")}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
