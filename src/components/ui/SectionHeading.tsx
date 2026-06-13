// @ts-nocheck
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  label: string;
  className?: string;
}

/** Small eyebrow row: index number + section label, used above sections. */
export function SectionHeading({ index, label, className }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      className={cn(
        "flex items-center gap-4 text-muted-foreground",
        className,
      )}
    >
      {index && <span className="eyebrow text-clay">{index}</span>}
      <span className="h-px w-8 bg-border" />
      <span className="eyebrow">{label}</span>
    </motion.div>
  );
}