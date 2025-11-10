"use client";

import Link from "next/link";
import { MotionConfig } from "framer-motion";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      {/* HERO SEKCIJA */}
      <section className="bg-gray-950 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Gradimo digitalna rešenja koja traju
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
            Petković Solutions — moderna digitalna agencija fokusirana na web,
            aplikacije i AI sisteme koji rastu zajedno sa vašim biznisom.
          </p>

          {/* Dugmad */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/usluge"
              className="inline-block px-8 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
            >
              Pogledaj usluge
            </Link>
            <Link
              href="/projekti"
              className="inline-block px-8 py-3 rounded-xl border border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white transition"
            >
              Projekti
            </Link>
          </div>
        </div>
      </section>

      {/* SEKCJA O PETCIETY APLIKACIJI */}
      <section className="bg-gray-950 text-white py-20 border-t border-gray-800 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold text-emerald-400">
              Petciety — aplikacija u razvoju
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Naš dugoročni projekat koji povezuje vlasnike ljubimaca, šetače i
              AI asistente u jedinstveni ekosistem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Walk Buddy",
                desc: "Planer šetnji i zakazivanja — jednostavno povezivanje korisnika i šetača.",
              },
              {
                title: "AI Companion",
                desc: "Pametna pomoć za vlasnike ljubimaca — savetnik, planer i digitalni partner.",
              },
              {
                title: "Temelj",
                desc: "Tehnološka osnova: Flutter, Supabase, i skalabilna infrastruktura.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-6 bg-gray-900 border border-gray-800 hover:border-emerald-400 hover:scale-[1.01] transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold text-emerald-300">
                  {c.title}
                </h3>
                <p className="text-gray-400 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHATBOT WIDGET */}
      <ChatbotWidget />
    </MotionConfig>
  );
}
