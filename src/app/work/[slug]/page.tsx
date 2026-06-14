import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkDetailPageSections } from "@/components/sections/work/WorkDetailPageSections";
import {
  getAdjacentWorkProjects,
  getWorkProject,
  workArchiveProjects,
} from "@/components/sections/work/work-content";

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return workArchiveProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) {
    return {
      title: "Work not found | Melina Chaudhary Architect",
    };
  }

  return {
    title: `${project.title} | Melina Chaudhary Architect`,
    description: project.overview,
    openGraph: {
      title: `${project.title} | Melina Chaudhary Architect`,
      description: project.overview,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 900,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getWorkProject(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentWorkProjects(project.slug);

  return (
    <WorkDetailPageSections project={project} previous={previous} next={next} />
  );
}
