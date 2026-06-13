"use client";

import { motion } from "framer-motion";
import { Compass, Layers, Sparkles, Wand2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";

const SERVICES = [
  {
    icon: Compass,
    title: "Residential Design",
    desc: "Homes, additions, and spatial studies shaped around site, light, privacy, and everyday rituals.",
  },
  {
    icon: Layers,
    title: "Interior Architecture",
    desc: "Room sequencing, material direction, built-in elements, and atmosphere for coherent interiors.",
  },
  {
    icon: Wand2,
    title: "Renovation Strategy",
    desc: "Measured redesign thinking for existing spaces, from constraints and priorities to a clear next brief.",
  },
  {
    icon: Sparkles,
    title: "Concept Development",
    desc: "Early planning, mood, massing, and layout studies that turn loose ideas into a practical direction.",
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-[110rem] px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionHeading index="03" label="Capabilities" />
          <h2 className="display-xl mt-6 max-w-[12ch]">What we do</h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Four ways to begin a conversation about space, from first ideas to a
          more resolved architectural direction.
        </p>
      </div>

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
      >
        {SERVICES.map((s) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            className="group relative bg-background p-8 transition-colors duration-500 hover:bg-card lg:p-10"
          >
            <s.icon className="h-7 w-7 text-clay transition-transform duration-500 group-hover:-translate-y-1" />
            <h3 className="mt-16 font-display text-xl font-medium tracking-tight">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
