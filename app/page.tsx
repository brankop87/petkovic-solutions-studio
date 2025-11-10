"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function HomePage() {
  return (
    <>
      {/* 1️⃣ HERO SEKCIJA */}
      <section className="bg-gray-950 text-white py-24 px-4 border-b border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Gradimo digitalna rešenja koja traju
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
            Petković Solutions — moderna digitalna agencija fokusirana na web,
            aplikacije i AI sisteme koji rastu zajedno sa vašim biznisom.
          </p>

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

      {/* 2️⃣ PETCIETY — APLIKACIJA U RAZVOJU */}
      <section className="bg-gray-950 text-white py-20 border-b border-gray-800 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-emerald-400">
              Petciety — aplikacija u razvoju
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Naš dugoročni projekat koji povezuje vlasnike ljubimaca, šetače i
              AI asistente u jedinstveni digitalni ekosistem.
            </p>
          </div>

          {/* 💬 AI MINI BOT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center py-16"
          >
            {/* Svetlucava pozadina */}
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />

            {/* Bot avatar */}
            <motion.div
              className="relative z-10 bg-emerald-500/20 border border-emerald-400 rounded-full w-20 h-20 flex items-center justify-center shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <span className="text-3xl">🤖</span>
            </motion.div>

            {/* Bot poruka */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-gray-300 bg-gray-900 border border-gray-700 px-6 py-4 rounded-xl max-w-sm shadow-xl"
            >
              <p className="text-emerald-400 font-medium mb-1">AI asistent:</p>
              <p>
                “Zdravo, ja sam digitalni pomoćnik Petciety aplikacije. Trenutno
                radim na sledećem modulu — AI Companion.”
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ MODULI PETCIETY APLIKACIJE */}
      <section className="bg-gray-950 text-white py-20 border-t border-gray-800 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-400">
              Glavni moduli aplikacije
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Svaka funkcionalnost Petciety aplikacije projektovana je da donese
              jednostavnost i automatizaciju korisnicima.
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
                desc: "Tehnološka osnova: Flutter, Supabase i skalabilna infrastruktura.",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl p-6 bg-gray-900 border border-gray-800 hover:border-emerald-400 transition"
              >
                <h3 className="text-xl font-semibold text-emerald-300">
                  {c.title}
                </h3>
                <p className="text-gray-400 mt-2">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ CHATBOT */}
      <ChatbotWidget />
    </>
  );
}
