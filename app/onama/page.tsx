export const metadata = {
  title: "O nama | Petković Solutions",
  description:
    "Petković Solutions je digitalni studio fokusiran na razvoj modernih sajtova, aplikacija i AI sistema za male i srednje biznise. Težimo jednostavnosti, efikasnosti i inovativnim rešenjima zasnovanim na tehnologiji.",
};

export default function OnamaPage() {
  return (
    <section className="relative min-h-screen bg-gray-950 text-white py-24 px-6 overflow-hidden">
      {/* Pozadinska apstraktna ilustracija */}
      <div className="absolute inset-0 bg-[url('/background-tech.svg')] bg-cover bg-center opacity-10 blur-sm"></div>

      {/* Dekorativni gradienti za dubinu */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8EE7E1]/10 rounded-full blur-3xl"></div>

      {/* Glavni sadržaj */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-emerald-400 mb-8 drop-shadow-[0_0_15px_rgba(60,184,120,0.4)]">
          O nama
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          <strong>Petković Solutions</strong> je digitalni studio fokusiran na
          razvoj modernih sajtova, aplikacija i AI sistema za male i srednje
          biznise. Naš cilj je da pomognemo firmama da izgledaju profesionalno,
          rade efikasnije i rastu uz pomoć pametne tehnologije — bez nepotrebne
          komplikacije i troškova.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          Kombinujemo dizajn, razvoj i automatizaciju kako bismo kreirali rešenja
          koja povezuju ljude, ideje i tehnologiju. Kroz svaki projekat težimo
          jednostavnosti, efikasnosti i vrhunskom vizuelnom identitetu — jer
          verujemo da kvalitetan digitalni proizvod stvara dugoročnu vrednost.
        </p>
      </div>
    </section>
  );
}
