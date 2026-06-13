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
              <span className="font-serif italic text-clay">life</span> inside
              it.
            </motion.h1>
          </div>

          <motion.div variants={fadeUp} className="max-w-xl lg:pb-5">
            <p className="type-section-description text-muted-foreground">
              Start a calm conversation about a residence, interior, renovation,
              or commercial space. Share what is unresolved, what needs to feel
              different, and what timing matters.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton
                href={`mailto:${CONTACT_EMAIL}?subject=Project%20conversation%20with%20Melina`}
              >
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
                You do not need a finished brief. A few concrete details about
                the space and the desired shift are enough to begin.
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
