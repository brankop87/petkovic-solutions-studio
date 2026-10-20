# PETKOVIC SOLUTIONS — PROJECT MAP

> Ažurirano: 2026-10-20. Odražava stvarno stanje repo-a. Za „gde sam stao / šta dalje" vidi **[STATUS.md](STATUS.md)** (sidro).

## STATUS
- **LIVE** na https://petkovicsolutions.com (EN) i https://petkovicsolutions.com/sr (SR)
- Kod: `C:\2026\Projects\Petkovic Solutions`
- Deploy: push na GitHub `main` (`brankop87/petkovic-solutions-studio`) → **Vercel auto-deploy** (Hobby, nalog „Branko's projects")

---

## STACK
- **Next.js 15** (App Router) + React 18
- **Tailwind CSS** 3.4
- **Framer Motion** — nav/chatbot + scroll-reveal animacije (`components/motion/Reveal.tsx`)
- Fontovi (next/font): **Playfair Display** (serif, naslovi) + **Manrope** (sans, telo), oba sa `latin-ext` (srpski znakovi)
- **Resend** — jedini backend (kontakt forma, `app/api/contact`)
- **Vercel** deploy; 5 bezbednosnih HTTP headera u `next.config.mjs`

> Nema CMS-a ni baze. Sanity/Supabase/nodemailer/Anthropic SDK izbačeni 2026-09-20 (ništa ih nije koristilo).

---

## DVOJEZIČNOST (EN primaran + SR na `/sr`)
- **EN na rootu** (`/`, `/onama`…), **SR pod `/sr`** (`/sr`, `/sr/onama`…). Zasebni URL-ovi → Google indeksira oba jezika.
- `middleware.ts` čita putanju → postavlja `x-locale` header.
- `lib/locale-server.ts getLocale()` (server) čita taj header → root layout renderuje `<html lang>`.
- `components/i18n/LocaleProvider.tsx` (client) izvlači jezik iz `usePathname()`; `LanguageSwitcher` **menja URL** (`/onama` ↔ `/sr/onama`).
- `data/i18n.ts localePath()` lokalizuje sve interne linkove.
- Svaka strana: `generateMetadata` → `lib/i18n-meta.ts metaFor()` daje canonical + **hreflang** (en/sr/x-default) + lokalizovan OG/Twitter.
- `app/sr/**` su **tanki re-export fajlovi** iste komponente (getLocale vrati „sr" preko headera).

---

## FOLDER STRUCTURE
```
middleware.ts            postavlja x-locale iz putanje
next.config.mjs          security headeri

app/
  page.tsx               homepage (EN)         sr/page.tsx            homepage (SR, re-export)
  onama/ usluge/         podstranice (EN)      sr/onama/ sr/usluge/   (SR, re-export)
  projekti/ kontakt/                           sr/projekti/ sr/kontakt/
  api/contact/route.ts   slanje mejla (escape + validacija + honeypot + rate limit)
  layout.tsx             root layout + <html lang> + SEO metadata
  robots.ts  sitemap.ts  (/robots.txt, /sitemap.xml sa hreflang alternativama)
  opengraph-image.tsx    OG slika 1200×630
  globals.css            design tokeni (CSS varijable)

components/
  home/                  Hero, ProjectsPreview, ServicesPreview, Pricing, WhyUs, CTA
  layout/                Navbar, Footer, SiteChrome, LanguageSwitcher
  contact/ContactForm    client deo kontakt strane
  i18n/LocaleProvider     client locale kontekst (iz usePathname)
  motion/Reveal           scroll-reveal wrapper (Framer, reduced-motion safe)
  ChatbotWidget.tsx       plutajući chat (desno dole)

data/  (sav tekst je Record<Locale, ...> — EN + SR)
  site.ts     hero+card, proof, services/process intro+steps, cta; brand/contact/siteUrl
  projects.ts portfolio (Live + Concept) + projectsSection labele
  services.ts 3 usluge + servicesLabels
  pricing.ts  dva pojasa: EN (USD) / SR (EUR)
  pages.ts    tekst podstranica (onama/usluge/projekti/kontakt)
  chatbot.ts  tok chatbota (budžeti $ / €)
  i18n.ts     Locale tip, nav, ui stringovi, localePath()

lib/
  locale-server.ts  getLocale() — čita x-locale header (server)
  i18n-meta.ts      metaFor() — canonical + hreflang + OG po jeziku
```

---

## HOMEPAGE STRUCTURE
`app/page.tsx` čita `getLocale()` i renderuje sa `locale` propom:
1. Hero → 2. ProjectsPreview (Selected Work) → 3. ServicesPreview → 4. Pricing → 5. WhyUs (How we work) → 6. CTA

`SiteChrome` dodaje Navbar + Footer + ChatbotWidget na sve rute.

---

## PRAVILA (CRITICAL)
1. **NEMA hardkodovanog teksta** u komponentama — sve kroz `data/` fajlove, i to `Record<Locale, …>` (EN + SR).
2. Interni linkovi uvek kroz `localePath(href, locale)` (da rade i na `/sr`).
3. Nova strana → dodati i `app/sr/<ruta>/page.tsx` re-export + `generateMetadata` sa `metaFor()`.
4. `app/` je routing sloj; UI logika u `components/`.
5. **Sve u `app/` i `public/` je JAVNO čim se deploy-uje** — pre deploya pogledati rute iz `npm run build`.

---

## PORTFOLIO (data/projects.ts)
**Live:** Noor Beauty Center (noorbeauty.rs) · Marko Prevoznik · The Cannon (Arsenal blog)
**Concept:** Meridian Properties (→ /demos/demo-realestate.html) · APEX Fitness (→ /demos/demo-gym.html)

---

## POZICIONIRANJE
- **Dvojezičan**, EN primaran + SR prekidač. Market-neutral (skinuto tvrdo „US").
- Offer ladder: besplatan audit → landing → website → AI add-on/retainer.
- Cene, dva pojasa (vezana za jezik): Premium EN od $1.200/$3.000/$600 · Lokalni SR od €400/€900/€250. Uvek „od", tačna ponuda posle audita.

---

## DEPLOY FLOW
```powershell
# lokalno (Node 24 CA bug — vidi node-ca-workaround)
$env:NODE_OPTIONS="--no-use-system-ca"; npm run dev
```
```bash
git push        # main → Vercel auto-deploy
```
Proces: rad na grani → push → Vercel preview URL → provera → merge u `main` → produkcija.

---

## VAN OVOG PROJEKTA
- **Petković Gym** (petkovic-gym.vercel.app) — poseban proizvod (fitness tracker, Google login). Nije klijentski rad; ne ide u portfolio dok ne sazri.
