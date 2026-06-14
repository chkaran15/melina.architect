"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  featuredWorkProject,
  workArchiveIntro,
  workArchiveProjects,
  workFilters,
  type WorkFilter,
} from "./work-content";

export function WorkPageSections() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return workArchiveProjects;
    }

    return workArchiveProjects.filter(
      (project) => project.type === activeFilter,
    );
  }, [activeFilter]);

  return (
    <main>
      <section className="ds-container flex min-h-[88svh] flex-col justify-end pt-32 pb-16 sm:pt-40 sm:pb-20">
        <motion.div
          variants={staggerContainer(0.08, 0.18)}
          initial="hidden"
          animate="show"
          className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end"
        >
          <div>
            <motion.div variants={fadeUp}>
              <SectionHeading index="01" label="Work archive" />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="display-hero mt-8 max-w-[12ch]"
            >
              A full archive of rooms, light, and{" "}
              <span className="text-clay font-serif italic">measured</span>{" "}
              change.
            </motion.h1>
          </div>

          <motion.div variants={fadeUp} className="max-w-xl lg:pb-5">
            <p className="type-section-description text-muted-foreground">
              {workArchiveIntro.description}
            </p>
            <p className="type-small-label text-foreground mt-8">
              {workArchiveIntro.summary}
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-border bg-surface border-y">
        <div className="ds-container py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="bg-muted relative aspect-[4/5] overflow-hidden rounded-xl lg:aspect-[5/4]"
            >
              <Link
                href={`/work/${featuredWorkProject.slug}`}
                aria-label={`View ${featuredWorkProject.title} case study`}
                className="group focus-visible:ring-clay focus-visible:ring-offset-surface block h-full focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none"
              >
                <Image
                  src={featuredWorkProject.image}
                  alt={featuredWorkProject.title}
                  width={1400}
                  height={1120}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                />
              </Link>
            </motion.div>

            <motion.article
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="lg:pb-4"
            >
              <motion.div variants={fadeUp}>
                <SectionHeading index="02" label="Featured project" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="type-section-title mt-6 max-w-[10ch]"
              >
                {featuredWorkProject.title}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground mt-6 max-w-xl text-base leading-7"
              >
                {featuredWorkProject.description}
              </motion.p>
              <motion.dl
                variants={fadeUp}
                className="border-border mt-8 grid gap-4 border-y py-6 sm:grid-cols-3"
              >
                <div>
                  <dt className="type-small-label text-muted-foreground">
                    Type
                  </dt>
                  <dd className="mt-2 text-sm">
                    {featuredWorkProject.category}
                  </dd>
                </div>
                <div>
                  <dt className="type-small-label text-muted-foreground">
                    Year
                  </dt>
                  <dd className="mt-2 text-sm">{featuredWorkProject.year}</dd>
                </div>
                <div>
                  <dt className="type-small-label text-muted-foreground">
                    Location
                  </dt>
                  <dd className="mt-2 text-sm">
                    {featuredWorkProject.location}
                  </dd>
                </div>
              </motion.dl>
              <motion.div variants={fadeUp} className="mt-8">
                <AnimatedButton
                  href={`/work/${featuredWorkProject.slug}`}
                  variant="outline"
                >
                  View case study
                </AnimatedButton>
              </motion.div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="ds-container ds-section-tight">
        <div className="border-border flex flex-col gap-8 border-b pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionHeading index="03" label="Archive" />
            <h2 className="type-section-title mt-6 max-w-[10ch]">
              Projects by type.
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            aria-label="Filter work projects by type"
          >
            {workFilters.map((filter) => {
              const selected = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "focus-visible:ring-clay focus-visible:ring-offset-background rounded-full border px-4 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                    selected
                      ? "border-clay bg-clay text-clay-foreground"
                      : "border-border bg-background text-foreground hover:border-foreground/40",
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <p className="text-muted-foreground mt-6 text-sm" aria-live="polite">
          Showing {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
          {activeFilter === "All" ? "" : ` in ${activeFilter.toLowerCase()}`}.
        </p>

        {visibleProjects.length > 0 ? (
          <motion.div
            key={activeFilter}
            variants={staggerContainer(0.06, 0.05)}
            initial="hidden"
            animate="show"
            className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2"
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className={index % 2 === 1 ? "sm:mt-20" : ""}
              >
                <AnimatedCard item={project} index={index} />
                <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-6">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="border-border mt-12 border-y py-12">
            <p className="text-muted-foreground max-w-xl">
              No projects are filed under this type yet.
            </p>
          </div>
        )}
      </section>

      <section className="border-border bg-surface border-t">
        <div className="ds-container grid gap-8 py-16 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionHeading index="04" label="Start a project" />
            <h2 className="type-section-title mt-6 max-w-[11ch]">
              Have a space that needs a clearer plan?
            </h2>
            <p className="text-muted-foreground mt-6 max-w-xl text-base leading-7">
              Share the context, constraints, and atmosphere you want the space
              to hold. A useful first conversation can begin with a few precise
              notes.
            </p>
          </div>
          <AnimatedButton href="/contact">Start a project</AnimatedButton>
        </div>
      </section>
    </main>
  );
}
