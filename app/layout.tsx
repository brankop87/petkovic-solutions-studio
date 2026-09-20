import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { Manrope, Playfair_Display } from "next/font/google";
import SiteChrome from "@/components/layout/SiteChrome";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { LOCALE_COOKIE, defaultLocale, isLocale } from "@/data/i18n";
import { siteUrl } from "@/data/site";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
});

const display = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});

const description =
  "Petkovic Solutions builds conversion-focused websites and landing pages for service businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Petkovic Solutions",
    template: "%s | Petkovic Solutions",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Petkovic Solutions",
    title: "Petkovic Solutions",
    description,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Petkovic Solutions",
    description,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const stored = cookieStore.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(stored) ? stored : defaultLocale;

  return (
    <html lang={locale}>
      <body className={`${manrope.variable} ${display.variable} bg-[var(--bg)] text-[var(--text)]`}>
        <LocaleProvider initialLocale={locale}>
          <SiteChrome>{children}</SiteChrome>
        </LocaleProvider>
      </body>
    </html>
  );
}
