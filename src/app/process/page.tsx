import type { Metadata } from "next";
import { ProcessPageSections } from "@/components/sections/process/ProcessPageSections";

export const metadata: Metadata = {
  title: "Process | Melina Chaudhary Architect",
  description:
    "A deeper look at the Listen, Study, Design, and Refine process behind Melina Chaudhary Architect.",
};

export default function ProcessPage() {
  return <ProcessPageSections />;
}
