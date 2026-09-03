import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { Manrope, Fraunces } from "next/font/google";
import SiteChrome from "@/components/layout/SiteChrome";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { LOCALE_COOKIE, defaultLocale, isLocale } from "@/data/i18n";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Petkovic Solutions",
  description:
    "Petkovic Solutions builds conversion-focused websites and landing pages for service businesses.",
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
      <body className={`${manrope.variable} ${fraunces.variable} bg-[var(--bg)] text-[var(--text)]`}>
        <LocaleProvider initialLocale={locale}>
          <SiteChrome>{children}</SiteChrome>
        </LocaleProvider>
      </body>
    </html>
  );
}
