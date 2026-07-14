import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    num: "PHASE 1",
    title: "Diagnose",
    text: "See the process as it really runs, not as it is documented.",
  },
  {
    num: "PHASE 2",
    title: "Design",
    text: "Shape the future state with the people who will own it.",
  },
  {
    num: "PHASE 3",
    title: "Deploy",
    text: "Implement on the floor, side by side with your teams.",
  },
  {
    num: "PHASE 4",
    title: "Sustain",
    text: "Build the standards and habits that make results hold.",
  },
];

/* Abstract line motifs — the visual language of value streams */
function MotifAcademy() {
  return (
    <svg
      className="absolute right-7 top-7 md:right-10 md:top-9 w-[120px] md:w-[190px] opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"
      viewBox="0 0 200 120"
      fill="none"
      aria-hidden="true"
    >
      <path d="M10 105 H60 V80 H110 V55 H160 V30 H186" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <circle cx="60" cy="105" r="3" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <circle cx="110" cy="80" r="3" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <circle cx="160" cy="55" r="3" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <polygon points="186,24 194,30 186,36" fill="hsl(var(--gold))" />
    </svg>
  );
}

function MotifPathways() {
  return (
    <svg
      className="absolute right-7 top-7 md:right-10 md:top-9 w-[120px] md:w-[170px] opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"
      viewBox="0 0 200 120"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 60 H70" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <path d="M70 60 C 100 60, 100 25, 130 25 H186" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <path d="M70 60 C 100 60, 100 95, 130 95 H186" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <circle cx="70" cy="60" r="3.5" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <polygon points="186,20 194,25 186,30" fill="hsl(var(--gold))" />
      <polygon points="186,90 194,95 186,100" fill="hsl(var(--gold))" />
    </svg>
  );
}

function MotifStrategy() {
  return (
    <svg
      className="absolute right-7 top-7 md:right-10 md:top-9 w-[120px] md:w-[170px] opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"
      viewBox="0 0 200 120"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="140" cy="60" r="42" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <circle cx="140" cy="60" r="24" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <circle cx="140" cy="60" r="4" fill="hsl(var(--gold))" />
      <path d="M5 60 H92" stroke="hsl(var(--gold))" strokeWidth="1.2" />
      <polygon points="92,54 102,60 92,66" fill="hsl(var(--gold))" />
    </svg>
  );
}

const areas = [
  {
    tag: "Training & Capability",
    title: "Saga Excellence Academy",
    description:
      "Comprehensive training programs designed to build capabilities at every level of your organization — from foundational skills to advanced leadership competencies.",
    href: "/practice-areas/academy",
    link: "Explore the Academy",
    Motif: MotifAcademy,
    wide: true,
  },
  {
    tag: "Lean · Process · Operations",
    title: "Pathways to Excellence",
    description:
      "Transform your operations through Lean methodologies, process optimization, and operational excellence frameworks that deliver measurable results.",
    href: "/practice-areas/pathways",
    link: "See the Pathways",
    Motif: MotifPathways,
    wide: false,
  },
  {
    tag: "Deployment · Execution",
    title: "Strategy Hub",
    description:
      "From strategy development to flawless execution — we help organizations translate vision into reality with proven deployment methodologies.",
    href: "/practice-areas/strategy-hub",
    link: "Enter the Hub",
    Motif: MotifStrategy,
    wide: false,
  },
];

const principles = [
  {
    title: "We go to the gemba",
    text: "Real improvement starts where the work happens. We diagnose on the floor, not from a conference room.",
    glyph: (
      <svg viewBox="0 0 60 34" className="h-[34px] w-auto overflow-visible" fill="none" aria-hidden="true">
        <circle cx="17" cy="17" r="11" stroke="hsl(var(--gold))" strokeWidth="1.4" />
        <line x1="25" y1="25" x2="40" y2="34" stroke="hsl(var(--gold))" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "We transfer capability",
    text: "Every engagement builds the skills and standards your teams need to keep improving after we leave.",
    glyph: (
      <svg viewBox="0 0 70 34" className="h-[34px] w-auto overflow-visible" fill="none" aria-hidden="true">
        <path d="M2 17 H48" stroke="hsl(var(--gold))" strokeWidth="1.4" />
        <polygon points="48,11 58,17 48,23" fill="hsl(var(--gold))" />
      </svg>
    ),
  },
  {
    title: "We measure what matters",
    text: "Results are defined together, tracked openly, and sustained through standard work — not slideware.",
    glyph: (
      <svg viewBox="0 0 60 34" className="h-[34px] w-auto overflow-visible" fill="none" aria-hidden="true">
        <path d="M4 30 L20 14 L32 24 L54 4" stroke="hsl(var(--gold))" strokeWidth="1.4" />
        <circle cx="54" cy="4" r="3" fill="hsl(var(--gold))" />
      </svg>
    ),
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 grid-texture pointer-events-none opacity-40" aria-hidden="true" />
        <div className="container-wide relative pt-20 md:pt-28 lg:pt-32">
          <div className="max-w-4xl">
            <span className="eyebrow animate-fade-in">
              Operational Excellence · Lean · Strategy
            </span>
            <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-[86px] leading-[1.04] tracking-[-0.01em] text-primary mt-6 mb-7 animate-fade-in">
              Where excellence
              <br />
              meets <em className="italic text-accent whitespace-nowrap">execution.</em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-slide-up">
              We partner with forward-thinking organizations to elevate performance,
              streamline processes, and achieve strategic breakthroughs that last.
            </p>
            <div className="flex flex-wrap gap-4 mb-16 md:mb-24 animate-slide-up">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="navyOutline" size="xl">
                <Link to="/practice-areas">Explore Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Signature: value-stream line */}
          <div className="relative border-t border-border pt-8 pb-12">
            <div className="relative grid grid-cols-2 gap-y-9 md:grid-cols-4">
              <div className="absolute left-0 right-0 top-[7px] hidden md:block" aria-hidden="true">
                <svg viewBox="0 0 1200 16" preserveAspectRatio="none" className="w-full h-4 overflow-visible">
                  <path d="M0 8 H1178" className="stream-path" stroke="hsl(var(--gold))" strokeWidth="1.5" fill="none" />
                  <polygon points="1178,2 1192,8 1178,14" className="stream-head" fill="hsl(var(--gold))" />
                </svg>
              </div>
              {stages.map((s) => (
                <div
                  key={s.title}
                  className="relative border-l border-border pl-4 md:border-l-0 md:pl-0 md:pt-7"
                >
                  <span
                    className="hidden md:block absolute top-[2px] left-0 w-3 h-3 rounded-full bg-background border-2 border-accent"
                    aria-hidden="true"
                  />
                  <span className="font-mono-brand block text-[11px] tracking-[0.18em] text-accent mb-1.5">
                    {s.num}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-1">
                    {s.title}
                  </h3>
                  <p className="text-[13.5px] leading-normal text-muted-foreground max-w-[200px]">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATEMENT ============ */}
      <section className="bg-secondary border-y border-border section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[7fr_1px_4fr] gap-10 lg:gap-16 items-start">
            <h2 className="reveal font-serif font-medium text-3xl md:text-4xl lg:text-[44px] leading-[1.22] text-primary">
              Sustainable success requires more than strategy — it demands{" "}
              <em className="italic text-accent">flawless execution</em>, built into
              the daily work of your organization.
            </h2>
            <div
              className="reveal reveal-d1 hidden lg:block w-px min-h-[180px] h-full bg-gradient-to-b from-accent to-transparent"
              aria-hidden="true"
            />
            <div className="reveal reveal-d2">
              <span className="eyebrow mb-5">Who we are</span>
              <p className="text-muted-foreground mb-4 mt-4">
                Our consultants bring decades of experience across industries,
                combining proven methodologies with innovative approaches.
              </p>
              <p className="text-muted-foreground">
                Whether you're upskilling your workforce, optimizing operations, or
                executing complex strategic initiatives — we provide the expertise
                and partnership you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRACTICE AREAS ============ */}
      <section className="relative bg-navy-deep text-primary-foreground section-padding overflow-hidden">
        <div className="absolute inset-0 grid-texture-dark pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-12 md:mb-16">
            <h2 className="reveal font-serif font-semibold text-4xl md:text-5xl lg:text-[54px] leading-[1.08] max-w-xl">
              Three pillars.
              <br />
              One integrated practice.
            </h2>
            <p className="reveal reveal-d1 text-primary-foreground/60 max-w-sm text-[15.5px]">
              Designed to address your organization's most critical challenges —
              from capability building to strategy execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {areas.map((a, i) => (
              <Link
                key={a.title}
                to={a.href}
                className={`area-card group relative flex flex-col min-h-[300px] border border-primary-foreground/15 rounded-sm p-7 md:p-10 bg-primary-foreground/[0.02] transition-all duration-300 hover:border-accent/50 hover:bg-primary-foreground/[0.05] hover:-translate-y-1 reveal ${
                  i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : ""
                } ${a.wide ? "md:col-span-2" : ""}`}
              >
                <a.Motif />
                <span className="font-mono-brand text-[10.5px] uppercase tracking-[0.22em] text-accent mb-auto">
                  {a.tag}
                </span>
                <h3 className="font-serif text-2xl md:text-[30px] font-semibold leading-tight mt-14 mb-3.5 max-w-md">
                  {a.title}
                </h3>
                <p className="text-primary-foreground/60 text-[15px] max-w-lg mb-6">
                  {a.description}
                </p>
                <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-gold-light w-max">
                  {a.link}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW WE WORK ============ */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-12 md:mb-14">
            <span className="eyebrow">How we work</span>
            <h2 className="reveal font-serif font-semibold text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1] mt-5">
              Partners, not just advisors.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 border-t border-border">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className={`reveal ${i === 1 ? "reveal-d1" : i === 2 ? "reveal-d2" : ""} py-9 border-b border-border md:pr-8 ${
                  i > 0 ? "md:pl-8 md:border-l md:border-border" : ""
                }`}
              >
                <div className="mb-5">{p.glyph}</div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-2.5">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative bg-navy text-primary-foreground section-padding overflow-hidden">
        <div className="absolute inset-0 grid-texture-dark pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <span className="eyebrow">Start the conversation</span>
            <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.08] mt-6 mb-5">
              Ready to transform
              <br />
              your <em className="italic text-gold-light">organization?</em>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mb-9">
              Schedule a complimentary consultation and discover how our integrated
              approach can help you achieve excellence in every aspect of your
              business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/practice-areas">Explore Practice Areas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
