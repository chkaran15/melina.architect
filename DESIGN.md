---
name: "Melina Architect"
description: "A high-craft digital portfolio landing page with editorial typography, tactile motion, and a white-canvas / black-ink / clay-accent identity."
colors:
  ink: "oklch(0.145 0 0)"
  paper: "oklch(1 0 0)"
  paper-warm: "oklch(0.985 0.004 78)"
  paper-muted: "oklch(0.958 0.006 78)"
  border-soft: "oklch(0.922 0 0)"
  border-strong: "oklch(0.82 0.006 78)"
  muted-ink: "oklch(0.556 0 0)"
  clay: "oklch(0.66 0.11 55)"
  clay-foreground: "oklch(0.985 0.006 92)"
  glass-paper: "oklch(1 0 0 / 72%)"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 13vw, 13rem)"
    fontWeight: 500
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 7vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.8vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.25rem"
  full: "999px"
spacing:
  container-x: "clamp(1.25rem, 3vw, 2rem)"
  section-y: "clamp(6rem, 10vw, 9rem)"
  section-y-tight: "clamp(4.5rem, 8vw, 7rem)"
  grid-gap: "clamp(1rem, 2vw, 1.5rem)"
  card: "clamp(1.4rem, 2.5vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.clay}"
    textColor: "{colors.clay-foreground}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
  showcase-card:
    backgroundColor: "{colors.paper-muted}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    size: "aspect-ratio: 4 / 5"
  nav-scrolled:
    backgroundColor: "{colors.glass-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
---

# Design System: Melina Architect

## 1. Overview

**Creative North Star: "The Tactile White Studio"**

This system is a premium portfolio landing page built around the sensation of a quiet studio wall: white canvas, black ink, clay marks, large type, and carefully placed imagery. It should feel editorial, precise, and tactile without becoming a generic magazine template. The visitor should understand taste and execution quality before they read a service list.

The current identity is intentionally narrow: white and near-white surfaces, near-black typography, clay as the only warm accent, and motion as craft evidence. Extend through proportion, sequencing, imagery, and interaction quality, not by adding unrelated colors or decorative effects.

It explicitly rejects the PRODUCT.md anti-references: generic SaaS landing-page patterns, flat skills grids, excessive glass effects, loud rainbow gradients, and redesigns that erase the current white-canvas, black-ink, clay-accent identity.

**Key Characteristics:**

- Large editorial display type with tight but readable tracking.
- Clay accent used sparingly for punctuation, emphasis, and selection.
- Image-led work cards with internal parallax and restrained overlays.
- Section rhythm built from generous whitespace, narrow copy, and asymmetric offsets.
- Motion that feels composed: line reveals, staggered entries, magnetic CTAs, and scroll-driven image movement.

## 2. Colors

The palette is restrained by design: black ink, white canvas, warm paper surfaces, and a single clay accent that carries all brand warmth.

### Primary

- **Studio Ink** (`ink`): The core text, primary CTA, mobile menu, and strong structural color. It should feel like ink on a white wall, not a dark-mode theme.
- **Clay Mark** (`clay`): The only saturated brand accent. Use for serif word emphasis, section indices, selection, icon accents, CTA hover fills, and occasional large process numbers.

### Secondary

- **Warm Paper** (`paper-warm`): A subtle off-white surface for section backgrounds and tonal separation.
- **Muted Paper** (`paper-muted`): A slightly deeper paper tone for image placeholders, muted containers, and quiet panels.

### Neutral

- **White Canvas** (`paper`): The default page background and main card surface.
- **Soft Rule** (`border-soft`): Standard dividers, grid seams, and low-emphasis outlines.
- **Strong Rule** (`border-strong`): Heavier structural borders when a rule must register against warm paper.
- **Muted Ink** (`muted-ink`): Secondary prose and metadata. Use only where contrast remains readable.
- **Glass Paper** (`glass-paper`): Translucent navigational surface for the scrolled masthead only.

### Named Rules

**The One Warm Mark Rule.** Clay is the only warm accent. Do not introduce extra oranges, golds, reds, or rainbow gradients to create energy.

**The White Canvas Rule.** Most sections remain white or near-white. Warmth comes from clay, imagery, and type contrast, not from beige body backgrounds.

## 3. Typography

**Display Font:** Space Grotesk, with system sans fallbacks.
**Body Font:** Hanken Grotesk, with system sans fallbacks.
**Serif Accent Font:** Instrument Serif, with Georgia fallback.

**Character:** The type system is crisp and architectural, with one italic serif gesture used as a tactile interruption. Space Grotesk carries the portfolio's technical and editorial voice; Hanken Grotesk keeps body copy measured and clear.

### Hierarchy

- **Display** (500, `clamp(3rem, 13vw, 13rem)`, `0.92`): Hero-only type for the first viewport. Keep it short, art-directed, and capped to a narrow measure.
- **Headline** (500, `clamp(2.35rem, 7vw, 6rem)`, `0.95`): Section titles and major calls to action. Use `text-wrap: balance`.
- **Title** (500, `clamp(1.25rem, 1.8vw, 1.75rem)`, `1`): Card and project titles.
- **Body** (400, `1rem`, `1.7`): Paragraph copy, with max line lengths around 65-75ch and shorter measures for hero/section decks.
- **Label** (650, `0.7rem`, `0.18em`, uppercase): Section markers, metadata, and compact editorial rails. Use sparingly.

### Named Rules

**The Serif Interruption Rule.** Instrument Serif is an accent, not a paragraph font. Use it for one or two words inside display copy when the page needs a tactile break.

**The Label Scarcity Rule.** Repeating numeric eyebrows can become scaffolding. Keep labels purposeful: one marker row per section is the ceiling.

## 4. Elevation

Depth is mostly tonal and kinetic rather than shadow-heavy. The base page is flat: surfaces separate through paper tones, borders, image masks, and hover overlays. Shadows appear only on the scrolled navigation where the masthead needs to float above content.

### Shadow Vocabulary

- **Nav Float** (`0 8px 30px -12px rgba(0,0,0,0.18)`): Scrolled masthead only. Do not apply this to cards or section containers.
- **Soft Glow Primary** (`oklch(0.66 0.11 55 / 28%)`): Available token for subtle accent glow, but avoid decorative glow fields.
- **Soft Glow Ink** (`oklch(0.145 0 0 / 10%)`): Available token for restrained dark ambient depth.

### Named Rules

**The Flat-At-Rest Rule.** Cards, sections, and service panels are flat by default. If a surface needs emphasis, use scale, image movement, overlay, or a precise border before adding shadow.

## 5. Components

### Buttons

- **Shape:** Full pill with a magnetic interaction (`999px` radius).
- **Primary:** Studio Ink background with White Canvas text, padded at `0.875rem 1.75rem`.
- **Hover / Focus:** A sliding fill rises from the bottom, usually Clay Mark for solid buttons or Studio Ink for outline buttons. The arrow icon shifts slightly up and right.
- **Secondary / Ghost:** Outline buttons use a 1px low-contrast foreground border and invert through the same sliding-fill language.

### Chips

- **Style:** No decorative chip system is established. When needed, use compact label typography with a soft rule or clay dot instead of pill clutter.
- **State:** Selected states should use Clay Mark sparingly and avoid colored tag grids.

### Cards / Containers

- **Corner Style:** Showcase image masks use gently curved corners (`1.25rem` or Tailwind `rounded-xl`). Service grids use one rounded outer container (`1rem`) with internal 1px seams.
- **Background:** Cards sit on White Canvas or Muted Paper. Avoid nested card stacks.
- **Shadow Strategy:** Flat at rest; hover states use image scale, icon reveal, or tonal overlays.
- **Border:** Soft Rule dividers and grid seams only. No colored side-stripe borders.
- **Internal Padding:** Service panels use `2rem` to `2.5rem`; general cards use the `card` spacing token.

### Inputs / Fields

- **Style:** No bespoke landing-page fields are present. If a contact form is added, use white or Warm Paper backgrounds, 1px Soft Rule borders, `0.75rem` radius, and Hanken Grotesk body type.
- **Focus:** Use a clear Studio Ink or Clay Mark focus ring with sufficient contrast.
- **Error / Disabled:** Error states may use the existing destructive token, but must not compete with the clay brand accent.

### Navigation

- **Style:** Fixed masthead with a simple wordmark, underline-hover links, and a primary CTA. At rest it is transparent over the white canvas.
- **Scrolled State:** The masthead becomes a full-pill translucent paper surface with blur, border, and the Nav Float shadow.
- **Mobile Treatment:** Full-screen Studio Ink overlay using a circular clip-path reveal. Links become large Space Grotesk rows with subtle separators.

### Section Heading

- **Style:** A compact editorial row: optional clay index, a short horizontal rule, and an uppercase label.
- **Use:** Treat it as a navigational cue, not a decorative reflex. Keep copy short and avoid stacking multiple markers above the same heading.

### Showcase Card

- **Style:** A 4:5 image-first project card with rounded image mask, internal scroll parallax, slow hover zoom, and a top-right arrow reveal.
- **Use:** Reserve this pattern for selected work or other visual proof. It is too expressive for generic feature lists.

## 6. Do's and Don'ts

### Do:

- **Do** preserve the current white-canvas, black-ink, clay-accent identity when adding sections.
- **Do** let typography, spacing, imagery, and motion carry the premium feeling.
- **Do** use Clay Mark for rare emphasis: one or two highlighted words, indices, icons, selection, and CTA hover states.
- **Do** keep body text readable against paper surfaces and verify contrast when using Muted Ink.
- **Do** provide reduced-motion fallbacks for Framer Motion, GSAP, Lenis, and CSS transitions.
- **Do** use real imagery or project visuals for portfolio proof. Empty colored blocks are not a substitute.

### Don't:

- **Don't** use generic SaaS landing-page patterns, including hero metrics, feature-card sameness, or template-like pricing/testimonial blocks.
- **Don't** build flat skills grids as the primary proof of craft.
- **Don't** add excessive glass effects. Glass Paper is for the scrolled navigation, not every card.
- **Don't** use loud rainbow gradients or gradient text.
- **Don't** erase the current white-canvas, black-ink, clay-accent identity with a new palette.
- **Don't** use colored side-stripe borders, over-rounded cards, nested cards, or decorative wide shadows.
- **Don't** repeat tiny uppercase tracked eyebrows above every heading when the marker is not adding information.
