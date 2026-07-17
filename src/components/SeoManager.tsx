import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://www.sagaexcellence.com";
const DEFAULT_TITLE = "Saga Excellence | Strategic Consulting & Lean Methodology";
const DEFAULT_DESCRIPTION =
  "Saga Excellence partners with organizations to elevate performance through Lean methodology, process excellence, and strategic consulting across Europe and beyond.";

const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  "/practice-areas": {
    title: "Practice Areas | Saga Excellence",
    description:
      "Three pillars, one integrated practice: Saga Excellence Academy, Pathways to Excellence, and Strategy Hub.",
  },
  "/practice-areas/academy": {
    title: "Saga Excellence Academy | Training & Capability Building",
    description:
      "Comprehensive training programs that build capabilities at every level of your organization, from foundational skills to advanced leadership competencies.",
  },
  "/practice-areas/academy/basic-trainings": {
    title: "Basic Trainings | Saga Excellence Academy",
    description:
      "Foundational programs that build essential business skills and create a common language of excellence across your organization.",
  },
  "/practice-areas/academy/advanced-trainings": {
    title: "Advanced Trainings | Saga Excellence Academy",
    description:
      "Specialized programs for leaders and practitioners ready to master advanced concepts, tools, and methodologies.",
  },
  "/practice-areas/pathways": {
    title: "Pathways to Excellence | Lean, Process & Operational Excellence",
    description:
      "Transform your operations through Lean methodologies, process optimization, and operational excellence frameworks that deliver measurable results.",
  },
  "/practice-areas/pathways/lean": {
    title: "Lean | Pathways to Excellence",
    description:
      "Eliminate waste, improve flow, and build a culture of continuous improvement with proven Lean methodology.",
  },
  "/practice-areas/pathways/process-excellence": {
    title: "Process Excellence | Pathways to Excellence",
    description:
      "Optimize your core processes for quality, speed, and reliability with structured process excellence methods.",
  },
  "/practice-areas/pathways/operational-excellence": {
    title: "Operational Excellence | Pathways to Excellence",
    description:
      "Build an operating system for sustainable performance — aligned goals, standard work, and daily management.",
  },
  "/practice-areas/strategy-hub": {
    title: "Strategy Hub | Strategy Deployment & Execution",
    description:
      "From strategy development to flawless execution — translate vision into reality with proven deployment methodologies.",
  },
  "/practice-areas/strategy-hub/strategy-deployment": {
    title: "Strategy Deployment | Strategy Hub",
    description:
      "Cascade strategic objectives through your organization with Hoshin Kanri and proven deployment practices.",
  },
  "/practice-areas/strategy-hub/strategy-execution": {
    title: "Strategy Execution | Strategy Hub",
    description:
      "Close the gap between strategic intent and operational results with disciplined execution systems.",
  },
  "/meet-us": {
    title: "Meet Us | Saga Excellence",
    description:
      "Experienced practitioners dedicated to helping organizations achieve lasting excellence. Our story, philosophy, and values.",
  },
  "/blog": {
    title: "Blog | Saga Excellence",
    description:
      "Insights, perspectives, and practical guidance on organizational excellence from our consulting team.",
  },
  "/trainings/lean-foundation": {
    title: "Lean Foundation Workshop | Saga Excellence",
    description:
      "A one-day, hands-on Lean simulation for teams of 8 or 13. Experience how standardization, visual management and Lean layout move real results — without financial investment. Open dates and in-house delivery.",
  },
  "/contact": {
    title: "Contact Us | Saga Excellence",
    description:
      "Ready to start your excellence journey? Reach out to schedule a complimentary consultation.",
  },
  "/privacy": {
    title: "Privacy Policy | Saga Excellence",
    description: "How Saga Excellence collects, uses, and safeguards your information.",
  },
  "/terms": {
    title: "Terms of Service | Saga Excellence",
    description: "The terms governing the use of the Saga Excellence website and services.",
  },
};

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta[pathname];
    const title = meta?.title ?? DEFAULT_TITLE;
    const description = meta?.description ?? DEFAULT_DESCRIPTION;
    const url = `${BASE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url);
  }, [pathname]);

  return null;
}
