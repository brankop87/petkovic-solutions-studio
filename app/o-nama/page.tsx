"use client";

import { MotionConfig } from "framer-motion";

export default function ONamaPage() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="bg-gray-950 text-white min-h-screen py-24 px-4 border-t border-gray-800">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Naslov */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-semibold text-emerald-400">
              O nama
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Petković Solutions je tehnološki partner fokusiran na izgradnju
              modernih digitalnih proizvoda — od web sajtova i aplikacija do
              pametnih AI sistema i skalabilnih SaaS modela.  
              Naš cilj je jasan: rešenja koja rastu zajedno sa vašim biznisom.
            </p>
          </div>

          {/* Naš pristup */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-emerald-300">
                Naš pristup
              </h2>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Stabilna arhitektura i dugoročna skalabilnost</li>
                <li>Jasan dizajn i merljive poslovne metrike</li>
                <li>Iterativan razvoj uz prioritet na kvalitet</li>
                <li>Transparentna komunikacija i podrška</li>
              </ul>
            </div>

            {/* Tekstualni deo */}
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Kao deo <span className="text-emerald-400">Petciety ekosistema</span>,
                naš tim kombinuje iskustvo u softverskom razvoju, dizajnu i
                automatizaciji. Radimo sa preduzećima koja žele modernu
                digi
