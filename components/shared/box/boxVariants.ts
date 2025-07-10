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
    "bg-glass-bg backdrop-blur-glass shadow-inset-glass text-light",
  "glass-dark": "bg-glass-bg backdrop-blur-glass shadow-inset-glass text-dark",
};
