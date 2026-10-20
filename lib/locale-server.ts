import { headers } from "next/headers";
import { defaultLocale, isLocale, Locale } from "@/data/i18n";

// Server-only: reads the locale set by middleware from the URL path.
// Used by the root layout to set <html lang>. Pages pass their locale explicitly.
export async function getLocale(): Promise<Locale> {
  const h = await headers();
  const value = h.get("x-locale") ?? undefined;
  return isLocale(value) ? value : defaultLocale;
}
