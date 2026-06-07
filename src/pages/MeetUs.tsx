import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { Linkedin, Mail } from "lucide-react";

export default function MeetUs() {
  return (
    <PageLayout>
      <PageHero
        title="Meet Us"
        subtitle="Experienced practitioners dedicated to helping organizations achieve lasting excellence."
      />

      <ContentSection>
        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose-consulting">
            <h2>Our Story</h2>
            <p>
              Saga Excellence was founded on a simple belief: that organizations can
              achieve extraordinary results when they combine proven methodologies with
              genuine commitment to excellence. Our founders came together from diverse
              backgrounds—consulting, industry leadership, and academia—united by a
              shared passion for helping organizations realize their full potential.
            </p>
            <p>
              Today, we continue to be driven by that founding vision. Every engagement
              we undertake is guided by our commitment to delivering measurable results,
              building lasting capability, and creating genuine value for our clients.
            </p>

            <h2>Our Philosophy</h2>
            <p>
              We believe that sustainable excellence requires more than the right
              tools and techniques—it requires the right mindset and culture. That's
              why we focus not just on implementing solutions, but on building the
              organizational capabilities that enable continuous improvement long
              after our engagement ends.
            </p>
            <p>
              We work as partners, not just advisors. We roll up our sleeves and work
              alongside your teams, transferring knowledge and building capability at
              every step. Our success is measured by your success—the improvements you
              sustain, the capabilities you develop, and the results you achieve.
            </p>

            <h2>Our Values</h2>
            <p>
              <strong>Excellence:</strong> We hold ourselves to the highest standards in
              everything we do. We pursue excellence not as a destination, but as a
              continuous journey of improvement.
            </p>
            <p>
              <strong>Integrity:</strong> We are honest, transparent, and ethical in all
              our interactions. We give candid advice, even when it's not what clients
              want to hear.
            </p>
            <p>
              <strong>Partnership:</strong> We succeed when our clients succeed. We are
              invested in your outcomes and committed to your long-term success.
            </p>
            <p>
              <strong>Impact:</strong> We focus on results that matter. Every engagement
              is designed to deliver measurable value that advances your strategic objectives.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Leadership
          </h2>
          <div className="flex justify-center">
            <div className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 max-w-sm w-full">
              <div className="aspect-square overflow-hidden bg-secondary flex items-center justify-center">
                <span className="text-6xl font-serif font-bold text-accent/30">SM</span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                  Sladjana Milosavljevic
                </h3>
                <p className="text-accent font-medium text-sm mb-4">
                  Founder &amp; Managing Partner
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  25+ years of experience leading transformation initiatives across Fortune 500 companies.
                  Former VP of Operations at a global manufacturing leader. Deep expertise in Lean
                  methodology, operational excellence, and organizational transformation.
                </p>
                <div className="flex gap-4">
                  
                    href="https://www.linkedin.com/in/sla%C4%91ana-milosavljevi%C4%87-68434a1a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Sladjana's LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  
                    href="mailto:office@sagaexcellence.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Email Sladjana"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
