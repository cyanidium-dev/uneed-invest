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
        "flex text-light",
        variant === "accent" ? "bg-accent" : "bg-dark",
        className
      )}
    >
      {[...Array(2)].map((_, sectionIndex) => (
        <div
          key={sectionIndex}
          className="flex min-w-[50%] animate-[marquee_25s_linear_infinite] items-center py-3 xl:animate-[marquee_32s_linear_infinite]"
        >
          {logos.map((_, i) => (
            <MarqueeLogo key={i} className="mx-[7px] w-[116px]" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
