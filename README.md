# Petkovic Solutions

Marketing site for `petkovicsolutions.com`, built with Next.js App Router and Tailwind CSS.

Current positioning:
- Boutique web studio for US service businesses
- Main offer: custom websites and landing pages
- Secondary offer: lightweight AI add-ons for lead capture and FAQ flows

## Project structure
- `app/` route layer, layout, global styles, and API routes
- `components/home/` homepage sections
- `components/layout/` global navigation and footer
- `data/` site copy, projects, services, and navigation content
- `sanity/` optional CMS setup for later use

## Main routes
- `/` homepage
- `/onama` about
- `/usluge` services
- `/projekti` work
- `/kontakt` contact / audit request

Generated at build time: `/robots.txt`, `/sitemap.xml`, `/opengraph-image` (1200x630 share card).

There are no other public routes. Anything added under `app/` or `public/` is reachable
by URL the moment it deploys - see `docs/SAJT_CHECKLIST.md` before adding either.

## Local development
```bash
npm install
npm run dev
```

**On this Windows machine, prefix every npm command with `NODE_OPTIONS`.** Node 24 here
crashes on any HTTPS request (`X509_STORE_add_cert` assertion), which breaks both
`npm install` and `next build` (Google Fonts are fetched during the build):

```bash
NODE_OPTIONS="--no-use-system-ca" npm run dev
NODE_OPTIONS="--no-use-system-ca" npm run build
```

PowerShell:

```powershell
$env:NODE_OPTIONS="--no-use-system-ca"; npm run dev
```

Vercel builds on Linux and is unaffected.

## Build notes
- The project uses App Router conventions.
- TypeScript validation can be checked with `node .\\node_modules\\typescript\\bin\\tsc --noEmit`.
- `next lint` is not configured yet and will prompt for ESLint setup.

## Environment
The contact form is the only feature that needs secrets:

```bash
RESEND_API_KEY=
MAIL_FROM=
MAIL_TO=
```

## Sanity
Sanity is scaffolded but not required for the current site. Run the studio with:

```bash
npm run studio
```
