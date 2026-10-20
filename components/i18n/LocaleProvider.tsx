"use client";

import { createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Locale } from "@/data/i18n";

type LocaleContextValue = { locale: Locale };

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Locale follows the URL: "/sr" and "/sr/*" are Serbian, everything else English.
  const pathname = usePathname() || "/";
  const locale: Locale =
    pathname === "/sr" || pathname.startsWith("/sr/") ? "sr" : "en";

  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
