export default function Kontakt() {
  return (
    <section className="space-y-8 py-16">
      <h1 className="font-heading text-4xl font-bold text-emerald-600">
        Kontakt
      </h1>

      <p className="text-gray-700 text-lg">
        Pišite nam na{" "}
        <a
          className="text-emerald-700 underline hover:opacity-80 transition"
          href="mailto:info@petkovicsolutions.com"
        >
          info@petkovicsolutions.com
        </a>
      </p>

      <form className="space-y-5 max-w-xl">
        
        {/* Ime */}
        <input
          className="w-full rounded-xl bg-white border border-emerald-300 text-gray-900 p-3 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500
                     placeholder-gray-500"
          placeholder="Ime"
        />

        {/* Email */}
        <input
          className="w-full rounded-xl bg-white border border-emerald-300 text-gray-900 p-3 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500
                     placeholder-gray-500"
          placeholder="Email"
        />

        {/* Poruka */}
        <textarea
          className="w-full rounded-xl bg-white border border-emerald-300 text-gray-900 p-3 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500
                     placeholder-gray-500 h-32 resize-none"
          placeholder="Poruka"
          rows={5}
        />

        {/* Dugme */}
        <button
          className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 
                     text-white font-semibold shadow-md transition"
        >
          Pošalji
        </button>

      </form>
    </section>
  );
}
