# PETKOVIC SOLUTIONS — PROJECT MAP

> Ažurirano: 2026-09-03. Odražava stvarno stanje `petkovic-solutions-clean/petkovic-solutions-studio` (živi sajt).

## STATUS
- **LIVE** na https://petkovicsolutions.com
- Deploy: GitHub `main` (`brankop87/petkovic-solutions-studio`) → **Vercel auto-deploy**
- Ovo je jedini aktivni radni folder. (Stari `petkovic-solutions-studio` u root-u je zastareo/za brisanje.)

---

## STACK
- **Next.js 15** (App Router) + React 18
- **Tailwind CSS** 3.4
- **Framer Motion** (animacije nav/hero)
- Fontovi: **Fraunces** (serif, hero) + **Manrope** (sans, telo)
- **Vercel** deploy

### Integracije (instalirane)
- **Anthropic SDK** — AI chatbot (`app/api/chat`)
- **Resend** + **nodemailer** — kontakt mejl (`app/api/contact`)
- **Supabase** — klijent postavljen
- **Sanity** — CMS scaffold (`sanity/`, `npm run studio`), još se ne koristi aktivno

---

## FOLDER STRUCTURE
```
app/
  page.tsx            homepage
  onama/              O nama
  usluge/             Usluge
  projekti/           Projekti
  kontakt/            Kontakt (forma → api/contact)
  demo/               demo shell (bez Navbar/Footer)
  api/chat/           AI chatbot endpoint (Anthropic)
  api/contact/        slanje mejla
  layout.tsx          root layout + SiteChrome
  globals.css         design tokeni (CSS varijable)

components/
  home/               Hero, ProjectsPreview, ServicesPreview, WhyUs, CTA
  layout/             Navbar, Footer, SiteChrome
  ChatbotWidget.tsx   plutajući chat (desno dole)

data/
  site.ts             hero, proof, services/process intro, cta, contact
  projects.ts         portfolio (Live + Concept)
  services.ts         3 usluge
  navigation.ts       nav linkovi

public/
  images/projects/    slike projekata
  demos/              demo-gym.html, demo-realestate.html
  previews/bella-spa/ klijentski preview
sanity/               CMS scaffold
```

---

## HOMEPAGE STRUCTURE
`app/page.tsx` renderuje redom:
1. Hero
2. ProjectsPreview  (Selected Work)
3. ServicesPreview  (What we offer)
4. WhyUs            (How we work)
5. CTA

`SiteChrome` dodaje Navbar + Footer + ChatbotWidget na sve rute **osim** `/demo*`.

---

## DATA FLOW (pravilo: nema hardkodovanog teksta u komponentama)
- `data/site.ts` → Hero, CTA, Contact, intro tekstovi
- `data/projects.ts` → ProjectsPreview, stranica Projekti
- `data/services.ts` → ServicesPreview
- `data/navigation.ts` → Navbar

---

## RULES (CRITICAL)
1. NEMA hardkodovanog teksta u komponentama — sve ide kroz `data/` fajlove
2. `app/` je SAMO routing sloj — bez teške UI logike
3. `components/home` = samo homepage
4. `components/layout` = globalni chrome (nav/footer/chrome)
5. Svaka nova sekcija mora biti modularna

---

## PORTFOLIO (data/projects.ts)
**Live:**
- Noor Beauty Center — Beauty / Med Spa
- Marko Prevoznik — Transport / Local Services
- The Cannon — Content / SEO (Arsenal blog)

**Concept:**
- Meridian Properties — Real Estate (→ /demos/demo-realestate.html)
- APEX Fitness — Fitness (→ /demos/demo-gym.html)

---

## POZICIONIRANJE (trenutno)
- Jezik: **engleski, `<html lang="en">`**
- Tvrdo usmereno na **US service businesses** (hero eyebrow, meta opis, copy)
- Offer ladder: besplatan audit → landing page → website → AI add-on/retainer
- **Plan (u toku):** omekšati "US-only", proširiti na US/UK + SR, uvesti dvojezičnost (EN-primaran + SR toggle) i pricing sekciju

---

## KNOWN CLEANUP (za sređivanje)
- Mrtvi duplikati: `components/Navbar.tsx` i `components/Footer.tsx` se NE koriste — aktivni su `components/layout/` verzije. Obrisati.
- "SENIOR SIGNAL" labela u WhyUs/process sekciji — zaostali copy, ukloniti.

---

## DEPLOY FLOW
```bash
git add .
git commit -m "update"
git push          # main → Vercel auto-deploy
```

---

## VAN OVOG PROJEKTA (ne meša se u sajt)
- **Petković Gym** (https://petkovic-gym.vercel.app) — poseban proizvod (fitness/trening tracker, Google login, srpski). Drugi brend skin (zlatno/crno). Nije klijentski rad; ne ide u portfolio dok ne sazri.
