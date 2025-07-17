type PartnershipItem = {
  id: number;
  title: string;
  imgMob?: string;
  imgDesk?: string;
};

export const partnershipData: PartnershipItem[] = [
  {
    id: 1,
    title: "Вибір та аналіз локації",
    imgMob: "/images/partnership/partnership-1-mob.webp",
    imgDesk: "/images/partnership/partnership-1-desk.webp",
  },
  {
    id: 2,
    title: "Підписання договору",
  },
  {
    id: 3,
    title: "Дизайн та брендування",
    imgMob: "/images/partnership/partnership-3-mob.webp",
    imgDesk: "/images/partnership/partnership-3-desk.webp",
  },
  {
    id: 4,
    title: "Закупівлі обладнання",
  },
  {
    id: 5,
    title: "Налаштування CRM, навчання",
    imgMob: "/images/partnership/partnership-5-mob.webp",
    imgDesk: "/images/partnership/partnership-5-desk.webp",
  },
  {
    id: 6,
    title: "Запуск + перші бронювання",
  },
];
