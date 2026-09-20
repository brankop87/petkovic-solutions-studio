import { ImageResponse } from "next/og";

export const alt = "Petkovic Solutions — websites built to win more qualified inquiries";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Povlaci TTF sa Google Fonts-a u build-u. Ako ne uspe, ImageResponse padne na
// podrazumevani font — slika se i dalje generise, build ne puca.
async function loadFont(family: string, weight: number) {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`;
    const css = await fetch(cssUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Node.js)" },
    }).then((res) => res.text());

    const url = css.match(/src: url\((https:\/\/[^)]+\.ttf)\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [display, body] = await Promise.all([
    loadFont("Playfair+Display", 500),
    loadFont("Manrope", 500),
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
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* topli zeleni sjaj, isti kao na hero sekciji */}
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

        <div style={{ display: "flex", fontFamily: serif, fontSize: 34, letterSpacing: "-0.02em" }}>
          <span style={{ color: "#f4efe6" }}>Petkovic&nbsp;</span>
          <span style={{ color: "#18a06a" }}>Solutions</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: serif,
              fontSize: 82,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              color: "#f4efe6",
              maxWidth: 940,
            }}
          >
            Websites built to win more qualified inquiries.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontFamily: sans,
              fontSize: 27,
              lineHeight: 1.5,
              color: "#a7b0a5",
              maxWidth: 820,
            }}
          >
            Conversion-focused websites and landing pages for service businesses.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(128,153,134,0.22)",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex", fontFamily: sans, fontSize: 23, color: "#bdf1d9" }}>
            petkovicsolutions.com
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: sans,
              fontSize: 17,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#e9c79d",
            }}
          >
            Boutique web studio
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
