import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gray" | "primary";
}

export function ContentSection({ children, className, variant = "default" }: ContentSectionProps) {
  return (
    <section
      className={cn(
        "section-padding relative",
        variant === "gray" && "bg-secondary border-y border-border",
        variant === "primary" && "bg-navy text-primary-foreground overflow-hidden",
        className
      )}
    >
      {variant === "primary" && (
        <div className="absolute inset-0 grid-texture-dark pointer-events-none" aria-hidden="true" />
      )}
      <div className="container-wide relative">{children}</div>
    </section>
  );
}
