import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, eyebrow, children }: PageHeroProps) {
  return (
    <section className="relative bg-navy-deep text-primary-foreground py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-texture-dark pointer-events-none" aria-hidden="true" />
      <div className="container-wide relative">
        <div className="max-w-3xl">
          <span className="eyebrow mb-6 animate-fade-in">
            {eyebrow ?? "Saga Excellence"}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-[1.06] mt-5 mb-6 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl animate-slide-up">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
