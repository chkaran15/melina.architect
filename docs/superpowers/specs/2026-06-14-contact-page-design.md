# Contact Page Design Spec

## Feature Summary

Build a dedicated contact page for Melina Architect that feels like an editorial studio invitation, not a generic form page. The page helps prospective clients start a residential, interior, renovation, or commercial space conversation with confidence.

The page uses `PRODUCT.md` and `DESIGN.md` as source of truth: brand register, editorial/precise/tactile personality, white canvas, black ink, clay accent, generous spacing, ruled divisions, and quiet motion.

## Primary User Action

The visitor should choose a confident first contact path:

- Email Melina directly.
- Request a consultation.
- Use the refined inquiry form if they want guided prompts.

Direct contact and consultation links are the primary actions. The form is a secondary action for visitors who need structure.

## Design Direction

**Approach:** Editorial Studio Invitation.

**Color strategy:** Restrained. Preserve the existing white canvas, black ink, warm paper surfaces, and clay accent identity. Do not introduce a new palette.

**Scene sentence:** A prospective client reviews the page in a quiet daylight interior, deciding whether Melina feels calm, precise, and trustworthy enough to begin a significant residential, interior, renovation, or commercial space project.

**Anchor references:** Architectural studio contact sheets, gallery-style project inquiry pages, and the current Melina Architect tactile white studio system.

**Visual contract:**

- Large editorial hero with a calm, architectural headline.
- Generous whitespace and long-view rhythm.
- Ruled divisions instead of card-heavy layout.
- Clay used as punctuation, emphasis, and focus accent only.
- Warm paper surfaces only where they clarify hierarchy.
- No generic feature grids, hero metrics, glass panels, rainbow gradients, or form-page templates.

## Scope

**Fidelity:** Production-ready.

**Breadth:** One dedicated `/contact` page plus navigation and CTA link updates needed to reach it cleanly.

**Interactivity:** Shipped-quality page interactions: hover, focus, keyboard navigation, validation, loading, success, and responsive behavior.

**Time intent:** Polish until it can ship with the existing landing page.

## Layout Strategy

The page should read as a composed studio invitation with the form placed after the visitor understands project fit.

1. **Hero invitation:** Full-width editorial opening with a short marker row, a large Space Grotesk headline, one tactile serif emphasis, and concise copy. The hero should make the page feel architecture-focused immediately through language and spatial restraint.
2. **Direct contact rail:** A ruled section with primary pathways: email, consultation, and studio availability. These should feel like intentional contact choices, not generic cards.
3. **Project-fit guidance:** A calm list of project categories and what to include in the first note. Use horizontal rules, compact labels, and clay dots or indices. Avoid identical icon cards.
4. **Secondary inquiry form:** A refined form on warm paper or white canvas with clear labels, roomy fields, and a subdued submit interaction. The form should collect only the details needed for a useful first reply.
5. **Closing confidence note:** A short response-expectation line near the form or footer, such as reviewing notes personally and replying with next-step questions.

## Key States

**Default:** Visitor sees a spacious editorial page with direct contact first and a form after guidance.

**Hover/focus:** Links and buttons use the existing underline, pill, clay fill, and clear focus ring vocabulary. Inputs use an ink or clay focus ring with accessible contrast.

**Validation errors:** Required fields show specific messages next to the field. Error color uses the existing destructive token and does not compete with clay.

**Loading:** Submit button changes to "Preparing inquiry..." and disables while the email draft is being generated.

**Success:** The form shows a calm confirmation that an email draft has been prepared, with a direct fallback `mailto:` link.

**Edge cases:** Long project descriptions should not break layout. Mobile stacks all sections into a single column with preserved spacing and no text overflow.

## Interaction Model

The page is mostly editorial and scroll-led. Motion should be subtle and already-visible by default: section reveals, slight line movement, and existing button motion. Reduced-motion users should receive instant or minimal transitions.

Direct links use normal anchors:

- Email link opens a composed email to Melina.
- Consultation link can point to the contact form section until a real scheduling URL exists.
- Form submit validates locally and opens a prefilled email draft rather than pretending to send to a backend.

The form should use accessible labels, `aria-invalid`, field descriptions where useful, and a visible confirmation region.

## Content Requirements

**Hero copy:**

- Headline direction: "Begin with the room, the light, and the life inside it."
- Supporting copy: Explain that Melina shapes residential, interior, renovation, and commercial spaces through calm planning, material clarity, and precise design.

**Direct action labels:**

- "Email the studio"
- "Request a consultation"
- "Share project details"

**Project-fit categories:**

- Residential planning
- Interior architecture
- Renovation strategy
- Commercial spaces

**Form fields:**

- Name, required
- Email, required, valid email
- Project type, required
- Location, optional
- Timeline, optional
- Message, required

**Assumed contact email:** `hello@melina.architect`. If the real studio email is provided before implementation, use that instead in every direct link and generated mail draft.

## Recommended References

- `layout.md` for spacing, ruled divisions, and responsive composition.
- `typeset.md` for large editorial hierarchy and readable form labels.
- `interaction-design.md` for form behavior, validation, and accessible interaction.
- `clarify.md` for labels, error messages, and confirmation copy.
- `animate.md` for subtle page motion and reduced-motion fallbacks.

## Implementation Notes

The implementation should follow the existing Next.js and React structure:

- Replace the current placeholder route at `src/app/contact/page.tsx` with the production contact page.
- Create focused contact page components under `src/components/sections/contact/`.
- Use existing primitives where they fit: `AnimatedButton`, `SectionHeading`, `Input`, `Textarea`, and local design tokens.
- Update `Navbar`, `CTASection`, and `Footer` links so the contact page is reachable.
- Avoid adding a backend submission endpoint unless the user explicitly requests real form delivery.

## Spec Self-Review

- Scope is one surface: a dedicated contact page plus link updates.
- No new palette, typography system, or visual direction is introduced.
- The form has a concrete functional behavior through validated mail draft generation.
- Required states are listed explicitly.
- No unresolved requirements block implementation.
