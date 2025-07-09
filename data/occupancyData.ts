import { StaticImageData } from "next/image";

import { BoxVariant } from "@/components/shared/box/boxVariants";

export type OccupancyItem = {
  title: string;
  description: string;
  boxVariant: BoxVariant;
  image?: StaticImageData;
};

export const occupancyData: OccupancyItem[] = [];
