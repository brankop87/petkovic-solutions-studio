# SAJT — checklist i pravila

> Radni podsetnik dok peglamo outreach. Sajt je prvi utisak za svakog klijenta
> kome pošaljemo link — mora da izdrži pogled, ne da otvara rupe.
>
> **Poslednje ažuriranje:** 2026-09-20

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
| 9 | Izbačeno 6 neiskorišćenih zavisnosti | `@anthropic-ai/sdk`, `@supabase/supabase-js`, `nodemailer`, `@types/nodemailer`, `next-sanity`, `@sanity/client` |

---

## 2. Sledeće — po prioritetu

### Visok
- [ ] **OG slika (1200×630).** Tagovi postoje, slika ne. Bez nje kartica na WhatsApp-u i
      LinkedIn-u ide bez vizuala. Opcije: statični PNG u `public/og-image.png`, ili
      `app/opengraph-image.tsx` preko `next/og` (generiše se u build-u).
- [ ] **Proveriti Anthropic konzolu.** `/api/chat` je bila otvorena — potvrditi da nema
      nepoznate potrošnje i da je ključ rotiran ako je ikad bio postavljen na Vercelu.
- [ ] **Obrisati nekorišćene env varijable na Vercelu** — `ANTHROPIC_API_KEY`,
      `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`. Ništa ih više ne čita.

### Srednji
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
- [ ] **Sanity scaffold.** `sanity/sanity.config.ts` je prazan (`schema: { types: [] }`,
      placeholder `projectId`). Ili ga iskoristiti ili izbaciti i `sanity` paket.
- [ ] **`output: 'standalone'` u `next.config.mjs`** — Vercel to ne koristi. Bezopasno, ali suvišno.
- [ ] `npm audit` prijavljuje ranjivosti — pregledati.

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
