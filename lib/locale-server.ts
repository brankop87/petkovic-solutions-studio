import { cookies } from "next/headers";
import { LOCALE_COOKIE, defaultLocale, isLocale, Locale } from "@/data/i18n";

// Server-only: reads the locale cookie. Do not import from client components.
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : defaultLocale;
}
