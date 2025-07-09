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
