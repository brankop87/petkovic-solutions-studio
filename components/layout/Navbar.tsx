"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCompactLogo, setShowCompactLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCompactLogo(window.scrollY > 48);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[var(--line)] bg-[#0c1216]/82 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center leading-none">
          <AnimatePresence mode="wait">
            <motion.span
              key={showCompactLogo ? "compact" : "full"}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.22 }}
              className="block text-sm leading-none tracking-tight text-white sm:text-base"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {showCompactLogo ? (
                "PS"
              ) : (
                <>
                  Petkovic <span className="text-[var(--accent)]">Solutions</span>
                </>
              )}
            </motion.span>
          </AnimatePresence>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted-strong)] transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/kontakt"
            className="rounded-full border border-[var(--line)] bg-white/[0.04] px-5 py-2 text-sm text-white transition hover:border-[var(--accent)] hover:bg-[rgba(24,160,106,0.12)] hover:text-[var(--accent-strong)]"
          >
            Request audit
          </Link>
        </div>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          {menuOpen ? "x" : "="}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[var(--line)] bg-[#0c1216] px-6 py-5 md:hidden"
          >
            <div className="space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base text-[var(--muted-strong)] transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/kontakt"
                onClick={() => setMenuOpen(false)}
                className="mt-4 block rounded-full border border-[var(--line)] bg-white/[0.04] px-5 py-3 text-center text-sm text-white transition hover:border-[var(--accent)] hover:bg-[rgba(24,160,106,0.12)]"
              >
                Request audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
