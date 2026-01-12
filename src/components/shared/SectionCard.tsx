import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  className?: string;
}

export function SectionCard({ title, description, href, image, className }: SectionCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group block bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center gap-2 text-accent font-medium">
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
