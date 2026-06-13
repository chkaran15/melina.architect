# Contact Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready `/contact` page that presents Melina Architect through an editorial studio invitation, direct contact paths, project-fit guidance, and a refined secondary inquiry form.

**Architecture:** Replace the placeholder Next.js App Router page at `src/app/contact/page.tsx`. Keep page-specific content and client form behavior in focused files under `src/components/sections/contact/`, then update existing navigation and CTA links to point to the route.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4 tokens from `src/styles/globals.css`, Framer Motion, React Hook Form, Zod, existing shadcn-style form/input/textarea primitives, lucide-react icons only where a familiar action icon is useful.

---

## File Structure

- Create `src/components/sections/contact/contact-content.ts`: Owns contact copy, project categories, direct action metadata, and the assumed contact email.
- Create `src/components/sections/contact/ContactInquiryForm.tsx`: Client component for validation, mail draft generation, loading state, and success state.
- Create `src/components/sections/contact/ContactPageSections.tsx`: Client component for editorial hero, direct contact rail, project-fit guidance, and form layout.
- Modify `src/app/contact/page.tsx`: Replace the placeholder page with metadata and the production page shell.
- Modify `src/components/layout/Navbar.tsx`: Point contact CTA and mobile contact CTA to `/contact`; keep homepage section anchors valid from any route.
- Modify `src/components/sections/CTASection.tsx`: Point "Start a project" to `/contact`.
- Modify `src/components/layout/Footer.tsx`: Replace the footer-only contact target with direct contact and a link to `/contact`; keep footer content consistent with Melina Architect.

## Task 1: Add Contact Content Model

**Files:**

- Create: `src/components/sections/contact/contact-content.ts`

- [ ] **Step 1: Create the content file**

Use this exact module so all contact copy and email assumptions live in one place.

```ts
export const CONTACT_EMAIL = "hello@melina.architect";

export const directContactActions = [
  {
    label: "Email the studio",
    detail: "For project starts, press inquiries, and collaboration notes.",
    href: `mailto:${CONTACT_EMAIL}?subject=Project%20conversation%20with%20Melina`,
  },
  {
    label: "Request a consultation",
    detail: "Begin with a focused note about the space, scope, and timing.",
    href: "#inquiry",
  },
  {
    label: "Share project details",
    detail: "Use the guided form if you want prompts before writing.",
    href: "#inquiry",
  },
] as const;

export const projectTypes = [
  "Residential planning",
  "Interior architecture",
  "Renovation strategy",
  "Commercial spaces",
] as const;

export const projectFitGuidance = [
  {
    title: "Residential planning",
    description:
      "Homes, additions, and spatial studies where layout, light, and daily rituals need a clearer plan.",
  },
  {
    title: "Interior architecture",
    description:
      "Material direction, room sequencing, millwork, and atmosphere for spaces that need a coherent interior language.",
  },
  {
    title: "Renovation strategy",
    description:
      "Existing spaces that need a measured redesign, from first constraints through a practical next-step brief.",
  },
  {
    title: "Commercial spaces",
    description:
      "Studios, hospitality, retail, and client-facing interiors where the space needs to communicate quietly and precisely.",
  },
] as const;

export const firstNotePrompts = [
  "What kind of space are we discussing?",
  "Where is the project located?",
  "What feels unresolved in the current space?",
  "What timeline or decision date matters?",
] as const;
```

- [ ] **Step 2: Run TypeScript check for the new module**

Run:

```bash
pnpm typecheck
```

Expected: TypeScript completes without errors from `contact-content.ts`.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/contact/contact-content.ts
git commit -m "feat: add contact page content model"
```

## Task 2: Build the Inquiry Form

**Files:**

- Create: `src/components/sections/contact/ContactInquiryForm.tsx`

- [ ] **Step 1: Create the client form component**

Use local validation and generate a prefilled mail draft. This keeps the form functional without adding a backend route.

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CONTACT_EMAIL, projectTypes } from "@/components/sections/contact/contact-content";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const inquirySchema = z.object({
  name: z.string().min(2, "Please add your name."),
  email: z.string().email("Use a valid email address."),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: "Choose the closest project type." }),
  }),
  location: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(20, "Share at least a few sentences about the space."),
});

type InquiryValues = z.infer<typeof inquirySchema>;

const defaultValues: InquiryValues = {
  name: "",
  email: "",
  projectType: "Residential planning",
  location: "",
  timeline: "",
  message: "",
};

function buildMailto(values: InquiryValues) {
  const subject = encodeURIComponent(`Project inquiry from ${values.name}`);
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Project type: ${values.projectType}`,
      `Location: ${values.location || "Not shared yet"}`,
      `Timeline: ${values.timeline || "Flexible / not shared yet"}`,
      "",
      "Project note:",
      values.message,
    ].join("\n"),
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export function ContactInquiryForm() {
  const [mailDraft, setMailDraft] = useState<string | null>(null);
  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues,
    mode: "onBlur",
  });

  const isSubmitting = form.formState.isSubmitting;
  const selectedProject = form.watch("projectType");

  const helperText = useMemo(() => {
    return selectedProject === "Commercial spaces"
      ? "A short note about audience, atmosphere, and opening dates is enough to begin."
      : "A short note about the current space, desired feeling, and timing is enough to begin.";
  }, [selectedProject]);

  async function onSubmit(values: InquiryValues) {
    const href = buildMailto(values);
    setMailDraft(href);
    window.location.href = href;
  }

  return (
    <Form {...form}>
      <form
        id="inquiry"
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-[var(--radius-ds-lg)] border border-border bg-background p-5 sm:p-8"
      >
        <div className="flex flex-col gap-3 border-b border-border pb-6">
          <span className="type-small-label text-clay">Guided note</span>
          <h2 className="font-display text-3xl font-medium leading-none tracking-[-0.025em] sm:text-5xl">
            Share the shape of the project.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            {helperText}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project type</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="h-11 w-full rounded-[var(--radius-ds-md)] border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-clay/35"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="City or region" autoComplete="address-level2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Timeline</FormLabel>
                <FormControl>
                  <Input placeholder="Opening date, renovation window, or flexible" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Project note</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about the space, what is changing, and what should feel different when it is complete."
                    className="min-h-36 resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Melina reviews each note personally and replies with the clearest next questions.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-clay disabled:pointer-events-none disabled:opacity-60",
            )}
          >
            {isSubmitting ? "Preparing inquiry..." : "Prepare inquiry"}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {mailDraft && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            className="mt-5 flex flex-col gap-3 rounded-[var(--radius-ds-md)] bg-surface p-4 text-sm leading-6 text-foreground sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-clay" />
              Your email draft is ready.
            </span>
            <a href={mailDraft} className="link-underline font-medium">
              Open draft again
            </a>
          </motion.div>
        )}
      </form>
    </Form>
  );
}
```

- [ ] **Step 2: Run typecheck**

Run:

```bash
pnpm typecheck
```

Expected: If `z.enum(projectTypes, ...)` reports a tuple type issue, change `projectTypes` in `contact-content.ts` from `as const` array inference to an exported tuple declaration:

```ts
export const projectTypes = [
  "Residential planning",
  "Interior architecture",
  "Renovation strategy",
  "Commercial spaces",
] as const satisfies readonly [string, ...string[]];
```

Then rerun `pnpm typecheck`; expected result is no TypeScript error from the form.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/contact/contact-content.ts src/components/sections/contact/ContactInquiryForm.tsx
git commit -m "feat: add contact inquiry form"
```

## Task 3: Build Contact Page Sections

**Files:**

- Create: `src/components/sections/contact/ContactPageSections.tsx`

- [ ] **Step 1: Create the section component**

This component owns the page composition and keeps the form secondary.

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ContactInquiryForm } from "@/components/sections/contact/ContactInquiryForm";
import {
  CONTACT_EMAIL,
  directContactActions,
  firstNotePrompts,
  projectFitGuidance,
} from "@/components/sections/contact/contact-content";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function ContactPageSections() {
  return (
    <main>
      <section className="ds-container flex min-h-[92svh] flex-col justify-end pb-16 pt-32 sm:pb-20 sm:pt-40">
        <motion.div
          variants={staggerContainer(0.08, 0.2)}
          initial="hidden"
          animate="show"
          className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionHeading index="01" label="Contact" />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="display-hero mt-8 max-w-[12ch]"
            >
              Begin with the room, the light, and the{" "}
              <span className="font-serif italic text-clay">life</span> inside it.
            </motion.h1>
          </div>

          <motion.div variants={fadeUp} className="max-w-xl lg:pb-5">
            <p className="type-section-description text-muted-foreground">
              Start a calm conversation about a residence, interior, renovation, or commercial space. Share what is unresolved, what needs to feel different, and what timing matters.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton href={`mailto:${CONTACT_EMAIL}?subject=Project%20conversation%20with%20Melina`}>
                Email the studio
              </AnimatedButton>
              <AnimatedButton href="#inquiry" variant="outline">
                Share project details
              </AnimatedButton>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="ds-container py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionHeading index="02" label="Start here" />
              <h2 className="type-section-title mt-6 max-w-[11ch]">
                Choose the first note.
              </h2>
            </div>

            <div className="divide-y divide-border border-y border-border">
              {directContactActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="group grid gap-3 py-7 transition-colors hover:text-clay sm:grid-cols-[0.8fr_1fr_auto] sm:items-center"
                >
                  <span className="font-display text-2xl font-medium tracking-[-0.02em]">
                    {action.label}
                  </span>
                  <span className="max-w-xl text-sm leading-6 text-muted-foreground">
                    {action.detail}
                  </span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ds-container ds-section-tight">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading index="03" label="Project fit" />
            <h2 className="type-section-title mt-6 max-w-[11ch]">
              Spaces that benefit from a precise first conversation.
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {projectFitGuidance.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 py-8 sm:grid-cols-[0.55fr_1fr]"
              >
                <h3 className="type-card-title">{item.title}</h3>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="ds-container grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-8">
            <SectionHeading index="04" label="What to include" />
            <div>
              <h2 className="type-section-title max-w-[10ch]">
                A useful first note is simple.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
                You do not need a finished brief. A few concrete details about the space and the desired shift are enough to begin.
              </p>
            </div>
            <ul className="space-y-4 border-y border-border py-6">
              {firstNotePrompts.map((prompt) => (
                <li key={prompt} className="flex gap-3 text-sm leading-6">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                  <span>{prompt}</span>
                </li>
              ))}
            </ul>
          </aside>

          <ContactInquiryForm />
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Run typecheck**

Run:

```bash
pnpm typecheck
```

Expected: TypeScript completes with no errors from `ContactPageSections.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/contact/ContactPageSections.tsx
git commit -m "feat: build editorial contact sections"
```

## Task 4: Replace the Contact Route Placeholder

**Files:**

- Modify: `src/app/contact/page.tsx`

- [ ] **Step 1: Replace the placeholder Next.js page**

```tsx
import type { Metadata } from "next";
import { ContactPageSections } from "@/components/sections/contact/ContactPageSections";

export const metadata: Metadata = {
  title: "Contact | Melina Architect",
  description:
    "Start a residential, interior, renovation, or commercial space conversation with Melina Architect.",
};

export default function ContactPage() {
  return <ContactPageSections />;
}
```

- [ ] **Step 2: Run build route checks**

Run:

```bash
pnpm typecheck
pnpm build
```

Expected: TypeScript succeeds and Next.js builds the new `/contact` route.

- [ ] **Step 3: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat: add contact page route"
```

## Task 5: Update Navigation and Existing CTAs

**Files:**

- Modify: `src/components/layout/Navbar.tsx`
- Modify: `src/components/sections/CTASection.tsx`
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Update navbar links**

In `src/components/layout/Navbar.tsx`, replace the navigation data and contact href usage with route-aware values.

```tsx
const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Studio", href: "/#studio" },
  { label: "Process", href: "/#process" },
  { label: "Recognition", href: "/#recognition" },
];
```

Change the wordmark link from `href="#top"` to `href="/#top"`.

Change the desktop `AnimatedButton` from `href="#contact"` to `href="/contact"`.

Change the mobile CTA `Link` from `href="#contact"` to `href="/contact"`.

- [ ] **Step 2: Update landing CTA**

In `src/components/sections/CTASection.tsx`, change:

```tsx
<AnimatedButton href="#contact" variant="outline" className="border-primary-foreground/30 text-primary-foreground">
  Start a project
</AnimatedButton>
```

to:

```tsx
<AnimatedButton href="/contact" variant="outline" className="border-primary-foreground/30 text-primary-foreground">
  Start a project
</AnimatedButton>
```

- [ ] **Step 3: Update footer identity and contact path**

In `src/components/layout/Footer.tsx`, import `CONTACT_EMAIL`:

```tsx
import { CONTACT_EMAIL } from "@/components/sections/contact/contact-content";
```

Change the footer email button to:

```tsx
<AnimatedButton href={`mailto:${CONTACT_EMAIL}`}>
  {CONTACT_EMAIL}
</AnimatedButton>
```

Change the copyright line from `Studio Nova` to `Melina Architect`.

If the footer still uses `id="contact"`, keep the id for backwards compatibility but do not make it the primary destination for new CTAs.

- [ ] **Step 4: Run typecheck and build**

Run:

```bash
pnpm typecheck
pnpm build
```

Expected: Both commands complete successfully.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/Navbar.tsx src/components/sections/CTASection.tsx src/components/layout/Footer.tsx
git commit -m "feat: route contact calls to contact page"
```

## Task 6: Visual QA and Interaction Verification

**Files:**

- Verify: `src/app/contact/page.tsx`
- Verify: `src/components/sections/contact/ContactPageSections.tsx`
- Verify: `src/components/sections/contact/ContactInquiryForm.tsx`

- [ ] **Step 1: Start the dev server**

Run:

```bash
pnpm dev
```

Expected: Next.js starts and prints a local URL, usually `http://localhost:3000`.

- [ ] **Step 2: Inspect desktop**

Open `http://localhost:3000/contact` in the browser at desktop width.

Verify:

- Hero headline fits without overflow.
- Direct contact rail appears before the form.
- Project-fit section uses ruled divisions, not generic cards.
- Form is visually secondary and refined.
- Clay appears only as accent.
- No console errors.

- [ ] **Step 3: Inspect mobile**

Use a mobile viewport around 390px wide.

Verify:

- Hero copy wraps cleanly.
- CTA buttons stack without text clipping.
- Direct action rows are readable and tappable.
- Form fields have at least 44px touch target height.
- No horizontal scrolling.

- [ ] **Step 4: Verify form states**

On `/contact`, submit the form empty.

Expected field messages:

- Name: `Please add your name.`
- Email: `Use a valid email address.`
- Project note: `Share at least a few sentences about the space.`

Fill valid values and submit.

Expected:

- Button briefly reads `Preparing inquiry...`.
- Browser opens a `mailto:` draft to `hello@melina.architect`.
- Success region reads `Your email draft is ready.`
- Fallback link opens the draft again.

- [ ] **Step 5: Verify reduced motion**

Enable reduced motion in the browser or OS.

Expected:

- Content remains visible.
- Motion does not block reading or interaction.
- No reveal animation leaves content hidden.

- [ ] **Step 6: Run final checks**

Run:

```bash
pnpm typecheck
pnpm build
pnpm format:check
```

Expected: All checks pass. If `format:check` reports formatting differences, run:

```bash
pnpm format:write
pnpm format:check
```

Then rerun:

```bash
pnpm typecheck
pnpm build
```

- [ ] **Step 7: Commit QA fixes**

```bash
git add src/app/contact/page.tsx src/components/sections/contact src/components/layout/Navbar.tsx src/components/sections/CTASection.tsx src/components/layout/Footer.tsx
git commit -m "fix: polish contact page responsive states"
```

## Self-Review

- Spec coverage: The plan includes the dedicated route, editorial hero, direct contact actions, project-fit guidance, secondary form, validation, loading, success, responsive checks, and CTA link updates.
- Placeholder scan: The plan uses a concrete assumed email, concrete copy, concrete fields, concrete commands, and exact file paths.
- Type consistency: `CONTACT_EMAIL`, `projectTypes`, `directContactActions`, `projectFitGuidance`, and `firstNotePrompts` are introduced in Task 1 and reused consistently in later tasks.
