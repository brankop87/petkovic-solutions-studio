// Povlaci TTF sa Google Fonts-a za OG slike (next/og).
// `text` trazi od Google-a font sa TACNO tim slovima - tako srpska slova
// (č ć š ž đ) sigurno postoje i fajl je mali. Ako fetch pukne, vraca null
// i ImageResponse padne na podrazumevani font umesto da obori build.
export async function loadGoogleFont(family: string, weight: number, text: string) {
  try {
    const params = new URLSearchParams({
      family: `${family}:wght@${weight}`,
      text,
    });
    const css = await fetch(`https://fonts.googleapis.com/css2?${params}`, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Node.js)" },
    }).then((res) => res.text());

    const url = css.match(/src: url\((https:\/\/[^)]+)\) format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

// next/og (satori) pogresno meri tokene tipa "broj.broj" (npr. "29.11") i iza
// njih ostavi preveliki razmak ("29.11.  u 23:59"). Secenje izmedju "29." i
// "11" u posebne delove to resava: nijedan deo vise nema obrazac broj.broj.
// Svaki deo se renderuje kao zaseban <span>.
export function splitNumbersForOg(text: string): string[] {
  return text.split(/(?<=\d\.)(?=\d)/);
}

