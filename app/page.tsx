"use client";

import Link from "next/link";
import { MotionConfig } from "framer-motion";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="py-20">
        <div className="text-center space-y-6">
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight">
            Gradimo digitalna rješenja koja traju
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Petković Solutions — moderni web sajtovi, aplikacije i AI rješenja na skalabilnim temeljima.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/usluge" className="px-6 py-3 rounded-xl bg-accent text-black font-medium shadow-glow hover:bg-accentHover transition">
              Pogledaj usluge
            </Link>
            <Link href="/projekti" className="px-6 py-3 rounded-xl border border-accent text-accent hover:bg-surface2 transition">
              Projekti
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 space-y-6">
        <h2 className="font-heading text-2xl">Petciety — aplikacija u razvoju</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Walk Buddy", desc: "Planer šetnji i zakazivanja." },
            { title: "AI Companion", desc: "Pametna pomoć za vlasnike ljubimaca (faza 2)." },
            { title: "Temelj", desc: "Flutter + Supabase arhitektura." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl p-6 bg-surface border border-border">
              <h3 className="font-heading text-xl">{c.title}</h3>
              <p className="text-gray-300 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/projekti" className="text-accent underline hover:text-accentHover">Detaljnije</Link>
        </div>
      </section>

      <ChatbotWidget />
    </MotionConfig>
  );
}
