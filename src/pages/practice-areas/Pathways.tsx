import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight, Zap, Workflow, Settings } from "lucide-react";

const pathways = [
  {
    title: "Lean",
    description:
      "Eliminate waste and create value through the systematic application of Lean principles and practices that have transformed industries worldwide.",
    href: "/practice-areas/pathways/lean",
    icon: Zap,
  },
  {
    title: "Process Excellence",
    description:
      "Optimize your core processes through rigorous analysis, redesign, and continuous improvement that delivers consistent, reliable outcomes.",
    href: "/practice-areas/pathways/process-excellence",
    icon: Workflow,
  },
  {
    title: "Operational Excellence",
    description:
      "Build a comprehensive excellence system that integrates people, processes, and technology to achieve sustainable competitive advantage.",
    href: "/practice-areas/pathways/operational-excellence",
    icon: Settings,
  },
];

export default function Pathways() {
  return (
    <PageLayout>
      <PageHero
        title="Pathways to Excellence"
        subtitle="Transform your operations through proven methodologies that deliver measurable, sustainable performance improvements."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose-consulting">
            <p>
              The Pathways to Excellence practice area represents our core operational 
              improvement capabilities. We help organizations transform their operations 
              through the disciplined application of Lean principles, process excellence 
              methodologies, and comprehensive operational excellence systems.
            </p>
            <p>
              Our approach is grounded in decades of practical experience across diverse 
              industries. We understand that every organization is unique, and we tailor 
              our methodologies to your specific context, culture, and objectives. Whether 
              you're beginning your improvement journey or looking to accelerate existing 
              initiatives, our consultants bring the expertise and tools you need to succeed.
            </p>
            <p>
              Each pathway builds on fundamental principles while addressing specific 
              organizational needs. Together, they create an integrated approach to 
              operational transformation that delivers lasting results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pathways.map((pathway) => (
            <Link
              key={pathway.title}
              to={pathway.href}
              className="group block bg-card rounded-lg border border-border p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
            >
              <pathway.icon className="h-12 w-12 text-accent mb-6" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors">
                {pathway.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pathway.description}
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
            Start Your Excellence Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Ready to transform your operations? Let's discuss how our Pathways to 
            Excellence can help you achieve your performance improvement goals.
          </p>
          <Button asChild variant="gold" size="lg">
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
