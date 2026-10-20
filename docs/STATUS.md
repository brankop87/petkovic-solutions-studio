# STATUS — gde sam sa sajtom

> Ovaj fajl je "sidro". Kad otvoriš projekat, pročitaj ovo prvo — odmah znaš gde si stao, šta je urađeno i šta je sledeće. Ažurira se na kraju svakog koraka.

> **Vidi i [SAJT_CHECKLIST.md](SAJT_CHECKLIST.md)** — bezbednosne ispravke od 2026-09-20 i pravila da se ne ponove.

**Poslednje ažuriranje:** 2026-10-20
**Aktivna grana:** `main` (Faze 4 i 5 merge-ovane i deployovane)
**Živi sajt (`main` → petkovicsolutions.com):** ✅ **UŽIVO** — redizajn (dvojezično EN/SR, pricing, Playfair) + bezbednosne ispravke + `/sr` SEO (Faza 4) + scroll animacije (Faza 5). Potvrđeno na produkciji.

---

## 2026-10-20 — Faza 5: scroll animacije

Sajt je delovao statično. Dodat suptilan ali živ pokret dok se skroluje.

- **`components/motion/Reveal.tsx`** — Framer Motion wrapper (`whileInView`, `once`, spring + scale „pop"); poštuje `prefers-reduced-motion`; tekst ostaje u DOM-u → **SEO neokrnjen**.
- Primenjen: hero kolone (na učitavanju), **kartice radova ulaze naizmenično levo/desno sa razmakom**, cene/koraci/CTA se dižu na skrol.
- Jačina se lako podešava u `Reveal.tsx` (offset/spring/scale) i `delay` po sekciji.

Mogući „bolderski" dodaci za kasnije (ako zatreba više wow): hover-tilt na projektima, brojke koje se nabrajaju (+social proof), živ gradijent u hero-u, klizajuća traka niša.

**Status: ✅ UŽIVO (commit c4f2a16).**

## 2026-10-20 — Faza 4: zasebni `/sr` URL-ovi + hreflang (dvojezični SEO)

Bilo je cookie-based (oba jezika na istom URL-u → Google ne indeksira srpski). Sad svaki jezik ima svoju adresu, pa SR može zasebno da rangira.

- **EN ostaje na rootu** (`/`, `/onama`…) — postojeći URL-ovi/SEO netaknuti. **SR pod `/sr`** (`/sr`, `/sr/onama`…) preko tankih re-export fajlova.
- **`middleware.ts`** postavlja `x-locale` header iz putanje → root layout renderuje tačan `<html lang>`.
- **`LocaleProvider`** izvlači jezik iz `usePathname`; **prekidač menja URL** (`/onama` ↔ `/sr/onama`). Cookie izbačen.
- Interni linkovi lokalizovani preko `localePath()` (`data/i18n.ts`); svaka strana ima `generateMetadata` sa **canonical + hreflang (en/sr/x-default)** + lokalizovan **OG/Twitter** (`og:locale`).
- **`sitemap.xml`** emituje hreflang alternative za sve strane.
- Novi fajlovi: `middleware.ts`, `lib/i18n-meta.ts`, `app/sr/**`. `getLocale()` sad čita header (ne cookie).

Verifikovano lokalno: svih 10 ruta 200, tačan `html lang`+hreflang+canonical po ruti, sadržaj+OG po jeziku, `/sr` interni linkovi ostaju u `/sr` grani.

**Status: ✅ UŽIVO na produkciji (2026-10-20, commit 667c9ee).** Potvrđeno: `/` i `/sr` → 200, tačan `html lang`+hreflang, SR sadržaj live.

---

## Kako pokrenuti lokalno
Iz PowerShell-a, u folderu sajta:
```powershell
$env:NODE_OPTIONS="--no-use-system-ca"; npm run dev
```
Otvori http://localhost:3000
> `--no-use-system-ca` zaobilazi bug u Node 24 na Windowsu (ruši `next dev` na TLS/Google fontovima). Bez toga puca — nije do sajta.

---

## 2026-10-04 — bezbednosno ojačavanje (headeri + zavisnosti)

Detalji i pravila: **[SAJT_CHECKLIST.md](SAJT_CHECKLIST.md)** (§0).

Urađeno (lokalno, **čeka push**):
- **5 bezbednosnih HTTP headera** u `next.config.mjs` — HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. Ne menja izgled ni rad.
- **Izbačen neiskorišćen `sanity` scaffold** (paket + `sanity/` folder + `studio` skripta) — nije ga importovao nijedan fajl. **764 paketa manje.**
- **`npm audit fix`** (bez `--force`) — zakrpljeni paketi sa stvarnom površinom: `resend`/`svix`/`uuid` (kontakt forma, radi uživo), `sharp`, `yaml`.
- Izbačen suvišan `output: 'standalone'`.
- **Izbačena mrtva slika** `public/background-tech.svg.png` (1,6 MB) — nigde se ne referencira.
- **Rezultat: ranjivosti 51 → 9** · build prolazi · lista ruta čista (`/ · /api/contact · /kontakt · /onama · /projekti · /usluge · /opengraph-image · /robots.txt · /sitemap.xml`).

Preostalih 9 su **svesno ostavljene** — sve u build-alatima (postcss/braces/tailwind/eslint), nedostupne posetiocu; „fix" bi bio breaking Next 16 + Tailwind 4. Planirano kao zaseban zadatak (vidi dole).

**Vercel env — SREĐENO (2026-10-04):** obrisano 5 mrtvih `MAIL_*` (HOST/PORT/USER/PASS/SECURE — ostaci starog SMTP-a). `ANTHROPIC_API_KEY` i `SUPABASE_*` nisu ni postojali. Ostale samo 3 koje kod čita: `RESEND_API_KEY`, `MAIL_FROM`, `MAIL_TO`. ✅

### ⏳ OSTALO DA BRANKO ISPEGLA
- [ ] **Rotacija `RESEND_API_KEY` + čuvanje kao Secret.** Vercel ga markira „Needs Attention":
      vrednost je vidljiva svakome s pristupom projektu (NIJE procurela javno, samo nije
      sačuvana kao Secret). **Nije hitno** (solo Hobby projekat, samo Branko ima pristup).
      Uraditi ovim **redom da kontakt forma ne pukne:**
      1. Resend → napravi NOV ključ (stari ostavi da radi).
      2. Vercel → Edit `RESEND_API_KEY` → nalepi nov → tip **Sensitive/Secret** → Save.
      3. Redeploy (ili sačekaj push koda) → pošalji sebi test poruku da forma radi.
      4. Tek onda Resend → revoke stari ključ.
- [ ] **Odluka: `public/email-logo.png` (1,3 MB).** Kod ga ne koristi. Obrisati — OSIM ako
      ga neki tvoj STARI poslati mejl linkuje preko `petkovicsolutions.com/email-logo.png`
      (tad bi se u tim mejlovima pokvarila slika). Ti znaš da li si to ikad stavio.
- [ ] (opciono, niska) Anthropic konzola — pogled da nema nepoznate potrošnje; pošto ključ
      nije bio na Vercelu, verovatno bespredmetno.

---

## Plan za dalje (dogovoreno 2026-10-04)

Redom, da ne lupamo glavu i znamo na čemu smo:

**A) Pre produkcije (ova runda)**
1. [x] Bezbednosni headeri + čišćenje zavisnosti (gore).
2. [x] Vercel env očišćen (ostale 3 žive). ⏳ Ostaje: rotacija `RESEND_API_KEY` kao Secret (vidi „OSTALO DA BRANKO ISPEGLA").
3. [ ] Push na `main` → Vercel deploy → proveriti headere na securityheaders.com (cilj: A/A+).

**B) Sadržaj + promocija (⬅ SLEDEĆI KORAK, dogovoreno 2026-10-20)**
Cilj: dovesti ljude na sajt (posebno srpsko tržište — Faza 4 je tek *temelj*, SEO sam ne dovodi posetioce).
1. [ ] **Univerzalni/oštriji headline** — market-neutral poruka. Kandidat: *„Websites that make small businesses look like big ones."*
2. [ ] **1 ciljani demo** — NE gomila (zid „concept" = izgleda kao da nema klijente). Napraviti **jedan** demo u niši koju Branko trenutno najviše pičuje, jasno označen „concept". → **čeka Brankov odgovor: koju nišu najviše gađa.**
3. [ ] **Lov na 1 preporuku (testimonial)** — ima 3 živa projekta, 0 preporuka = prava rupa. Jedna rečenica klijenta ispod projekta vredi više od bilo kog demoa.
4. [ ] **Plan promocije za srpsko tržište** — konkretno: ključne reči/sadržaj za `/sr`, Google/IG/FB kanali, lokalni listinzi. (Razraditi kao zaseban korak.)
5. [ ] **Oživeti IG/FB** — sadržaj kroz struku (before/after demoa, saveti), da profil deluje aktivno i pre prvih klijenata.

**C) Kasnije (namenski)**
- [ ] Next 16 + Tailwind 4 nadogradnja (gasi preostalih 9 vulnova; breaking, sa testom).
- [x] `hreflang` / `/sr` rute → **urađeno (Faza 4, 2026-10-20).**
- [ ] (opciono, više „wow" na sajtu) hover-tilt na projektima, brojke koje se nabrajaju (+social proof), živ gradijent u hero-u.

---

## 2026-09-20 — bezbednost, SEO, čišćenje

Detalji i pravila: **[SAJT_CHECKLIST.md](SAJT_CHECKLIST.md)**.

Skinuto sa produkcije (sve tri su bile javno dostupne svakome ko zna URL):
- `/preview/bella-spa` — klijentski demo
- `/demo` — generator demo stranica preko query parametara
- `/api/chat` — otvoren endpoint ka Anthropic API-ju bez rate limita i auth-a

Sređeno:
- `/api/contact` — HTML escape, validacija mejla, limiti dužine, honeypot, rate limit, `replyTo`
- `robots.txt` + `sitemap.xml` (oba su vraćala 404)
- OpenGraph/Twitter tagovi + OG slika 1200×630 (`app/opengraph-image.tsx`)
- `/kontakt` razdvojen na server stranu + `ContactForm` klijent komponentu (zbog metadata)
- Noor u portfoliju prebačen sa `vercel.app` na `noorbeauty.rs`
- Izbačeno 6 neiskorišćenih paketa; obrisan mrtav `CLAUDE_DEMO_INSTRUCTIONS.md`

Ostaje tebi (traži pristup nalozima):
- [ ] Provera Anthropic konzole — da nema nepoznate potrošnje
- [ ] Brisanje mrtvih env varijabli na Vercelu: `ANTHROPIC_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`

---

## Plan redizajna (faze)

| Faza | Opis | Status |
|---|---|---|
| **1** | Pozicioniranje/copy: skinuto tvrdo "US", uklonjen "Senior signal" bedž | ✅ gotovo |
| **2** | Pricing sekcija (Premium/EN pojas): Landing $1.200 / Website $3.000 / AI add-on $600 | ✅ gotovo |
| **3** | Dvojezičnost EN/SR + SR pricing (€400/€900/€250) + čišćenje mrtvog koda | ✅ gotovo |
| **Deploy** | Merge grane u `main` → Vercel auto-deploy | ✅ uživo (0a54014) |

### Faza 3 — pod-koraci
- [x] Očistiti mrtvi kod (`components/Navbar.tsx`, `components/Footer.tsx`)
- [x] i18n foundation (LocaleProvider + jezički prekidač + cookie; `<html lang>` po jeziku)
- [x] Chrome preveden (Navbar + Footer EN/SR)
- [x] Prevedene sekcije homepage-a (Hero, Services, Pricing, Projects, WhyUs, CTA)
- [x] Prevedene podstranice (onama, usluge, projekti, kontakt)
- [x] SR pricing pojas (EUR) — Landing €400 / Sajt €900 / AI €250
- [x] ChatbotWidget preveden (konverzacija + budžet opcije u €)
- [x] `hreflang` / `/sr` URL-ovi → urađeno u **Fazi 4** (2026-10-20)

**Faza 3 je gotova.** Ceo sajt (homepage + podstranice + chrome + chatbot) je dvojezičan EN/SR, cene menjaju valutu.

> **Napomena (zastarelo posle Faze 4):** Faza 3 je bila cookie-based (isti URL). Od **Faze 4 (2026-10-20)** svaki jezik ima svoj URL (`/sr`), `getLocale()` čita `x-locale` header (ne cookie), prekidač menja URL. Aktuelna arhitektura i18n-a je u **[PROJECT_MAP.md](PROJECT_MAP.md)**.

---

## Odluke (dogovoreno)
- **Tržište/jezik:** dvojezično, **EN primaran + SR prekidač** (ne 50/50). Stranac uvek prvo vidi EN.
- **Cene — dva pojasa, vezana za jezik (nikad sve valute na jednoj strani):**
  - Premium (EN = US+UK): Landing **od $1.200** · Website **od $3.000** · AI add-on **od $600**
  - Lokalni (SR): Landing **od €400** · Sajt **od €900** · AI add-on **od €250**
  - Uvek "od" cena; tačna ponuda posle audita.
- **Gym app** (petkovic-gym.vercel.app) — poseban proizvod, NE ide na ovaj sajt zasad.

## Tačke za povratak (git)
- `c4f2a16` — + scroll animacije (Faza 5, 2026-10-20)
- `667c9ee` — + zasebni `/sr` URL-ovi + hreflang (Faza 4, 2026-10-20)
- `ff542dd` — + OG slika + ažuriran checklist (2026-09-20)
- `43890c2` — + zatvorene javne rute, očvršćena kontakt forma, robots/sitemap
- `50b50eb` — + obrisan Bella Spa klijentski preview
- `ffc884e` — + Noor link na `noorbeauty.rs`
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
