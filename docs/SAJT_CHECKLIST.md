# SAJT — checklist i pravila

> Radni podsetnik dok peglamo outreach. Sajt je prvi utisak za svakog klijenta
> kome pošaljemo link — mora da izdrži pogled, ne da otvara rupe.
>
> **Poslednje ažuriranje:** 2026-10-04

---

## 0. Urađeno (2026-10-04) — bezbednosno ojačavanje

| # | Šta | Zašto |
|---|---|---|
| 1 | Dodato 5 bezbednosnih HTTP headera u `next.config.mjs` | HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy — clickjacking, prisila HTTPS, gašenje kamere/mika/lokacije. Ne menja izgled ni rad. |
| 2 | Izbačen neiskorišćen `sanity` scaffold (paket + `sanity/` folder + `studio` skripta) | Nije ga importovao nijedan fajl u kodu. Skinulo **764 paketa** i oborilo ranjivosti 51 → 26. |
| 3 | `npm audit fix` (bez `--force`) | Zakrpljeni paketi sa stvarnom površinom: `resend`/`svix`/`uuid` (kontakt forma, radi uživo), `sharp` (slike), `yaml`. 26 → 9. |
| 4 | Izbačen `output: 'standalone'` iz `next.config.mjs` | Suvišno na Vercelu. |
| 5 | Izbačena mrtva slika `public/background-tech.svg.png` (1,6 MB) | Nigde se ne referencira u kodu. |

**Rezultat:** ranjivosti **51 → 9** · build prolazi · lista ruta čista.

### Preostalih 9 — SVESNO ostavljeno
Svih 9 su u **build-alatima** (`postcss`, `braces`, `micromatch`, `tailwind`, `eslint`) — rade samo pri buildu, obrađuju NAŠ sopstveni kod, nisu dostupne posetiocu. Jedini „fix" je `--force` koji forsira **Next 15→16 i Tailwind 3→4** (breaking migracija). Ne razvaljujemo radni sajt zbog brojke bez realnog rizika. → vidi §2 „Planirano".

---

## 1. Urađeno (2026-09-20)

| # | Šta | Zašto je bilo bitno |
|---|---|---|
| 1 | Noor link prebačen sa `vercel.app` na `noorbeauty.rs` | Portfolio je pokazivao preview domen umesto pravog klijentskog sajta |
| 2 | Obrisan `/preview/bella-spa` + `public/previews/` | Klijentski demo bio javno dostupan svakome ko zna URL |
| 3 | Obrisana `/demo` ruta | Javni generator demo stranica, svako je mogao da pravi šta hoće na tvom domenu |
| 4 | Obrisana `/api/chat` ruta | Otvoren endpoint ka Anthropic API-ju, bez zaštite — vidi §3 |
| 5 | `/api/contact` očvršćen | HTML escape, validacija mejla, limiti dužine, honeypot, rate limit, `replyTo` |
| 6 | Dodati `robots.txt` i `sitemap.xml` | Oba su vraćala 404 |
| 7 | Dodati OpenGraph + Twitter tagovi, `metadataBase`, canonical | Link okačen na WhatsApp/LinkedIn nije imao karticu |
| 8 | `/kontakt` dobio svoj `<title>` i opis | Bio `"use client"` pa nije mogao da eksportuje metadata |
| 9 | OG slika 1200×630 (`app/opengraph-image.tsx`) | Kartica pri deljenju linka išla bez vizuala |
| 10 | Izbačeno 6 neiskorišćenih zavisnosti | `@anthropic-ai/sdk`, `@supabase/supabase-js`, `nodemailer`, `@types/nodemailer`, `next-sanity`, `@sanity/client` |

---

## 2. Sledeće — po prioritetu

### Visok
- [ ] **⏳ Rotirati `RESEND_API_KEY` i sačuvati kao Secret** (Vercel „Needs Attention" — vrednost
      čitljiva svima s pristupom projektu; nije procurela javno). Redosled: nov ključ u Resendu →
      update u Vercelu kao Sensitive → redeploy + test forme → revoke stari. Detalji: `STATUS.md`
      („OSTALO DA BRANKO ISPEGLA"). **Nije hitno** (solo Hobby projekat).
- [x] ~~**Obrisati nekorišćene env varijable na Vercelu**~~ — SREĐENO 2026-10-04: obrisano 5 mrtvih
      `MAIL_*` (SMTP ostaci); `ANTHROPIC_API_KEY`/`SUPABASE_*` nisu ni postojali. Ostale 3 žive.
- [ ] (niska) **Anthropic konzola** — pogled da nema nepoznate potrošnje; ključ nije bio na Vercelu, verovatno bespredmetno.

### Srednji
- [ ] **OG slika — logo i jezik.** Sad je tekstualni wordmark na engleskom.
      Razmotriti pravi znak (`docs/Logo.png`) i da li publika traži srpsku verziju.
- [ ] **Dvojezičnost i SEO.** Jezik je u kolačiću, obe verzije dele iste URL-ove →
      Google indeksira samo jednu, nema `hreflang`. Ako SR treba da rangira, trebaju
      prave rute (`/en` ili `/sr`). Već stoji kao otvorena stavka u STATUS.md.
- [ ] **Rate limit koji preživi restart.** Sadašnji je u memoriji instance — na
      serverless-u nije globalan. Vercel KV ili Upstash ako spam postane stvaran problem.
- [ ] **Per-strana `description`.** Sve podstrane sad nasleđuju opšti opis sa root-a.

### Nizak
- [ ] **`public/background-tech.svg.png` (1,6 MB) i `public/email-logo.png` (1,3 MB)** —
      ne referencira ih nijedan fajl u kodu. Proveriti da ih ne koristi neki mejl
      šablon spolja, pa obrisati.
- [x] ~~**Sanity scaffold**~~ — izbačen 2026-10-04 (paket + `sanity/` folder + `studio` skripta).
- [x] ~~**`output: 'standalone'`**~~ — izbačen 2026-10-04.
- [x] ~~`npm audit` ranjivosti~~ — sređeno 2026-10-04 (51 → 9; preostalih 9 su build-noise, vidi §0 + Planirano).

### Planirano (zaseban, namenski zadatak — NIJE hitno)
- [ ] **Nadogradnja Next 15 → 16 i Tailwind 3 → 4.** Gasi preostalih 9 „build-noise" ranjivosti,
      ali je breaking migracija — radi se namerno, sa testiranjem, ne kao hitna zakrpa.
      Dok se ne uradi, tih 9 ostaje svesno ostavljeno.

---

## 3. Pravila — kako da se ovo ne ponovi

Greška nije bila u kodu nego u pretpostavci: *„to niko ne zna da postoji, znači niko neće doći."*
Ne važi. Evo šta važi.

**1. Svaka ruta u `app/` je javna čim se deploy-uje.**
Ne postoji „skrivena" ruta. To što nije linkovana nigde na sajtu ne znači da nije dostupna.
Boti skeniraju domene, rute se pojave u Vercel logovima, u `sitemap`-u, u tuđoj istoriji
pregledača. Ako ne sme svako da je otvori — ne sme da bude u `app/`.

**2. Sve u `public/` se skida direktno preko URL-a.**
Tu nema nikakve provere. Fajl u `public/previews/klijent/` je javan fajl.

**3. `noindex, nofollow` nije zaštita.**
To je molba Google-u da ne indeksira. Čoveka koji ukuca URL ne zaustavlja ništa.

**4. Svaka ruta koja zove plaćeni API mora da ima tri stvari**, pre nego što ode na produkciju:
rate limit, proveru odakle zahtev dolazi, i — ako je moguće — auth. Bez toga je to tuđi
besplatan pristup tvom računu.

**5. Klijentski preview nikad ne ide na glavni domen.**
Zaseban Vercel projekat, nasumičan poddomen, i obriše se kad se posao zatvori. Ako mora na
glavni domen, onda uz Vercel Password Protection. Klijent ne treba da nađe demo drugog klijenta.

**6. Korisnički unos se nikad ne lepi sirov u HTML ili mejl.**
Uvek escape. Važi i za mejlove koje ti sam primaš.

**7. Pre svakog deploy-a pogledaj listu ruta.**
`npm run build` na kraju ispiše sve rute. **To je tvoja javna površina** — ne ono što misliš
da je javno. Ako u toj listi vidiš nešto što ne prepoznaješ ili ne želiš da svet vidi, briši
pre push-a.

---

## 4. Lokalni build na Windows-u

Node 24 na ovoj mašini ruši svaki HTTPS poziv (`X509_STORE_add_cert` assertion), pa pucaju i
`npm install` i `next build` (Google fontovi se povlače u build-u). Zaobilaznica:

```bash
NODE_OPTIONS="--no-use-system-ca" npm run build
```

```powershell
$env:NODE_OPTIONS="--no-use-system-ca"; npm run dev
```

Vercel gradi na svom Linux okruženju i tamo ovog problema nema. Trajno rešenje je
reinstalacija Node-a, ali dok to ne uradiš — gornje radi.
