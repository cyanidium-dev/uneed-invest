type investmentItem = {
  label: string;
  variant: "accent" | "dark" | "light" | "glass";
  items: {
    label: string;
    value: string;
    description: string;
  }[];
  decor?: boolean;
};

export const investmentOptions: investmentItem[] = [
  {
    label: "При покупці",
    variant: "accent",
    items: [
      { label: "від", value: "100 000$", description: "" },
      { label: "", value: "8-16%", description: "річних" },
      { label: "", value: "7-13", description: "років" },
    ],
  },

  {
    label: "При оренді",
    variant: "dark",
    items: [
      { label: "від", value: "20 000$", description: "" },
      { label: "", value: "24-48%", description: "річних" },
      { label: "", value: "2-4", description: "роки" },
    ],
    decor: true,
  },
];
