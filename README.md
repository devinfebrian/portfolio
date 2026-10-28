# Devin Febrian — Field Archive

A single-page portfolio for a fullstack engineer, built as a case file from a haunted archive. The visual world is a survival-horror records room; the content is evidence, not advertising.

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
- React Three Fiber + Three.js for the corridor, fog, dust, and scroll-driven camera
- Fontsource for self-hosted open font files
- No backend, CMS, or analytics

## Editing content

- Profile details and contact links: `src/data/profile.ts`
- Project exhibits, case IDs, findings, links, and screenshots: `src/data/projects.ts`
- Section copy: `src/sections/`
- Short bio and intake fields: `src/sections/Intake.tsx`
- Contact copy: `src/sections/Checkout.tsx`

The three exhibits are drawn from public repository READMEs and the live deployments. If the copy changes, update `src/data/projects.ts` rather than editing the rendered components.

## Fonts

The brief specifies ITC American Typewriter, Helvetica Condensed Bold, Neue Frutiger Roman, and Kairos Sans. This build ships open stand-ins because licensed files were not supplied:

| Specified face | Build fallback |
| --- | --- |
| ITC American Typewriter | Courier Prime |
| Helvetica Condensed Bold | Archivo Narrow |
| Neue Frutiger Roman | Open Sans |
| Kairos Sans | Rajdhani |

The CSS font stacks name the specified faces first, so installing them locally will take precedence. To self-host licensed files, add `@font-face` rules in `src/styles.css` and remove the Fontsource imports in `src/main.tsx`. The footer copy must be updated when the real faces ship.

## Evidence

`public/evidence/` contains live deployment screenshots used in the exhibits. Provenance is recorded in `public/evidence/PROVENANCE.md` and in each figure caption.

## Motion and audio

- The 3D corridor respects `prefers-reduced-motion`; it is decorative and marked `aria-hidden`.
- Audio is off by default and only starts after the sound control is pressed.
- The first viewport and every section are keyboard reachable.

## Design context

- `PRODUCT.md` — durable product truth and constraints
- `DESIGN.md` — token-bearing design system recorded from the built world
- `.impeccable/design.json` — machine-readable design-system sidecar
- `.impeccable/surfaces/src-app-tsx.md` — direction contract for the page
- `.impeccable/review/` — desktop, mobile, and section captures used during review
