"use client";

import Link from "next/link";
import { MotionConfig } from "framer-motion";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="bg-gray-950 text-white py-24 text-center">
        <div className="space-y-6 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Gradimo digitalna rešenja koja traju
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Petković Solutions — moderni web sajtovi, aplikacije i AI rešenja
            na skalabilnim temeljima.
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <Link
              href="/usluge"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
            >
              Pogledaj usluge
            </Link>
            <Link
              href="/projekti"
              className="px-6 py-3 rounded-xl border border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white transition"
            >
              Projekti
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 text-white py-16 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <h2 className="text-2xl font-semibold text-emerald-400">
            Petciety — aplikacija u razvoju
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Walk Buddy", desc: "Planer šetnji i zakazivanja." },
              { title: "AI Companion", desc: "Pametna pomoć za vlasnike ljubimaca (faza 2)." },
              { title: "Temelj", desc: "Flutter + Supabase arhitektura." },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-6 bg-gray-900 border border-gray-800 hover:border-emerald-400 transition"
              >
                <h3 className="text-xl font-semibold text-emerald-300">{c.title}</h3>
                <p className="text-gray-400 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChatbotWidget />
    </MotionConfig>
  );
}
