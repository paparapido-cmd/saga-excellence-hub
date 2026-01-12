import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight, Building2, TrendingUp, Clock } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    industry: "Manufacturing",
    client: "Global Automotive Supplier",
    challenge: "High defect rates and extended lead times impacting customer satisfaction and profitability.",
    result: "45% reduction in defects, 30% improvement in lead times, $12M annual savings.",
    services: ["Lean", "Process Excellence"],
  },
  {
    id: 2,
    industry: "Healthcare",
    client: "Regional Hospital Network",
    challenge: "Inconsistent patient outcomes and high operational costs across multiple facilities.",
    result: "20% improvement in patient satisfaction, 15% reduction in operating costs.",
    services: ["Operational Excellence", "Strategy Deployment"],
  },
  {
    id: 3,
    industry: "Financial Services",
    client: "Multinational Bank",
    challenge: "Slow loan processing times and high error rates affecting customer experience.",
    result: "60% reduction in processing time, 80% reduction in errors, improved NPS scores.",
    services: ["Process Excellence", "Basic Trainings"],
  },
  {
    id: 4,
    industry: "Technology",
    client: "Enterprise Software Company",
    challenge: "Strategic initiatives consistently failing to deliver expected outcomes.",
    result: "85% of strategic initiatives now achieve targets, accelerated time-to-market.",
    services: ["Strategy Deployment", "Strategy Execution"],
  },
  {
    id: 5,
    industry: "Retail",
    client: "National Retail Chain",
    challenge: "Supply chain inefficiencies and inventory management issues across 200+ locations.",
    result: "35% reduction in inventory costs, 25% improvement in product availability.",
    services: ["Lean", "Operational Excellence"],
  },
  {
    id: 6,
    industry: "Energy",
    client: "Utility Company",
    challenge: "Need to build internal continuous improvement capability across diverse workforce.",
    result: "500+ employees trained, established sustainable improvement culture.",
    services: ["Basic Trainings", "Advanced Trainings"],
  },
];

export default function SuccessfulCases() {
  return (
    <PageLayout>
      <PageHero
        title="Successful Cases"
        subtitle="Real results from organizations that partnered with Saga Excellence to achieve their performance improvement goals."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Our work spans industries and geographies, but our approach remains constant: 
            partner closely with clients, apply proven methodologies, and deliver 
            measurable results that create lasting value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-card rounded-lg border border-border overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300"
            >
              <div className="bg-primary p-4">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">{study.industry}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mt-2">
                  {study.client}
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <Clock className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Challenge
                      </span>
                      <p className="text-sm text-foreground mt-1">{study.challenge}</p>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Result
                      </span>
                      <p className="text-sm text-foreground font-medium mt-1">
                        {study.result}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection variant="primary">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Let's discuss how we can help you achieve similar results in your organization.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
