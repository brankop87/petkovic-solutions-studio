"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
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

      {/* 🔥 EKSPERIMENTALNI ROBOT HIGH-END VIZUAL */}
      <section className="relative bg-gradient-to-b from-gray-950 to-black py-32 text-white overflow-hidden border-t border-gray-800">
        {/* pozadinski gradient + čestice */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [-10, 10, -10],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 3,
              delay: i * 0.15,
            }}
          />
        ))}

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 px-6">
          {/* tekst */}
          <div className="max-w-lg space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-semibold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
              Petciety AI Core — učenje u toku
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Naš AI sistem uči u realnom vremenu — analizirajući podatke,
              testirajući module i simulirajući ponašanje digitalnog asistenta.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Ovaj robot predstavlja srce naše laboratorije — vizuelizaciju AI-a
              koji “misli”, “diše” i reaguje na okolinu.
            </p>
          </div>

          {/* high-end robot */}
          <div className="relative w-full flex justify-center">
            {/* svetlosna aura */}
            <motion.div
              className="absolute w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full"
              animate={{ opacity: [0.2, 0.8, 0.3], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />

            {/* refleksivna platforma */}
            <motion.div
              className="absolute bottom-10 w-96 h-12 bg-emerald-500/40 blur-2xl rounded-full"
              animate={{ opacity: [0.3, 0.8, 0.4], scaleX: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />

            {/* robot */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 300"
              className="w-[340px] h-[260px] text-emerald-400 relative z-10"
            >
              {/* telo */}
              <motion.rect
                x="150"
                y="120"
                width="100"
                height="100"
                rx="20"
                fill="url(#coreGradient)"
                animate={{ opacity: [0.9, 1, 0.9] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />

              {/* AI jezgro */}
              <motion.circle
                cx="200"
                cy="170"
                r="25"
                fill="none"
                stroke="url(#corePulse)"
                strokeWidth="3"
                animate={{ r: [22, 28, 22], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
              />
              <motion.circle
                cx="200"
                cy="170"
                r="10"
                fill="#00ffcc"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              />

              {/* glava */}
              <motion.rect
                x="165"
                y="60"
                width="70"
                height="50"
                rx="12"
                fill="currentColor"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />

              {/* oči */}
              <motion.circle
                cx="182"
                cy="82"
                r="5"
                fill="#00ffcc"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <motion.circle
                cx="218"
                cy="82"
                r="5"
                fill="#00ffcc"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
              />

              {/* ruke */}
              <motion.rect
                x="125"
                y="135"
                width="20"
                height="60"
                rx="10"
                fill="currentColor"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                transform-origin="145 135"
              />
              <motion.rect
                x="255"
                y="135"
                width="20"
                height="60"
                rx="10"
                fill="currentColor"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                transform-origin="255 135"
              />

              {/* noge */}
              <motion.rect
                x="165"
                y="220"
                width="20"
                height="40"
                rx="6"
                fill="currentColor"
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <motion.rect
                x="215"
                y="220"
                width="20"
                height="40"
                rx="6"
                fill="currentColor"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              />

              {/* svjetleće linije ispod (hologram efekat) */}
              {[...Array(6)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={140 + i * 20}
                  x2={260 - i * 10}
                  y1="270"
                  y2="270"
                  stroke="url(#scanLine)"
                  strokeWidth="1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.2 }}
                />
              ))}

              {/* gradient definicije */}
              <defs>
                <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00ffcc" stopOpacity="0.1" />
                </radialGradient>

                <radialGradient id="corePulse" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>

                <linearGradient id="scanLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="rgba(52,211,153,0.7)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* 5️⃣ CHATBOT */}
      <ChatbotWidget />
    </>
  );
}
