import { StaticImageData } from "next/image";

import loc1 from "@/public/images/locations/locations-1.webp";
import loc2 from "@/public/images/locations/locations-2.webp";
import loc3 from "@/public/images/locations/locations-3.webp";
import loc4 from "@/public/images/locations/locations-4.webp";
import loc5 from "@/public/images/locations/locations-5.webp";

import { BoxVariant } from "@/components/shared/box/boxVariants";

type LocationItem = {
  place: string;
  address: string;
  imgUrl: StaticImageData;
  boxVariant: BoxVariant;
  isArrow: boolean;
};

export const locationData: LocationItem[] = [
  {
    place: "Uneed hotels",
    address: "Вул. Георгія Кірпи, 2а",
    imgUrl: loc1,
    boxVariant: "dark",
    isArrow: true,
  },
  {
    place: "Uneed apartments",
    address: "Вул. Антоновича, 23",
    imgUrl: loc2,
    boxVariant: "dark",
    isArrow: true,
  },
  {
    place: "Uneed rooms",
    address: "Вул. Михайлівська 24/11",
    imgUrl: loc3,
    boxVariant: "dark",
    isArrow: true,
  },
  {
    place: "Uneed office",
    address: "В найближчому майбутньому",
    imgUrl: loc4,
    boxVariant: "glass",
    isArrow: true,
  },
  {
    place: "Uneed House",
    address: "В найближчому майбутньому",
    imgUrl: loc5,
    boxVariant: "glass",
    isArrow: true,
  },
];
