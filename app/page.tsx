import Link from "next/link";
import { MotionConfig } from "framer-motion";
"use client";


export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-gray-950 text-white px-4 py-20">
        <section className="text-center space-y-8">
          <h1 className="font-bold text-4xl md:text-6xl tracking-tight text-emerald-400">
            Gradimo digitalna rešenja koja traju
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-emerald-400 font-semibold">Petković Solutions</span> — moderni web sajtovi,
            aplikacije i AI sistemi zasnovani na skalabilnim temeljima.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/usluge"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-medium shadow-md hover:bg-emerald-400 transition"
            >
              Pogledaj usluge
            </Link>
            <Link
              href="/projekti"
              className="px-6 py-3 rounded-xl border border-emerald-500 text-emerald-400 hover:bg-emerald-900 transition"
            >
              Projekti
            </Link>
          </div>
        </section>

        <section className="mt-20 space-y-8">
          <h2 className="text-2xl font-semibold text-emerald-400 text-center">
            Petciety — aplikacija u razvoju
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Walk Buddy", desc: "Planer šetnji i zakazivanja." },
              { title: "AI Companion", desc: "Pametna pomoć za vlasnike ljubimaca (faza 2)." },
              { title: "Temelj", desc: "Flutter + Supabase arhitektura." },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl p-6 bg-gray-800 border border-gray-700 hover:border-emerald-400 transition"
              >
                <h3 className="text-xl font-bold text-emerald-400">{c.title}</h3>
                <p className="text-gray-300 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/projekti"
              className="text-emerald-400 underline hover:text-emerald-300"
            >
              Detaljnije
            </Link>
          </div>
        </section>

        <footer className="text-center mt-20 text-gray-500 text-sm">
          © {new Date().getFullYear()} Petković Solutions Studio — deo Petciety ekosistema.
        </footer>
      </main>
    </MotionConfig>
  );
}
