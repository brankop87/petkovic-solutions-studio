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
            Digitalna rešenja koja spajaju tehnologiju i ljude
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
            Petković Solutions — studio koji pomaže malim biznisima da izgledaju
            kao veliki. Gradimo moderne sajtove, aplikacije i AI sisteme koji rade za vas.
          </p>

          <Link
            href="/kontakt"
            className="mt-4 inline-block px-8 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
          >
            Kontaktiraj nas
          </Link>
        </div>
      </section>

      {/* 2️⃣ ZA KOGA RADIMO (TOPLA SEKCIJA) */}
      <section className="bg-[#F9EBD0] text-gray-900 py-20 px-4 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-semibold text-emerald-700">
            Za koga gradimo rešenja
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            Pomažemo preduzetnicima, salonima, trenerima, servisima i malim firmama
            da imaju moderan i pouzdan online nastup — bez komplikacija i velikih troškova.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {[
              "Saloni lepote",
              "Veterinari i groomeri",
              "Treneri i instruktori",
              "Lokalni servisi",
            ].map((kategorija) => (
              <div
                key={kategorija}
                className="p-6 bg-white rounded-3xl shadow-md border border-emerald-100 hover:shadow-emerald-200/40 hover:scale-[1.02] transition-all"
              >
                <p className="font-medium text-emerald-700">{kategorija}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ NAŠ PRISTUP */}
      <section className="bg-gray-950 text-white py-20 border-b border-gray-800 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold text-emerald-400">
              Naš pristup
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Svaki projekat gradimo pažljivo — kombinujemo funkcionalnost,
              dizajn i dugoročno održivu tehnologiju.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Stabilna osnova",
                desc: "Koristimo proverene tehnologije spremne za rast i skaliranje.",
                icon: "🧱",
              },
              {
                title: "Jasan dizajn",
                desc: "Jednostavno, lepo i intuitivno korisničko iskustvo.",
                icon: "🎨",
              },
              {
                title: "AI integracije",
                desc: "Uvodimo automatizaciju i inteligentne procese kad to ima smisla.",
                icon: "🤖",
              },
              {
                title: "Partnerski odnos",
                desc: "Radimo transparentno i dugoročno, kao vaš digitalni partner.",
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

      {/* 4️⃣ PETCIETY — SHOWCASE SA ROBOTOM */}
      <section className="bg-gray-950 text-white py-24 border-b border-gray-800 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
              Trenutno se razvijaju ključni moduli:{" "}
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

          {/* Robot */}
          <div className="relative flex justify-center items-center">
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 200"
              className="w-[250px] h-[180px] text-emerald-400 relative z-10"
            >
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
              <motion.g
                animate={{ rotate: [0, -3, 3, -3, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              >
                <circle cx="150" cy="90" r="20" fill="currentColor" />
                <motion.circle
                  cx="142"
                  cy="88"
                  r="3"
                  fill="#00ffcc"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                <motion.circle
                  cx="158"
                  cy="88"
                  r="3"
                  fill="#00ffcc"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                />
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

      {/* 5️⃣ CHATBOT */}
      <ChatbotWidget />
    </>
  );
}
