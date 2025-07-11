import { StaticImageData } from "next/image";

import review1 from "@/public/images/reviews/reviews-1.webp";
import review2 from "@/public/images/reviews/reviews-2.webp";

type ReviewItem = {
  name: string;
  text: string;
  imgSrc: StaticImageData;
};

export const reviewData: ReviewItem[] = [
  {
    name: "Володимир",
    text: "«Я зайшов у проєкт із побоюваннями, але вже на другий місяць вийшов на стабільний прибуток. Підтримка від команди — сильна сторона франшизи».",
    imgSrc: review1,
  },
  {
    name: "Олександра",
    text: "Я довго шукала варіант для інвестицій із пасивним доходом. Коли побачила цю модель — зрозуміла, що це саме те.",
    imgSrc: review2,
  },
];
