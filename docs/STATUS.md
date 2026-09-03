# STATUS — gde sam sa sajtom

> Ovaj fajl je "sidro". Kad otvoriš projekat, pročitaj ovo prvo — odmah znaš gde si stao, šta je urađeno i šta je sledeće. Ažurira se na kraju svakog koraka.

**Poslednje ažuriranje:** 2026-09-03
**Aktivna grana:** `site-refresh-2026` (rad u toku)
**Živi sajt (`main` → petkovicsolutions.com):** netaknut, na commitu `f132c2f`. Deploy tek posle Faze 3.

---

## Kako pokrenuti lokalno
Iz PowerShell-a, u folderu sajta:
```powershell
$env:NODE_OPTIONS="--no-use-system-ca"; npm run dev
```
Otvori http://localhost:3000
> `--no-use-system-ca` zaobilazi bug u Node 24 na Windowsu (ruši `next dev` na TLS/Google fontovima). Bez toga puca — nije do sajta.

---

## Plan redizajna (faze)

| Faza | Opis | Status |
|---|---|---|
| **1** | Pozicioniranje/copy: skinuto tvrdo "US", uklonjen "Senior signal" bedž | ✅ gotovo |
| **2** | Pricing sekcija (Premium/EN pojas): Landing $1.200 / Website $3.000 / AI add-on $600 | ✅ gotovo |
| **3** | Dvojezičnost EN/SR + SR pricing (€400/€900/€250) + čišćenje mrtvog koda | ✅ gotovo |
| **Deploy** | Merge grane u `main` → Vercel auto-deploy | ⏳ spremno za deploy |

### Faza 3 — pod-koraci
- [x] Očistiti mrtvi kod (`components/Navbar.tsx`, `components/Footer.tsx`)
- [x] i18n foundation (LocaleProvider + jezički prekidač + cookie; `<html lang>` po jeziku)
- [x] Chrome preveden (Navbar + Footer EN/SR)
- [x] Prevedene sekcije homepage-a (Hero, Services, Pricing, Projects, WhyUs, CTA)
- [x] Prevedene podstranice (onama, usluge, projekti, kontakt)
- [x] SR pricing pojas (EUR) — Landing €400 / Sajt €900 / AI €250
- [x] ChatbotWidget preveden (konverzacija + budžet opcije u €)
- [ ] (opciono) `hreflang` — samo ako pređemo na `/sr` URL-ove; zasad isti URL + cookie

**Faza 3 je gotova.** Ceo sajt (homepage + podstranice + chrome + chatbot) je dvojezičan EN/SR, cene menjaju valutu. Ostaje samo odluka o `/sr` URL-ovima za SEO (opciono, kasnije).

**Kako i18n radi:** sav sadržaj je `Record<Locale, ...>` u `data/` (site, services, projects, pricing, pages) + rečnici chrome-a u `data/i18n.ts`. Server komponente čitaju jezik preko `getLocale()` (`lib/locale-server.ts`, čita cookie) i prosleđuju `locale` sekcijama; klijentske (Navbar, Footer, kontakt) koriste `useLocale()` iz `LocaleProvider`. Prekidač upisuje cookie `locale` + `router.refresh()`.

---

## Odluke (dogovoreno)
- **Tržište/jezik:** dvojezično, **EN primaran + SR prekidač** (ne 50/50). Stranac uvek prvo vidi EN.
- **Cene — dva pojasa, vezana za jezik (nikad sve valute na jednoj strani):**
  - Premium (EN = US+UK): Landing **od $1.200** · Website **od $3.000** · AI add-on **od $600**
  - Lokalni (SR): Landing **od €400** · Sajt **od €900** · AI add-on **od €250**
  - Uvek "od" cena; tačna ponuda posle audita.
- **Gym app** (petkovic-gym.vercel.app) — poseban proizvod, NE ide na ovaj sajt zasad.

## Tačke za povratak (git)
- `fd751ca` — + display font Fraunces → Playfair Display (čistiji j/S)
- `b6cdfb7` — + ChatbotWidget preveden (Faza 3 gotova)
- `6d5b261` — + PUN prevod (homepage sekcije + podstranice + SR EUR cene)
- `c6cf9ed` — + i18n foundation (EN/SR prekidač, nav+footer prevedeni)
- `174f199` — + obrisan mrtvi kod
- `8b410c9` — + STATUS.md
- `ba32c01` — + Pricing sekcija (Faza 2)
- `e85e5fc` — + skinut US / senior signal (Faza 1)
- `b1ab16d` — + salvage docs
- `f132c2f` — originalni živi sajt (netaknut, = `main`)

Povratak na original: `git checkout main` · Korak nazad: `git reset --hard <commit>`
