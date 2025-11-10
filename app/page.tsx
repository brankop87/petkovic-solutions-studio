"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function HomePage() {
  return (
    <>
      {/* HERO SEKCIJA */}
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

      {/* PETCIETY SEKCIJA */}
      <section className="bg-gray-950 text-white py-20 border-b border-gray-800 px-4">
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

      {/* ANIMIRANI DETALJ: AI LAB */}
      <section className="bg-gray-950 text-white py-24 px-4 border-t border-gray-800">
        <motion.div
          className="max-w-5xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-emerald-400">
            Aplikacija je trenutno u izradi
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Naši digitalni asistenti rade na sledećoj fazi razvoja — testiraju
            module, analiziraju kod i pripremaju sistem za integraciju.
          </p>

          <div className="relative flex justify-center items-center pt-12">
            <motion.div
              className="absolute bottom-0 w-60 h-10 bg-emerald-500/30 blur-3xl rounded-full"
              animate={{ opacity: [0.2, 0.8, 0.3] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />

            {/* SVG scena */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 200"
              className="w-[280px] h-[200px] text-emerald-400 relative z-10"
            >
              <motion.rect
                x="60"
                y="160"
                width="180"
                height="10"
                rx="5"
                fill="currentColor"
                animate={{ opacity: [0.6, 0.9, 0.6] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />

              <motion.g
                animate={{ rotate: [0, -3, 3, -3, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              >
                <circle cx="150" cy="90" r="20" fill="currentColor" />
                <circle cx="142" cy="88" r="3" fill="#000" />
                <circle cx="158" cy="88" r="3" fill="#000" />
                <rect
                  x="135"
                  y="110"
                  width="30"
                  height="40"
                  rx="6"
                  fill="currentColor"
                />
                <motion.rect
                  x="120"
                  y="115"
                  width="10"
                  height="25"
                  rx="3"
                  fill="currentColor"
                  animate={{ rotate: [0, 15, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  transform-origin="130 115"
                />
                <motion.rect
                  x="114"
                  y="135"
                  width="8"
                  height="16"
                  rx="2"
                  fill="#999"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 0.9 }}
                />
              </motion.g>

              <motion.rect
                x="175"
                y="80"
                width="70"
                height="50"
                rx="6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />

              {[0, 1, 2, 3].map((i) => (
                <motion.line
                  key={i}
                  x1="185"
                  x2="235"
                  y1={90 + i * 10}
                  y2={90 + i * 10}
                  stroke="currentColor"
                  strokeWidth="1"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                    delay: i * 0.3,
                  }}
                />
              ))}

              <motion.rect
                x="175"
                y="80"
                width="70"
                height="50"
                rx="6"
                fill="url(#pulseGradient)"
                animate={{ x: [-70, 300] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: 3,
                  repeatDelay: 4.5,
                  ease: "easeInOut",
                }}
              />

              <defs>
                <linearGradient id="pulseGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="rgba(52,211,153,0.6)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </section>

      <ChatbotWidget />
    </>
  );
}
