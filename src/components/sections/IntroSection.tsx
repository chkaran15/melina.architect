"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const WORDS =
  "We turn ambitious ideas into refined digital experiences — pairing editorial design with engineering precision so every detail feels intentional."
    .split(" ");

export function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  return (
    <section id="studio" className="mx-auto max-w-[110rem] px-5 py-24 sm:px-8 sm:py-36">
      <SectionHeading index="02" label="The Studio" />
      <div ref={ref} className="mt-10">
        <p className="display-xl flex flex-wrap text-balance">
          {WORDS.map((word, i) => {
            const start = i / WORDS.length;
            const end = start + 1 / WORDS.length;
            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <span className="mr-[0.25em] inline-block">
      <motion.span style={{ opacity }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}