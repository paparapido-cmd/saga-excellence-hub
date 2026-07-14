import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  tag?: string;
  /** Kept for backwards compatibility — images are no longer rendered. */
  image?: string;
  className?: string;
}

export function SectionCard({ title, description, href, tag, className }: SectionCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "area-card group flex flex-col bg-card border border-border rounded-sm p-7 md:p-9",
        "transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md",
        className
      )}
    >
      {tag && (
        <span className="font-mono-brand text-[10.5px] uppercase tracking-[0.22em] text-accent mb-10">
          {tag}
        </span>
      )}
      <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-3 mt-auto">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
      <span className="inline-flex items-center gap-2 text-accent font-medium text-sm">
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
