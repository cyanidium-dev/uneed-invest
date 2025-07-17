export const APPLICATION = {
  FORM: "Заявка з форми",
  PRESENTATION: "Заявка на отримання презентації",
  PARTNERSHIP: "Заявка на партнерство",
} as const;

export type ApplicationType = (typeof APPLICATION)[keyof typeof APPLICATION];
