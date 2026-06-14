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

export interface WorkGalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface WorkFact {
  label: string;
  value: string;
}

export interface WorkArchiveProject {
  slug: string;
  title: string;
  category: string;
  type: WorkProjectType;
  year: string;
  status: string;
  image: string;
  description: string;
  location: string;
  overview: string;
  brief: string;
  context: string;
  strategy: readonly string[];
  materialNotes: string;
  gallery: readonly [WorkGalleryImage, WorkGalleryImage, ...WorkGalleryImage[]];
  process?: {
    title: string;
    description: string;
    images: readonly [WorkGalleryImage, ...WorkGalleryImage[]];
  };
  facts: readonly [WorkFact, WorkFact, ...WorkFact[]];
}

const gallery = {
  courtyard: [
    {
      src: workImages.lumen,
      alt: "Sunlit courtyard edge with planting and a quiet threshold",
      caption: "Arrival sequence shaped around a soft garden threshold.",
    },
    {
      src: workImages.formField,
      alt: "Warm interior opening with daylight washing across pale walls",
      caption: "Interior openings tuned for long, indirect daylight.",
    },
    {
      src: workImages.atelierMare,
      alt: "Measured living space with built-in surfaces and calm material tones",
      caption: "A domestic room arranged for gathering without visual noise.",
    },
  ],
  atelier: [
    {
      src: workImages.atelierMare,
      alt: "Compact apartment interior with pale walls and controlled storage",
      caption: "Storage wall and living zone treated as one continuous plane.",
    },
    {
      src: workImages.nacre,
      alt: "Quiet work corner with soft light and restrained finishes",
      caption: "A secondary corner designed to hold work and rest.",
    },
    {
      src: workImages.formField,
      alt: "Close interior view with warm light and minimal detailing",
      caption: "A tighter material palette reduces the small plan's friction.",
    },
  ],
  lightwell: [
    {
      src: workImages.formField,
      alt: "Renovated interior with a vertical wash of daylight",
      caption: "A new lightwell becomes the organizing device.",
    },
    {
      src: workImages.lumen,
      alt: "Garden-facing room edge with calm openings",
      caption: "Older rooms gain clearer relationships to exterior light.",
    },
    {
      src: workImages.nacre,
      alt: "Small study space with pale surfaces and measured storage",
      caption: "Service and storage are compressed to release brighter rooms.",
    },
  ],
  compact: [
    {
      src: workImages.nacre,
      alt: "Compact studio corner with flexible work surface",
      caption: "One generous wall carries storage, display, and work.",
    },
    {
      src: workImages.atelierMare,
      alt: "Small living space with a restrained material palette",
      caption: "Tight rooms stay legible through fewer material transitions.",
    },
    {
      src: workImages.formField,
      alt: "Quiet detail of pale interior surfaces catching daylight",
      caption: "Soft light keeps the work-rest boundary calm.",
    },
  ],
} as const;

export const workArchiveProjects = [
  {
    slug: "courtyard-residence",
    title: "Courtyard Residence",
    category: "Residential Planning",
    type: "Residential",
    year: "2025",
    status: "Concept design",
    image: workImages.lumen,
    location: "Kathmandu Valley",
    description:
      "A quiet residence organized around daylight, arrival sequence, and a softened threshold between garden and interior life.",
    overview:
      "Courtyard Residence studies how a compact family home can feel unhurried without growing larger. The plan makes the threshold do more work: arrival, pause, filtered garden light, and the first view into daily life.",
    brief:
      "The client intent was a calm house for extended family routines: privacy from the street, a generous place to gather, and rooms that stay bright without relying on exposed glazing at the boundary.",
    context:
      "The site sits within a dense residential fabric where light, sound, and privacy need careful negotiation. Rather than pushing every room to the edge, the proposal draws attention inward to a protected garden room.",
    strategy: [
      "Fold the public rooms around a small court so arrival slows before the main living space.",
      "Use thicker thresholds, built-in storage, and shaded openings to buffer the street-facing edge.",
      "Keep circulation visible but quiet, with long views across the court instead of corridor drama.",
    ],
    materialNotes:
      "Pale plaster, timber joinery, clay-toned floor accents, and soft mineral surfaces keep the rooms bright while giving the courtyard edge a grounded warmth.",
    gallery: gallery.courtyard,
    process: {
      title: "Plan Studies",
      description:
        "Early diagrams tested whether the court should behave as a room, a light slot, or an arrival pocket. The selected arrangement keeps it useful in daily movement rather than treating it as a decorative void.",
      images: [gallery.courtyard[1], gallery.courtyard[2]],
    },
    facts: [
      { label: "Scope", value: "New residence planning" },
      {
        label: "Primary rooms",
        value: "Court, living room, kitchen, bedrooms",
      },
      { label: "Focus", value: "Privacy, daylight, arrival sequence" },
      { label: "Role", value: "Concept, spatial planning, material direction" },
    ],
  },
  {
    slug: "atelier-apartment",
    title: "Atelier Apartment",
    category: "Interior Architecture",
    type: "Interior",
    year: "2025",
    status: "Design development",
    image: workImages.atelierMare,
    location: "Lalitpur",
    description:
      "A compact apartment study shaped through material calm, built-in storage, and a clearer room-to-room rhythm.",
    overview:
      "Atelier Apartment turns a compact plan into a quieter everyday interior by making storage, thresholds, and work surfaces feel continuous rather than added later.",
    brief:
      "The brief asked for an apartment that could hold focused work, informal hosting, and daily rest without feeling like three competing rooms inside a limited footprint.",
    context:
      "The existing rooms had enough area but too many small interruptions: exposed storage, uneven thresholds, and furniture competing with circulation. The design reduces those interruptions.",
    strategy: [
      "Consolidate storage into built-in walls so loose pieces no longer crowd the plan.",
      "Use one restrained material language across living, dining, and work zones.",
      "Give the smallest corners a role, either as pause points, display, or focused work surfaces.",
    ],
    materialNotes:
      "Muted timber, off-white walls, linen upholstery, and dark metal details give the apartment a studio quality without turning it into a showroom.",
    gallery: gallery.atelier,
    process: {
      title: "Joinery Logic",
      description:
        "The working drawings focus on how storage depth, display ledges, and task surfaces align so the apartment reads as a single interior system.",
      images: [gallery.atelier[0], gallery.atelier[2]],
    },
    facts: [
      { label: "Scope", value: "Interior architecture" },
      { label: "Area", value: "Compact apartment" },
      { label: "Focus", value: "Joinery, storage, room rhythm" },
      { label: "Role", value: "Interior planning, palette, detail direction" },
    ],
  },
  {
    slug: "lightwell-house",
    title: "Lightwell House",
    category: "Renovation Strategy",
    type: "Renovation",
    year: "2024",
    status: "Strategy package",
    image: workImages.formField,
    location: "Bhaktapur",
    description:
      "A renovation plan that uses a new lightwell, quieter circulation, and measured openings to reset an existing family home.",
    overview:
      "Lightwell House treats daylight as the main renovation material. A modest vertical opening reorganizes rooms that had become dark, deep, and difficult to read.",
    brief:
      "The family wanted to keep the structure's familiarity while making daily movement, ventilation, and shared rooms feel less compressed.",
    context:
      "The existing house had strong walls and a practical footprint, but the center of the plan received little natural light. The proposal works within that constraint rather than replacing the whole spatial order.",
    strategy: [
      "Introduce a lightwell where it can improve multiple rooms at once.",
      "Clarify circulation so movement no longer cuts diagonally through shared areas.",
      "Use fewer, better-positioned openings to make the old walls feel intentional.",
    ],
    materialNotes:
      "Lime-washed walls, repaired timber, clay floor tones, and simple metalwork keep the renovation connected to the existing house.",
    gallery: gallery.lightwell,
    facts: [
      { label: "Scope", value: "Renovation strategy" },
      { label: "Primary move", value: "New lightwell and circulation reset" },
      { label: "Focus", value: "Daylight, ventilation, retained structure" },
      { label: "Role", value: "Strategy, planning, opening studies" },
    ],
  },
  {
    slug: "compact-studio",
    title: "Compact Studio",
    category: "Spatial Study",
    type: "Interior",
    year: "2024",
    status: "Spatial study",
    image: workImages.nacre,
    location: "Patan",
    description:
      "A small work-and-rest studio arranged around one generous wall, flexible storage, and a restrained material palette.",
    overview:
      "Compact Studio is a study in making one room behave with more discipline. The project gives the longest wall enough intelligence to hold work, storage, display, and rest.",
    brief:
      "The intent was to avoid a room full of small solutions. The studio needed one clear organizing gesture that could support different uses across the day.",
    context:
      "With limited area and a narrow light source, the plan depends on keeping the central floor open and pushing complexity to the perimeter.",
    strategy: [
      "Make the storage wall the spatial anchor rather than a background element.",
      "Keep furniture light and movable so the room can change without visual clutter.",
      "Use material restraint to make the small space feel settled rather than sparse.",
    ],
    materialNotes:
      "Warm white surfaces, matte timber, clay objects, and a low-contrast textile palette give the studio a working calm.",
    gallery: gallery.compact,
    facts: [
      { label: "Scope", value: "Single-room spatial study" },
      { label: "Primary move", value: "Integrated work and storage wall" },
      { label: "Focus", value: "Flexibility, storage, visual calm" },
      { label: "Role", value: "Spatial planning and material study" },
    ],
  },
  {
    slug: "gallery-threshold",
    title: "Gallery Threshold",
    category: "Commercial Spaces",
    type: "Commercial",
    year: "2024",
    status: "Concept design",
    image: workImages.lumen,
    location: "Boudha",
    description:
      "A client-facing gallery entry sequence with quiet wayfinding, softened acoustics, and a slower transition from street to room.",
    overview:
      "Gallery Threshold studies the first fifteen seconds of a visitor's arrival, turning the entry into a slower transition between street noise and focused viewing.",
    brief:
      "The client needed a small commercial entry that could orient visitors, reduce acoustic harshness, and make the gallery feel composed before the first display wall.",
    context:
      "The site meets an active street edge. The design creates a compressed entry zone that absorbs pace and sound before opening into the display room.",
    strategy: [
      "Use a thicker threshold to separate arrival from viewing.",
      "Place wayfinding as part of the architecture rather than as applied signage.",
      "Control light at the entry so the gallery interior feels calmer by contrast.",
    ],
    materialNotes:
      "Textured plaster, timber display edges, acoustic fabric, and a restrained clay mark for orientation keep the commercial space quiet but legible.",
    gallery: gallery.courtyard,
    facts: [
      { label: "Scope", value: "Commercial entry concept" },
      { label: "Program", value: "Arrival, wayfinding, first display wall" },
      { label: "Focus", value: "Acoustics, threshold, orientation" },
      { label: "Role", value: "Spatial concept and visitor sequence" },
    ],
  },
  {
    slug: "terrace-rooms",
    title: "Terrace Rooms",
    category: "Residential Planning",
    type: "Residential",
    year: "2023",
    status: "Planning study",
    image: workImages.atelierMare,
    location: "Pokhara",
    description:
      "A residential planning study that connects terrace rooms, long views, and shaded family gathering spaces.",
    overview:
      "Terrace Rooms uses the slope and view as working constraints, arranging rooms so family life can move between shaded interiors and open-air edges.",
    brief:
      "The planning study needed to preserve long views while giving everyday gathering spaces enough shade, storage, and privacy to work throughout the day.",
    context:
      "The site invites outward views, but exposure and heat gain needed a more careful sequence than a fully open terrace edge.",
    strategy: [
      "Layer terraces as outdoor rooms rather than leftover edges.",
      "Pull shared rooms toward view corridors while keeping service zones compact.",
      "Use shaded thresholds to make exterior movement comfortable.",
    ],
    materialNotes:
      "Mineral floors, timber shade elements, pale walls, and clay-toned exterior accents keep the terrace language simple and durable.",
    gallery: gallery.atelier,
    facts: [
      { label: "Scope", value: "Residential planning study" },
      { label: "Primary move", value: "Layered terrace rooms" },
      { label: "Focus", value: "Views, shade, gathering" },
      { label: "Role", value: "Planning, sequence, exterior room study" },
    ],
  },
  {
    slug: "old-wall-new-rooms",
    title: "Old Wall New Rooms",
    category: "Renovation Strategy",
    type: "Renovation",
    year: "2023",
    status: "Feasibility study",
    image: workImages.formField,
    location: "Kirtipur",
    description:
      "A renovation brief that keeps the weight of the existing wall while giving new rooms a clearer spatial order.",
    overview:
      "Old Wall New Rooms keeps the emotional and structural presence of an existing wall, then uses it as the spine for a clearer set of contemporary rooms.",
    brief:
      "The client wanted the renovation to feel changed but not erased. The task was to make the retained wall useful, not sentimental.",
    context:
      "The existing fabric carried character and constraint in equal measure. New openings and room divisions had to respect the wall's weight while improving daily use.",
    strategy: [
      "Treat the retained wall as a spatial spine for the new plan.",
      "Cut fewer openings, but make each one clarify a relationship between rooms.",
      "Contrast repaired surfaces with simpler new insertions.",
    ],
    materialNotes:
      "Repaired masonry, lime plaster, dark timber, and quiet metal details keep old and new work distinct without creating a hard split.",
    gallery: gallery.lightwell,
    facts: [
      { label: "Scope", value: "Renovation feasibility" },
      { label: "Primary move", value: "Retained wall as room spine" },
      { label: "Focus", value: "Continuity, openings, adaptive reuse" },
      {
        label: "Role",
        value: "Feasibility, room planning, material direction",
      },
    ],
  },
  {
    slug: "quiet-retail-room",
    title: "Quiet Retail Room",
    category: "Commercial Spaces",
    type: "Commercial",
    year: "2023",
    status: "Spatial concept",
    image: workImages.nacre,
    location: "Lazimpat",
    description:
      "A compact retail interior shaped around tactile display surfaces, controlled light, and a calm path through the room.",
    overview:
      "Quiet Retail Room gives a small shop the tempo of a gallery: fewer displays, better surfaces, and a path that lets visitors understand the offer without pressure.",
    brief:
      "The commercial brief asked for a retail room that could feel intimate and premium without relying on dark finishes or decorative spectacle.",
    context:
      "The room was compact and visually busy. The design reduces display noise and uses a clear walking loop to make browsing feel natural.",
    strategy: [
      "Group products on tactile surfaces instead of scattering them across small fixtures.",
      "Control lighting by zone so the room has depth without drama.",
      "Keep the main path obvious, slow, and generous enough for two visitors.",
    ],
    materialNotes:
      "Pale display plinths, timber rails, soft textiles, and clay-toned point details create warmth while preserving a white-canvas atmosphere.",
    gallery: gallery.compact,
    facts: [
      { label: "Scope", value: "Retail interior concept" },
      { label: "Program", value: "Display, browsing path, service point" },
      { label: "Focus", value: "Light, tactility, visitor pace" },
      { label: "Role", value: "Spatial concept and material direction" },
    ],
  },
] satisfies readonly [WorkArchiveProject, ...WorkArchiveProject[]];

export const featuredWorkProject = workArchiveProjects[0];

export function getWorkProject(slug: string) {
  return workArchiveProjects.find((project) => project.slug === slug);
}

export function getAdjacentWorkProjects(slug: string) {
  const index = workArchiveProjects.findIndex(
    (project) => project.slug === slug,
  );

  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous:
      workArchiveProjects[
        (index - 1 + workArchiveProjects.length) % workArchiveProjects.length
      ],
    next: workArchiveProjects[(index + 1) % workArchiveProjects.length],
  };
}
