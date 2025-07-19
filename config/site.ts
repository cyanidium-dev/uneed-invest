import { ROUTES } from "./routes";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  seo: {
    companyName: "Uneed Invest",
    title: "Інвестуйте в мережу подобової оренди житла",
    description:
      "Надійні та прості інвестиції з підтримкою експертів. Почніть заробляти вже сьогодні з Uneed Invest.",
  },
  navItems: [
    {
      label: ROUTES.ESTIMATE.label,
      href: ROUTES.ESTIMATE.href,
    },
    {
      label: ROUTES.ABOUT.label,
      href: ROUTES.ABOUT.href,
    },
    {
      label: ROUTES.PARTNERSHIP.label,
      href: ROUTES.PARTNERSHIP.href,
    },
    {
      label: ROUTES.CALCULATOR.label,
      href: ROUTES.CALCULATOR.href,
    },
    {
      label: ROUTES.LOCATIONS.label,
      href: ROUTES.LOCATIONS.href,
    },
    {
      label: ROUTES.REVIEWS.label,
      href: ROUTES.REVIEWS.href,
    },
    {
      label: ROUTES.FAQ.label,
      href: ROUTES.FAQ.href,
    },
  ],

  info: [
    {
      label: "Юридичні деталі",
      href: "#",
    },
    {
      label: "ФОП",
      href: "#",
    },
    {
      label: "Оферта",
      href: "#",
    },
    {
      label: "Конфіденціальність",
      href: "#",
    },
  ],

  links: {
    youtube: "https://youtube.com/@uneed_group?si=PSA_GRFDdfyyIiJi",
    tikTok: "https://www.tiktok.com/uk-UA/",
  },

  contacts: {
    tel: "+380-97-567-55-77",
    email: "partners@uneedinvest.com",
  },
};
