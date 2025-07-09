export const boxVariants = ["accent", "dark", "light", "glass"] as const;

export type BoxVariant = (typeof boxVariants)[number];

export const boxVariantClasses: Record<BoxVariant, string> = {
  accent: "bg-accent text-light",
  dark: "bg-dark text-light",
  light: "bg-light text-dark",
  glass: "bg-glass-bg backdrop-blur-glass shadow-inset-glass text-dark",
};
