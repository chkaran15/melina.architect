// @ts-nocheck
"use client";

import { type ElementType } from "react";
import { motion } from "framer-motion";
import { riseIn, staggerContainer, toWords } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Render emphasised words (by index) in the serif accent font. */
  serifWords?: number[];
  once?: boolean;
}

/**
 * Word-by-word masked reveal. Each word rises out of an overflow-hidden line
 * when scrolled into view. Use for headlines.
 */
export function RevealText({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.06,
  serifWords = [],
  once = true,
}: RevealTextProps) {
  const Tag = motion[as as "h2"] ?? motion.h2;
  const words = toWords(text);

  return (
    <Tag
      className={cn("flex flex-wrap", className)}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-12% 0px" }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="reveal-line mr-[0.25em]">
          <motion.span
            variants={riseIn}
            className={cn(
              "inline-block",
              serifWords.includes(i) && "font-serif italic text-clay",
            )}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}