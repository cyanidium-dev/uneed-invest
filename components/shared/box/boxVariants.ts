export const boxVariants = [
  "accent",
  "dark",
  "light",
  "glass-light",
  "glass-dark",
] as const;

export type BoxVariant = (typeof boxVariants)[number];

export const boxVariantClasses: Record<BoxVariant, string> = {
  accent: "bg-accent text-light",
  dark: "bg-dark text-light",
  light: "bg-light text-dark",
  "glass-light":
    "bg-rgba(70,70,70,0.26)] shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] backdrop-blur-[26px] text-light",
  "glass-dark":
    "bg-rgba(250,250,250,0.26) shadow-[inset_0px_4px_14.4px_rgba(0,0,0,0.11)] backdrop-blur-[13.9px] text-dark",
};
