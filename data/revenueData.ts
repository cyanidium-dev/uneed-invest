export type RevenueItem = {
  value: string;
  unit: string;
  description: string;
};

export const revenueData: RevenueItem[] = [
  {
    value: "100 000",
    unit: "грн / міс.",
    description: "валовий дохід з об'єкта на місяць",
  },
  {
    value: "50 000",
    unit: "грн / міс.",
    description: "витрати на підтримку об'єкта",
  },
];
