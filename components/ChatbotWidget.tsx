"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#3CB878";
const ACCENT_GLOW = "rgba(60,184,120,0.35)";
const ACCENT_BORDER = "rgba(60,184,120,0.22)";
const ACCENT_DIM = "rgba(60,184,120,0.10)";

const stepVariants = {
  initial: { opacity: 0, x: 18 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.22, ease: "easeOut" } },
  exit: { opacity: 0, x: -18, transition: { duration: 0.16, ease: "easeIn" } },
};

type Step = "greeting" | "budget" | "contact" | "thanks";

function OptionButton({
  label,
  onClick,
  emoji,
}: {
  label: string;
  onClick: () => void;
  emoji?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03, boxShadow: `0 0 18px ${ACCENT_GLOW}` }}
      whileTap={{ scale: 0.97 }}
      style={{
        width: "100%",
        padding: "10px 14px",
        borderRadius: 12,
        background: ACCENT_DIM,
        border: `1px solid ${ACCENT_BORDER}`,
        color: "#f4efe6",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: 8,
        transition: "background 0.15s",
      }}
    >
      {emoji && <span style={{ fontSize: 16 }}>{emoji}</span>}
      {label}
    </motion.button>
  );
}

function StepGreeting({ onSelect }: { onSelect: (v: string) => void }) {
  const options = [
    { label: "Website", emoji: "🌐" },
    { label: "Chatbot", emoji: "🤖" },
    { label: "App", emoji: "📱" },
    { label: "Something else", emoji: "✨" },
  ];
  return (
    <motion.div variants={stepVariants} initial="initial" animate="animate" exit="exit">
      <p style={{ color: "#a7b0a5", fontSize: 12, marginBottom: 4 }}>Petkovic Solutions</p>
      <p style={{ color: "#f4efe6", fontSize: 15, fontWeight: 600, marginBottom: 16, lineHeight: 1.4 }}>
        Hey! What brings you here today?
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {options.map((o) => (
          <OptionButton key={o.label} label={o.label} emoji={o.emoji} onClick={() => onSelect(o.label)} />
        ))}
      </div>
    </motion.div>
  );
}

function StepBudget({ onSelect }: { onSelect: (v: string) => void }) {
  const options = [
    { label: "Under $1,000", emoji: "💡" },
    { label: "$1,000 – $3,000", emoji: "🚀" },
    { label: "$3,000 – $10,000", emoji: "🔥" },
    { label: "$10,000+", emoji: "💎" },
  ];
  return (
    <motion.div variants={stepVariants} initial="initial" animate="animate" exit="exit">
      <p style={{ color: "#a7b0a5", fontSize: 12, marginBottom: 4 }}>Great choice!</p>
      <p style={{ color: "#f4efe6", fontSize: 15, fontWeight: 600, marginBottom: 16, lineHeight: 1.4 }}>
        What&apos;s your approximate budget?
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {options.map((o) => (
          <OptionButton key={o.label} label={o.label} emoji={o.emoji} onClick={() => onSelect(o.label)} />
        ))}
      </div>
    </motion.div>
  );
}

function StepContact({
  name, email, setName, setEmail, submitting, error, onSubmit,
}: {
  name: string; email: string;
  setName: (v: string) => void; setEmail: (v: string) => void;
  submitting: boolean; error: string;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 10,
    background: "rgba(12,18,22,0.7)",
    border: `1px solid ${ACCENT_BORDER}`,
    color: "#f4efe6",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <motion.div variants={stepVariants} initial="initial" animate="animate" exit="exit">
      <p style={{ color: "#a7b0a5", fontSize: 12, marginBottom: 4 }}>Almost there!</p>
      <p style={{ color: "#f4efe6", fontSize: 15, fontWeight: 600, marginBottom: 16, lineHeight: 1.4 }}>
        Where should we reach you?
      </p>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        {error && (
          <p style={{ color: "#f87171", fontSize: 12 }}>{error}</p>
        )}
        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={{ scale: submitting ? 1 : 1.02, boxShadow: `0 0 20px ${ACCENT_GLOW}` }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: "10px",
            borderRadius: 12,
            background: ACCENT,
            color: "#fff",
            fontWeight: 700,
            fontSize: 14,
            border: "none",
            cursor: submitting ? "not-allowed" : "pointer",
            opacity: submitting ? 0.7 : 1,
            boxShadow: `0 2px 16px ${ACCENT_GLOW}`,
          }}
        >
          {submitting ? "Sending…" : "Send →"}
        </motion.button>
      </form>
    </motion.div>
  );
}

function StepThanks({ name, onReset }: { name: string; onReset: () => void }) {
  return (
    <motion.div
      variants={stepVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ textAlign: "center", padding: "12px 0" }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        style={{ fontSize: 40, marginBottom: 12 }}
      >
        🎉
      </motion.div>
      <p style={{ color: "#f4efe6", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
        Thanks{name ? `, ${name}` : ""}!
      </p>
      <p style={{ color: "#a7b0a5", fontSize: 13, lineHeight: 1.5, marginBottom: 20 }}>
        We got your message and we&apos;ll be in touch soon. Looking forward to working with you!
      </p>
      <button
        onClick={onReset}
        style={{
          background: "none",
          border: `1px solid ${ACCENT_BORDER}`,
          color: ACCENT,
          fontSize: 12,
          padding: "6px 14px",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Start over
      </button>
    </motion.div>
  );
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("greeting");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: `Interest: ${service}\nBudget: ${budget}`,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStep("thanks");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setStep("greeting");
    setService("");
    setBudget("");
    setName("");
    setEmail("");
    setError("");
  }

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              width: 320,
              borderRadius: 20,
              background: "rgba(8,13,17,0.90)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: `1px solid ${ACCENT_BORDER}`,
              boxShadow: `0 12px 48px rgba(0,0,0,0.55), 0 0 80px rgba(60,184,120,0.07)`,
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "13px 16px",
              borderBottom: `1px solid ${ACCENT_BORDER}`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <motion.div
                  animate={{ boxShadow: [`0 0 6px ${ACCENT}`, `0 0 12px ${ACCENT}`, `0 0 6px ${ACCENT}`] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 8, height: 8, borderRadius: "50%", background: ACCENT }}
                />
                <span style={{ color: "#f4efe6", fontWeight: 600, fontSize: 13, letterSpacing: "0.01em" }}>
                  Petkovic Solutions
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: "none", border: "none", color: "#a7b0a5", cursor: "pointer", fontSize: 15, lineHeight: 1, padding: 2 }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: "20px 16px 20px", minHeight: 240 }}>
              <AnimatePresence mode="wait">
                {step === "greeting" && (
                  <StepGreeting
                    key="greeting"
                    onSelect={(s) => { setService(s); setStep("budget"); }}
                  />
                )}
                {step === "budget" && (
                  <StepBudget
                    key="budget"
                    onSelect={(b) => { setBudget(b); setStep("contact"); }}
                  />
                )}
                {step === "contact" && (
                  <StepContact
                    key="contact"
                    name={name} email={email}
                    setName={setName} setEmail={setEmail}
                    submitting={submitting} error={error}
                    onSubmit={handleSubmit}
                  />
                )}
                {step === "thanks" && (
                  <StepThanks key="thanks" name={name} onReset={reset} />
                )}
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 6, paddingBottom: 14 }}>
              {(["greeting", "budget", "contact", "thanks"] as Step[]).map((s, i) => {
                const active = s === step;
                const passed = ["greeting", "budget", "contact", "thanks"].indexOf(step) > i;
                return (
                  <motion.div
                    key={s}
                    animate={{ background: active || passed ? ACCENT : "rgba(128,153,134,0.3)", width: active ? 20 : 7 }}
                    transition={{ duration: 0.25 }}
                    style={{ height: 7, borderRadius: 4 }}
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.1, boxShadow: `0 6px 28px ${ACCENT_GLOW}` }}
        whileTap={{ scale: 0.9 }}
        animate={{ boxShadow: isOpen ? `0 4px 20px ${ACCENT_GLOW}` : [`0 4px 16px ${ACCENT_GLOW}`, `0 4px 28px rgba(60,184,120,0.5)`, `0 4px 16px ${ACCENT_GLOW}`] }}
        transition={{ boxShadow: { duration: 2.5, repeat: Infinity } }}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: ACCENT,
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
        }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="x"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
              style={{ color: "#fff", fontSize: 17, lineHeight: 1 }}
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
              style={{ lineHeight: 1 }}
            >
              💬
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
