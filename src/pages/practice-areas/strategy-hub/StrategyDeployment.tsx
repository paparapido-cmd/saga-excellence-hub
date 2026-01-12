import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight } from "lucide-react";

export default function StrategyDeployment() {
  return (
    <PageLayout>
      <PageHero
        title="Strategy Deployment"
        subtitle="Transform strategic vision into aligned action through structured deployment methodologies that create organizational focus and clarity."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="prose-consulting mb-12">
            <h2>From Vision to Action</h2>
            <p>
              Strategy Deployment, often called Hoshin Kanri or Policy Deployment, is a 
              systematic approach to translating strategic vision into aligned objectives 
              and initiatives at every level of the organization. It creates clear 
              line-of-sight from executive priorities to frontline activities, ensuring 
              that everyone understands their role in achieving strategic success.
            </p>
            <p>
              Our Strategy Deployment practice helps organizations develop and implement 
              deployment systems that cascade objectives effectively, align resources 
              and efforts, and create the accountability structures needed to ensure 
              strategic priorities drive action.
            </p>
            
            <h2>The Deployment Process</h2>
            <p>
              Effective strategy deployment begins with clarity at the top. We work with 
              executive teams to articulate strategic direction in ways that can be 
              translated into meaningful objectives at every level. This includes 
              identifying breakthrough objectives that require focused attention, as 
              well as the fundamental metrics that must be maintained.
            </p>
            <p>
              From this foundation, we guide the cascading process—helping each level 
              of the organization develop objectives and initiatives that contribute 
              to strategic success while remaining actionable within their sphere of 
              influence. This catchball process ensures alignment while enabling 
              appropriate local adaptation.
            </p>
            
            <h2>Building Deployment Capability</h2>
            <p>
              Beyond implementing a single deployment cycle, we help organizations 
              build the capability to sustain effective strategy deployment over time. 
              This includes developing the planning processes, review rhythms, and 
              leadership behaviors that keep strategy alive throughout the year.
            </p>
            <p>
              The result is an organization where strategic priorities are understood 
              and acted upon at every level, where resources are focused on the vital 
              few initiatives that matter most, and where progress toward strategic 
              objectives is visible and actively managed.
            </p>
          </div>

          <div className="text-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Deploy Your Strategy
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
