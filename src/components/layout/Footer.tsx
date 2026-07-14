import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const practiceAreas = [
  { title: "Saga Excellence Academy", href: "/practice-areas/academy" },
  { title: "Pathways to Excellence", href: "/practice-areas/pathways" },
  { title: "Strategy Hub", href: "/practice-areas/strategy-hub" },
];

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Meet Us", href: "/meet-us" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/60">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-bold text-primary-foreground">
                Saga <em className="not-italic font-serif italic text-accent">Excellence</em>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Where Excellence Meets Execution. Strategic consulting and executive
              education for forward-thinking organizations.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-mono-brand text-[10.5px] uppercase tracking-[0.2em] text-accent mb-5 font-medium">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-gold-light transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono-brand text-[10.5px] uppercase tracking-[0.2em] text-accent mb-5 font-medium">
              Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-gold-light transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono-brand text-[10.5px] uppercase tracking-[0.2em] text-accent mb-5 font-medium">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <a
                  href="mailto:office@sagaexcellence.com"
                  className="hover:text-gold-light transition-colors text-sm"
                >
                  office@sagaexcellence.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">Europe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-primary-foreground/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Saga Excellence. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-xs text-primary-foreground/40 hover:text-gold-light transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-xs text-primary-foreground/40 hover:text-gold-light transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
