export default function Usluge() {
  const items = [
    { title: "Web & App razvoj", desc: "Next.js, Flutter, Tailwind, Supabase — brzi, stabilni i moderni sistemi." },
    { title: "AI rješenja i automatizacija", desc: "Chatbotovi, asistent za klijente, integracije sa OpenAI." },
    { title: "SaaS temelji i arhitektura", desc: "Autentikacija, plaćanja, CMS, deployment i skaliranje." }
  ];
  return (
    <section className="space-y-6">
      <h1 className="font-heading text-3xl">Usluge</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(i => (
          <div key={i.title} className="rounded-2xl p-6 bg-surface border border-border">
            <h3 className="font-heading text-xl">{i.title}</h3>
            <p className="text-gray-300 mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
