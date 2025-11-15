export default function Kontakt() {
  return (
    <section className="space-y-8 py-16">
      {/* Naslov */}
      <h1 className="font-heading text-4xl font-bold text-emerald-400 drop-shadow-md">
        Kontakt
      </h1>

      <p className="text-gray-300 text-lg">
        Pišite nam na{" "}
        <a
          className="text-emerald-400 underline hover:opacity-80 transition"
          href="mailto:info@petkovicsolutions.com"
        >
          info@petkovicsolutions.com
        </a>
      </p>

      {/* Forma */}
      <form className="space-y-5 max-w-xl">

        {/* Ime */}
        <input
          className="w-full rounded-xl bg-white/10 border border-emerald-300 text-white p-3 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500
                     placeholder-gray-400"
          placeholder="Ime"
        />

        {/* Email */}
        <input
          className="w-full rounded-xl bg-white/10 border border-emerald-300 text-white p-3 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500
                     placeholder-gray-400"
          placeholder="Email"
        />

        {/* Poruka */}
        <textarea
          className="w-full rounded-xl bg-white/10 border border-emerald-300 text-white p-3 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500
                     placeholder-gray-400 h-32 resize-none"
          placeholder="Poruka"
          rows={5}
        />

        {/* Dugme */}
        <button
          className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 
                     text-white font-semibold shadow-lg transition"
        >
          Pošalji
        </button>

      </form>
    </section>
  );
}
