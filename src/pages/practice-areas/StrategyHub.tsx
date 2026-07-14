import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight, Compass, Rocket } from "lucide-react";

const services = [
  {
    title: "Strategy Deployment",
    description:
      "Translate your strategic vision into clear objectives, aligned initiatives, and measurable outcomes through structured deployment methodologies.",
    href: "/practice-areas/strategy-hub/strategy-deployment",
    icon: Compass,
  },
  {
    title: "Strategy Execution",
    description:
      "Turn strategic plans into reality with disciplined execution frameworks that ensure initiatives deliver their intended results.",
    href: "/practice-areas/strategy-hub/strategy-execution",
    icon: Rocket,
  },
];

export default function StrategyHub() {
  return (
    <PageLayout>
      <PageHero
        title="Strategy Hub"
        subtitle="Bridge the gap between strategic vision and operational reality through disciplined deployment and execution methodologies."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose-consulting">
            <p>
              The Strategy Hub brings together our expertise in strategy deployment 
              and strategy execution to help organizations translate vision into results. 
              We understand that great strategies fail not because they're wrong, but 
              because they're not effectively deployed and executed.
            </p>
            <p>
              Our approach bridges the gap between the boardroom and the front line, 
              creating clear line-of-sight from strategic objectives to daily activities. 
              We help organizations develop the structures, processes, and capabilities 
              needed to ensure that strategic priorities drive action and deliver results 
              across the enterprise.
            </p>
            <p>
              Whether you're launching a major transformation initiative, cascading 
              annual objectives, or building execution discipline, our Strategy Hub 
              consultants provide the methodologies and expertise to help you succeed.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="area-card group block bg-card rounded-sm border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
            >
              <service.icon className="h-9 w-9 text-accent mb-6" strokeWidth={1.25} />
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
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
            Strategy That Delivers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Ready to close the strategy-execution gap? Let's discuss how the 
            Strategy Hub can help you achieve your most ambitious goals.
          </p>
          <Button asChild variant="gold" size="lg">
            <Link to="/contact">
              Schedule a Strategy Discussion
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
