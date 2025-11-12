"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFullLogo, setShowFullLogo] = useState(true);

  // Skrol logika – menja logo iz Petković Solutions u PS
  useEffect(() => {
    const handleScroll = () => {
      setShowFullLogo(window.scrollY < 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/usluge", label: "Usluge" },
    { href: "/projekti", label: "Projekti" },
    { href: "/onama", label: "O nama" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#F9EBD0] shadow-sm z-50 border-b border-emerald-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <AnimatePresence mode="wait">
            {showFullLogo ? (
              <motion.span
                key="full"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.4 }}
                className="text-emerald-700 font-semibold text-lg tracking-tight hover:text-emerald-600 transition"
              >
                Petković Solutions
              </motion.span>
            ) : (
              <motion.span
                key="short"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.4 }}
                className="text-emerald-700 font-bold text-lg tracking-tight hover:text-emerald-600 transition"
              >
                PS
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {/* Desktop meni */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href
                  ? "text-emerald-700 font-semibold"
                  : "text-gray-800 hover:text-emerald-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/kontakt"
            className="px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition font-medium"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile meni dugme */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile meni */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#F9EBD0] border-t border-emerald-200 shadow-inner px-6 py-4 space-y-4"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-base font-medium transition ${
                  pathname === link.href
                    ? "text-emerald-700 font-semibold"
                    : "text-gray-800 hover:text-emerald-600"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="block text-center mt-4 px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition font-medium"
            >
              Kontakt
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
