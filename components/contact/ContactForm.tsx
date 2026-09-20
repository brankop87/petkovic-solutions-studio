"use client";

import { FormEvent, useState } from "react";
import { pages } from "@/data/pages";

type ContactStrings = (typeof pages)["en"]["contact"];

export default function ContactForm({ t }: { t: ContactStrings }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot: ostaje prazno kod pravih posetilaca, botovi ga popunjavaju.
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      if (res.ok) {
        setStatus(t.success);
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      setStatus(res.status === 429 ? t.rateLimited : t.error);
    } catch {
      setStatus(t.error);
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "w-full rounded-[18px] border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-4 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)]";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-[var(--line)] bg-[var(--surface)] p-8 sm:p-10"
    >
      <div className="grid gap-5">
        <input
          className={fieldClass}
          placeholder={t.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          maxLength={120}
          autoComplete="name"
        />

        <input
          className={fieldClass}
          type="email"
          placeholder={t.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={200}
          autoComplete="email"
        />

        <textarea
          className={`${fieldClass} h-40 resize-none`}
          placeholder={t.messagePlaceholder}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={5000}
        />

        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <button
          disabled={loading}
          className="rounded-full bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-[#06110d] transition hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? t.sending : t.submit}
        </button>

        {status ? <p className="text-sm text-[var(--muted-strong)]">{status}</p> : null}
      </div>
    </form>
  );
}
