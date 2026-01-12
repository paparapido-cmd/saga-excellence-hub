import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight, CheckCircle } from "lucide-react";

const toolsAndMethods = [
  "Operating System Design",
  "Management System Development",
  "Leadership Behavior Standards",
  "Performance Management Frameworks",
  "Daily Management Systems",
  "Tiered Accountability Structures",
  "Problem Escalation Processes",
  "Continuous Improvement Infrastructure",
  "Culture Transformation Programs",
  "Excellence Maturity Assessments",
];

export default function OperationalExcellence() {
  return (
    <PageLayout>
      <PageHero
        title="Operational Excellence"
        subtitle="Build a comprehensive excellence system that integrates people, processes, and technology to achieve sustainable competitive advantage."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="prose-consulting mb-12">
            <h2>A Systems Approach to Excellence</h2>
            <p>
              Operational Excellence represents the highest level of organizational 
              performance maturity. It goes beyond individual improvement projects or 
              methodologies to create an integrated system where excellence is embedded 
              in how the organization thinks, operates, and improves every day.
            </p>
            <p>
              Our Operational Excellence practice helps organizations design and implement 
              comprehensive excellence systems that align leadership behaviors, management 
              practices, improvement capabilities, and organizational culture around the 
              pursuit of superior performance. This systematic approach creates lasting 
              transformation that continues to deliver results year after year.
            </p>
            <h2>The Excellence Framework</h2>
            <p>
              We work with organizations to develop an Operational Excellence framework 
              tailored to their unique needs and aspirations. This framework defines the 
              operating system that guides daily work, the management system that ensures 
              accountability and alignment, and the improvement system that drives 
              continuous advancement.
            </p>
            <p>
              Central to our approach is the development of leadership at all levels. 
              Operational Excellence requires leaders who model the behaviors, create 
              the conditions, and provide the coaching that enables teams to excel. 
              We help organizations develop these leadership capabilities through a 
              combination of training, coaching, and on-the-job development.
            </p>
            <p>
              The result is an organization where excellence is not an initiative but 
              a way of working—where continuous improvement is everyone's responsibility, 
              problems are solved at their source, and performance gaps are addressed 
              with speed and rigor.
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 mb-12">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Tools & Methods
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {toolsAndMethods.map((tool) => (
                <div key={tool} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Build Your Excellence System
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
