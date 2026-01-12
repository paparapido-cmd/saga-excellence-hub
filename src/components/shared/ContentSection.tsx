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
        "section-padding",
        variant === "gray" && "bg-secondary",
        variant === "primary" && "bg-primary text-primary-foreground",
        className
      )}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
}
