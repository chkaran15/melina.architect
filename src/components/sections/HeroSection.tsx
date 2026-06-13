"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ease, fadeUp, riseIn, staggerContainer } from "@/lib/animations";
import { heroImage } from "@/lib/images";

const TITLE_LINES = ["Design that", "moves"];

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-12 pt-28 sm:px-8"
    >
      {/* vertical side label, echoing the reference's "Honors" rail */}
      <span className="eyebrow pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-muted-foreground lg:block">
        Creative Studio — Est. 2014
      </span>

      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10">
        <motion.div
          variants={staggerContainer(0.04, 0.35)}
          initial="hidden"
          animate="show"
          className="mb-6 flex items-center gap-4"
        >
          <motion.span variants={fadeUp} className="eyebrow text-clay">
            01 — Portfolio
          </motion.span>
          <motion.span variants={fadeUp} className="h-px w-12 bg-border" />
          <motion.span variants={fadeUp} className="eyebrow text-muted-foreground">
            Art Direction & Interaction
          </motion.span>
        </motion.div>

        <motion.h1
          variants={staggerContainer(0.12, 0.45)}
          initial="hidden"
          animate="show"
          className="display-hero max-w-[14ch]"
        >
          {TITLE_LINES.map((line, i) => (
            <span key={line} className="reveal-line">
              <motion.span variants={riseIn} className="block">
                {line}
                {i === 1 && (
                  <span className="font-serif italic text-clay"> people.</span>
                )}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          variants={staggerContainer(0.1, 1.1)}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <motion.p
            variants={fadeUp}
            className="max-w-md text-base leading-relaxed text-muted-foreground"
          >
            We are an independent studio crafting brands, websites and digital
            products with an obsession for motion, detail and feeling.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#work"
            className="inline-flex items-center gap-3 text-sm font-medium"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/25">
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </span>
            Scroll to explore
          </motion.a>
        </motion.div>
      </motion.div>

      {/* decorative hero visual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: ease.out, delay: 0.3 }}
        className="pointer-events-none absolute -right-10 top-1/2 z-0 hidden h-[70vh] w-[34vw] -translate-y-1/2 overflow-hidden rounded-3xl md:block"
      >
        <motion.img
          src={heroImage}
          alt="Abstract sculptural studio artwork"
          width={1200}
          height={1500}
          style={{ y: imgY, scale: imgScale }}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  );
}