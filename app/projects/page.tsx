import type { Metadata } from "next";

import { projectCategories } from "@/data/projects";

import { ProjectsBrowser } from "@/components/projects/projects-browser";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore EziLab digital product case studies with problem, solution, tech stack, and results.",
};

type ProjectsPageProps = {
  searchParams?: {
    category?: string;
  };
};

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const requestedCategory = searchParams?.category;
  const selectedCategory = projectCategories.includes(requestedCategory ?? "")
    ? requestedCategory ?? "All"
    : "All";

  return (
    <main className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            label="Projects"
            title="Case studies from EziLab projects delivered in the last year."
            description="Every case study explains what was built, the challenge, the implemented solution, and measurable outcomes."
          />
        </FadeIn>

        <ProjectsBrowser initialCategory={selectedCategory} />
      </Container>
    </main>
  );
}
