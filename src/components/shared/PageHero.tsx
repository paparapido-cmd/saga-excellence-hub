import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-28">
      <div className="container-wide">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed animate-slide-up">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
