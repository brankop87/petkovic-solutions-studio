"use client";

export default function OnamaPage() {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-24 px-4 border-b border-gray-800">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-semibold text-emerald-400">
          Gradimo digitalna rešenja koja spajaju ljude, ideje i tehnologiju
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          Petković Solutions je studio koji veruje da svaka dobra priča zaslužuje jaku digitalnu osnovu.
          Ne pravimo samo sajtove i aplikacije — gradimo most između vašeg biznisa i onih kojima je namenjen.
        </p>

        <div className="space-y-6 text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-emerald-300">Naša priča</h2>
          <p className="text-gray-400 leading-relaxed">
            Ideja o Petković Solutions nastala je iz jednostavne želje — da se spoji strast prema tehnologiji
            sa stvarnim potrebama ljudi i biznisa. Radimo sa klijentima koji žele više od „još jednog sajta“ —
            žele partnera koji razume kako funkcionišu posao, komunikacija i korisnici.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-300">Naš pristup</h2>
          <p className="text-gray-400 leading-relaxed">
            Svaki projekat počinjemo pitanjem: <strong>šta donosi stvarnu vrednost klijentu</strong>.
            Kombinujemo modernu tehnologiju, čist dizajn i jasan plan razvoja, jer verujemo da se najbolji rezultati
            postižu jednostavnošću, kvalitetom i poverenjem.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-300">Vizija</h2>
          <p className="text-gray-400 leading-relaxed">
            Naš cilj je da Petković Solutions postane sinonim za digitalnu pouzdanost i inovaciju.
            Kroz Petciety Digital i druge projekte, gradimo ekosistem u kojem tehnologija radi za ljude — ne obrnuto.
          </p>
        </div>

        <div className="pt-10">
          <a
            href="/kontakt"
            className="inline-block px-8 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition"
          >
            Kontaktiraj nas
          </a>
        </div>
      </div>
    </section>
  );
}
