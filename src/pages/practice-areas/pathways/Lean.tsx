import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight, CheckCircle } from "lucide-react";

const toolsAndMethods = [
  "Value Stream Mapping",
  "5S Workplace Organization",
  "Kaizen Events & Workshops",
  "Kanban & Pull Systems",
  "Standard Work Development",
  "Visual Management Systems",
  "Total Productive Maintenance (TPM)",
  "Quick Changeover (SMED)",
  "Poka-Yoke (Error Proofing)",
  "A3 Problem Solving",
];

export default function Lean() {
  return (
    <PageLayout>
      <PageHero
        title="Lean"
        subtitle="Eliminate waste, create value, and build a culture of continuous improvement through the systematic application of Lean principles."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="prose-consulting mb-12">
            <h2>The Lean Philosophy</h2>
            <p>
              Lean is more than a set of tools—it's a comprehensive management philosophy 
              focused on maximizing customer value while minimizing waste. Originating 
              from the Toyota Production System, Lean principles have been successfully 
              applied across every industry, from manufacturing and healthcare to 
              financial services and software development.
            </p>
            <p>
              At Saga Excellence, we help organizations understand and apply Lean 
              principles in ways that respect their unique culture and context. Our 
              approach focuses on developing internal capability, not dependency on 
              consultants. We work alongside your teams to build the knowledge, skills, 
              and systems that sustain continuous improvement long after our engagement ends.
            </p>
            <h2>Our Lean Approach</h2>
            <p>
              We begin by deeply understanding your current state—your value streams, 
              your processes, and your organizational dynamics. Through this understanding, 
              we identify opportunities to eliminate waste, improve flow, and enhance 
              value delivery. We then work with your teams to implement improvements 
              using proven Lean tools and techniques.
            </p>
            <p>
              Beyond tactical improvements, we help you build the leadership behaviors, 
              management systems, and cultural foundations that support ongoing Lean 
              transformation. This systems-based approach ensures that improvements 
              are sustained and that your organization develops the capability to 
              continue improving indefinitely.
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
                Start Your Lean Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
