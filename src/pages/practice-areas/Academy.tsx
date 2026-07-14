import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { SectionCard } from "@/components/shared/SectionCard";
import { ArrowRight, GraduationCap, Award } from "lucide-react";

const programs = [
  {
    title: "Basic Trainings",
    description:
      "Foundational programs designed to build essential business skills and create a common language of excellence across your organization.",
    href: "/practice-areas/academy/basic-trainings",
    icon: GraduationCap,
  },
  {
    title: "Advanced Trainings",
    description:
      "Specialized programs for leaders and practitioners ready to master advanced concepts, tools, and methodologies.",
    href: "/practice-areas/academy/advanced-trainings",
    icon: Award,
  },
];

export default function Academy() {
  return (
    <PageLayout>
      <PageHero
        title="Saga Excellence Academy"
        subtitle="Building capabilities that drive sustainable performance improvement through world-class training programs."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose-consulting">
            <p>
              The Saga Excellence Academy represents our commitment to developing the 
              human capital that powers organizational excellence. We believe that 
              sustainable transformation requires more than new processes and systems—it 
              demands skilled, knowledgeable, and engaged people at every level.
            </p>
            <p>
              Our training programs are designed by experienced practitioners who understand 
              the real-world challenges organizations face. Each program combines theoretical 
              foundations with practical application, ensuring participants can immediately 
              apply what they learn to their daily work.
            </p>
            <p>
              Whether you're building foundational capabilities across your workforce or 
              developing advanced practitioners and leaders, our Academy provides the 
              structured learning experiences your organization needs to excel.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Link
              key={program.title}
              to={program.href}
              className="area-card group block bg-card rounded-sm border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
            >
              <program.icon className="h-9 w-9 text-accent mb-6" strokeWidth={1.25} />
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                {program.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {program.description}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </ContentSection>

      <ContentSection variant="gray">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Custom Training Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Need a tailored program for your organization? We design custom training 
            solutions that address your specific challenges and objectives.
          </p>
          <Button asChild variant="gold" size="lg">
            <Link to="/contact">
              Discuss Your Training Needs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
