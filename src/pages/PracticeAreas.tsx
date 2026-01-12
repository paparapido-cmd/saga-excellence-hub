import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { SectionCard } from "@/components/shared/SectionCard";
import { ArrowRight } from "lucide-react";
import academyImage from "@/assets/training-academy.jpg";
import pathwaysImage from "@/assets/pathways-excellence.jpg";
import strategyImage from "@/assets/strategy-hub.jpg";

const practiceAreas = [
  {
    title: "Saga Excellence Academy",
    description:
      "Our Academy offers a comprehensive curriculum of training programs designed to build capabilities at every level. From foundational business skills to advanced leadership development, we equip your teams with the knowledge and tools they need to excel.",
    href: "/practice-areas/academy",
    image: academyImage,
  },
  {
    title: "Pathways to Excellence",
    description:
      "Transform your operations through proven methodologies including Lean principles, Process Excellence, and Operational Excellence. Our structured approach helps organizations eliminate waste, improve quality, and achieve sustainable performance improvements.",
    href: "/practice-areas/pathways",
    image: pathwaysImage,
  },
  {
    title: "Strategy Hub",
    description:
      "Bridge the gap between strategy and execution. Our Strategy Hub services help organizations develop clear strategic roadmaps and implement them with precision, ensuring that your vision translates into measurable business outcomes.",
    href: "/practice-areas/strategy-hub",
    image: strategyImage,
  },
];

export default function PracticeAreas() {
  return (
    <PageLayout>
      <PageHero
        title="Practice Areas"
        subtitle="Comprehensive consulting and training solutions designed to drive excellence across your organization."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Saga Excellence, we've organized our expertise into three complementary 
            practice areas, each designed to address specific organizational needs while 
            working together as an integrated whole. Whether you're looking to develop 
            your people, optimize your processes, or execute your strategy, our experienced 
            consultants bring the methodology, tools, and insights you need to succeed.
          </p>
        </div>

        <div className="space-y-12">
          {practiceAreas.map((area, index) => (
            <div
              key={area.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full rounded-lg shadow-medium aspect-[16/10] object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {area.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {area.description}
                </p>
                <Button asChild variant="gold">
                  <Link to={area.href}>
                    Explore {area.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection variant="primary">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Let's Discuss Your Needs
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Not sure which practice area is right for you? Our consultants will help 
            you identify the best approach for your unique situation.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
