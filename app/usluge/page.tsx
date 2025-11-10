"use client";

import { MotionConfig } from "framer-motion";
import Link from "next/link";

export default function UslugePage() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="bg-gray-950 text-white min-h-screen py-24 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Naslov */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-semibold text-emerald-400">
              Naše usluge
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Gradimo digitalna rešenja od nule — stabilna, moderna i spremna za rast.
              Naš fokus je dugoročna vrednost, ne brzi projekti.
            </p>
          </div>

          {/* Kartice usluga */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web & App razvoj",
                desc: "Next.js, Flutter, Tailwind, Supabase — brzi, stabilni i moderni sistemi.",
              },
              {
                title: "AI rešenja i automatizacija",
                desc: "Chatbotovi, asistenti za klijente, integracije sa OpenAI i prilagođeni AI alati.",
              },
              {
                title: "SaaS temelji i arhitektura",
                desc: "Autentikacija, plaćanja, CMS, deployment i skaliranje. Gradimo temelje za rast.",
              },
              {
                title: "Brendiranje i UX dizajn",
                desc: "Jedinstveni vizuelni identitet i jednostavno korisničko iskustvo koje prodaje.",
              },
              {
                title: "Integracije i API sistemi",
                desc: "Spajamo aplikacije, CRM, i alate u jedinstven sistem — efikasnije poslovanje.",
              },
              {
                title: "Održavanje i podrška",
                desc: "Tehnička podrška, analitika i redovno unapređenje vaših digitalnih rešenja.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-6 bg-gray-900 border border-gray-800 hover:border-emerald-400 hover:scale-[1.01] transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold text-emerald-300">
                  {s.title}
                </h3>
                <p className="text-gray-400 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA sekcija */}
          <div className="text-center pt-10">
            <p className="text-gray-400 mb-4">
              Želite da pokrenemo vaš sledeći projekat?
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-8 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
            >
              Zakaži konsultaciju
            </Link>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
