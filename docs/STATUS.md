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
| **3** | Dvojezičnost EN/SR + SR pricing (€400/€900/€250) + čišćenje mrtvog koda | 🔄 u toku |
| **Deploy** | Merge grane u `main` → Vercel auto-deploy | ⏳ posle Faze 3 |

### Faza 3 — pod-koraci
- [x] Očistiti mrtvi kod (`components/Navbar.tsx`, `components/Footer.tsx`)
- [ ] i18n foundation (LocaleProvider + jezički prekidač + EN/SR rečnici)
- [ ] Prevesti sve sekcije homepage-a (Hero, Services, Pricing, Projects, WhyUs, CTA)
- [ ] Prevesti podstranice (onama, usluge, projekti, kontakt)
- [ ] SR pricing pojas (EUR) na srpskoj verziji
- [ ] `hreflang` + `<html lang>` po jeziku

---

## Odluke (dogovoreno)
- **Tržište/jezik:** dvojezično, **EN primaran + SR prekidač** (ne 50/50). Stranac uvek prvo vidi EN.
- **Cene — dva pojasa, vezana za jezik (nikad sve valute na jednoj strani):**
  - Premium (EN = US+UK): Landing **od $1.200** · Website **od $3.000** · AI add-on **od $600**
  - Lokalni (SR): Landing **od €400** · Sajt **od €900** · AI add-on **od €250**
  - Uvek "od" cena; tačna ponuda posle audita.
- **Gym app** (petkovic-gym.vercel.app) — poseban proizvod, NE ide na ovaj sajt zasad.

## Tačke za povratak (git)
- `ba32c01` — + Pricing sekcija (Faza 2)
- `e85e5fc` — + skinut US / senior signal (Faza 1)
- `b1ab16d` — + salvage docs
- `f132c2f` — originalni živi sajt (netaknut, = `main`)

Povratak na original: `git checkout main` · Korak nazad: `git reset --hard <commit>`
