"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import { processImages } from "@/lib/images";

const PROCESS_STAGES = [
  {
    id: "listen",
    no: "01",
    title: "Listen",
    desc: "We begin with the site, the people, the habits, and the questions the current space has not answered yet.",
    detail:
      "The first pass is observational before it becomes formal. We read how people arrive, gather, store, pause, avoid, and repeat daily rituals. The goal is to separate a stated wish from the spatial condition underneath it.",
    produces: [
      "Site and routine notes",
      "A clear hierarchy of needs",
      "Early constraints worth protecting",
    ],
    image: processImages.listen,
    showImage: false,
    alt: "Sunlit courtyard threshold used as a quiet reference for observing arrival and daily movement",
    caption:
      "Listening begins with thresholds, routines, and the way light already moves through the site.",
  },
  {
    id: "study",
    no: "02",
    title: "Study",
    desc: "Plans, references, light, circulation, and constraints are studied until the strongest direction becomes clear.",
    detail:
      "This stage turns observation into evidence. Existing drawings, room relationships, light paths, proportions, and material references are compared until a few spatial moves can be trusted.",
    produces: [
      "Measured planning options",
      "Reference and material direction",
      "A decision framework for the concept",
    ],
    image: processImages.study,
    showImage: true,
    alt: "Pale interior surface catching daylight as a reference for studying light and spatial proportion",
    caption:
      "Study narrows the field: light, proportion, circulation, and limits are tested together.",
  },
  {
    id: "design",
    no: "03",
    title: "Design",
    desc: "The concept develops into spatial decisions, material direction, and drawings that make the intent legible.",
    detail:
      "The strongest direction becomes a composed system of rooms, thresholds, surfaces, and details. The work is not just to make a proposal attractive; it must make the decisions legible enough to discuss and build from.",
    produces: [
      "Concept drawings and room logic",
      "Material and detail language",
      "A coherent spatial narrative",
    ],
    image: processImages.design,
    showImage: false,
    alt: "Restrained apartment interior with built-in planes used as a reference for design development",
    caption:
      "Design gives the project a readable order: what holds, what opens, and what stays quiet.",
  },
  {
    id: "refine",
    no: "04",
    title: "Refine",
    desc: "Each decision is tested for proportion, practicality, atmosphere, and the way the space will be lived in.",
    detail:
      "Refinement is where small decisions carry the largest responsibility. Edges, alignments, storage depths, daylight, junctions, and material transitions are adjusted until the project feels inevitable rather than assembled.",
    produces: [
      "Resolved proportions and details",
      "Practical checks against daily use",
      "A calmer final set of decisions",
    ],
    image: processImages.refine,
    showImage: true,
    alt: "Quiet work corner with soft daylight and restrained finishes as a reference for refining interior details",
    caption:
      "Refinement keeps the atmosphere intact while testing the work against real use.",
  },
] as const;

function SpatialBlock({ stage }: { stage: (typeof PROCESS_STAGES)[number] }) {
  return (
    <div
      aria-hidden="true"
      className="border-border bg-background relative min-h-48 overflow-hidden rounded-xl border"
    >
      <div className="bg-border absolute inset-x-8 top-10 h-px" />
      <div className="bg-border absolute inset-x-12 bottom-12 h-px" />
      <div className="bg-border absolute top-6 bottom-8 left-[32%] w-px" />
      <div className="bg-border absolute top-12 right-[22%] bottom-12 w-px" />
      <div className="bg-surface-muted absolute top-16 left-8 h-16 w-[32%] rounded-sm" />
      <div className="bg-surface absolute right-8 bottom-8 h-24 w-[38%] rounded-sm" />
      <div className="bg-clay absolute top-10 left-[32%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="text-muted-foreground/25 font-display absolute right-5 bottom-3 text-6xl leading-none font-medium tracking-[-0.03em]">
        {stage.no}
      </div>
    </div>
  );
}

function StageSection({ stage }: { stage: (typeof PROCESS_STAGES)[number] }) {
  return (
    <motion.article
      id={stage.id}
      variants={fadeUp}
      className="border-border scroll-mt-28 border-t py-14 first:border-t-0 sm:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="font-display text-clay/35 block text-7xl leading-none font-medium tracking-[-0.03em] sm:text-8xl">
            {stage.no}
          </span>
          <h2 className="font-display mt-5 text-4xl leading-none font-medium tracking-[-0.025em] text-balance sm:text-6xl">
            {stage.title}
          </h2>
        </div>

        <div
          className={
            stage.showImage
              ? "grid gap-10 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-12"
              : "grid gap-10"
          }
        >
          <div>
            <p className="text-foreground max-w-3xl text-xl leading-9 sm:text-2xl sm:leading-10">
              {stage.desc}
            </p>
            <p className="text-muted-foreground mt-7 max-w-2xl text-base leading-8">
              {stage.detail}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-[0.95fr_1.05fr] sm:items-start">
              <div>
                <p className="type-small-label text-clay">What this produces</p>
                <ul className="mt-5 space-y-4">
                  {stage.produces.map((item) => (
                    <li key={item} className="flex gap-4 text-sm leading-6">
                      <span className="bg-clay mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <SpatialBlock stage={stage} />
            </div>
          </div>

          {stage.showImage ? (
            <figure className="xl:pt-2">
              <div className="bg-muted relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={stage.image}
                  alt={stage.alt}
                  width={720}
                  height={900}
                  sizes="(min-width: 1280px) 18rem, (min-width: 640px) 45vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="text-muted-foreground mt-3 text-sm leading-6">
                {stage.caption}
              </figcaption>
            </figure>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function ProcessPageSections() {
  return (
    <main>
      <section className="ds-container pt-32 pb-16 sm:pt-40 sm:pb-24">
        <motion.div
          variants={staggerContainer(0.08, 0.12)}
          initial="hidden"
          animate="show"
          className="grid gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <SectionHeading label="Process" />
            <h1 className="display-xl mt-8 max-w-[11ch]">
              Process built for{" "}
              <span className="text-clay font-serif italic">clarity</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-2xl lg:pb-3">
            <p className="text-foreground text-xl leading-9 sm:text-2xl sm:leading-10">
              A deeper look at the four-stage method behind the work: listening
              before form, studying before certainty, designing with restraint,
              and refining until the space can carry daily life quietly.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.07, 0.22)}
          initial="hidden"
          animate="show"
          className="border-border mt-14 grid border-y lg:grid-cols-[0.42fr_0.58fr]"
        >
          <motion.div
            variants={scaleIn}
            className="border-border bg-muted relative min-h-[24rem] overflow-hidden border-b lg:border-r lg:border-b-0"
          >
            <Image
              src={processImages.study}
              alt="Quiet daylight across an interior surface used as a process reference for light and proportion"
              width={1100}
              height={900}
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2">
            {PROCESS_STAGES.map((stage, index) => (
              <motion.div
                key={stage.id}
                variants={fadeUp}
                className={`border-border border-b p-6 sm:p-8 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                } ${index >= 2 ? "sm:border-b-0" : ""} ${
                  index === PROCESS_STAGES.length - 1 ? "border-b-0" : ""
                }`}
              >
                <Link
                  href={`#${stage.id}`}
                  className="group focus-visible:ring-clay focus-visible:ring-offset-background block focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none"
                >
                  <span className="type-small-label text-clay">{stage.no}</span>
                  <span className="font-display mt-5 flex items-end justify-between gap-4 text-3xl leading-none font-medium tracking-[-0.02em]">
                    {stage.title}
                    <ArrowDown className="text-muted-foreground mb-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-y-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="border-border bg-surface border-y">
        <div className="ds-container ds-section-tight">
          <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading label="Working method" />
              <p className="text-muted-foreground mt-8 max-w-xs text-sm leading-6">
                The sequence stays intentionally small. Each stage earns the
                next one, so the project does not move faster than the evidence.
              </p>
            </div>

            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
            >
              {PROCESS_STAGES.map((stage) => (
                <StageSection key={stage.id} stage={stage} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="ds-container ds-section-tight">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <div>
            <SectionHeading label="Process evidence" />
            <h2 className="type-section-title mt-6 max-w-[9ch]">
              Quiet fragments, not decoration.
            </h2>
          </div>

          <div className="grid gap-6">
            <p className="text-muted-foreground max-w-xl text-base leading-8">
              Imagery is used as supporting evidence: daylight, thresholds,
              material quiet, and built-in spatial order. The page stays led by
              process, not by a stock archive.
            </p>
            <div className="border-border bg-border grid gap-px overflow-hidden rounded-xl border sm:grid-cols-3">
              {PROCESS_STAGES.slice(0, 3).map((stage) => (
                <div key={`evidence-${stage.id}`} className="bg-background p-6">
                  <span className="type-small-label text-clay">{stage.no}</span>
                  <p className="font-display mt-5 text-2xl leading-none font-medium tracking-[-0.02em]">
                    {stage.title}
                  </p>
                  <p className="text-muted-foreground mt-4 text-sm leading-6">
                    {stage.produces[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ds-container pb-24 sm:pb-32">
        <div className="border-border flex flex-col gap-8 border-y py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-foreground max-w-2xl text-xl leading-9">
            Have a site, renovation, or interior that needs a clearer spatial
            reading?
          </p>
          <div className="flex flex-wrap gap-3">
            <AnimatedButton href="/work" variant="outline">
              View work
            </AnimatedButton>
            <AnimatedButton href="/contact">
              Start a conversation
            </AnimatedButton>
          </div>
        </div>
      </section>
    </main>
  );
}
