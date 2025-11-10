"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-emerald-300 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-emerald-600 font-bold text-xl tracking-tight"
        >
          Petković Solutions
        </Link>

        {/* Desktop navigacija */}
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

        {/* Mobilni meni dugme */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-emerald-700"
          aria-label="Otvori meni"
        >
          ☰
        </button>
      </div>

      {/* Mobilni meni */}
      {open && (
        <div className="md:hidden bg-white border-t border-emerald-200 shadow-lg">
          <nav className="flex flex-col p-4 space-y-2 text-gray-800">
            <Link href="/usluge" onClick={() => setOpen(false)}>
              Usluge
            </Link>
            <Link href="/projekti" onClick={() => setOpen(false)}>
              Projekti
            </Link>
            <Link href="/o-nama" onClick={() => setOpen(false)}>
              O nama
            </Link>
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-center hover:bg-emerald-700 transition"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
