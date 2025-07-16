import { Metadata } from "next";

import { siteConfig } from "@/config/site";

import { Providers } from "./providers";

import "@/styles/globals.css";

import Footer from "@/components/module/footer/Footer";
import Header from "@/components/module/header/Header";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="uk" className="scroll-smooth">
      <head>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        /> */}
        <link
          rel="preload"
          as="image"
          href="/images/hero/hero-bg-mob.webp"
          type="image/webp"
          fetchPriority="high"
          media="(max-width: 1280px)"
        />
      </head>

      <body className="min-h-screen bg-light font-helvetica text-[14px] text-dark antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
