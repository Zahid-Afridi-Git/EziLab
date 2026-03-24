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
  metadataBase: new URL("https://ezilab.io"),
  title: {
    default: "EziLab | Elevate Zone of Innovation Laboratory",
    template: "%s | EziLab",
  },
  description: siteConfig.description,
  applicationName: "EziLab",
  authors: [{ name: "EziLab", url: "https://ezilab.io" }],
  creator: "EziLab",
  publisher: "EziLab",
  keywords: [
    "EziLab",
    "Elevate Zone of Innovation Laboratory",
    "ezilab.io",
    "web development company",
    "app development",
    "Next.js development",
    "React development agency",
    "custom web applications",
    "dashboard development",
    "e-commerce development",
    "mobile app development",
    "digital product studio",
    "UI UX design services",
    "TypeScript development",
    "Node.js development",
    "freelance web developer",
    "software development company",
  ],
  openGraph: {
    title: "EziLab | Elevate Zone of Innovation Laboratory",
    description: siteConfig.description,
    url: "https://ezilab.io",
    siteName: "EziLab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EziLab | Elevate Zone of Innovation Laboratory",
    description: siteConfig.description,
    creator: "@ezilab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ezilab.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EziLab",
    alternateName: "Elevate Zone of Innovation Laboratory",
    url: "https://ezilab.io",
    email: "zahid@ezilab.io",
    description: siteConfig.description,
    foundingDate: "2025",
    areaServed: "Worldwide",
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.x,
    ],
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "Dashboard Development",
      "E-commerce Development",
      "UI/UX Design",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
