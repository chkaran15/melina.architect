// @ts-nocheck
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface WorkItem {
  title: string;
  category: string;
  year: string;
  image: string;
}

interface AnimatedCardProps {
  item: WorkItem;
  index: number;
  className?: string;
}

/**
 * Showcase card with an internal parallax on the image (scroll-driven) and a
 * smooth image zoom on hover. Reveals from below when entering the viewport.
 */
export function AnimatedCard({ item, index, className }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      className={cn("group cursor-pointer", className)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
        <motion.img
          src={item.image}
          alt={item.title}
          loading="lazy"
          width={1200}
          height={1500}
          style={{ y }}
          className="absolute inset-0 h-[116%] w-full -translate-y-[8%] object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
        <div className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-medium tracking-tight">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>
        </div>
        <span className="eyebrow pt-1 text-muted-foreground">{item.year}</span>
      </div>
    </motion.article>
  );
}