"use client";

import { AnimatedCard, type WorkItem } from "@/components/ui/AnimatedCard";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealText } from "@/components/ui/RevealText";
import { workImages } from "@/lib/images";

const WORK: WorkItem[] = [
  { title: "Courtyard Residence", category: "Residential Planning", year: "2025", image: workImages.lumen },
  { title: "Atelier Apartment", category: "Interior Architecture", year: "2025", image: workImages.atelierMare },
  { title: "Lightwell House", category: "Renovation Strategy", year: "2024", image: workImages.formField },
  { title: "Compact Studio", category: "Spatial Study", year: "2024", image: workImages.nacre },
];

export function ShowcaseSection() {
  return (
    <section id="work" className="mx-auto max-w-[110rem] px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionHeading index="04" label="Selected Work" />
          <RevealText
            as="h2"
            text="Recent projects"
            serifWords={[1]}
            className="display-xl mt-6"
          />
        </div>
        <div className="max-w-sm">
          <p className="text-muted-foreground">
            A selection of residential, interior, and spatial studies exploring
            proportion, material, light, and daily use.
          </p>
          <div className="mt-6">
            <AnimatedButton href="/work" variant="outline">
              View all work
            </AnimatedButton>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2">
        {WORK.map((item, i) => (
          <AnimatedCard
            key={item.title}
            item={item}
            index={i}
            className={i % 2 === 1 ? "sm:mt-24" : ""}
          />
        ))}
      </div>
    </section>
  );
}
