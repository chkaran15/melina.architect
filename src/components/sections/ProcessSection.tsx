"use client";

import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

const STEPS = [
  {
    no: "01",
    title: "Listen",
    desc: "We begin with the site, the people, the habits, and the questions the current space has not answered yet.",
  },
  {
    no: "02",
    title: "Study",
    desc: "Plans, references, light, circulation, and constraints are studied until the strongest direction becomes clear.",
  },
  {
    no: "03",
    title: "Design",
    desc: "The concept develops into spatial decisions, material direction, and drawings that make the intent legible.",
  },
  {
    no: "04",
    title: "Refine",
    desc: "Each decision is tested for proportion, practicality, atmosphere, and the way the space will be lived in.",
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
    <section id="process" className="border-border bg-card/60 border-y">
      <div className="mx-auto max-w-[110rem] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading index="05" label="How we work" />
        <h2 className="display-xl mt-6 max-w-[14ch]">
          A process built for{" "}
          <span className="text-clay font-serif italic">clarity</span>
        </h2>

        <div ref={ref} className="mt-16 flex flex-col">
          {STEPS.map((step) => (
            <div
              key={step.no}
              data-step
              className="border-border grid grid-cols-1 items-start gap-4 border-t py-10 md:grid-cols-[auto_1fr_2fr] md:gap-12"
            >
              <span
                data-num
                className="font-display text-clay/30 text-6xl leading-none font-medium md:text-7xl"
              >
                {step.no}
              </span>
              <h3 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <AnimatedButton href="/process" variant="outline">
            Explore process
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
