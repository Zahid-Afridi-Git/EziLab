import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import { BackToTop } from "@/components/layout/back-to-top";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/data/site";

import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const themeInitScript = `
(() => {
  const key = "ezilab-theme";
  const saved = window.localStorage.getItem(key);
  const fallback = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const theme = saved || fallback;
  document.documentElement.dataset.theme = theme;
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://ezilab.dev"),
  title: {
    default: "EziLab | Digital Product Organization",
    template: "%s | EziLab",
  },
  description: siteConfig.description,
  applicationName: "EziLab",
  keywords: [
    "EziLab",
    "organization portfolio",
    "web development",
    "app development",
    "dashboard development",
    "digital product studio",
  ],
  openGraph: {
    title: "EziLab | Digital Product Organization",
    description: siteConfig.description,
    siteName: "EziLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EziLab | Digital Product Organization",
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${bodyFont.variable} ${headingFont.variable} min-h-screen antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
