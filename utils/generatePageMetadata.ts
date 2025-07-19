import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

import { getBaseUrl } from "./getTranslations";

export async function generatePageMetadata(): Promise<Metadata> {
  const { companyName, description, title } = siteConfig.seo;

  const siteName = `${companyName} — ${title}`;

  const baseUrl = await getBaseUrl();

  const defaultOgImage = `${baseUrl}/images/seo-default.webp`;

  const metadata: Metadata = {
    title: siteName,
    description,
    metadataBase: new URL(baseUrl),

    openGraph: {
      title,
      description,
      url: baseUrl,
      type: "website",
      siteName,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
      locale: "uk_UA",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },

    icons: {
      icon: "/favicon.ico",
    },
  };

  return metadata;
}
