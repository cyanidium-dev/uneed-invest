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
  href?: string;
};

export const locationData: LocationItem[] = [
  {
    place: "Uneed hotels",
    address: "Вул. Георгія Кірпи, 2а",
    imgUrl: loc1,
    boxVariant: "dark",
    href: "https://www.google.com/maps/search/Heorhiia+Kirpy+St,+2%D0%90+Kyiv+02000/@50.4379586,30.4900319,18z?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    place: "Uneed apartments",
    address: "Вул. Антоновича, 23",
    imgUrl: loc2,
    boxVariant: "dark",
    href: "https://www.google.com/maps/place/Antonovycha+St,+23,+Kyiv,+02000/@50.4367088,30.5114359,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4cefc641fbbe9:0x1d508ac458465760!8m2!3d50.4367088!4d30.5140108!16s%2Fg%2F1v1sjr2r?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    place: "Uneed rooms",
    address: "Вул. Михайлівська 24/11",
    imgUrl: loc3,
    boxVariant: "dark",
    href: "https://www.google.com/maps/place/Mykhailivs'ka+St,+24%2F11,+Kyiv,+02000/@50.4544588,30.5209887,19z/data=!4m6!3m5!1s0x40d4ce453658f3cf:0x1166677c754b323b!8m2!3d50.4545837!4d30.5210949!16s%2Fg%2F11pcpxpc_7?hl=en&entry=ttu&g_ep=EgoyMDI1MDcxNS4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    place: "Uneed office",
    address: "В найближчому майбутньому",
    imgUrl: loc4,
    boxVariant: "glass-dark",
  },
  {
    place: "Uneed House",
    address: "В найближчому майбутньому",
    imgUrl: loc5,
    boxVariant: "glass-dark",
  },
];
