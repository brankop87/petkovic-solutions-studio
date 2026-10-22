"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

// "Serbian door": a quiet, dismissible prompt shown only to visitors whose
// browser prefers a regional language (sr/hr/bs/cnr) while they are on an
// English (root) page. It points them to the /sr version, where the copy and
// the local pricing band live. We never auto-redirect (keeps SEO + user choice
// intact) — we only suggest.

const DISMISS_KEY = "sr-door-dismissed";
const REGIONAL = ["sr", "hr", "bs", "cnr"];

export default function LanguageSuggestion() {
  const pathname = usePathname() || "/";
  const [show, setShow] = useState(false);

  const isSr = pathname === "/sr" || pathname.startsWith("/sr/");
  const target = pathname === "/" ? "/sr" : `/sr${pathname}`;

  useEffect(() => {
    if (isSr) return; // already on the Serbian side

    let dismissed = false;
    try {
      dismissed = localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      /* private mode / blocked storage — just proceed */
    }
    if (dismissed) return;

    const langs =
      navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language];
    const prefersRegional = langs.some(
      (l) => l && REGIONAL.some((code) => l.toLowerCase().startsWith(code)),
    );
    if (prefersRegional) setShow(true);
  }, [isSr, pathname]);

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.28 }}
          className="fixed bottom-4 left-4 z-40 w-[min(300px,calc(100vw-2rem))] rounded-2xl border border-[var(--line)] bg-[#0c1216]/95 p-4 shadow-2xl backdrop-blur-xl"
        >
          <button
            type="button"
            onClick={dismiss}
            aria-label="Zatvori"
            className="absolute right-2.5 top-2.5 text-sm text-[var(--muted-strong)] transition hover:text-white"
          >
            x
          </button>

          <p className="pr-5 text-sm font-semibold text-white">
            Pričaš srpski? 🇷🇸
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[var(--muted-strong)]">
            Pogledaj ponudu i cene prilagođene domaćem tržištu.
          </p>

          <Link
            href={target}
            onClick={dismiss}
            className="mt-3 inline-block rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-[#0c1216] transition hover:opacity-90"
          >
            Pređi na srpski &rarr;
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
