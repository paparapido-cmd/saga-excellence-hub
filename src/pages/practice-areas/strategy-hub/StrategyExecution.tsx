import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight } from "lucide-react";

export default function StrategyExecution() {
  return (
    <PageLayout>
      <PageHero
        title="Strategy Execution"
        subtitle="Turn strategic plans into measurable results through disciplined execution frameworks and capability building."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="prose-consulting mb-12">
            <h2>Execution Excellence</h2>
            <p>
              The best strategies are worthless without effective execution. Research 
              consistently shows that most strategic initiatives fail to achieve their 
              intended outcomes—not because the strategy was wrong, but because 
              execution fell short. Our Strategy Execution practice helps organizations 
              build the disciplines and capabilities needed to turn strategic intent 
              into business results.
            </p>
            <p>
              We take a comprehensive view of execution, addressing the governance 
              structures, program management capabilities, change leadership, and 
              organizational dynamics that determine whether strategic initiatives 
              succeed or fail.
            </p>
            
            <h2>The Execution Framework</h2>
            <p>
              Effective execution requires more than project management. It requires 
              clear governance that enables fast, effective decision-making. It 
              requires disciplined program and portfolio management that keeps 
              initiatives on track. It requires change management that addresses the 
              human dimensions of transformation. And it requires performance 
              management that creates accountability for results.
            </p>
            <p>
              Our execution framework addresses each of these dimensions, creating an 
              integrated approach that significantly improves the likelihood of 
              strategic success. We work with your teams to implement appropriate 
              governance structures, establish effective program management practices, 
              build change leadership capability, and create the review rhythms that 
              keep initiatives on track.
            </p>
            
            <h2>Building Execution Muscle</h2>
            <p>
              Beyond supporting specific strategic initiatives, we help organizations 
              build lasting execution capability. This includes developing the skills, 
              processes, and cultural patterns that enable consistent, reliable 
              execution of strategic priorities over time.
            </p>
            <p>
              Organizations that excel at execution don't just complete projects—they 
              deliver strategic outcomes that create lasting competitive advantage. 
              Our Strategy Execution practice helps you build this capability.
            </p>
          </div>

          <div className="text-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Execute Your Strategy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
