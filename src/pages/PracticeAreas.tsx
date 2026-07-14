import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { SectionCard } from "@/components/shared/SectionCard";

const areas = [
  {
    tag: "Training & Capability",
    title: "Saga Excellence Academy",
    description:
      "Comprehensive training programs designed to build capabilities at every level of your organization, from foundational skills to advanced leadership competencies.",
    href: "/practice-areas/academy",
  },
  {
    tag: "Lean · Process · Operations",
    title: "Pathways to Excellence",
    description:
      "Transform your operations through Lean methodologies, process optimization, and operational excellence frameworks that deliver measurable results.",
    href: "/practice-areas/pathways",
  },
  {
    tag: "Deployment · Execution",
    title: "Strategy Hub",
    description:
      "From strategy development to flawless execution, we help organizations translate vision into reality with proven deployment methodologies.",
    href: "/practice-areas/strategy-hub",
  },
];

export default function PracticeAreas() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Practice Areas"
        title="Three pillars. One integrated practice."
        subtitle="Integrated solutions designed to address your organization's most critical challenges and opportunities."
      />

      <ContentSection>
        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <SectionCard
              key={area.title}
              tag={area.tag}
              title={area.title}
              description={area.description}
              href={area.href}
              className={`reveal ${i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : ""}`}
            />
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
