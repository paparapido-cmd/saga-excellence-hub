import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { ContentSection } from "@/components/shared/ContentSection";
import { SectionCard } from "@/components/shared/SectionCard";
import { ArrowRight, Target, TrendingUp, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";
import academyImage from "@/assets/training-academy.jpg";
import pathwaysImage from "@/assets/pathways-excellence.jpg";
import strategyImage from "@/assets/strategy-hub.jpg";

const pillars = [
  {
    title: "Saga Excellence Academy",
    description:
      "Comprehensive training programs designed to build capabilities at every level of your organization, from foundational skills to advanced leadership competencies.",
    href: "/practice-areas/academy",
    image: academyImage,
    icon: Lightbulb,
  },
  {
    title: "Pathways to Excellence",
    description:
      "Transform your operations through Lean methodologies, process optimization, and operational excellence frameworks that deliver measurable results.",
    href: "/practice-areas/pathways",
    image: pathwaysImage,
    icon: TrendingUp,
  },
  {
    title: "Strategy Hub",
    description:
      "From strategy development to flawless execution, we help organizations translate vision into reality with proven deployment methodologies.",
    href: "/practice-areas/strategy-hub",
    image: strategyImage,
    icon: Target,
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container-wide py-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Saga <span className="text-accent">Excellence</span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 font-light mb-4 animate-slide-up">
              Where Excellence Meets Execution
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl animate-slide-up">
              We partner with forward-thinking organizations to elevate performance, 
              streamline processes, and achieve strategic breakthroughs that last.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/practice-areas">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <ContentSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Driving Organizational{" "}
            <span className="text-accent">Transformation</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            At Saga Excellence, we understand that sustainable success requires more than 
            just strategy—it demands flawless execution. Our consultants bring decades 
            of experience across industries, combining proven methodologies with 
            innovative approaches to help you achieve your most ambitious goals.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Whether you're looking to upskill your workforce, optimize your operations, 
            or execute complex strategic initiatives, we provide the expertise and 
            partnership you need to succeed.
          </p>
        </div>
      </ContentSection>

      {/* Three Pillars Section */}
      <ContentSection variant="gray">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three integrated pillars designed to address your organization's most 
            critical challenges and opportunities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <SectionCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              href={pillar.href}
              image={pillar.image}
            />
          ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection className="bg-primary">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Discover how our integrated approach can help you achieve excellence 
            in every aspect of your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="xl">
              <Link to="/practice-areas">
                Explore Practice Areas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default Index;
