"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-emerald-300 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo animacija */}
        <Link href="/" className="flex items-center gap-2 font-bold text-emerald-700 tracking-tight">
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.span
                key="full"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                className="text-lg md:text-xl"
              >
                Petković Solutions
              </motion.span>
            ) : (
              <motion.span
                key="short"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                className="text-2xl md:text-3xl"
              >
                PS
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {/* Navigacija */}
        <nav className="hidden md:flex gap-6 text-gray-800 text-sm font-medium">
          <Link href="/usluge" className="hover:text-emerald-600 transition">
            Usluge
          </Link>
          <Link href="/projekti" className="hover:text-emerald-600 transition">
            Projekti
          </Link>
          <Link href="/o-nama" className="hover:text-emerald-600 transition">
            O nama
          </Link>
          <Link
            href="/kontakt"
            className="bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
