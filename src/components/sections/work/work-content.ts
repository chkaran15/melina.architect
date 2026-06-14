import { workImages } from "@/lib/images";

export const workArchiveIntro = {
  headline: "A full archive of rooms, light, and measured change.",
  description:
    "Residential planning, interior architecture, renovation strategy, and commercial spatial studies gathered as an image-led archive.",
  summary: "8 projects across 4 practice types",
} as const;

export const workFilters = [
  "All",
  "Residential",
  "Interior",
  "Renovation",
  "Commercial",
] as const;

export type WorkFilter = (typeof workFilters)[number];
export type WorkProjectType = Exclude<WorkFilter, "All">;

export interface WorkArchiveProject {
  title: string;
  category: string;
  type: WorkProjectType;
  year: string;
  image: string;
  description: string;
  location: string;
}

export const workArchiveProjects = [
  {
    title: "Courtyard Residence",
    category: "Residential Planning",
    type: "Residential",
    year: "2025",
    image: workImages.lumen,
    location: "Kathmandu Valley",
    description:
      "A quiet residence organized around daylight, arrival sequence, and a softened threshold between garden and interior life.",
  },
  {
    title: "Atelier Apartment",
    category: "Interior Architecture",
    type: "Interior",
    year: "2025",
    image: workImages.atelierMare,
    location: "Lalitpur",
    description:
      "A compact apartment study shaped through material calm, built-in storage, and a clearer room-to-room rhythm.",
  },
  {
    title: "Lightwell House",
    category: "Renovation Strategy",
    type: "Renovation",
    year: "2024",
    image: workImages.formField,
    location: "Bhaktapur",
    description:
      "A renovation plan that uses a new lightwell, quieter circulation, and measured openings to reset an existing family home.",
  },
  {
    title: "Compact Studio",
    category: "Spatial Study",
    type: "Interior",
    year: "2024",
    image: workImages.nacre,
    location: "Patan",
    description:
      "A small work-and-rest studio arranged around one generous wall, flexible storage, and a restrained material palette.",
  },
  {
    title: "Gallery Threshold",
    category: "Commercial Spaces",
    type: "Commercial",
    year: "2024",
    image: workImages.lumen,
    location: "Boudha",
    description:
      "A client-facing gallery entry sequence with quiet wayfinding, softened acoustics, and a slower transition from street to room.",
  },
  {
    title: "Terrace Rooms",
    category: "Residential Planning",
    type: "Residential",
    year: "2023",
    image: workImages.atelierMare,
    location: "Pokhara",
    description:
      "A residential planning study that connects terrace rooms, long views, and shaded family gathering spaces.",
  },
  {
    title: "Old Wall New Rooms",
    category: "Renovation Strategy",
    type: "Renovation",
    year: "2023",
    image: workImages.formField,
    location: "Kirtipur",
    description:
      "A renovation brief that keeps the weight of the existing wall while giving new rooms a clearer spatial order.",
  },
  {
    title: "Quiet Retail Room",
    category: "Commercial Spaces",
    type: "Commercial",
    year: "2023",
    image: workImages.nacre,
    location: "Lazimpat",
    description:
      "A compact retail interior shaped around tactile display surfaces, controlled light, and a calm path through the room.",
  },
] satisfies readonly [WorkArchiveProject, ...WorkArchiveProject[]];

export const featuredWorkProject = workArchiveProjects[0];
