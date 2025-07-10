export interface SliderValues {
  rooms: number;
  price: number;
  occupancy: number;
}

export type CalculationItem = {
  id: keyof SliderValues;
  label: string;
  minValue: number;
  maxValue: number;
  step: number;
  defaultValue: number;
};

export const calculationData: CalculationItem[] = [
  {
    id: "rooms",
    label: "Кількість кімнат",
    minValue: 1,
    maxValue: 20,
    step: 1,
    defaultValue: 8,
  },
  {
    id: "price",
    label: "Ціна за апартамент",
    minValue: 800,
    maxValue: 2000,
    step: 50,
    defaultValue: 1200,
  },
  {
    id: "occupancy",
    label: "Середня заповнюваність (%)",
    minValue: 50,
    maxValue: 100,
    step: 1,
    defaultValue: 70,
  },
] as const;

type CalculationVariant = {
  key: string;
  label: string;
};

export const calculationVariants: CalculationVariant[] = [
  {
    key: "hotels",
    label: "Uneed hotels",
  },
  {
    key: "rooms",
    label: "Uneed rooms",
  },
  {
    key: "apartments",
    label: "Uneed apartments",
  },
];
