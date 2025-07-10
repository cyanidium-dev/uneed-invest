import { BoxVariant } from "@/components/shared/box/boxVariants";

type TokenICOVariant = {
  title: string;
  description: string;
  serviceList: string[];
  boxVariant: BoxVariant;
  markClassName?: string;
  textClassName?: string;
};

export const tokenICOData: TokenICOVariant[] = [
  {
    title: "Business Token",
    description:
      "Для тих, хто хоче почати з малого, протестувати і поступово масштабуватись. Доступний вхід від 100$",
    serviceList: [
      "Доступний вхід",
      "Частка в доході з конкретної локації",
      "Можливість продавати/обмінювати",
    ],
    boxVariant: "light",
    markClassName: "bg-dark",
    textClassName: "text-dark",
  },
  {
    title: "Property Token",
    description:
      "Токен, прив'язаний до конкретного об'єкта нерухомості. Доступний вхід від 1000$",
    serviceList: [
      "Дохід саме з цього апартаменту",
      "Можливість перепродажу токена іншим інвесторам",
      "Частка від капіталізації об'єкту",
    ],
    boxVariant: "glass-light",
  },
  {
    title: "Investor Token",
    description:
      "Для тих, хто хоче брати участь в розвитку компанії і отримувати більшу частину прибутку. Доступний вхід від 10000$",
    serviceList: [
      "Більша частка прибутку",
      "Пріоритет на розподіл дивідендів",
      "Доступ до партнерських програм",
    ],
    boxVariant: "accent",
  },
];

export const howTokenWork = [
  "Купуєте токен під час ICO (одна частка — це ваша частина бізнесу)",
  "Отримуєте прибуток пропорційно володінню — з доходів мережі",
  "Маєте змогу продати токен або утримувати його як актив",
];
