# Rigo Box — Website Spec

Single-page static site for Rigo Box, a boxing gym in Zapopan, Jalisco.
Base analysis: `docs/INITIAL_ANALYSIS.md`.

**Language rule:** code, comments, commits and docs in English. Every string the
visitor reads stays in Spanish.

## 1. Design read

Landing page for a neighborhood boxing gym in Zapopan, for local families and
fighters, with a raw physical gym language, built on static Astro, condensed
grotesque type and one orchestrated motion moment.

Dials: `DESIGN_VARIANCE 8` · `MOTION_INTENSITY 5` · `VISUAL_DENSITY 3`.

## 2. Stack

- Astro 7, static output, zero JavaScript by default.
- React islands in three places only: mobile menu drawer, gallery lightbox, hero effect.
- Tailwind CSS 4 through the Vite plugin. Tokens declared in `@theme`.
- Self-hosted fonts with `@font-face` and `font-display: swap`.
- No animation library. The hero effect is native CSS on `transform` and `opacity`.
- Content lives in typed files under `src/content/`, never inline in components.
- No CMS, no backend, no forms.

## 3. Tokens

### Color

```
--steel-900  #1B1E22   page background
--steel-800  #24282D   section bands, surfaces
--steel-700  #2E333A   cards, elevated borders
--steel-500  #6B7280   secondary text
--bone       #EDEAE4   primary text, slightly warm
--red        #E2483A   glove red: CTA, figures, single accent
--green      #3E9E52   star green: positive data only
```

No pure black, no pure white. The page is graphite, not black.

Contrast contract: red on steel-900 measures 3.85:1, so red is allowed on display
headlines, large figures and button fills only. Buttons use a red fill with dark ink
text. No paragraph is ever painted red. Body copy is bone on steel, which passes AAA.

The grey step is the compositional device. Sections move between 900, 800 and 700 to
mark structure. No decorative rules, no section numbers, no eyebrows.

### Type

- Display: `Anton`. Condensed heavy grotesque, fight-poster lineage.
- Body: `Public Sans`.
- Data: `Roboto Mono`, for records and figures that need tabular alignment.

No serif. Corner radius is zero everywhere, with no exception.

## 4. Bans, from the brief and the taste skill

- Zero eyebrows. No small uppercase label above any section headline.
- Zero decorative chips, pills or badges. A badge only when it carries real data.
- Zero em-dash characters in any visible string.
- No section numbering, no decorative status dots, no scroll cues, no locale strips.
- No three equal feature cards, no div-based fake screenshots, no hand-rolled icons.
- No glow, no neon, no gradient text.

## 5. Sections

Single page, `src/pages/index.astro`.

| Id | Section | Layout family | Band |
|---|---|---|---|
| — | Header | Sticky bar, single line, 68px | steel-900 |
| `inicio` | Hero | Full-bleed photo, bottom-left type block | steel-900 |
| `nosotros` | About | Asymmetric two-column, text left, figures right | steel-800 |
| `horarios` | Schedule | Two round dials, the signature | steel-900 |
| `coaches` | Coaches | Staggered cards with record blocks | steel-800 |
| `galeria` | Gallery | Masonry grid plus lightbox | steel-900 |
| `ubicacion` | Location | Map iframe next to an address card | steel-800 |
| — | Footer | Stacked columns | steel-700 |
| — | WhatsApp button | Fixed, mobile and tablet only | — |

## 6. Signature: the round dials

Rigo Box runs no class grid. It has two modes:

1. **Horario corrido** — the gym is open continuously, Monday to Friday, 6:00 to 21:00.
   A coach is present. You arrive whenever you want and you train with guidance.
2. **Open Box** — free training window, no coach-led class. Bags, ring, ropes and
   conditioning gear are open. You come, you hit the bag, you train on your own.

So the section is not a seven-column weekly table. It is two large round-timer dials,
one per mode, each drawing its open window as an arc over the dial face. The reader
sees at a glance how much of the day is open. Each dial carries the mode name, the
hours, one line saying who it is for, and a WhatsApp link.

This is the only elaborate piece on the page. Everything around it stays quiet.

```ts
type ModoHorario = {
  id: 'corrido' | 'openbox';
  nombre: string;
  franja: string;
  desde: number;      // hour, 0-24, drives the arc
  hasta: number;
  resumen: string;
  incluye: string[];
  destacado: boolean;
};
```

Hours need owner confirmation. The Instagram bio states `L-V 6am-9pm` and names
`OpenBox` without giving it a separate window.

## 7. Coaches

A card per coach: photo, name, role, short bio, and a record block.

```ts
type Marca = { ganadas: number; perdidas: number; empates: number; nocauts: number };

type Coach = {
  nombre: string;
  rol: string;
  bio: string;
  marca?: Marca;        // absent for a coach who never competed
  historial: string[];  // most recent first
  foto: Foto;
};
```

The record renders as four large mono figures labelled `G`, `P`, `E`, `KO`. Wins take
the green token, the rest stay bone. History renders as a plain list. A coach without
a record shows history only, and the card must not break.

Seed data uses the names visible on the Instagram profile. Every invented figure is
marked `TODO: confirm` in the content file.

## 8. Gallery

Eight to twelve photos covering gym interior, pad work, kids class, sparring and
competition night. Click opens a lightbox with `Esc` and arrow keys, focus trapped,
scroll locked. Images are external URLs in a typed content file, seeded from
`picsum.photos` with descriptive seeds until the client supplies real photos.

## 9. Motion

One orchestrated moment, in the hero. The headline enters line by line with a
left-to-right wipe, the photo settles from a 1.04 zoom to 1.00, and a single red pulse
crosses the screen once and never returns. Under 900 ms total. No loading screen,
nothing blocks reading.

Why: the punch lands before the explanation, the same way it does in the ring.

Everything else gets one scroll reveal per element, 600 ms, and nothing loops.
Under `prefers-reduced-motion` every animation collapses to its final state.

## 10. Location

Address: volcán popocatépetl 5115, Zapopan 45070.

A real OpenStreetMap iframe, `loading="lazy"`, framed by a 1px steel-700 border, next
to a card carrying the address, the hours, a `Cómo llegar` link that opens Google Maps,
and the WhatsApp link.

## 11. WhatsApp

One number, one prefilled message, defined once in `src/content/sitio.ts` and reused by
every call to action. One label for the intent across the whole page. The number is
pending from the owner; a placeholder is used until then.

## 12. Quality floor

- Real Spanish `alt` text on every image.
- Visible focus ring on every interactive element.
- Nav renders on one line at desktop, hamburger below `md`.
- Hero uses `min-h-[100dvh]`, never `h-screen`. Top padding capped at `pt-24`.
- Hero headline is two lines, subtext is under 20 words, the call to action is visible
  without scrolling.
- Images are `loading="lazy"` except the hero, which is preloaded.
- Every multi-column layout declares its single-column fallback below 768px.

## 13. Out of scope

Prices, online booking, forms, blog, other languages, analytics, sub-pages.

## 14. Pending from the owner

1. WhatsApp number.
2. Exact Open Box window, and what `OpenBox` means.
3. Real coach names, records and history.
4. Real photos.
5. Saturday hours.
