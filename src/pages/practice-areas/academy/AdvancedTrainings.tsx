import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight, CheckCircle } from "lucide-react";

const topics = [
  "Lean Six Sigma Green Belt Certification",
  "Lean Six Sigma Black Belt Certification",
  "Advanced Statistical Analysis",
  "Design of Experiments (DOE)",
  "Strategic Problem Solving",
  "Change Leadership & Transformation",
  "Coaching & Facilitation Skills",
  "Advanced Process Design",
  "Project Portfolio Management",
  "Business Process Reengineering",
];

export default function AdvancedTrainings() {
  return (
    <PageLayout>
      <PageHero
        title="Advanced Trainings"
        subtitle="Comprehensive certification programs for practitioners and leaders ready to master advanced improvement methodologies."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="prose-consulting mb-12">
            <h2>Developing Expert Practitioners</h2>
            <p>
              Our Advanced Training programs are designed for professionals who are ready 
              to take their improvement skills to the next level. These intensive programs 
              provide deep expertise in sophisticated methodologies, advanced analytical 
              tools, and leadership competencies required to drive complex improvement 
              initiatives.
            </p>
            <p>
              Each advanced program combines rigorous classroom instruction with real-world 
              project application. Participants work on actual organizational challenges, 
              applying advanced tools and techniques under the guidance of experienced 
              Master Black Belt instructors. This approach ensures that learning translates 
              directly into measurable business results.
            </p>
            <h2>Certification Programs</h2>
            <p>
              Our certification programs follow internationally recognized body of knowledge 
              standards while incorporating practical insights from our consulting experience. 
              Participants who successfully complete program requirements and demonstrate 
              competency through project work receive industry-recognized certifications 
              that validate their expertise.
            </p>
            <h2>Executive Education</h2>
            <p>
              For senior leaders, we offer executive education programs that provide 
              strategic perspective on excellence initiatives. These programs focus on 
              creating the conditions for success, leading transformation, and building 
              organizational capability that sustains long-term improvement.
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 mb-12">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Topics & Certifications
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
                Inquire About Advanced Trainings
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
