"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, DraftingCompass, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import {
  credentials,
  focusAreas,
  processSteps,
  profileBiography,
  profileFacts,
  profileHero,
  thinkingNotes,
} from "./profile-content";

function ProfileFactRail() {
  return (
    <dl className="border-border bg-border grid gap-px overflow-hidden border-y sm:grid-cols-2 lg:grid-cols-4">
      {profileFacts.map((fact) => (
        <div key={fact.label} className="bg-background px-5 py-6 sm:px-7">
          <dt className="type-small-label text-muted-foreground">
            {fact.label}
          </dt>
          <dd className="text-foreground mt-3 max-w-xs text-sm leading-6">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function SpatialStudyBlock() {
  return (
    <div
      className="border-border bg-surface relative min-h-[28rem] overflow-hidden rounded-xl border"
      aria-hidden="true"
    >
      <div className="border-border bg-background absolute inset-6 border" />
      <div className="border-border bg-surface-muted absolute top-[18%] left-[14%] h-[30%] w-[34%] border" />
      <div className="border-border bg-background absolute right-[12%] bottom-[13%] h-[33%] w-[38%] border" />
      <div className="bg-clay absolute top-[36%] left-[26%] h-px w-[48%]" />
      <div className="bg-clay absolute top-[22%] left-[50%] h-[54%] w-px" />
      <div className="text-muted-foreground absolute bottom-8 left-8 flex items-center gap-3">
        <DraftingCompass className="text-clay h-4 w-4" />
        <span className="type-small-label">Spatial study</span>
      </div>
      <div className="text-muted-foreground absolute top-8 right-8 flex items-center gap-3">
        <Ruler className="text-clay h-4 w-4" />
        <span className="type-small-label">Light / proportion</span>
      </div>
    </div>
  );
}

export function ProfilePageSections() {
  return (
    <main>
      <section className="ds-container flex min-h-[94svh] flex-col justify-end pt-32 pb-14 sm:pt-40 sm:pb-20">
        <motion.div
          variants={staggerContainer(0.08, 0.16)}
          initial="hidden"
          animate="show"
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionHeading index="01" label={profileHero.label} />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="display-hero mt-8 max-w-[12ch]"
            >
              A practice shaped by{" "}
              <span className="text-clay font-serif italic">calm</span> living.
            </motion.h1>
          </div>

          <motion.div variants={fadeUp} className="max-w-2xl lg:pb-6">
            <p className="text-foreground text-xl leading-9 sm:text-2xl sm:leading-10">
              {profileHero.deck}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton href="/work">View work</AnimatedButton>
              <AnimatedButton href="/contact" variant="outline">
                Start a conversation
              </AnimatedButton>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-14"
        >
          <ProfileFactRail />
        </motion.div>
      </section>

      <section className="ds-container pb-20">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]"
        >
          <figure className="bg-muted relative min-h-[34rem] overflow-hidden rounded-xl lg:min-h-[42rem]">
            <Image
              src={profileHero.image.src}
              alt={profileHero.image.alt}
              width={1122}
              height={1402}
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="h-full w-full object-cover"
            />
            <figcaption className="bg-background/82 text-foreground absolute right-5 bottom-5 left-5 rounded-full px-5 py-3 text-sm backdrop-blur-md">
              Melina Chaudhary Architect
            </figcaption>
          </figure>

          <SpatialStudyBlock />
        </motion.div>
      </section>

      <section className="border-border bg-surface border-y">
        <div className="ds-container grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading index="02" label="Biography" />
            <h2 className="type-section-title mt-6 max-w-[10ch]">
              The point of view comes before the finish.
            </h2>
          </div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="space-y-8"
          >
            {profileBiography.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={fadeUp}
                className="text-foreground max-w-3xl text-xl leading-9 sm:text-2xl sm:leading-10"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="ds-container ds-section-tight">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <SectionHeading index="03" label="Thinking" />
            <h2 className="type-section-title mt-6 max-w-[9ch]">
              What the practice measures.
            </h2>
          </div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="border-border bg-border grid gap-px overflow-hidden border-y sm:grid-cols-2"
          >
            {thinkingNotes.map((note) => (
              <motion.article
                key={note.title}
                variants={fadeUp}
                className="bg-background p-7 sm:p-9"
              >
                <h3 className="font-display text-3xl font-medium tracking-[-0.025em]">
                  {note.title}
                </h3>
                <p className="text-muted-foreground mt-5 max-w-sm text-base leading-7">
                  {note.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="ds-container grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <SectionHeading
            index="04"
            label="Practice philosophy"
            className="text-primary-foreground/68 [&_.eyebrow:first-child]:text-clay [&_span:nth-child(2)]:bg-primary-foreground/18"
          />
          <div>
            <p className="font-display text-4xl leading-[1.04] font-medium tracking-[-0.03em] text-balance sm:text-6xl">
              Calm is not an aesthetic shortcut. It is the result of exact
              decisions made quietly and repeatedly.
            </p>
            <p className="text-primary-foreground/72 mt-8 max-w-2xl text-base leading-8">
              The practice favors spaces that make daily life easier to read:
              fewer competing gestures, better room sequence, honest material,
              useful storage, and light that has been studied before anything is
              drawn too tightly.
            </p>
          </div>
        </div>
      </section>

      <section className="ds-container ds-section-tight">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading index="05" label="Focus" />
            <h2 className="type-section-title mt-6 max-w-[10ch]">
              Selected areas of work.
            </h2>
          </div>

          <div className="divide-border border-border divide-y border-y">
            {focusAreas.map((area) => (
              <article
                key={area.title}
                className="grid gap-5 py-8 sm:grid-cols-[0.42fr_0.58fr]"
              >
                <h3 className="type-card-title">{area.title}</h3>
                <p className="text-muted-foreground max-w-2xl text-base leading-7">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-border bg-surface border-y">
        <div className="ds-container ds-section-tight">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
            <div>
              <SectionHeading index="06" label="Process" />
              <h2 className="type-section-title mt-6 max-w-[10ch]">
                From first reading to final room.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl text-base leading-7">
              The process is deliberately slow at the beginning. A project gains
              speed when the right questions have been answered before the
              drawing set becomes crowded.
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="border-border bg-border grid gap-px overflow-hidden border lg:grid-cols-4"
          >
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                variants={fadeUp}
                className="bg-surface p-7 sm:p-9"
              >
                <p className="type-small-label text-clay">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-10 text-2xl font-medium tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-5 text-sm leading-7">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="ds-container ds-section-tight">
        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <SectionHeading index="07" label="Background" />
            <h2 className="type-section-title mt-6 max-w-[10ch]">
              Recognition without spectacle.
            </h2>
          </div>

          <div className="divide-border border-border divide-y border-y">
            {credentials.map((item) => (
              <article key={item.title} className="py-7">
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-border border-t">
        <div className="ds-container flex flex-col gap-10 py-16 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionHeading index="08" label="Next" />
            <h2 className="type-section-title mt-6 max-w-[12ch]">
              See the work, then begin the conversation.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/work"
              className="group border-foreground font-display inline-flex items-center gap-3 border-b pb-2 text-2xl font-medium tracking-[-0.02em]"
            >
              View work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group border-foreground/25 font-display text-muted-foreground hover:text-foreground inline-flex items-center gap-3 border-b pb-2 text-2xl font-medium tracking-[-0.02em] transition-colors"
            >
              Start a conversation
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
