"use client";

import Link from "next/link";
import { MotionConfig } from "framer-motion";

export default function ProjektiPage() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="bg-gray-950 text-white min-h-screen py-24 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Naslov */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-semibold text-emerald-400">
              Naši projekti
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Radimo na nekoliko internih i klijentskih projekata koji spajaju
              tehnologiju, dizajn i automatizaciju.  
              Evo primera tipova rešenja koje razvijamo.
            </p>
          </div>

          {/* Kartice projekata (konceptualni primeri) */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SalonConnect",
                desc: "Moderno rešenje za salone — online zakazivanje, menadžment i AI asistent za klijente.",
                tag: "Web aplikacija",
              },
              {
                title: "BizTrack SaaS",
                desc: "Sistem za praćenje poslovanja malih firmi — fakture, klijenti i dashboard u realnom vremenu.",
                tag: "SaaS platforma",
              },
              {
                title: "PetCare AI",
                desc: "Pametni chatbot za vlasnike ljubimaca — deo budućeg Petciety ekosistema.",
                tag: "AI projekat",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 bg-gray-900 border border-gray-800 hover:border-emerald-400 hover:scale-[1.01] transition-transform duration-300"
              >
                <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                  {p.tag}
                </p>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="text-gray-400 mt-2">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Sekcija o budućim projektima */}
          <div className="text-center pt-10 space-y-4">
            <h2 className="text-2xl font-semibold text-emerald-400">
              Trenutno u razvoju
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Petciety ekosistem i nekoliko partnerskih projekata su u fazi izrade.
              Novi radovi biće dostupni uskoro.
            </p>

            <Link
              href="/kontakt"
              className="inline-block px-8 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
            >
              Zatraži analizu sajta
            </Link>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
