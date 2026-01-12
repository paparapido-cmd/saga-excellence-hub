import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight, CheckCircle } from "lucide-react";

const topics = [
  "Introduction to Continuous Improvement",
  "Problem Solving Fundamentals",
  "Process Mapping & Analysis",
  "Basic Statistical Concepts",
  "Teamwork & Collaboration Skills",
  "Communication for Excellence",
  "Change Management Essentials",
  "Quality Awareness & Standards",
];

export default function BasicTrainings() {
  return (
    <PageLayout>
      <PageHero
        title="Basic Trainings"
        subtitle="Foundational programs that create a common language of excellence and equip every team member with essential improvement skills."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="prose-consulting mb-12">
            <h2>Building the Foundation for Excellence</h2>
            <p>
              Our Basic Training programs are designed to establish a solid foundation 
              of continuous improvement knowledge across your entire organization. These 
              programs introduce fundamental concepts, tools, and methodologies that 
              enable every team member to contribute to organizational excellence.
            </p>
            <p>
              Whether delivered on-site or through our flexible virtual learning platform, 
              our Basic Training programs combine engaging instruction with hands-on 
              exercises that ensure participants can immediately apply what they learn. 
              Each program is designed to be accessible to professionals at any level, 
              regardless of their prior experience with improvement methodologies.
            </p>
            <h2>Program Outcomes</h2>
            <p>
              Participants in our Basic Training programs develop the knowledge and 
              skills to identify improvement opportunities in their daily work, apply 
              structured problem-solving approaches, contribute effectively to improvement 
              initiatives, and support a culture of continuous improvement across the 
              organization.
            </p>
            <p>
              We work with your leadership team to customize program content, ensuring 
              relevance to your industry, organizational context, and strategic priorities.
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 mb-12">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Topics Covered
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {topics.map((topic) => (
                <div key={topic} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">
                Inquire About Basic Trainings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
