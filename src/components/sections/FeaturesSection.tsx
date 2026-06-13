"use client";

import { motion } from "framer-motion";
import { Compass, Layers, Sparkles, Wand2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";

const SERVICES = [
  {
    icon: Compass,
    title: "Brand & Identity",
    desc: "Visual systems, type and art direction that give a brand a distinct, lasting voice.",
  },
  {
    icon: Layers,
    title: "Web Design",
    desc: "Editorial, responsive interfaces designed pixel-by-pixel for clarity and delight.",
  },
  {
    icon: Wand2,
    title: "Motion & Interaction",
    desc: "Scroll-driven storytelling and micro-interactions that make products feel alive.",
  },
  {
    icon: Sparkles,
    title: "Development",
    desc: "Performant, accessible front-ends built with care — from prototype to production.",
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
          Four disciplines, one obsessive standard. We work end-to-end or plug
          into your team where it counts.
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