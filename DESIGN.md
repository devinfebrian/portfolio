---
name: Devin Febrian — Field Archive
description: A single-page portfolio built as a recovered case file from a night archive.
colors:
  ink: "#080a07"
  carbon-frame: "#0d0f0b"
  carbon-trace: "#14160f"
  paper: "#e8e1d0"
  paper-ink: "#1a1c16"
  stock-file-01: "#e2dac7"
  stock-file-02: "#d6cbb4"
  stock-file-03: "#cfc5ae"
  stock-kit: "#d3d4bf"
  manila-flap-01: "#c2b79f"
  manila-flap-02: "#b7ab92"
  manila-flap-03: "#a89c83"
  manila-tab: "#b59a62"
  manila-mobile: "#b9ad94"
  red: "#a7362a"
  red-bright: "#bd4436"
  red-deep: "#6f231a"
  red-ink: "#7f231b"
  lamp-green: "#93a67c"
  rule: "rgb(232 225 208 / 0.16)"
  rule-strong: "rgb(232 225 208 / 0.3)"
typography:
  display:
    fontFamily: "Helvetica Neue Condensed, Helvetica Condensed, Archivo Narrow, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(4rem, 8vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.83
    letterSpacing: "-0.025em"
  section:
    fontFamily: "Helvetica Neue Condensed, Helvetica Condensed, Archivo Narrow, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.015em"
  exhibit-title:
    fontFamily: "Helvetica Neue Condensed, Helvetica Condensed, Archivo Narrow, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Helvetica Neue Condensed, Helvetica Condensed, Archivo Narrow, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Neue Frutiger, Open Sans, Segoe UI, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  copy:
    fontFamily: "Neue Frutiger, Open Sans, Segoe UI, Arial, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.64
    letterSpacing: "0em"
  label:
    fontFamily: "ITC American Typewriter, American Typewriter, Courier Prime, Courier New, monospace"
    fontSize: "0.56rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.14em"
  tag:
    fontFamily: "Kairos Sans, Rajdhani, IBM Plex Sans, Arial, sans-serif"
    fontSize: "0.56rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.1em"
rounded:
  square: "0px"
  knot: "50%"
spacing:
  hair: "1px"
  tick: "0.35rem"
  rung: "0.6rem"
  row: "0.85rem"
  block: "1.2rem"
  section: "clamp(2rem, 4vw, 3rem)"
  sheet: "clamp(1.3rem, 3vw, 2.7rem)"
  chapter-y: "clamp(4.5rem, 10vh, 8rem)"
  chapter-x: "clamp(2rem, 7vw, 7rem)"
  rail-gutter: "clamp(3rem, 22vw, 14rem)"
components:
  anchor-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.05rem"
    typography: "{typography.label}"
  anchor-primary-hover:
    backgroundColor: "{colors.red-bright}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
  control-ghost:
    backgroundColor: "rgb(8 10 7 / 0.28)"
    textColor: "rgb(232 225 208 / 0.72)"
    rounded: "{rounded.square}"
    padding: "0.35rem 0.6rem"
    height: "1.9rem"
    typography: "{typography.label}"
  control-ghost-pressed:
    backgroundColor: "rgb(167 54 42 / 0.14)"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
  nav-link:
    textColor: "rgb(232 225 208 / 0.58)"
    padding: "0.32rem 0"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.paper}"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    padding: "{spacing.sheet}"
    rounded: "{rounded.square}"
  exhibit-sheet:
    backgroundColor: "{colors.stock-file-01}"
    textColor: "{colors.paper-ink}"
    padding: "clamp(1.8rem, 3.4vw, 2.9rem) clamp(1.3rem, 4vw, 3.2rem)"
    rounded: "{rounded.square}"
  kit-sheet:
    backgroundColor: "{colors.stock-kit}"
    textColor: "{colors.paper-ink}"
    padding: "clamp(1.2rem, 3vw, 2rem)"
    rounded: "{rounded.square}"
  folder-tab:
    backgroundColor: "{colors.manila-tab}"
    textColor: "#2b271d"
    padding: "0.38rem 0.8rem"
    typography: "{typography.label}"
  evidence-plate:
    backgroundColor: "{colors.carbon-frame}"
    textColor: "#c2bdaa"
    padding: "0.45rem"
    rounded: "{rounded.square}"
  tag-chip:
    backgroundColor: "rgb(255 255 255 / 0.18)"
    textColor: "#3f4132"
    rounded: "{rounded.square}"
    padding: "0.3rem 0.45rem"
    typography: "{typography.tag}"
  stamp:
    textColor: "{colors.red}"
    padding: "0.32rem 0.45rem 0.38rem"
    rounded: "{rounded.square}"
    typography: "{typography.tag}"
  ledger-row:
    textColor: "rgb(232 225 208 / 0.72)"
    padding: "1rem 0.15rem"
    rounded: "{rounded.square}"
  ledger-row-hover:
    textColor: "{colors.paper}"
    padding: "1rem 0.15rem 1rem 0.65rem"
    rounded: "{rounded.square}"
---

# Design System: Devin Febrian — Field Archive

## Overview

**Creative North Star: "The Recovered Case File"**

The page is not a portfolio with a theme applied; it is an artifact with a provenance problem. A carbon corridor recedes into fog behind every screen, and the content sits on physical sheets of bone paper laid over it — dossier cover, intake form, exhibit folders, field-kit sheet, checkout ledger. The visitor is reading a file that was pulled from an archive at night, not being sold a service. That single premise decides the material system: light exists only where paper exists, dark is steel and shadow, and red is the case examiner's ink.

Density is editorial rather than sparse. Every sheet carries institutional furniture — file lines, case IDs, filing columns, numbered findings, signature rows, footnotes — set in four voices: condensed display for names and signage, typewriter for index and case metadata, a humanist body for reading, and a condensed technical face for measurements and tags. Sheets are tilted by fractions of a degree and layered with soft downward shadow so they read as stacked paper rather than as UI cards. There is no glow, no gore, no game imagery, no glassmorphism, and no rounded corner anywhere in the build.

Motion is the room, not the content. A scroll-driven camera dollies down the corridor, dust drifts, one fluorescent lamp flickers, and the red thread pinned to the right edge fills as the page advances. Reveals are short and physical (a sheet settling, a folder unfolding). All of it yields at once to `prefers-reduced-motion`, which freezes the camera at the top of the corridor, steadies the lamp, and drops every transition to effectively zero.

**Key Characteristics:**
- Two material families only: carbon ground (#080a07) and paper stocks (#e8e1d0 plus four tinted stocks).
- One accent: case red (#a7362a) used as stamp, tick, rule, and one solid anchor.
- Four type families, each with a fixed job; no fifth voice.
- Zero corner radius; the only curve is the 5px scroll-thread knot.
- Structural furniture on every surface: file lines, case IDs, filing columns, footnotes.
- Fixed chrome: masthead above, index rail left, red scroll thread right.
- Depth from layered soft shadow under paper, never from glow or gradient borders.
- Decorative 3D is `aria-hidden`, `pointer-events: none`, and has a flat gradient fallback.

### Where the build departs from the direction contract

The direction contract is the record of intent; these are the places the shipped build reads differently. They are noted, not corrected.

- **Display scale.** The contract asks for the name at roughly 9vw. The build caps it at `clamp(4rem, 8vw, 6rem)`, so the name stops at 96px on wide screens (about 7.7vw at 1250px and up) and is set as two stacked lines, "DEVIN" over "FEBRIAN", rather than one line.
- **The green lamp.** The contract's "one fluorescent green lamp" exists only inside the WebGL scene (#93a67c fixture, #a8c294 light spill, #8fa87a wall lamp, #9fb58a panel). It never enters the CSS palette: `--green` and `--green-dim` are declared in `src/styles.css` and referenced by nothing.
- **Seven unreferenced custom properties.** `--ink-soft`, `--steel`, `--paper-warm`, `--paper-dim`, `--green`, `--green-dim`, `--brass` are declared and never used by name. The paper and manila stocks those tokens were meant to hold are hard-coded literals inside component rules (`.exhibit`, `.exhibit--02`, `.exhibit--03`, `.kit-sheet`, `.cover__tab`, `.exhibit__tab`). The palette is therefore half-tokenized; the paper family is recorded here as tokens for the first time.
- **The intake form is not a form.** The contract calls it an intake form; the build is a printed form sheet — a definition list of subject fields, a statement with a drop cap, a signature block, and a DF watermark. There are no inputs, no validation, and no form state anywhere in the build, and no input component exists to document.
- **Typefaces.** The four specified faces ship as open stand-ins (Archivo Narrow for Helvetica Condensed, Courier Prime for American Typewriter, Open Sans for Neue Frutiger, Rajdhani for Kairos Sans). The CSS stacks name the commercial faces first so licensed installs take precedence; the footer discloses the substitutions.
- **Marks.** Arrows and the disclosure mark are set as text glyphs (↗, ↓, +) in the built components rather than drawn. Recorded as a defect the build carries, not as system language.
- **One hard edge.** The cover anchor carries `0 3px 0 var(--red-deep)` — a single hard offset edge in an otherwise soft, two-layer shadow world. It belongs to that anchor only and is not a system elevation step.
- **Smallest type.** The label step is 0.56rem (8.96px) and carries real case metadata across the build. It is the record of what is built, not a floor to reproduce in new surfaces.

## Colors

An archive palette: near-black carbon ground, five paper stocks, manila card, and a single case red with a lamp green that lives only in the 3D room.

### Primary
- **Case Red** (#a7362a): the examiner's ink and the page's only accent. Stamps (`FILE 09`, `CASE OPEN`), the active index tick, the scroll thread, the `OPEN THE EXHIBITS` anchor fill, finding numerals, and every link hover. Because it is the only saturated field, a red element reads as an instruction.
- **Case Red Bright** (#bd4436): hover and focus states only — the anchor's hover fill and the global `:focus-visible` ring. It exists so state changes stay inside the red family instead of shifting hue.
- **Case Red Deep** (#6f231a): the 3px hard edge under the cover anchor. Unused elsewhere.
- **Case Red Ink** (#7f231b): the small printed red — exhibit numbering, filing status, the mobile kit's evidence column. Slightly darker than Case Red so it holds up on paper stocks.

### Secondary
- **Manila Tab** (#b59a62): the folder tab that sits above each exhibit and the manila family's saturated member. It is the only tab colour that appears against the dark ground rather than against paper.
- **Manila Flap 01–03** (#c2b79f, #b7ab92, #a89c83): the three vertical file tabs peeking from behind the dossier cover, one shade darker each so the stack reads as physical depth.
- **Manila Mobile** (#b9ad94): the same tab stack expressed as a three-column strip at the bottom of the cover on small screens.

### Tertiary
- **Lamp Green** (#93a67c): the fluorescent room. Appears as the emissive ceiling fixture and its point-light spill in the corridor; it is the only cool-family colour in the system and never touches a UI surface.

### Neutral
- **Archive Ink** (#080a07): page ground, masthead fill, WebGL scene background, and fog. The default canvas for everything that is not paper.
- **Carbon Frame** (#0d0f0b): the mat behind every evidence plate — a screenshot is always set on carbon, never on paper.
- **Carbon Trace** (#14160f): the terminal block that replaces a screenshot where none exists (the Download Sorter sort map).
- **Bone Paper** (#e8e1d0): the primary sheet stock — dossier cover, intake sheet, all body type on paper.
- **Paper Ink** (#1a1c16): type on paper — the default ink for every sheet, the drop cap's neighbour, and the display signature at the foot of the intake statement.
- **File Stock 01–03** (#e2dac7, #d6cbb4, #cfc5ae): the three exhibit folders, cooling and darkening by file number so the archive reads as a sequence rather than a repeated card.
- **Field Kit Stock** (#d3d4bf): a cooler, greyer paper reserved for the capability table, distinguishing reference material from case evidence.
- **Hairline Rule** (`rgb(232 225 208 / 0.16)`) and **Strong Rule** (`rgb(232 225 208 / 0.3)`): every divider on the dark ground. Rules are always hairline-thin and almost always horizontal; the paper side uses ink alphas instead.

### Named Rules
**The Paper Is the Only Light Rule.** Paper stocks are the only light surfaces in the system. No dark card sits on a sheet, no light card floats on the corridor, and no surface is translucent. If an element needs a light background, it is a sheet with a stock, a tilt, and a shadow.

**The One Red Rule.** Case red covers under ten percent of any screen and appears only as stamp, tick, hairline, numeral, thread, or the single solid anchor. It never fills a text block, never colours body copy, and never appears twice as two solid fields in one viewport.

**The Lamp Rule.** Lamp green belongs to the 3D room. It is never applied to text, borders, chips, or states in the DOM; the only green a user reads is light falling on concrete.

## Typography

**Display Font:** Archivo Narrow (with Helvetica Neue Condensed / Helvetica Condensed / Arial Narrow ahead of it in the stack)
**Body Font:** Open Sans (with Neue Frutiger / Segoe UI / Arial ahead of it)
**Label Font:** Courier Prime (with ITC American Typewriter / American Typewriter ahead of it) — the typewriter voice
**Technical Font:** Rajdhani (with Kairos Sans / IBM Plex Sans ahead of it) — measurements, tags, filing data

**Character:** Four voices with no overlap. The condensed bold display is signage — uppercase, tightly stacked, negative-tracked, set to read as a stamped institutional name. The typewriter voice is the archivist's hand: everything that is metadata, index, case ID, caption, or footnote. The humanist body is the only voice allowed to be comfortable, and it is the only voice set for long reading. Rajdhani is the cold instrument voice for stack tags, capability names, and file numbers.

All four are self-hosted through Fontsource: Archivo Narrow 400/600/700, Courier Prime 400/700, Open Sans 400/500/600, Rajdhani 500/600/700. No network font calls, no system-font display face.

### Hierarchy
- **Display** (700, `clamp(4rem, 8vw, 6rem)`, line-height 0.83, letter-spacing -0.025em, uppercase): the `DEVIN / FEBRIAN` name on the dossier cover, stacked as two lines. Small screens step to `clamp(3.4rem, 14vw, 5.6rem)` at 900px and `clamp(3rem, 16vw, 4.5rem)` at 620px.
- **Section** (700, `clamp(2.2rem, 4.5vw, 3.5rem)`, line-height 0.95, letter-spacing -0.015em, uppercase): the four `h2` chapter titles — Intake statement, Exhibits, Field kit, Checkout.
- **Exhibit title** (700, `clamp(2.6rem, 5vw, 4.2rem)`, line-height 0.84, uppercase): project names on their folders, the largest type on paper.
- **Lead** (700, `clamp(2.5rem, 5vw, 4.4rem)`, line-height 0.9, max 13ch): the checkout invitation, the only display type on the dark ground.
- **Body** (400, 1rem, line-height 1.6): global default in Open Sans.
- **Copy** (400, 0.92rem, line-height 1.64): reading blocks, measured — cover note 44ch, intake statement 62ch, exhibit abstract 68ch, checkout context 46ch, exhibit footnote 44ch at 0.66rem/1.55. Findings run at 0.79rem/1.55, table cells at 0.78rem/1.5, footer notes at 0.62rem/1.7.
- **Label** (400, 0.56rem, uppercase, letter-spacing 0.08–0.32em): the typewriter voice at its smallest — file lines, case IDs, index links, captions, footnotes, form fields, channel labels. The widest tracking (0.32em) is reserved for the single `INDEX` rail label. Field values inside the intake sheet are the exception: 0.78rem Open Sans 600 on paper.
- **Tag** (600, 0.56–0.62rem, uppercase, letter-spacing 0.06–0.16em): stack chips, capability row headers, filing columns, stamps, and the `DF` seal.

### Named Rules
**The Four Voices Rule.** Exactly four families ship: condensed display, typewriter label, humanist body, technical tag. A fifth face is a system change, not a component decision.

**The Typewriter Metadata Rule.** Anything that identifies or locates — case ID, file line, caption, date, index entry, footnote — is set in the typewriter voice, uppercase, tracked. Identification never borrows the body face.

**The Measure Rule.** Reading copy never exceeds 68ch, and paper body copy never drops below 0.78rem (file notes and footnotes sit at 0.66rem, the one deliberate step below it). Display type is allowed to be huge; body type is not allowed to be small.

## Layout

The page is a fixed three-part frame around a scrolling stack of sheets.

- **Frame.** Masthead fixed to the top (padding `1.15rem clamp(1rem, 4vw, 3.5rem)`, hairline bottom border, opaque #080a07). Index rail fixed at the vertical centre of the left edge (`width: 9.5rem`, `left: clamp(1rem, 2.6vw, 2.7rem)`). Red scroll thread fixed to the right edge (`right: clamp(10px, 2vw, 26px)`, 1px wide, knots at 7% from top and bottom). Every chapter scrolls under them and reserves space for them.
- **Chapter rhythm.** Each `section.chapter` is `max-width: 1500px`, centred, with asymmetric padding: top `clamp(4.5rem, 10vh, 8rem)`, right `clamp(2rem, 7vw, 7rem)`, bottom `clamp(4.5rem, 9vh, 7rem)`, and left `clamp(3rem, 22vw, 14rem)`. The left gutter is deliberately wide — it is the physical room the fixed index occupies. `scroll-margin-top: 6.5rem` clears the masthead on anchor jumps.
- **Cover.** Full viewport (`height: 100svh`, `overflow: hidden`), padding `clamp(5rem, 11vh, 7rem) clamp(2rem, 8vw, 8rem) 0 clamp(2rem, 12vw, 10rem)`, sheet right-aligned and allowed to bleed past the bottom edge. Sheet is `min(52rem, 68vw)`, narrowing to `min(43rem, 68vw)` at 1200px and `min(40rem, 74vw)` at 1040px, then full-width on small screens.
- **Internal grids.** Intake sheet splits `0.82fr / 1.18fr` (fields / statement). Exhibit body splits `1.13fr / 0.87fr` (evidence / record). Checkout splits `1.15fr / 0.85fr` (invitation / channels). All three collapse to a single column at 1040px (checkout at 900px).
- **Table.** The field-kit table is three columns at 17% / auto / 25% on a single sheet; at 620px the header row is visually hidden and each row becomes a stacked block with the capability name above its working set and its evidence line in red.
- **Spacing rhythm.** No global spacing scale ships; rhythm is per-component. The recurring steps are 1px hairlines, 0.35rem (chips, ticks), 0.6rem (label padding, bound lines), 0.85rem (row padding, button padding), 1.2rem (block separation), and the sheet padding `clamp(1.3rem, 3vw, 2.7rem)`. Vertical spacing between sections is driven by the chapter padding, not by margins on children.
- **Breakpoints.** 1200px (cover sheet and tabs tighten), 1040px (the three internal grids collapse), 900px (index rail becomes a bottom bar, thread hides, cover becomes a single column with a mobile tab strip, checkout collapses, footer notes stack), 620px (masthead compresses, display type steps down, filing rows inline, table cardifies). Body carries `min-width: 320px`, so 320px is the narrowest viewport the layout supports.
- **Fixed-bar clearance.** On small screens the index becomes a bottom bar with `padding-bottom: calc(0.5rem + env(safe-area-inset-bottom))`; the cover reserves 7rem of bottom padding and the footer 6.5rem so nothing is trapped under it.
- **Z-order.** Canvas 0, world wash 1, vignette 2, main content and cover 3, scroll thread 4, index rail 15, masthead 20, mobile index 30, skip link 50.
- **Scroll progress.** A single `--scroll-progress` custom property (0–1, four decimals) is written on `documentElement` from a rAF-throttled scroll listener and consumed by the thread (`transform: scaleY()`), while the scene reads the same ratio through `sceneState`.

### Named Rules
**The Rail Gutter Rule.** Chapters reserve `clamp(3rem, 22vw, 14rem)` on the left. Nothing is placed inside that gutter except the fixed index; content that ignores it collides with navigation.

**The Frame Over Paper Rule.** Fixed chrome (masthead, index, thread) always sits above content in z-order and never moves; only the sheets scroll. Paper is the only thing allowed to slide under the frame.

## Elevation & Depth

Depth is physical, not atmospheric: paper sheets float over a dark room on soft, wide, downward shadows, and the room itself supplies atmosphere through WebGL fog. Nothing glows, nothing is inset, nothing uses a gradient border. Every sheet shadow is a two-layer stack — a wide, very soft ambient pass plus a tighter contact pass — with no offset in any direction but down.

Two fixed, full-viewport layers sit between the canvas and the content to keep type readable over the room: a **wash** (horizontal gradient from `rgb(6 7 5 / 0.7)` at the left edge, clearing to zero at 54%, back to `0.36` at the right; plus a vertical pass from `0.6` at the top and `0.76` at the bottom) and a **vignette** (`radial-gradient(ellipse at 54% 42%, transparent 16%, rgb(4 5 3 / 0.2) 58%, rgb(4 5 3 / 0.76) 100%)`). Both are `pointer-events: none`, `aria-hidden`, and both are re-tuned at 900px to a flatter, more even falloff, because the corridor is narrower on a phone and heavy edge darkening would crush the sheets. The checkout chapter adds a third, local pass — a `180deg` gradient from `0.5` through `0.92` filling `inset: -4rem 0` — so the ledger reads as the darkest page in the file.

### Shadow Vocabulary
- **Sheet (cover)** (`box-shadow: 0 40px 90px rgb(0 0 0 / 0.56), 0 10px 32px rgb(0 0 0 / 0.4)`): the dossier cover, the closest sheet to the camera.
- **Sheet (form)** (`0 30px 70px rgb(0 0 0 / 0.5), 0 8px 24px rgb(0 0 0 / 0.34)`): the intake sheet.
- **Sheet (exhibit)** (`0 26px 62px rgb(0 0 0 / 0.46), 0 6px 18px rgb(0 0 0 / 0.3)`): each exhibit folder.
- **Sheet (kit)** (`0 30px 70px rgb(0 0 0 / 0.46), 0 8px 22px rgb(0 0 0 / 0.3)`): the field-kit sheet.
- **Tab** (`0 5px 12px rgb(0 0 0 / 0.22)`): folder tabs and the vertical cover tabs (`0 14px 30px rgb(0 0 0 / 0.34)` for the heavier cover stack).
- **Seal** (`0 5px 14px rgb(0 0 0 / 0.38)`): the `DF` seal in the masthead.
- **Plate** (`0 14px 30px rgb(0 0 0 / 0.2)`): the carbon trace block.
- **Stamped edge** (`0 3px 0 #6f231a, 0 18px 30px rgb(0 0 0 / 0.26)`): the cover anchor only — a 3px solid red edge under a 0.8 opacity black contact shadow.
- **Knot ring** (`box-shadow: 0 0 0 2px rgb(8 10 7 / 0.5)`): the 5px thread knots, a ring rather than a shadow.

### The corridor as depth
The 3D scene is a 7.4 × 34 unit corridor: concrete floor and walls from procedurally generated 512px canvas textures (seeded, no image files), nine door pairs from z −1.4 to −22.2, ceiling fixtures at −6.6 (green), −11.8, −17, −22.2, a red exit sign at −28.7, three sagging red threads with paper tags, and 700 dust points (240 below 900px) in additive blending. Fog runs #080a07 from 4.2 to 26 units (20 under reduced motion), the camera starts at [0, 1.54, 3.1] with 58° FOV (76° below 900px) and dollies to z −6.1 across the page, with ±0.42 units of pointer parallax on x. Lighting is ambient + hemisphere + six point lights, with one green lamp that flickers via `sin(16.3t) · sin(4.7t)` damped at λ16 (steady 5.4 intensity under reduced motion). ACES Filmic tone mapping at 0.95 exposure; shadow maps disabled. The canvas is `pointer-events: none`, `aria-hidden`, lazy-loaded behind `Suspense`, and replaced by a static radial gradient when WebGL is unavailable.

### Named Rules
**The Sheet Floats, Nothing Glows Rule.** Elevation is the paper sheet's relationship to a dark room. Any new surface gets a stock, a tilt, and the two-layer downward shadow; no element may use a glow, an inner shadow, a luminous border, or a coloured halo.

**The Downward Shadow Rule.** Shadow offsets are positive-y only, blur is at least three times the offset, and opacity never rises above 0.56. A sharp shadow is a lighting mistake, not a style.

## Shapes

Square. Every sheet, tab, button, chip, plate, stamp, and block has a hard 0px corner, and the system has exactly one curve: the 5px circular scroll-thread knot. Sheets are rectangles of different stocks; the only silhouette variety comes from three devices.

- **Tilt.** Sheets sit at fractions of a degree: cover −1.1deg, intake +0.7deg, exhibits −0.22deg and +0.2deg, kit −0.35deg, evidence plate −0.35deg, trace −0.25deg. Nothing exceeds two degrees, and every tilt is removed at 900px so phone reading stays level.
- **Tabs and flaps.** The folder tab (0.38rem × 0.8rem padding in Manila Tab) sits above an exhibit's top edge at `top: -1.5rem`; the cover's three vertical tabs use `writing-mode: vertical-rl` and rotate 1.4, −1, and 2 degrees respectively so the stack never looks machine-aligned.
- **Punch gutter.** Dossier cover, intake sheet, exhibit folders, and the field-kit sheet share a left punch strip: a 14px column at `left: 0.32rem` inset 1.6rem from top and bottom, painted as three radial-gradient holes (2.7px dark core, 4.5px shadow ring) at 8%, 50%, and 92% height. It is decoration, drawn in CSS, with no image asset.
- **Borders.** Paper surfaces use ink hairlines at 0.16–0.4 alpha; dark surfaces use the paper alpha rules. Borders are 1px and never coloured, except the 2px red rule framing a stamp and the 3px red frame on the checkout stamp.
- **Stamps.** Rotated 5–7 degrees, uppercase technical type, `mix-blend-mode: multiply` on paper (so the stock shows through the stamp), red at 0.55–0.82 opacity.

### Named Rules
**The Square-Corner Rule.** Radius is 0px. The single 50% value in the system is the scroll-thread knot. A rounded corner anywhere is a break in the world.

**The Two-Degree Rule.** A sheet may tilt by up to two degrees; the cover holds at −1.1deg, and no tilt survives below 900px. Tilting is stacking, not styling.

## Components

Every section body is a physical document. The component vocabulary is therefore document furniture: sheets, tabs, stamps, plates, ledgers, and tables, plus a small set of controls that behave like printed switches.

### Buttons and controls
- **Shape:** 0px radius throughout, 1px hairline borders on dark controls, no borders on the primary anchor.
- **Primary anchor** (`.cover__open`): solid Case Red, Bone Paper text, typewriter 0.65rem uppercase 0.12em, padding `0.85rem 1.05rem`, label left and arrow right, stamped 3px red-deep edge and a soft contact shadow. Hover lifts to Case Red Bright and `translateY(-2px)`; active settles to `translateY(1px)`. It is the page's only solid red field and its only "stamped edge".
- **Sound control** (`.sound`): ghost switch in the masthead — `rgb(8 10 7 / 0.28)` fill, 1px `rgb(232 225 208 / 0.3)` border, 1.9rem min-height, three 2px bars that animate at 1.1s when playing, and a `Sound off` / `Sound on` label whose state word is set in #cf6a5b rather than Case Red. Hover raises text to Bone Paper and border to 0.55 alpha; pressed (`aria-pressed="true"`) fills `rgb(167 54 42 / 0.14)` with a 0.75-alpha red border. Audio is off by default and only starts on click.
- **Link** (`.exhibit__links a`, `.strays a`, `.footer__top a`): typewriter uppercase with a 1px ink underline that turns red on hover, red text on hover. The external-arrow mark is currently a typed glyph.
- **Skip link:** case-red block, typewriter 0.7rem, hidden at `translateY(-200%)` until focused.

### Navigation
- **Index rail** (`.nav`): fixed left, 9.5rem wide, `INDEX` label in the widest tracked typewriter (0.32em) over a hairline, then four links (Intake, Exhibits, Field kit, Checkout) each preceded by a 14px hairline tick. Default text is `rgb(232 225 208 / 0.58)`; hover raises to Bone Paper and shifts 2px right with the tick growing to 24px; the active section gets `aria-current="location"`, full paper text, and a 30px red tick. Foot line carries `DEVIN FEBRIAN / DF-09`. Active state is observed with an `IntersectionObserver` (`rootMargin: -28% 0px -58% 0px`).
- **Mobile index:** below 900px the rail becomes a fixed bottom bar (`rgb(8 10 7 / 0.95)`, hairline top, safe-area padding) with four evenly spread column links and 20px ticks.
- **Masthead:** seal + wordmark left (`Field archive / 09`, the `/ 09` in #cf6a5b), status line and sound control right. Status hides below 900px, wordmark below 620px, leaving the seal and the switch.

### Sheets
- **Dossier cover** (`.cover__sheet`): Bone Paper, `min(52rem, 68vw)`, −1.1deg, two-layer sheet shadow, a fold crease at 46.2% width and a corner vignette painted with gradients. Contents in order: file line (`CASE FILE DF-09` / `WRENWOOD ARCHIVE / 2026`), rotated `FILE 09` stamp, two-line display name, `/`-separated role line, 44ch note, the red anchor, a two-column file-contents index (A–D), a metadata row (origin / record / revision), and a bottom-bleed block with `EVIDENCE CONTINUES` and an outlined `09` at `clamp(6rem, 12vw, 10rem)` in transparent fill with a 1px ink stroke.
- **Intake sheet** (`.form-sheet`): `#e8e1d0`, +0.7deg, max 1100px, header line (`SUBJECT INTAKE` / `RESTRICTED / ACTIVE`), a definition list of six subject fields set as a 1px-gap grid of boxed rows, a DF watermark block (`clamp(4rem, 7vw, 6rem)` outlined display over `SUBJECT PRESENT`), and a 62ch statement with a red display drop cap and a signature row closed by a hairline.
- **Exhibit folder** (`.exhibit`): a `<details>`/`<summary>` accordion on File Stock 01/02/03 with a Folder Tab carrying the case ID at `top: -1.5rem`. Summary holds the exhibit title, a right-aligned filing column (status in red over year, technical face), the subtitle in typewriter, the abstract at 68ch, and an open/close cue with a 1.35rem boxed `+` that rotates 45deg when open. The first exhibit ships open. Body opens with a 0.48s unfold and splits into evidence (left) and record (right): evidence is a carbon plate (1px ink border, 0.45rem padding, −0.35deg) with a `Fig. NN` caption in red over the capture caption; the record is a `FINDINGS` numbered list (decimal-leading-zero numerals in red), a `TECHNICAL RECORD` chip row, a link row, and an optional footnote.
- **Trace block** (`.trace`): Carbon Trace, 1rem padding, −0.25deg, typewriter caption over a `<pre>` at 0.64rem/1.85 — the substitute for a screenshot where no raster exists.
- **Field-kit sheet** (`.kit-sheet`): Field Kit Stock, −0.35deg, max 1150px, punch strip, a three-column table (Capability / Working set / Evidence) with typewriter headers at 0.56rem tracked 0.16em, capability cells in Rajdhani 600, and 1px row rules; row hover tints `rgb(255 255 255 / 0.18)`. Two footnote paragraphs close the sheet. Below 620px the table becomes stacked blocks.
- **Checkout ledger** (`.checkout`): a two-column ledger inside the darkest part of the page (the section carries its own darkening gradient overlay, `inset: -4rem 0`), separated by hairline top and bottom borders. Left: a 13ch display invitation, the email as a typewriter link with a red underline, and a 46ch context line. Right: a channel ledger of three rows on a 4.6rem / 1fr / auto grid (Email, LinkedIn, GitHub) with hairline dividers, a hairline-red arrow cell, and a hover that indents the row 0.5rem. A rotated `CASE OPEN` stamp (3px red frame, technical type at 1.1rem) sits at the section's top-right corner.
- **Section head** (`.section-head`): chapter `h2` left, typewritten uppercase note right-aligned at the baseline, a hairline under both. Below 900px the note stacks under the title and aligns left.
- **Footer** (`.footer`): three typewritten hairline-separated columns at 0.62rem/1.7 — the design-attribution notice, the typeface substitution notice, and the build credit — under a top line that pairs `DF-09 / FIELD ARCHIVE` with a `Return to cover ↑` link. It is the page's only place for prose at footnote scale, and it carries the same hairline rules as the masthead.

### Asset provenance
Every raster in the build is a dated capture of a real deployment, not stock imagery. `public/evidence/sentinel.png` and `public/evidence/gameforge.png` were captured 2026-10-26 with headless Chrome at 1440 × 900, no device scale, from `sentinel-sentry.vercel.app` and `game-forge-rho.vercel.app`; the same facts are recorded in `public/evidence/PROVENANCE.md` and repeated in each figure caption (`Fig. NN` + `Live interface capture · 26 Oct 2026 · <host>`). The third exhibit has no raster and uses a typewritten sort map instead. Fonts are self-hosted Fontsource files, and the corridor's concrete and floor textures are generated in a 512px canvas at runtime from a seeded PRNG (no image files). No game assets, character art, or franchise logos exist anywhere in the build.

### Motion
- **Easing.** Two curves only: `cubic-bezier(0.19, 1, 0.22, 1)` for entrances (the sheet settling, the folder unfolding) and `ease` for state changes. The scroll thread is `linear` at 0.12s because it tracks the scrollbar, not a gesture.
- **Durations.** 0.2s for colour, border, and background; 0.22s for the cover anchor and index link; 0.25s for the cover tabs; 0.28s for the `+` rotation and exhibit cue; 0.48s for an exhibit body unfolding; 0.95s for the cover sheet arriving (`rotate(-1.6deg) translateY(20px)` → `rotate(-1.1deg)`).
- **Ambient loops.** The sound meter animates three bars at 1.1s ease-in-out with 0.18s and 0.36s delays. In the scene, dust rotates at `delta × 0.006` and bobs on `sin(0.16t) × 0.06`; the lamp flickers on `sin(16.3t) · sin(4.7t)` damped at λ16 toward 84–100% of 5.4 intensity; camera damping runs λ2.4 (x, y), λ1.8 (z), λ2 (roll).
- **Reduced motion.** `prefers-reduced-motion: reduce` sets every animation and transition to 0.001ms / one iteration, cancels the cover's entrance, disables the thread's transition, sets `scroll-behavior: auto`, freezes the camera at progress 0 and pointer 0 (no parallax, no dolly), pulls fog in from 26 to 20 units, and holds the lamp at a steady 5.4. Nothing that carries content depends on motion to appear.
- **No scroll-jacking.** Scroll stays native; the scene only reads `window.scrollY`.

### Audio
Sound is an opt-in room tone, never a default. The sound control synthesises a drone in the Web Audio API at click time: two sine oscillators at 43.65 Hz and 55.16 Hz (gains 0.24 and 0.1), plus a looping three-second noise buffer built with a leaky integrator over white noise (`last = (last + 0.02 · white) / 1.02`, scaled 3.2) at 0.045 gain — all through a 260 Hz lowpass (Q 0.7) into a master gain. Pressing on resumes the context and ramps the master to 0.07 over 1.4s; pressing off ramps to 0.0001 over 0.6s without stopping the oscillators, so re-entry is instant. The context is closed on unmount. There is no autoplay, no scroll-triggered sound, and no audio outside this control.

### States and focus
- **Focus:** one global rule — `outline: 2px solid #bd4436; outline-offset: 3px` on `:focus-visible`. No component overrides it.
- **Selection:** `::selection` fills Case Red with Bone Paper text.
- **Scrollbar:** `scrollbar-color: #4a3028 var(--ink)`; WebKit track is Archive Ink at 10px with a #3a2a23 thumb inset by 2px of ink, lightening to #5b3a2e on hover.
- **Hover:** colour and border shifts at 0.2s ease; the index link and cover anchor move 2px; nothing scales.
- **Disabled:** no disabled states exist in the build; no inputs, no submitting controls.

### Named Rules
**The Printed Sheet Rule.** Every paper section body — intake, exhibits, field kit — is a sheet with its own stock, tilt, punch strip, and two-layer shadow. The checkout ledger is the one deliberate exception: the closing page is printed straight on the dark. A card is never allowed to float without a sheet beneath it.

**The Document Furniture Rule.** Sheets carry institutional furniture — file line, case ID, filing column, footnote, signature. A sheet without a file line is a card in costume, and cards are not part of this world.

**The One Solid Anchor Rule.** Exactly one solid red control appears in the world: the cover's `OPEN THE EXHIBITS` anchor. Further solid red fields dilute it into decoration.

## Do's and Don'ts

### Do:
- **Do** set every paper section body on a sheet with a named stock, a tilt of two degrees or less (cover −1.1deg, intake +0.7deg, exhibits −0.22/+0.2deg, kit −0.35deg), and the two-layer downward shadow.
- **Do** reserve `clamp(3rem, 22vw, 14rem)` of left chapter padding for the fixed index rail, and `scroll-margin-top: 6.5rem` for the masthead.
- **Do** identify everything in the typewriter voice: case IDs, file lines, captions, index entries, footnotes, channel labels — uppercase at 0.56–0.62rem with 0.08–0.32em tracking.
- **Do** keep reading copy between 44ch and 68ch, and hold paper body copy at 0.78rem or larger (file notes and footnotes excepted at 0.66rem).
- **Do** confine red to stamp, tick, hairline, numeral, thread, one anchor fill, and hover states (`#a7362a` → `#bd4436`).
- **Do** reveal with `cubic-bezier(0.19, 1, 0.22, 1)` — 0.95s for a sheet settling, 0.48s for a folder unfolding — and keep ordinary state changes at 0.2–0.28s ease.
- **Do** keep the canvas `aria-hidden` with `pointer-events: none`, lazy-loaded, and backed by the static gradient fallback.
- **Do** cut every tilt, transform-heavy transition, camera dolly, and lamp flicker under `prefers-reduced-motion`, and leave `scroll-behavior: auto` in that mode.
- **Do** keep audio off until the sound control is pressed, and state the choice on the control (`aria-pressed`, `Sound on/off`).

### Don't:
- **Don't** introduce a second accent, a glow, a luminous border, a gradient border, or a halo; lamp green belongs to the 3D room and never to a UI surface.
- **Don't** round a corner. Radius is 0px everywhere; the single 50% in the system is the 5px scroll-thread knot.
- **Don't** place a dark card on a paper sheet, a light card on the corridor, or any translucent panel — paper is the only light surface.
- **Don't** reuse the 3px solid `#6f231a` stamped edge outside the cover anchor; the system elevation vocabulary is soft and downward only.
- **Don't** set arrows, disclosure marks, or icons as text glyphs (↗, ↓, +). Draw them, inline.
- **Don't** add inputs, validation, or form state to the intake sheet. It is a printed record; making it interactive is a new component and a new world decision.
- **Don't** add a fifth type family, restyle a chapter heading in the body face, or set display type below 2.2rem.
- **Don't** ship a label step smaller than the existing 0.56rem, and don't use that step for anything read as running copy.
- **Don't** use stock photography, game assets, character art, or franchise logos; every raster must be a dated capture of a real deployment with its provenance recorded.
- **Don't** let the corridor, dust, fog, or motion become a prerequisite for content: text must be readable with WebGL absent, motion reduced, or audio off.
