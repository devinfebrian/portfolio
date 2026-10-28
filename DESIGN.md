---
name: Devin Febrian — The Febrian Prophet
description: A portfolio published as a wizarding broadsheet, with living photographs and a lit press room behind the page.
colors:
  ink: "#17140e"
  ink-soft: "#3d3629"
  ink-faint: "#6b5f4b"
  paper: "#efe4cb"
  paper-deep: "#e4d5b6"
  paper-dark: "#d7c6a3"
  red: "#9d2c1f"
  red-bright: "#b53b27"
  desk: "#1b1610"
  scene-clear: "#bd966b"
  scene-sheet: "#fff4de"
  rule: "rgb(23 20 14 / 0.34)"
  rule-soft: "rgb(23 20 14 / 0.16)"
  rule-faint: "rgb(23 20 14 / 0.09)"
typography:
  masthead:
    fontFamily: "Besley, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(2.65rem, 8.2vw, 7.6rem)"
    fontWeight: 900
    lineHeight: 0.83
    letterSpacing: "-0.025em"
  section:
    fontFamily: "Besley, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(2.3rem, 5.2vw, 5.2rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Besley, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(2.4rem, 4.1vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 0.93
    letterSpacing: "-0.025em"
  story-title:
    fontFamily: "Besley, Iowan Old Style, Times New Roman, serif"
    fontSize: "clamp(2.5rem, 6vw, 5.8rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  copy:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "0.98rem"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "0em"
  label:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "0.57rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.09em"
  tag:
    fontFamily: "Archivo Narrow, Arial Narrow, Arial, sans-serif"
    fontSize: "0.57rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.1em"
rounded:
  square: "0px"
spacing:
  hair: "1px"
  row: "0.55rem"
  block: "0.9rem"
  gutter: "clamp(1.6rem, 4.5vw, 4.6rem)"
  chapter: "clamp(2.5rem, 5vw, 4.4rem)"
  fold: "clamp(1.2rem, 3vw, 2.6rem)"
  edition: "min(calc(100% - clamp(1.5rem, 7vw, 7rem)), 1600px)"
components:
  front-action:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "0.78rem 0.95rem"
    typography: "{typography.label}"
  front-action-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
  section-tab:
    textColor: "{colors.ink-faint}"
    rounded: "{rounded.square}"
    padding: "0 0.2rem"
    typography: "{typography.label}"
  section-tab-active:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
  press-switch:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.square}"
    padding: "0.28rem 0.55rem"
    height: "1.85rem"
    typography: "{typography.label}"
  press-switch-on:
    backgroundColor: "rgb(157 44 31 / 0.08)"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
  page:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "{spacing.gutter}"
  column-note:
    textColor: "{colors.ink-faint}"
    rounded: "{rounded.square}"
    padding: "0.75rem 0 0"
    typography: "{typography.copy}"
  proof-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "1rem 1.1rem"
  channel-row:
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.square}"
    padding: "0.9rem 0.15rem"
    typography: "{typography.copy}"
---

# Design System: Devin Febrian — The Febrian Prophet

## Overview

**Creative North Star: "The Living Morning Edition"**

The portfolio is not a website wearing newsprint; it is one edition of a wizarding broadsheet, laid on a lit press-room desk. The dominant material is warm paper: a full-height sheet printed in black ink with one oxblood accent. Behind it, and visible only in the margins and between the printed sheets, the scene holds a wooden desk, a lit wall, and loose copies of the same paper. The reader is holding the edition, not browsing a product page.

The page is organised as newspaper furniture rather than cards. A centred masthead and edition line open the front page; the lead story, a living photograph, and a printed contents column share the first viewport as three tracks. Chapters below are broadsheet departments (Statement, Portfolio, Workshop, Letters), separated by fold bands and each carrying a folio and section letter. Every article uses headline, italic deck, byline rule, drop cap, numbered findings, and a working-set line. There are no rounded cards, no glass, no glowing borders, and no icon tiles.

Movement is the paper's own: a fold lip opens as a section enters, a living photograph develops once and answers the pointer, and the press-room camera drifts with the scroll. Sound is a press-room bed that starts only when asked. Every motion collapses under `prefers-reduced-motion`, where the content remains exactly as legible.

**Key Characteristics:**
- One ground: warm newsprint (`#efe4cb`) carrying near-black ink (`#17140e`).
- One accent: oxblood (`#9d2c1f`), used for stamps, folios, marks, one front-page action, and hover ink.
- Four type voices with fixed jobs: Besley (masthead/headlines), Newsreader (reading), Courier Prime (metadata), Archivo Narrow (technical labels).
- Zero corner radius; the only curves are the circular press-sound bars.
- Page furniture on every section: edition line, section letter, folio, fold band, dog-ear.
- A true three-column front page: story, living photograph, contents.
- Depth from a lit desk, page edge shadow, and a folded corner; no glow or glass.
- Decorative R3F scene is `aria-hidden`, pointer-events none, and has a flat fallback.

## Colors

A drenched newsprint palette: one warm paper family, a warm ink family, and a single oxblood accent.

### Primary
- **Oxblood Ink** (`#9d2c1f`): the edition's only saturated colour. It fills the front-page action, colours the section marks and active underline, the photo plate number, drop caps, findings numerals, stamps, the scroll marker, and the "Reply requested" stamp. It never colours running body copy.
- **Oxblood Bright** (`#b53b27`): reserved for the rare state change where red itself must respond; the palette does not introduce a second hue.

### Neutral
- **Edition Paper** (`#efe4cb`): the full-bleed ground and every printed surface. Paper is the only large light field in the system.
- **Paper Deep** (`#e4d5b6`): photo mats, fold lips, and shaded paper edges.
- **Paper Dark** (`#d7c6a3`): the shadowed half of a folded corner and the darkest paper tint.
- **Press Ink** (`#17140e`): the masthead, headlines, body ink, rule ends, and the printer's proof block.
- **Ink Soft** (`#3d3629`): reading copy and prose where full black would stiffen the page.
- **Ink Faint** (`#6b5f4b`): captions, folios, labels, and secondary metadata.
- **Desk** (`#1b1610`): the CSS fallback behind the WebGL scene, beyond the paper's edge.
- **Press Room Clear** (`#bd966b`): the R3F scene's warm clear colour. It is a scene value, not a DOM background.
- **Loose Sheet** (`#fff4de`): the lit face of floating papers in the R3F scene.
- Hairline rules use ink at 34%, 16%, and 9% alpha.

### Named Rules
**The Paper Ground Rule.** Paper owns the page. Do not place dark cards on the edition, translucent panels over it, or full-bleed dark sections inside the broadsheet; dark appears only as ink on paper or as the desk beyond the sheet edge.

**The One Oxblood Rule.** Oxblood covers less than ten percent of a viewport and appears as mark, rule, stamp, numeral, or one solid action. It is never a background for reading copy and never appears as two competing solid fields.

## Typography

**Display Font:** Besley (with Iowan Old Style / Times New Roman fallback)
**Body Font:** Newsreader (with Georgia fallback)
**Metadata Font:** Courier Prime (typewritten newspaper hand)
**Technical Font:** Archivo Narrow (working-set and table labels)

**Character:** Besley is a nineteenth-century newsprint display face: heavy, high-contrast, and built to survive ink spread at large sizes. Newsreader supplies a genuine reading face with a compact ch; Courier Prime handles the datelines and captions that a newsroom would have typed; Archivo Narrow gives the working-set lists a colder institutional texture without becoming a fifth voice.

### Hierarchy
- **Masthead** (900, `clamp(2.65rem, 8.2vw, 7.6rem)`, line-height 0.83, -0.025em): "THE FEBRIAN PROPHET", centred between two rules. It is the largest type on the page and never appears elsewhere.
- **Section** (900, `clamp(2.3rem, 5.2vw, 5.2rem)`, 0.9): the four department headings. Uppercase.
- **Lead** (700, `clamp(2.4rem, 4.1vw, 4.4rem)`, 0.93): the front-page headline. Maximum 18ch; it is intentionally narrower than the column so the white space remains part of the composition.
- **Story title** (900, `clamp(2.5rem, 6vw, 5.8rem)`, 0.9): project names. These are the moment the page becomes a front page again.
- **Body** (400, 1rem, 1.6): global Newsreader default.
- **Copy** (400, 0.98rem, 1.68): measured article copy, capped at 64–66ch.
- **Label** (400, 0.57rem, 1.45, 0.09em tracking, uppercase): datelines, bylines, captions, folios, section notes, contents marks, column-note labels, footer notes.
- **Tag** (600, 0.57rem, 1.3, 0.1em tracking, uppercase): capability names in the workshop, findings leads, and stack lines.

### Named Rules
**The Four Voices Rule.** Exactly four families ship. A fifth face is a system change, not a component decision.

**The Three-Job Rule.** Besley carries the masthead, section headings, and article titles; Newsreader carries all reading copy; Courier Prime carries anything that identifies, dates, or locates; Archivo Narrow carries technical working-set labels. No role borrows another voice for variety.

**The Reading Measure Rule.** Running copy stays between 64 and 68ch. Section headings may be huge; body copy never drops below 0.78rem, except the deliberate 0.52–0.57rem metadata band.

## Layout

The edition is a centred paper sheet with fixed height-strip chrome. The sheet width is `min(calc(100% - clamp(1.5rem, 7vw, 7rem)), 1600px)` at 1440 and wider desktops; on screens up to 900px it becomes full width. The fixed masthead is 3.1rem tall and the section-tab strip 2.35rem, both aligned to the sheet width; the sheet reserves 5.45rem at the top so content never hides behind them.

The front page is a three-track grid: story `1.4fr`, living photograph `0.9fr`, contents `0.62fr`, with a 1px ink rule separating the tracks. At 1440×900 the first viewport contains the full masthead, lead headline, deck, red action, living photograph and caption, all four contents rows, the Edition Notes block, and the byline. The columns collapse to one at 1040px, where the photo and contents follow the lead as ruled blocks.

Chapters use the full sheet width with `clamp(1.6rem, 4.5vw, 4.6rem)` horizontal padding. Each starts with a 3px double rule, a fold lip of `clamp(1.2rem, 3vw, 2.6rem)`, and a dog-ear at the top right. The Statement and Letters departments use a ruled two-column model; Portfolio alternates a photo/text split; the Workshop is a single full-width table. The shared vertical rhythm is: fold lip, 2.5–4.4rem chapter padding, section rule, content, folio.

**Breakpoints:** 1200px (display sizes step down), 1040px (front-page grid and story splits stack; contents become a ruled block), 900px (edition goes full width, nav becomes a fixed bottom bar, gutters disappear, threads hide), 620px (masthead compresses, the contents type steps down, the workshop table becomes stacked blocks, the folded corner tightens).

**Sheet edge:** a 1px rule plus a wide soft shadow separates page from desk; a pair of inset edge shadows suggests the paper's lift. The desk remains visible in the `clamp(1.5rem, 7vw, 7rem)` outer gutter.

### Named Rules
**The Edition Width Rule.** Masthead, tabs, and sheet share one width token. Changing one without the others breaks the illusion of a single printed object.

**The Three-Track Rule.** The front page is story, photograph, contents — not a hero plus sidebar. If a fourth element is needed, it belongs in the contents column or below the fold, never as a fourth track.

## Elevation & Depth

The system is lit paper on a desk, not stacked UI cards. The sheet sits above a warm WebGL press room with a light cast from the upper left; the only DOM shadows are the sheet's wide soft drop and the tight inset edge that makes the paper feel lifted.

The living photograph is a flat printed plate with a 1px ink frame and a paper matte. Its depth is performed, not shadowed: two image layers respond to the pointer at different rates over a halftone grain. The folded corner is a clipped triangle of darker paper with a two-pixel ink crease and a small drop shadow. The R3F scene supplies desk, wall, floating copies, and ink motes; it never receives a DOM glow.

### Shadow Vocabulary
- **Edition lift** (`0 0 0 1px rgb(62 45 22 / 0.42), 0 30px 80px rgb(0 0 0 / 0.5)`): the paper sheet above the desk.
- **Sheet edge** (`inset 16px 0 20px -24px rgb(0 0 0 / 0.62), inset -16px 0 20px -24px rgb(0 0 0 / 0.62)`): the subtle lift at the left and right paper edges.
- **Fold lip** (`0 7px 12px -10px rgb(34 24 12 / 0.45)`): beneath the scroll-driven folded band at each chapter.
- **Dog-ear** (`drop-shadow(-2px 3px 2px rgb(60 42 20 / 0.38)`): the turned corner only.
- **Photo matte**: border only; living photographs do not use box-shadow.

### Named Rules
**The Lit Paper Rule.** Depth comes from paper against a lit desk, never from a coloured glow, gradient border, or glass panel. A new surface either sits on the paper or is the paper.

**The One Fold Rule.** Each chapter gets one fold lip and one dog-ear. Fold decoration never repeats inside a section or appears on the front page.

## Shapes

Radius is 0px throughout. The sheet, photo frame, proof block, table, stamps, and controls are all square-cornered. The only rounded things in the world are the press-sound meter bars and the scene's generated paper forms; the interface itself has no curve.

Silhouette variety comes from three devices only:
- **Fold lip.** A soft paper-dark-to-transparent band at each chapter top, opened by a scroll-driven perspective rotation from 74° to flat.
- **Dog-ear.** A top-right triangle of darker paper with a diagonal ink crease and a soft shadow, sized `clamp(2.2rem, 4vw, 3.8rem)`.
- **Ink rule.** Single hairlines, 3px double rules, and the 2px oxblood action border; rules always run horizontally except the 1px column separators on the front page.

Stamps ("Morning edition", "Reply requested") are rotated 5–7° and set in typewriter, always multiply-blended so the paper shows through.

### Named Rules
**The Zero Radius Rule.** Corners are square. The one circular shape in the interface is a press-sound bar; a rounded card is a break in the world.

**The Printed Fold Rule.** A fold is always a flat printed device: a crease, a lip, or a dog-ear. Do not simulate paper with a gradient card, a glass overlay, or a photograph of paper.

## Components

### Navigation
- **Shape:** two fixed typewritten strips aligned to the edition width; square, 1px rule above, 3px double rule below.
- **Section tabs:** uppercase Courier Prime at 0.57rem, 0.11em tracking. Marks are 1 / A / B / C / D; active tab uses ink text and a 2px oxblood underline. Hover raises the tab from ink-faint to ink.
- **Mobile:** below 900px the tabs become a fixed bottom bar, one tab per column, safe-area padding, and the same oxblood active underline.

### Buttons and Controls
- **Front action:** the only solid oxblood field. Square, 0.78rem × 0.95rem padding, Courier Prime at 0.6rem, paper text, arrow drawn as SVG. Hover flips to ink; active depresses 1px.
- **Press switch:** square ghost control in the fixed masthead, 1px ink-faint border, transparent ground, typewriter label "Press off / on", three 2px meter bars that animate only while audio plays. Pressed state uses a 0.08 oxblood wash and an oxblood border.
- **Links:** typewritten uppercase, 1px ink underline; hover becomes oxblood; external links carry a drawn 0.62rem SVG arrow.

### Living Photograph
The signature component. A 16:10 printed plate on a paper matte:
- Two image layers: a blurred, sepia misprint at 20% opacity and a normal plate at 0.62 sepia.
- Pointer parallax: the misprint translates with the pointer at 3–4px, the plate at −7px, producing independent movement at low cost.
- Hover: the plate loses most of its sepia, gains saturation, and scales to 1.04; the misprint lifts to 28%.
- A 3px halftone dot grid sits above both layers in multiply.
- One-shot develop: on entry, the wrapper fades from blur/sepia to crisp over the view timeline. No infinite animation.
- Caption is Courier Prime at 0.57rem; "Plate I/II/III" is oxblood.
- Reduced motion removes the develop and pointer transforms and leaves the plate still and legible.

### Broadsheet Story
- **Head:** story title in Besley 900, italic deck in Newsreader, then a typewritten byline rule with "Report one · status · year".
- **Body:** two tracks, `1.04fr / 0.96fr`; photo/text alternates direction. The visual is sticky on desktop until the story ends.
- **Text:** drop cap in oxblood Besley, numbered findings with 01-style typewriter numerals, a working-set line in Archivo Narrow, and drawn-arrow links.
- **Third report:** no photograph; a printer's proof block in ink with paper type carries the folder map.

### Workshop Table
Full-width, ruled table: capability in Besley, working set in Newsreader, evidence in Archivo Narrow caps. Header row uses Courier Prime. On mobile the header hides and rows become stacked blocks with the evidence line in oxblood.

### Letters
A two-column correspondence desk: "Write to the desk." in Besley, email as a 2px oxblood-underlined Newsreader link, channels as ruled rows with typewritten labels and drawn arrows. The "Reply requested" stamp sits top-right on desktop and enters the flow on mobile.

### Footer
Edition colophon: Vol. IX / No. 09, return-to-page-one link with an SVG arrow, three typewritten notes, and "End of edition" in oxblood over a hairline.

### Motion
- **Page fold:** the chapter fold lip rotates from `perspective(700px) rotateX(74deg)` to flat on the view timeline, then settles at 60% opacity. Dog-ears are static.
- **Photo develop:** one-shot view-timeline transition from blur/sepia to sharp; hover and pointer response thereafter.
- **Scene:** slow camera dolly with scroll and pointer parallax; floating paper and motes drift at low amplitude.
- **State changes:** 0.2s ease for colour and border, 0.45s for photo layers.
- **Reduced motion:** no fold, no develop, no scene drift, no pointer transforms; content remains visible and still.

### Accessibility
Skip link to the edition, one h1, section h2s, story h3s, no heading levels skipped. Global 2px oxblood focus ring at 3px offset. WCAG AA contrast across paper and ink. Decorative scene and photo misprint are `aria-hidden`; audio is off by default and controlled by an `aria-pressed` switch. Full keyboard path including the bottom nav.

## Do's and Don'ts

### Do:
- **Do** keep the edition width, fixed chrome height, and first-viewport three-track grid aligned; masthead, tabs, and sheet are one printed object.
- **Do** use Besley 900 for the masthead and section headings, Besley 700 for the lead, Newsreader for all reading copy, Courier Prime for metadata, and Archivo Narrow for technical labels.
- **Do** hold reading copy to 64–68ch and keep the front page headline under 18ch.
- **Do** preserve the one oxblood field on the front page and use oxblood elsewhere only as mark, stamp, rule, drop cap, folio, or hover.
- **Do** place a fold lip and one dog-ear at each chapter, and a 3px double rule above each department.
- **Do** draw every arrow as an inline SVG with a consistent 1.4 stroke.
- **Do** make every motion opt-out-safe: the page must be complete and readable with reduced motion, no WebGL, and sound off.
- **Do** keep the press-room scene in cream/gold paper tones so it reads as a lit desk, not a dark backdrop.

### Don't:
- **Don't** introduce rounded cards, glass, glow, gradient borders, or a second accent; the world is paper, ink, and one red.
- **Don't** set a kicker or eyebrow above a story headline; the metadata line belongs below the deck as a byline.
- **Don't** make the floating photographs idle forever; they develop once and respond to attention.
- **Don't** use franchise logos, character art, crests, or other protected assets; this is an independent homage built from real project captures.
- **Don't** use stock photography or invented screenshots; the only shipping rasters are the dated Sentinel and GameForge captures with provenance in `public/evidence/PROVENANCE.md`.
- **Don't** place a fifth type family, set body copy in Besley, or use Courier Prime for running prose.
- **Don't** let the WebGL scene or the sound control become a prerequisite for content or navigation.
