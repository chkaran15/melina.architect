export const CONTACT_EMAIL = "hello@melina.architect";

export const directContactActions = [
  {
    label: "Email the studio",
    detail: "For project starts, press inquiries, and collaboration notes.",
    href: `mailto:${CONTACT_EMAIL}?subject=Project%20conversation%20with%20Melina`,
  },
  {
    label: "Request a consultation",
    detail: "Begin with a focused note about the space, scope, and timing.",
    href: "#inquiry",
  },
  {
    label: "Share project details",
    detail: "Use the guided form if you want prompts before writing.",
    href: "#inquiry",
  },
] as const;

export const projectTypes = [
  "Residential planning",
  "Interior architecture",
  "Renovation strategy",
  "Commercial spaces",
] as const;

export const projectFitGuidance = [
  {
    title: "Residential planning",
    description:
      "Homes, additions, and spatial studies where layout, light, and daily rituals need a clearer plan.",
  },
  {
    title: "Interior architecture",
    description:
      "Material direction, room sequencing, millwork, and atmosphere for spaces that need a coherent interior language.",
  },
  {
    title: "Renovation strategy",
    description:
      "Existing spaces that need a measured redesign, from first constraints through a practical next-step brief.",
  },
  {
    title: "Commercial spaces",
    description:
      "Studios, hospitality, retail, and client-facing interiors where the space needs to communicate quietly and precisely.",
  },
] as const;

export const firstNotePrompts = [
  "What kind of space are we discussing?",
  "Where is the project located?",
  "What feels unresolved in the current space?",
  "What timeline or decision date matters?",
] as const;
