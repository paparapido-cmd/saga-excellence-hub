import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout>
      <PageHero title="Contact Us" subtitle="Ready to start your excellence journey? We're here to help." />

      <ContentSection>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-8">
            Reach out directly and we'll get back to you within 24–48 hours.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                
                  <a href="mailto:office@sagaexcellence.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  office@sagaexcellence.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <address className="text-muted-foreground not-italic">
                  Europe
                </address>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-primary rounded-lg text-primary-foreground">
            <h3 className="font-serif text-xl font-semibold mb-4">
              Schedule a Consultation
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Ready for a more in-depth conversation? Schedule a complimentary
              30-minute consultation with one of our senior consultants.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:office@sagaexcellence.com">Book a Call</a>
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
