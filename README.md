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

## Local development
```bash
npm install
npm run dev
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd run dev
```

## Build notes
- The project uses App Router conventions.
- TypeScript validation can be checked with `node .\\node_modules\\typescript\\bin\\tsc --noEmit`.
- `next lint` is not configured yet and will prompt for ESLint setup.

## Environment
Contact form email delivery depends on:

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
