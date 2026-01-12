import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight, CheckCircle } from "lucide-react";

const toolsAndMethods = [
  "Process Mapping & Analysis",
  "SIPOC Diagrams",
  "Voice of Customer (VOC) Analysis",
  "Critical to Quality (CTQ) Trees",
  "Statistical Process Control (SPC)",
  "Root Cause Analysis",
  "DMAIC Methodology",
  "Process Capability Studies",
  "Control Charts & Monitoring",
  "Business Process Reengineering",
];

export default function ProcessExcellence() {
  return (
    <PageLayout>
      <PageHero
        title="Process Excellence"
        subtitle="Optimize your core business processes to deliver consistent quality, reduce variation, and improve customer satisfaction."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="prose-consulting mb-12">
            <h2>Excellence Through Process</h2>
            <p>
              Process Excellence is the discipline of designing, managing, and improving 
              business processes to achieve superior performance. By understanding your 
              processes deeply—how work flows, where value is created, and where 
              problems occur—we can identify and implement improvements that deliver 
              significant, measurable results.
            </p>
            <p>
              Our Process Excellence practice draws on Six Sigma, Total Quality Management, 
              and business process management methodologies to provide a comprehensive 
              approach to process improvement. We combine rigorous analytical methods 
              with practical implementation experience to help you achieve process 
              performance that differentiates your organization in the marketplace.
            </p>
            <h2>Data-Driven Improvement</h2>
            <p>
              Central to our approach is the use of data and statistical analysis to 
              understand process behavior and guide improvement decisions. We help 
              organizations establish measurement systems that provide visibility into 
              process performance, identify sources of variation, and track the impact 
              of improvement initiatives.
            </p>
            <p>
              Whether you're looking to reduce defects, improve cycle times, lower costs, 
              or enhance customer experience, our Process Excellence consultants bring 
              the expertise and tools to help you succeed. We work alongside your teams 
              to transfer knowledge and build internal capability that sustains improvement.
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
                Optimize Your Processes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
