# Petković Solutions — Next.js Starter (srpski)

Moderni temelj sajta za **petkovicsolutions.com** — Next.js 14 + Tailwind, spremno za Sanity CMS i AI chatbot.

## Brzi start (lokalno)
```bash
npm install
npm run dev
# http://localhost:3000
```

## Deploy (Vercel)
Repo je povezan na Vercel → svaka promjena na `main` grani se automatski objavljuje.

## Stranice
- `/` (Početna) — hero + Petciety tizer
- `/o-nama`
- `/usluge`
- `/projekti`
- `/kontakt`
- `components/ChatbotWidget.tsx` — demo widget (kasnije zamijeni stvarnim)

## Tema
Boje i izgled podešavaš kroz CSS varijable u `app/globals.css`.

## Sanity (opciono, kasnije)
- `sanity/` folder i `studio` skripta su spremni. Kreiraj projekat u Sanity, popuni `.env.local`, pa pokreni:
```bash
npm run studio
```

## Sigurnost
Ne stavljaj privatne ključeve u repo. Koristi `.env.local` i Vercel Environment Variables.
