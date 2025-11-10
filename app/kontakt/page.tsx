export default function Kontakt() {
  return (
    <section className="space-y-6">
      <h1 className="font-heading text-3xl">Kontakt</h1>
      <p className="text-gray-300">Pišite nam na <a className="text-accent underline" href="mailto:info@petkovicsolutions.com">info@petkovicsolutions.com</a></p>
      <form className="space-y-4 max-w-xl">
        <input className="w-full rounded-xl bg-surface border border-border p-3" placeholder="Ime" />
        <input className="w-full rounded-xl bg-surface border border-border p-3" placeholder="Email" />
        <textarea className="w-full rounded-xl bg-surface border border-border p-3" rows={5} placeholder="Poruka" />
        <button className="px-6 py-3 rounded-xl bg-accent text-black font-medium shadow-glow hover:bg-accentHover transition">Pošalji</button>
      </form>
    </section>
  );
}
