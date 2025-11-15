"use client";

import { useState } from "react";

export default function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("Uspešno poslato! ❤️");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Došlo je do greške, pokušajte ponovo.");
    }
  };

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

      <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">

        <input
          className="w-full rounded-xl bg-white border border-emerald-300 text-gray-900 p-3 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500
                     placeholder-gray-500"
          placeholder="Ime"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full rounded-xl bg-white border border-emerald-300 text-gray-900 p-3 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500
                     placeholder-gray-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className="w-full rounded-xl bg-white border border-emerald-300 text-gray-900 p-3 
                     focus:outline-none focus:ring-2 focus:ring-emerald-500
                     placeholder-gray-500 h-32 resize-none"
          placeholder="Poruka"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 
                     text-white font-semibold shadow-md transition disabled:opacity-50"
        >
          {loading ? "Šaljem..." : "Pošalji"}
        </button>

        {status && (
          <p className="text-center text-sm text-emerald-700 font-medium">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
