import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og-font";

// Kartica koja se pojavi kad se link /sr/giveaway podeli (WhatsApp, Instagram,
// Messenger, Viber...). Zamenjuje opstu englesku OG sliku samo za ovu stranu.
export const alt = "Black Friday giveaway: Petkovic Solutions poklanja sajt";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const wordmark = "Petkovic Solutions";
const badge = "Black Friday giveaway";
const headline = "Poklanjamo sajt.";
const sub = "Zaprati @petkovicsolutions i pomeni 2 osobe u komentaru.";
const deadline = "Prijave do 29.11. u 23:59 · Izvlačenje 30.11.";
const domain = "petkovicsolutions.com";

export default async function GiveawayOgImage() {
  const [display, body] = await Promise.all([
    loadGoogleFont("Playfair Display", 500, wordmark + headline),
    loadGoogleFont("Manrope", 500, badge.toUpperCase() + sub + deadline + domain),
  ]);

  const fonts = [
    display && { name: "Playfair Display", data: display, style: "normal" as const, weight: 500 as const },
    body && { name: "Manrope", data: body, style: "normal" as const, weight: 500 as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; style: "normal"; weight: 500 }[];

  const serif = display ? "Playfair Display" : "serif";
  const sans = body ? "Manrope" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c1216",
          padding: "64px 80px",
          position: "relative",
        }}
      >
        {/* isti zeleni sjaj kao na glavnoj OG slici i hero sekciji */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -160,
            width: 760,
            height: 760,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(24,160,106,0.26) 0%, rgba(24,160,106,0.06) 45%, rgba(12,18,22,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontFamily: serif, fontSize: 32, letterSpacing: "-0.02em" }}>
            <span style={{ color: "#f4efe6" }}>Petkovic&nbsp;</span>
            <span style={{ color: "#18a06a" }}>Solutions</span>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: sans,
              fontSize: 18,
              letterSpacing: "0.22em",
              color: "#e9c79d",
              border: "1px solid rgba(233,199,157,0.45)",
              borderRadius: 999,
              padding: "10px 22px",
            }}
          >
            {badge.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: serif,
              fontSize: 128,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#f4efe6",
            }}
          >
            {headline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontFamily: sans,
              fontSize: 30,
              lineHeight: 1.45,
              color: "#a7b0a5",
              maxWidth: 900,
            }}
          >
            {sub}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(128,153,134,0.22)",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", fontFamily: sans, fontSize: 23, color: "#bdf1d9" }}>
            {deadline}
          </div>
          <div style={{ display: "flex", fontFamily: sans, fontSize: 21, color: "#a7b0a5" }}>
            {domain}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
