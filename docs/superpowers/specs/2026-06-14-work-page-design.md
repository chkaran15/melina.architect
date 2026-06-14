# Work Page Design Spec

## Feature Summary

Build a dedicated `/work` route that expands the homepage "Selected Work" section into a complete image-led portfolio index for Melina Architect. The homepage remains a curated preview; `/work` becomes the deeper archive for prospective clients, collaborators, and hiring partners evaluating range, taste, and architectural thinking.

The page uses `PRODUCT.md`, `DESIGN.md`, `ShowcaseSection`, `AnimatedCard`, `src/lib/images.ts`, and the existing typography, spacing, and motion tokens as source of truth. It should feel like a natural continuation of the current landing page: editorial, calm, spacious, tactile, and architecture-focused.

## Primary User Action

The visitor should understand the breadth of Melina's work and be able to scan by project type without feeling pushed through a heavy app-like interface. The primary action is exploration; the secondary action is starting a project conversation from the bottom of the archive.

## Design Direction

**Approach:** Quiet Portfolio Archive.

**Color strategy:** Restrained. Preserve the white canvas, near-black ink, warm paper surfaces, and clay accent. Do not introduce a new palette or a dark portfolio theme.

**Scene sentence:** A prospective client reviews the archive in a quiet daylight studio, comparing completed spaces by light, material, sequence, and fit before deciding whether to contact Melina.

**Anchor references:** Architectural studio project indexes, gallery contact-sheet layouts, and the current Melina Architect tactile white studio system.

**Visual contract:**

- Large editorial archive hero, not a marketing hero.
- One featured project at the top to create a composed first read.
- A full work grid using the existing image-first card language.
- Minimal category filtering with calm segmented text controls, not SaaS tabs or data-table filters.
- Ruled divisions and warm paper bands only where they clarify hierarchy.
- Smooth hover and reveal interactions using the existing Framer Motion vocabulary.
- No hero metrics, generic feature-card grids, loud gradients, glass panels, or dense dashboard controls.

## Scope

**Fidelity:** Production-ready.

**Breadth:** One dedicated `/work` page, plus small navigation/homepage updates needed to make the full archive reachable.

**Interactivity:** Shipped-quality client-side filtering, hover states, focus states, responsive behavior, and reduced-motion-compatible reveal behavior.

**Time intent:** Polish until it can ship beside the existing landing and contact pages.

## Layout Strategy

The page should read as a long-form portfolio archive, not a product dashboard.

1. **Archive hero:** A full-width opening with `SectionHeading`, a large display headline, concise context copy, and a small archive count/type summary. Keep the first viewport spacious and text-led.
2. **Featured project:** A single image-led feature row below the hero. Use an oversized image, project metadata, and a short description. This provides art direction before the grid begins.
3. **Filter rail:** A restrained category row above the grid: "All", "Residential", "Interior", "Renovation", and "Commercial". Buttons should feel like editorial controls with clay only for the active state.
4. **Portfolio grid:** A responsive, staggered grid of `AnimatedCard`-style project cards. Preserve 4:5 image masks, rounded-xl corners, project title/category/year metadata, internal image motion, and hover arrow reveal.
5. **Archive close:** A calm closing section that links to `/contact` and frames inquiries around fit, light, material, and scope.

## Key States

**Default:** Visitor lands on the archive hero, sees a featured project, then a complete image-led grid.

**Filtered:** Selecting a category updates the project count and grid without scrolling the user away or introducing loading spinners. The active filter has clear visual and accessible state.

**Empty filter:** The defined project data should prevent empty categories. If a future category has no projects, show a one-line editorial empty state: "No projects are filed under this type yet."

**Hover/focus:** Cards use the existing hover image zoom and arrow reveal. Filter controls use visible focus rings and a clay active state. Links use the existing underline and pill button motion.

**Responsive:** Mobile stacks hero, featured project, filters, and cards in one column. Filter controls wrap cleanly without horizontal overflow. Cards keep stable image aspect ratios.

**Reduced motion:** Content remains visible by default. Reveals and hover movement become instant or near-instant through the existing global reduced-motion rule.

## Interaction Model

The page is scroll-led and minimally interactive. Filters are client-side buttons backed by local state. No URL query state is required for this version because the archive is small and the desired feel is editorial, not search-heavy.

Project cards are exploratory visual proof, not links to nonexistent case-study pages. If case-study routes are added later, `AnimatedCard` can be extended with an optional `href`; this implementation should not create dead links.

The page should add a "View all work" path from the homepage curated preview and point the main navigation "Work" item to `/work`.

## Content Requirements

**Hero copy direction:**

- Headline: "A full archive of rooms, light, and measured change."
- Supporting copy: Explain that the archive gathers residential planning, interior architecture, renovation strategy, and commercial spatial studies.

**Featured project content:**

- Featured project: "Courtyard Residence"
- Category: "Residential planning"
- Year: "2025"
- Description direction: A quiet residence organized around daylight, arrival sequence, and a softened threshold between garden and interior life.

**Filter labels:**

- All
- Residential
- Interior
- Renovation
- Commercial

**Project list:** Use the existing four homepage projects as the first four records and expand the archive with additional architecture-focused records. Until real project photography exists, reuse the existing Unsplash-backed image token pattern from `src/lib/images.ts` and verify any newly added Unsplash CDN IDs before shipping.

**Closing CTA copy:**

- Heading: "Have a space that needs a clearer plan?"
- Body: Invite the visitor to share context, constraints, and desired atmosphere.
- CTA: "Start a project" linking to `/contact`.

## Recommended References

- `layout.md` for archive rhythm, featured/grid hierarchy, and responsive composition.
- `typeset.md` for editorial scale, readable metadata, and line-length control.
- `animate.md` for subtle reveal and hover motion using existing motion language.
- `adapt.md` for filter wrapping, mobile spacing, and image aspect stability.

## Implementation Notes

- Create a content module under `src/components/sections/work/` so project data is not embedded directly in the route.
- Create a client page section component for filtering and animation.
- Add `src/app/work/page.tsx` with route metadata.
- Keep `src/components/sections/ShowcaseSection.tsx` as the homepage preview, but add a clear link to `/work`.
- Update `Navbar` so "Work" points to `/work`, while the homepage preview still remains at `/#work`.
- Do not add case-study pages, search inputs, sort menus, pagination, analytics, or backend data fetching in this pass.

## Spec Self-Review

- Scope is one surface: a dedicated work archive route plus reachability updates.
- The design preserves the existing identity and does not introduce a new palette, font system, or app-like UI.
- Interaction remains minimal and editorial.
- Required states are explicit: default, filtered, empty, hover/focus, responsive, and reduced motion.
- No unresolved requirement blocks implementation.
