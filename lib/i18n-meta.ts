import type { Metadata } from "next";
import { Locale } from "@/data/i18n";

// Build full localized metadata for a page from its EN (root) path:
// canonical + hreflang alternates, plus locale-correct Open Graph / Twitter.
// Relative URLs resolve against metadataBase (set in the root layout).
export function metaFor(
  enPath: string,
  locale: Locale,
  opts: { title?: string; description: string },
): Metadata {
  const srPath = enPath === "/" ? "/sr" : `/sr${enPath}`;
  const path = locale === "en" ? enPath : srPath;

  return {
    ...(opts.title ? { title: opts.title } : {}),
    description: opts.description,
    alternates: {
      canonical: path,
      languages: { en: enPath, sr: srPath, "x-default": enPath },
    },
    openGraph: {
      ...(opts.title ? { title: opts.title } : {}),
      description: opts.description,
      url: path,
      locale: locale === "sr" ? "sr_RS" : "en_US",
    },
    twitter: {
      ...(opts.title ? { title: opts.title } : {}),
      description: opts.description,
    },
  };
}
