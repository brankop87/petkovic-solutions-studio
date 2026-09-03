"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { contact } from "@/data/site";
import { pages } from "@/data/pages";

export default function ContactPage() {
  const { locale } = useLocale();
  const t = pages[locale].contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setLoading(false);

    if (res.ok) {
      setStatus(t.success);
      setName("");
      setEmail("");
      setMessage("");
      return;
    }

    setStatus(t.error);
  }

  return (
    <section className="px-6 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-36">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="max-w-xl">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            {t.eyebrow}
          </div>

          <h1
            className="mt-4 text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {t.title}
          </h1>

          <p className="mt-8 text-base leading-8 text-[var(--muted)]">{t.lead}</p>

          <div className="mt-8 rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-7">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              {t.directEmailLabel}
            </div>
            <a
              className="mt-3 block text-lg text-[var(--accent-strong)] transition hover:text-white"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>

            <div className="mt-6 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
              {t.helpsLabel}
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{t.helpsBody}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-8 sm:p-10">
          <div className="grid gap-5">
            <input
              className="w-full rounded-[18px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              placeholder={t.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full rounded-[18px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className="h-40 w-full resize-none rounded-[18px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              placeholder={t.messagePlaceholder}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              disabled={loading}
              className="rounded-full bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-[#06110d] transition hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? t.sending : t.submit}
            </button>

            {status ? (
              <p className="text-sm text-[var(--muted-strong)]">{status}</p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
