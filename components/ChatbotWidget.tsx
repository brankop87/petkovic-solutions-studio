"use client";
import { useState } from "react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-3 w-[320px] h-[420px] rounded-2xl bg-surface border border-border p-3 shadow-lg">
          <div className="text-sm text-gray-300 mb-2">AI Chatbot (demo)</div>
          <div className="h-[320px] rounded-xl bg-black/20 border border-border flex items-center justify-center text-gray-500">
            Uskoro: konekcija na OpenAI i tvoje znanje.
          </div>
          <input className="mt-2 w-full rounded-xl bg-black/30 border border-border p-2 text-sm" placeholder="Ukucaj poruku..." />
        </div>
      )}
      <button onClick={() => setOpen(v => !v)} className="px-4 py-3 rounded-full bg-accent text-black font-medium shadow-glow hover:bg-accentHover">
        {open ? "Zatvori" : "Chat"}
      </button>
    </div>
  );
}
