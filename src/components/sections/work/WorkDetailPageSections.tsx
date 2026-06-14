"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/animations";
import type { WorkArchiveProject } from "./work-content";

interface WorkDetailPageSectionsProps {
  project: WorkArchiveProject;
  previous?: WorkArchiveProject;
  next?: WorkArchiveProject;
}

function ProjectMeta({ project }: { project: WorkArchiveProject }) {
  const meta = [
    { label: "Type", value: project.category },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Status", value: project.status },
  ];

  return (
    <dl className="border-border grid gap-5 border-y py-6 sm:grid-cols-2 lg:grid-cols-4">
      {meta.map((item) => (
        <div key={item.label}>
          <dt className="type-small-label text-muted-foreground">
            {item.label}
          </dt>
          <dd className="text-foreground mt-2 text-sm leading-6">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function EditorialNote({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="border-border grid gap-5 border-t py-8 md:grid-cols-[0.32fr_0.68fr] md:gap-10">
      <h2 className="font-display text-2xl font-medium tracking-[-0.018em]">
        {title}
      </h2>
      <div className="text-muted-foreground text-base leading-8 md:text-lg">
        {children}
      </div>
    </article>
  );
}

export function WorkDetailPageSections({
  project,
  previous,
  next,
}: WorkDetailPageSectionsProps) {
  return (
    <main>
      <section className="ds-container pt-32 pb-12 sm:pt-40 sm:pb-16">
        <motion.div
          variants={staggerContainer(0.08, 0.12)}
          initial="hidden"
          animate="show"
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <Link
              href="/work"
              className="group text-muted-foreground hover:text-foreground focus-visible:ring-clay focus-visible:ring-offset-background inline-flex items-center gap-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Work archive
            </Link>
            <p className="type-small-label text-clay mt-10">
              {project.category}
            </p>
            <h1 className="display-xl mt-6 max-w-[10ch]">{project.title}</h1>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-2xl lg:pb-2">
            <p className="text-foreground text-xl leading-9 sm:text-2xl sm:leading-10">
              {project.overview}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-12"
        >
          <ProjectMeta project={project} />
        </motion.div>
      </section>

      <section className="ds-container">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          className="bg-muted relative aspect-[16/11] overflow-hidden rounded-xl sm:aspect-[16/9]"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1800}
            height={1100}
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      <section className="ds-container ds-section-tight">
        <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading label="Case notes" />
            <p className="text-muted-foreground mt-8 max-w-xs text-sm leading-6">
              The case study is organized around intent, constraint, and the
              spatial decisions that make the project useful.
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            <motion.div variants={fadeUp}>
              <EditorialNote title="Brief">{project.brief}</EditorialNote>
            </motion.div>
            <motion.div variants={fadeUp}>
              <EditorialNote title="Context">{project.context}</EditorialNote>
            </motion.div>
            <motion.div variants={fadeUp}>
              <EditorialNote title="Strategy">
                <ul className="space-y-5">
                  {project.strategy.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="bg-clay mt-3 h-1.5 w-1.5 shrink-0 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </EditorialNote>
            </motion.div>
            <motion.div variants={fadeUp}>
              <EditorialNote title="Materials">
                {project.materialNotes}
              </EditorialNote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-border bg-surface border-y">
        <div className="ds-container ds-section-tight">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionHeading label="Gallery" />
              <h2 className="type-section-title mt-6 max-w-[9ch]">
                Rooms in sequence.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-base leading-7">
              Large views are paired with short captions so the page reads as a
              spatial walk-through, not a grid of thumbnails.
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="grid gap-5 lg:grid-cols-12"
          >
            {project.gallery.map((image, index) => (
              <motion.figure
                key={`${image.src}-${image.caption}`}
                variants={fadeUp}
                className={
                  index === 0
                    ? "lg:col-span-12"
                    : index === 1
                      ? "lg:col-span-7"
                      : "lg:col-span-5"
                }
              >
                <div
                  className={
                    index === 0
                      ? "bg-muted relative aspect-[16/9] overflow-hidden rounded-xl"
                      : "bg-muted relative aspect-[4/5] overflow-hidden rounded-xl"
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={index === 0 ? 1800 : 1100}
                    height={index === 0 ? 1000 : 1400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="text-muted-foreground mt-3 max-w-lg text-sm leading-6">
                  {image.caption}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {project.process ? (
        <section className="ds-container ds-section-tight">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div>
              <SectionHeading label={project.process.title} />
              <h2 className="type-section-title mt-6 max-w-[10ch]">
                Process and drawings.
              </h2>
              <p className="text-muted-foreground mt-6 max-w-xl text-base leading-7">
                {project.process.description}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {project.process.images.map((image) => (
                <figure key={`${image.src}-${image.caption}`}>
                  <div className="bg-muted relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={900}
                      height={1125}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="text-muted-foreground mt-3 text-sm leading-6">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="ds-container ds-section-tight">
        <div className="border-border grid gap-10 border-y py-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <div>
            <SectionHeading label="Specifications" />
            <p className="text-muted-foreground mt-6 max-w-sm text-base leading-7">
              A compact record of scope, role, and the spatial concerns that
              shaped the work.
            </p>
          </div>
          <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="type-small-label text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-foreground mt-2 text-base leading-7">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="ds-container pb-24 sm:pb-32">
        <div className="border-border bg-border grid gap-px overflow-hidden rounded-xl border md:grid-cols-2">
          {previous ? (
            <Link
              href={`/work/${previous.slug}`}
              className="group bg-background hover:bg-surface focus-visible:ring-clay focus-visible:ring-offset-background p-6 transition-colors focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none sm:p-8"
            >
              <span className="text-muted-foreground flex items-center gap-2 text-sm">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Previous work
              </span>
              <span className="font-display mt-5 block text-3xl font-medium tracking-[-0.02em]">
                {previous.title}
              </span>
            </Link>
          ) : null}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group bg-background hover:bg-surface focus-visible:ring-clay focus-visible:ring-offset-background p-6 text-left transition-colors focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none sm:p-8 md:text-right"
            >
              <span className="text-muted-foreground flex items-center gap-2 text-sm md:justify-end">
                Next work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="font-display mt-5 block text-3xl font-medium tracking-[-0.02em]">
                {next.title}
              </span>
            </Link>
          ) : null}
        </div>

        <div className="border-border mt-12 flex flex-col gap-5 border-t pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground max-w-xl text-base leading-7">
            Have a site, renovation, or interior that needs a clearer spatial
            reading?
          </p>
          <div className="flex flex-wrap gap-3">
            <AnimatedButton href="/work" variant="outline">
              Back to work
            </AnimatedButton>
            <AnimatedButton href="/contact">Start a project</AnimatedButton>
          </div>
        </div>
      </section>
    </main>
  );
}
