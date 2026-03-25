import Link from "next/link";
import { navigationLinks } from "@/data/navigation";
import { siteData } from "@/data/site";

export default function Footer() {
  const { brand } = siteData;

  return (
    <footer className="border-t border-[var(--line)] px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <div
            className="text-2xl text-white"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {brand}
          </div>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)]">
            Websites and landing pages for service businesses that need a more
            credible online presence.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-[var(--muted-strong)] md:justify-self-end md:text-right">
          {navigationLinks.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" className="transition hover:text-white">
            Request audit
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1200px] border-t border-[var(--line)] pt-6 text-center">
        <div
          className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]"
          style={{ opacity: 0.78 }}
        >
          Petkovic Solutions
        </div>
      </div>
    </footer>
  );
}
