import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { Calendar, MapPin, Users, Ticket, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

/* ============================================================
   ⬇️ OPEN TRAINING DETAILS — update when confirmed.
   Leave a field as "" and the page will show "To be announced".
   ============================================================ */
const OPEN_TRAINING = {
  date: "", // e.g. "Thursday, 24 September 2026"
  location: "", // e.g. "Impact Hub, Belgrade"
  price: "", // e.g. "€290 + VAT per participant"
  seats: "13", // max seats for the open date
};

const TBA = "To be announced";

const problems = [
  {
    number: "01",
    title: "Work is not standardized",
    text: "Everyone does the job their own way — quality and speed depend on who is on shift.",
  },
  {
    number: "02",
    title: "Problems surface too late",
    text: "Issues stay hidden inside the process until they reach the deadline or the customer.",
  },
  {
    number: "03",
    title: "Layouts slow down the flow",
    text: "Distance, searching and waiting quietly consume a large share of productive time.",
  },
  {
    number: "04",
    title: "\u201CImprovement\u201D means \u201Cinvestment\u201D",
    text: "Teams wait for budget and new tools — instead of changing the way the work flows.",
  },
];

const fundamentals = [
  {
    title: "Standardization",
    text: "One best way of working — repeatable, teachable, measurable.",
  },
  {
    title: "Visual Management",
    text: "Problems become visible in seconds, not at the end of the month.",
  },
  {
    title: "Lean Layout",
    text: "The workplace itself starts supporting the flow instead of fighting it.",
  },
];

const steps = [
  {
    number: "01",
    title: "Run a real process, end to end",
    text: "Participants operate a complete production flow with physical stations and material.",
  },
  {
    number: "02",
    title: "Measure the baseline",
    text: "The first round shows how the process really behaves — in minutes, defects and frustration.",
  },
  {
    number: "03",
    title: "Improve, round after round",
    text: "The team applies standardization, visual management and layout changes — then runs again.",
  },
  {
    number: "04",
    title: "See the results immediately",
    text: "Every round is measured. The improvement is visible in the numbers, not in a slide.",
  },
];

const formatStats = [
  {
    value: "1",
    label: "Full Day",
    text: "8 hours of facilitated, hands-on work — no passive segments.",
  },
  {
    value: "8 / 13",
    label: "Participants",
    text: "The simulation is designed for exactly these two team setups — every seat is an active role.",
  },
  {
    value: "3",
    label: "Fundamentals",
    text: "Standardization, visual management and Lean layout — applied, not explained.",
  },
  {
    value: "0",
    label: "Investment Needed",
    text: "Every improvement comes from the way of working — not from new tools or budget.",
  },
];

const takeaways = [
  {
    title: "An eye for waste",
    text: "People start recognizing bottlenecks, waiting and overprocessing in their own daily work — unprompted.",
  },
  {
    title: "A shared vocabulary",
    text: "Standard, flow, WIP, visual signal — the team leaves with a common language for talking about processes.",
  },
  {
    title: "Improvement ideas of their own",
    text: "The debrief produces concrete, low-cost ideas your people already believe in — because they generated them.",
  },
  {
    title: "A Lean mindset, not a toolbox",
    text: "The conviction that results can improve without investment — proven to them by their own measured rounds.",
  },
];

const facilitatorPoints = [
  {
    title: "15 years in Continuous Improvement",
    text: "Progressive leadership across manufacturing, aviation, logistics and e-commerce.",
  },
  {
    title: "Built OpEx systems at C-level",
    text: "Designed and led a complete, seven-unit operational excellence function from the ground up.",
  },
  {
    title: "$1M in sustained annual savings",
    text: "Delivered through Lean programs on real shop floors — measured, audited, sustained.",
  },
  {
    title: "Educator by conviction",
    text: "Designs and facilitates hands-on Lean simulations and executive education across Europe.",
  },
];

const pilotSteps = [
  {
    number: "1",
    title: "Pilot workshop",
    text: "One team — 8 or 13 people — spends one day inside the simulation.",
  },
  {
    number: "2",
    title: "Leadership debrief",
    text: "You receive observations from the day plus improvement ideas generated by your own people.",
  },
  {
    number: "3",
    title: "Decision on rollout",
    text: "Extend to further teams, or connect the workshop to a concrete improvement initiative.",
  },
];

const registrationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(150, "Company must be less than 150 characters").optional().or(z.literal("")),
  interest: z.enum(["open-training", "in-house"]),
  message: z.string().trim().max(2000, "Message must be less than 2000 characters").optional().or(z.literal("")),
});

export default function LeanFoundation() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "open-training",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = registrationSchema.parse(formData);

      const response = await fetch("https://formspree.io/f/maqzeggw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || "—",
          interest:
            validatedData.interest === "open-training"
              ? "Open training (public date)"
              : "In-house workshop for our company",
          message: validatedData.message || "—",
          _replyto: validatedData.email,
          _subject: "Lean Foundation Workshop — new inquiry",
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank you — we received your inquiry!",
          description: "We'll get back to you within 24-48 hours.",
        });
        setFormData({ name: "", email: "", company: "", interest: "open-training", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later or write to office@sagaexcellence.com.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollTo = (id: string, interest?: "open-training" | "in-house") => {
    if (interest) {
      setFormData((prev) => ({ ...prev, interest }));
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Saga Excellence — Executive Education"
        title="Lean Foundation Workshop"
        subtitle="How basic Lean principles improve overall results — without financial investment. In-person, practical, simulation-based."
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up">
          <Button variant="hero" size="lg" onClick={() => scrollTo("open-training", "open-training")}>
            Join the open training
          </Button>
          <Button variant="heroOutline" size="lg" onClick={() => scrollTo("in-house", "in-house")}>
            Bring it in-house
          </Button>
        </div>
      </PageHero>

      {/* Why this workshop exists */}
      <ContentSection>
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Why this workshop exists</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-5">
            Most teams don't struggle because of a lack of tools.{" "}
            <span className="italic text-accent">They struggle because processes are invisible.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item) => (
            <div key={item.number} className="bg-card rounded-lg border border-border p-8 shadow-soft">
              <span className="font-mono text-sm text-accent tracking-widest">{item.number}</span>
              <h3 className="font-serif text-xl font-semibold text-foreground mt-3 mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Goal — three fundamentals */}
      <ContentSection variant="gray">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Goal of the workshop</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-5 mb-6">
              Experience how Lean principles move real results
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Participants work on a real, physical process and improve it step by step — and see how
              three fundamentals directly change flow, quality, deadlines and workload.
            </p>
            <p className="font-serif italic text-lg text-foreground mt-6">
              No slides, no theory decks — the process itself is the classroom.
            </p>
          </div>
          <div className="space-y-6">
            {fundamentals.map((item, index) => (
              <div key={item.title} className="flex items-start gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-primary-foreground font-semibold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* How it works */}
      <ContentSection>
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">How it works in practice</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-5">
            Not a lecture. A hands-on process simulation.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div key={item.number} className="bg-card rounded-lg border border-border p-6 shadow-soft">
              <span className="font-mono text-sm text-accent tracking-widest">{item.number}</span>
              <h3 className="font-serif text-lg font-semibold text-foreground mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Workshop format */}
      <ContentSection variant="gray">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Workshop format</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-5">
            One day. One process. Visible change.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {formatStats.map((item) => (
            <div key={item.label} className="bg-card rounded-lg border border-border p-6 shadow-soft">
              <div className="font-serif text-4xl font-semibold text-foreground">{item.value}</div>
              <div className="font-mono text-xs text-accent tracking-widest uppercase mt-2 mb-4">
                {item.label}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-muted-foreground max-w-3xl">
          In-person and highly interactive — run at your site, an off-site venue or one of our open
          dates. Works best with mixed groups: operations, support functions and leadership together.
        </p>
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mt-3">
          Delivered in English
        </p>
      </ContentSection>

      {/* Facilitator */}
      <ContentSection variant="primary">
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-start">
          <div className="max-w-xs">
            <img
              src="/sladjana.jpg"
              alt="Sladjana Milosavljevic, Founder & Managing Partner of Saga Excellence"
              className="rounded-lg shadow-strong w-full"
              loading="lazy"
            />
            <p className="font-serif italic text-primary-foreground/80 mt-6 leading-relaxed">
              "The best training doesn't give answers — it changes how a team sees its own process."
            </p>
          </div>
          <div>
            <span className="eyebrow">Your facilitator</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-5 mb-2">
              Sladjana Milosavljevic
            </h2>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
              Founder &amp; Managing Partner — Saga Excellence
            </p>
            <p className="text-primary-foreground/80 mb-8">
              Operational Excellence Leader · Lean Six Sigma Black Belt
            </p>
            <div className="space-y-6">
              {facilitatorPoints.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">{item.title}</h3>
                    <p className="text-primary-foreground/70 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Takeaways */}
      <ContentSection>
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">What your team takes away</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-5">
            The workshop ends. The way of seeing stays.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {takeaways.map((item) => (
            <div key={item.title} className="bg-card rounded-lg border border-border p-8 shadow-soft">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Open training */}
      <div id="open-training" className="scroll-mt-24">
      <ContentSection variant="gray">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Open training</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-5 mb-4">
            Join the next open date
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ideal if you want to experience the workshop yourself, send one or two people before
            deciding on an in-house delivery, or simply invest a day in seeing processes differently.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
            <Calendar className="h-6 w-6 text-accent mb-4" />
            <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-1">Date</div>
            <div className="font-semibold text-foreground">{OPEN_TRAINING.date || TBA}</div>
          </div>
          <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
            <MapPin className="h-6 w-6 text-accent mb-4" />
            <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-1">Location</div>
            <div className="font-semibold text-foreground">{OPEN_TRAINING.location || TBA}</div>
          </div>
          <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
            <Ticket className="h-6 w-6 text-accent mb-4" />
            <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-1">Price</div>
            <div className="font-semibold text-foreground">{OPEN_TRAINING.price || TBA}</div>
          </div>
          <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
            <Users className="h-6 w-6 text-accent mb-4" />
            <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-1">Seats</div>
            <div className="font-semibold text-foreground">Limited to {OPEN_TRAINING.seats} participants</div>
          </div>
        </div>
        <div className="mt-10">
          <Button variant="gold" size="lg" onClick={() => scrollTo("register", "open-training")}>
            Reserve your seat
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Leave your details below and we'll confirm the date and send you all the practical
            information — no payment required at this step.
          </p>
        </div>
      </ContentSection>
      </div>

      {/* In-house */}
      <div id="in-house" className="scroll-mt-24">
      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">In-house — pilot for your organization</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-5 mb-6">
              Start small. Decide with data.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We deliver the full workshop at your site or an off-site venue, for one team of 8 or 13
              people. You get a leadership debrief and improvement ideas generated by your own people —
              then decide on a wider rollout.
            </p>
            <p className="font-serif italic text-lg text-foreground">
              The strongest argument for Lean is your own team, looking at its own numbers.
            </p>
            <div className="mt-8">
              <Button variant="navy" size="lg" onClick={() => scrollTo("register", "in-house")}>
                Request an in-house offer
              </Button>
            </div>
          </div>
          <div className="space-y-8">
            {pilotSteps.map((item) => (
              <div key={item.number} className="flex items-start gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-primary-foreground font-semibold">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
      </div>

      {/* Registration / inquiry form */}
      <div id="register" className="scroll-mt-24">
      <ContentSection variant="primary">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow">Next step</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-5 mb-6">
              Short conversation → date → workshop.
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              15 minutes is enough to see whether this fits you or your team. Leave your details and
              we'll get back to you within 24-48 hours.
            </p>
            <p className="font-mono text-sm text-primary-foreground/60 tracking-wider mt-8">
              office@sagaexcellence.com
            </p>
          </div>
          <div className="bg-card text-card-foreground rounded-lg p-8 shadow-strong">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="interest">I'm interested in *</Label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="open-training">Open training (public date)</option>
                  <option value="in-house">In-house workshop for our company</option>
                </select>
              </div>
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="mt-2"
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="mt-2"
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name (optional)"
                  className="mt-2"
                />
                {errors.company && <p className="text-sm text-destructive mt-1">{errors.company}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Anything we should know — team size, preferred timing, questions… (optional)"
                  className="mt-2 min-h-[100px]"
                />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send inquiry"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </ContentSection>
      </div>
    </PageLayout>
  );
}
