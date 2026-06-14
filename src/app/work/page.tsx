import { type Metadata } from "next";
import { WorkPageSections } from "@/components/sections/work/WorkPageSections";

export const metadata: Metadata = {
  title: "Work | Melina Chaudhary Architect",
  description:
    "A complete image-led archive of residential planning, interior architecture, renovation strategy, and commercial spatial studies by Melina Architect.",
};

export default function WorkPage() {
  return <WorkPageSections />;
}
