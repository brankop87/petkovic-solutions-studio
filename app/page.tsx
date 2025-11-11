"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function HomePage() {
  return (
    <>
      {/* 1️⃣ HERO SEKCIJA */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-28 px-4 border-b border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Digitalna rešenja koja traju
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
            Petković Solutions — studio za izgradnju modernih web sajtova,
            aplikacija i AI sistema koji rastu zajedno sa vašim biznisom.
          </p>

          <Link
            href="/kontakt"
            className="mt-4 inline-block px-8 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
          >
            Kontaktiraj nas
          </Link>
        </div>
      </section>

      {/* 2️⃣ NAŠ PRISTUP */}
      <section className="bg-gray-950 text-white py-20 border-b border-gray-800 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold text-emerald-400">
              Naš pristup
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Svaki projekat gradimo na jasnim principima — kombinacijom
              funkcionalnosti, dizajna i tehnologije koja traje.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Stabilna osnova",
                desc: "Koristimo moderne tehnologije i arhitekturu spremnu za rast.",
                icon: "🧱",
              },
              {
                title: "Jasan dizajn",
                desc: "Minimalistički, fokusiran na korisničko iskustvo i brend identitet.",
                icon: "🎨",
              },
              {
                title: "AI integracije",
                desc: "Uvodimo automatizaciju i inteligentne asistente gde donose vrednost.",
                icon: "🤖",
              },
              {
                title: "Partnerski odnos",
                desc: "Verujemo u transparentnu saradnju i dugoročnu podršku.",
                icon: "🤝",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-6 bg-gray-900 border border-gray-800 hover:border-emerald-400 transition"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-300">
                  {c.title}
                </h3>
                <p className="text-gray-400 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ PETCIETY — SHOWCASE SA ROBOTOM */}
      <section className="bg-gray-950 text-white py-24 border-b border-gray-800 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Leva strana — opis */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-emerald-400">
              Petciety — aplikacija u razvoju
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Naš vodeći projekat — inteligentni sistem za vlasnike ljubimaca,
              šetače i pružaoce usluga. Aplikacija koja spaja brigu, tehnologiju
              i AI.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Trenutno se razvijaju ključni moduli: <br />
              <span className="text-emerald-400">
                Walk Buddy, AI Companion i centralni sistem upravljanja.
              </span>
            </p>

            <Link
              href="/projekti"
              className="inline-block mt-2 px-6 py-3 rounded-xl border border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white transition"
            >
              Pogledaj više
            </Link>
          </div>

          {/* Desna strana — robot animacija */}
          <div className="relative flex justify-center items-center">
            {/* Svetlucava pozadina */}
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />

            {/* Robot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 200"
              className="w-[250px] h-[180px] text-emerald-400 relative z-10"
            >
              {/* Platforma */}
              <motion.rect
                x="60"
                y="160"
                width="180"
                height="10"
                rx="5"
                fill="currentColor"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />

              {/* Robot */}
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
            </svg>
          </div>
        </div>
      </section>

      {/* 4️⃣ MINI USLUGE */}
      <section className="bg-gray-950 text-white py-20 border-t border-gray-800 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-semibold text-emerald-400">
              Naše usluge
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kombinujemo dizajn, tehnologiju i automatizaciju kako bismo vaš
              biznis podigli na viši nivo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web sajtovi",
                desc: "Moderni, brzi i optimizovani sajtovi prilagođeni vašem brendu.",
                icon: "💻",
              },
              {
                title: "Mobilne aplikacije",
                desc: "Flutter rešenja koja povezuju korisnike i biznise bez barijera.",
                icon: "📱",
              },
              {
                title: "AI & SaaS sistemi",
                desc: "Pametne platforme koje automatizuju i skaliraju poslovanje.",
                icon: "⚙️",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-6 bg-gray-900 border border-gray-800 hover:border-emerald-400 transition"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="text-xl font-semibold text-emerald-300">
                  {c.title}
                </h3>
                <p className="text-gray-400 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ CHATBOT */}
      <ChatbotWidget />
    </>
  );
}
