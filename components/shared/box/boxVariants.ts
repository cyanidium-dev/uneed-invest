export const boxVariants = ["accent", "dark", "light", "glass"] as const;

export type BoxVariant = (typeof boxVariants)[number];

export const boxVariantClasses: Record<BoxVariant, string> = {
  accent: "bg-accent text-light",
  dark: "bg-dark text-light",
  light: "bg-light text-dark",
  glass: "bg-glass-bg backdrop-blur-glass shadow-inset-glass text-white",
};

export const starVariant = [
  "accent-light",
  "accent-dark",
  "dark",
  "light",
] as const;

export type StarVariant = (typeof starVariant)[number];

export const starVariantClasses: Record<StarVariant, string> = {
  "accent-dark": "bg-dark text-accent",
  "accent-light": "bg-light text-accent",
  dark: "bg-accent text-dark",
  light: "bg-accent text-light",
};
