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
    <html suppressHydrationWarning lang="uk">
      <head />
      <body className="font-helvetica min-h-screen bg-background text-foreground antialiased">
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex h-screen flex-col">
            <Header />
            <main className="mx-auto flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
