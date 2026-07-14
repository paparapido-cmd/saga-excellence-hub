import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const practiceAreas = [
  {
    title: "Saga Excellence Academy",
    href: "/practice-areas/academy",
    items: [
      { title: "Basic Trainings", href: "/practice-areas/academy/basic-trainings" },
      { title: "Advanced Trainings", href: "/practice-areas/academy/advanced-trainings" },
    ],
  },
  {
    title: "Pathways to Excellence",
    href: "/practice-areas/pathways",
    items: [
      { title: "Lean", href: "/practice-areas/pathways/lean" },
      { title: "Process Excellence", href: "/practice-areas/pathways/process-excellence" },
      { title: "Operational Excellence", href: "/practice-areas/pathways/operational-excellence" },
    ],
  },
  {
    title: "Strategy Hub",
    href: "/practice-areas/strategy-hub",
    items: [
      { title: "Strategy Deployment", href: "/practice-areas/strategy-hub/strategy-deployment" },
      { title: "Strategy Execution", href: "/practice-areas/strategy-hub/strategy-execution" },
    ],
  },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Meet Us", href: "/meet-us" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-wide">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-primary">
              Saga <span className="text-accent italic">Excellence</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors hover:text-accent",
                isActive("/") ? "text-accent" : "text-foreground"
              )}
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                      location.pathname.startsWith("/practice-areas") ? "text-accent" : ""
                    )}
                  >
                    Practice Areas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-4 p-6 lg:grid-cols-3">
                      {practiceAreas.map((category) => (
                        <div key={category.title} className="space-y-3">
                          <NavigationMenuLink asChild>
                            <Link
                              to={category.href}
                              className="block font-serif text-base font-semibold text-primary hover:text-accent transition-colors"
                            >
                              {category.title}
                            </Link>
                          </NavigationMenuLink>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={item.href}
                                    className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                                  >
                                    {item.title}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors hover:text-accent",
                  isActive(link.href) ? "text-accent" : "text-foreground"
                )}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                className="px-4 py-3 text-base font-medium hover:bg-secondary rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Practice Areas with Accordion */}
              <div>
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === "practice-areas" ? null : "practice-areas"
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium hover:bg-secondary rounded-md"
                >
                  Practice Areas
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expandedCategory === "practice-areas" && "rotate-180"
                    )}
                  />
                </button>
                {expandedCategory === "practice-areas" && (
                  <div className="pl-4 space-y-1">
                    {practiceAreas.map((category) => (
                      <div key={category.title} className="py-2">
                        <Link
                          to={category.href}
                          className="block px-4 py-2 text-sm font-semibold text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {category.title}
                        </Link>
                        {category.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-muted-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-3 text-base font-medium hover:bg-secondary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}

              <div className="pt-4 px-4">
                <Button asChild variant="gold" className="w-full">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
