import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-950 border-b border-emerald-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-emerald-400 text-2xl font-bold tracking-tight">
          Petković Solutions
        </Link>
        <div className="flex gap-6 text-gray-300 text-sm">
          <Link href="/usluge" className="hover:text-emerald-400 transition">Usluge</Link>
          <Link href="/projekti" className="hover:text-emerald-400 transition">Projekti</Link>
          <Link href="/o-nama" className="hover:text-emerald-400 transition">O nama</Link>
          <Link href="/kontakt" className="hover:text-emerald-400 transition">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
}
