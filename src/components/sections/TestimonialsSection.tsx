"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealText } from "@/components/ui/RevealText";
import { fadeUp, staggerContainer } from "@/lib/animations";

const QUOTES = [
  {
    quote:
      "Architecture should make everyday life easier to inhabit, not louder to explain.",
    name: "Residential focus",
    role: "Homes, additions, and personal spaces",
  },
  {
    quote:
      "A useful interior starts with sequence: where you arrive, pause, gather, work, and rest.",
    name: "Interior focus",
    role: "Material, flow, furniture, and atmosphere",
  },
  {
    quote:
      "Good renovation work respects what exists while giving the next version of the space a clearer logic.",
    name: "Renovation focus",
    role: "Existing spaces, constraints, and careful change",
  },
];

const RECOGNITION = [
  { award: "Practice", detail: "Architect-led portfolio" },
  { award: "Approach", detail: "Clear spatial thinking" },
  { award: "Focus", detail: "Residential and interiors" },
  { award: "Inquiry", detail: "Selected new projects" },
];

export function TestimonialsSection() {
  return (
    <section
      id="recognition"
      className="mx-auto max-w-[110rem] px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading index="06" label="Profile" />
      <RevealText
        as="h2"
        text="Practice notes"
        serifWords={[1]}
        className="display-xl mt-6"
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="mt-16 grid gap-8 lg:grid-cols-3"
      >
        {QUOTES.map((q) => (
          <motion.figure
            key={q.name}
            variants={fadeUp}
            className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8"
          >
            <blockquote className="font-display text-xl leading-snug tracking-tight">
              “{q.quote}”
            </blockquote>
            <figcaption className="mt-10">
              <p className="font-medium">{q.name}</p>
              <p className="text-sm text-muted-foreground">{q.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>

      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {RECOGNITION.map((r) => (
          <div key={r.award} className="bg-background p-8">
            <p className="font-display text-lg font-medium">{r.award}</p>
            <p className="mt-1 text-sm text-muted-foreground">{r.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
