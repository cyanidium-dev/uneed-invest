import { ROUTES } from "./routes";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Uneed invest | Інвестуйте в мережу подобової оренди житла",
  description: "Make beautiful websites regardless of your design experience.",
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

  links: {
    linkedIn: "https://www.linkedin.com/feed/",
    instagram: "https://www.instagram.com/",
    telegram: "https://web.telegram.org/a/",
    tikTok: "https://www.tiktok.com/uk-UA/",
  },

  contacts: {
    tel: "+380-97-006-76-56",
    email: "email@gmail.com",
  },
};
