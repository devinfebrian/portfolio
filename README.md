# Devin Febrian — The Febrian Prophet

A single-page portfolio for a fullstack engineer, published as a wizarding newspaper. The page is a morning edition: Devin's real work is reported as front-page news, with moving photographs, a press-room scene behind the paper, and one red editorial ink.

## Run

```bash
bun install
bun run dev
```

Open `http://localhost:5173`.

```bash
bun run build
bun run preview
```

The production output is `dist/` and can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Stack

- Bun
- Vite 8
- React 19
- React Three Fiber + Three.js for the floating paper and ink-mote press room
- Fontsource for self-hosted typefaces
- No backend, CMS, or analytics

## Editing content

- Profile details and contact links: `src/data/profile.ts`
- Project reports, status, findings, links, and screenshots: `src/data/projects.ts`
- Section copy: `src/sections/`
- Biography and reporter's notebook: `src/sections/Intake.tsx`
- Correspondence copy: `src/sections/Checkout.tsx`

The three reports are drawn from public repository READMEs and the live deployments. If the copy changes, update `src/data/projects.ts` rather than editing the rendered components.

## Fonts

This edition self-hosts four faces through Fontsource:

| Role | Face |
| --- | --- |
| Masthead and headlines | Besley |
| Reading and body | Newsreader |
| Typewritten metadata | Courier Prime |
| Technical labels | Archivo Narrow |

The footer records the typeface set. To swap a face, update the imports in `src/main.tsx`, the font stacks in `src/styles.css`, and the footer copy.

## Evidence

`public/evidence/` contains live deployment screenshots used in the reports. Provenance is recorded in `public/evidence/PROVENANCE.md` and in each photograph caption.

## Motion and audio

- The moving photographs and press-room scene respect `prefers-reduced-motion`.
- The press-room sound is off by default and only starts after the Press control is pressed.
- The first viewport and every section are keyboard reachable.

## Design context

- `PRODUCT.md` — durable product truth and constraints
- `DESIGN.md` — token-bearing design system recorded from the built world
- `.impeccable/surfaces/src-app-tsx.md` — direction contract for the page
- `.impeccable/review/` — desktop, mobile, and section captures used during review
