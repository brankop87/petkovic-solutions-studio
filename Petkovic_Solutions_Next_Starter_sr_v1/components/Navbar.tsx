import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-border/70">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl">Petković Solutions</Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/o-nama" className="hover:text-accent">O nama</Link>
          <Link href="/usluge" className="hover:text-accent">Usluge</Link>
          <Link href="/projekti" className="hover:text-accent">Projekti</Link>
          <Link href="/kontakt" className="hover:text-accent">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}
