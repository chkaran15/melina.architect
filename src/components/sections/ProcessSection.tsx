"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

const STEPS = [
  {
    no: "01",
    title: "Discover",
    desc: "We dig into your goals, audience and competitive landscape to define a sharp, shared direction.",
  },
  {
    no: "02",
    title: "Design",
    desc: "Concepts evolve into a complete visual system — type, color, layout and motion language.",
  },
  {
    no: "03",
    title: "Build",
    desc: "We engineer responsive, accessible front-ends with buttery interactions and clean code.",
  },
  {
    no: "04",
    title: "Launch",
    desc: "We ship, measure and refine — making sure the work performs as beautifully as it looks.",
  },
];

export function ProcessSection() {
  const ref = useGSAPAnimation<HTMLDivElement>((gsap, ScrollTrigger, scope) => {
    const rows = scope.querySelectorAll<HTMLElement>("[data-step]");
    rows.forEach((row) => {
      gsap.from(row, {
        yPercent: 18,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 88%",
        },
      });
    });
    // subtle parallax on the big index numbers
    scope.querySelectorAll<HTMLElement>("[data-num]").forEach((num) => {
      gsap.to(num, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: num,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    ScrollTrigger.refresh();
  });

  return (
    <section id="process" className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-[110rem] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="05" label="How we work" />
        <h2 className="display-xl mt-6 max-w-[14ch]">
          A process built for{" "}
          <span className="font-serif italic text-clay">clarity</span>
        </h2>

        <div ref={ref} className="mt-16 flex flex-col">
          {STEPS.map((step) => (
            <div
              key={step.no}
              data-step
              className="grid grid-cols-1 items-start gap-4 border-t border-border py-10 md:grid-cols-[auto_1fr_2fr] md:gap-12"
            >
              <span
                data-num
                className="font-display text-6xl font-medium leading-none text-clay/30 md:text-7xl"
              >
                {step.no}
              </span>
              <h3 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                {step.title}
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}