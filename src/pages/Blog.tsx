import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "building-culture-continuous-improvement",
    title: "Building a Culture of Continuous Improvement",
    excerpt:
      "Discover the key elements that distinguish organizations with thriving improvement cultures from those that struggle to sustain momentum.",
    author: "James Richardson",
    date: "January 8, 2026",
    readTime: "8 min read",
    category: "Leadership",
  },
  {
    id: 2,
    slug: "lean-beyond-manufacturing",
    title: "Lean Beyond Manufacturing: Applications in Service Industries",
    excerpt:
      "How service organizations are adapting Lean principles to eliminate waste, improve flow, and enhance customer experience.",
    author: "Michael Chen",
    date: "January 3, 2026",
    readTime: "6 min read",
    category: "Lean",
  },
  {
    id: 3,
    slug: "strategy-execution-gap",
    title: "Closing the Strategy-Execution Gap",
    excerpt:
      "Why most strategic initiatives fail to deliver results, and what organizations can do to improve their execution track record.",
    author: "Sarah Mitchell",
    date: "December 28, 2025",
    readTime: "10 min read",
    category: "Strategy",
  },
  {
    id: 4,
    slug: "effective-training-programs",
    title: "Designing Training Programs That Actually Work",
    excerpt:
      "Research-backed approaches to corporate learning that drive behavior change and deliver measurable business results.",
    author: "Elena Rodriguez",
    date: "December 20, 2025",
    readTime: "7 min read",
    category: "Training",
  },
  {
    id: 5,
    slug: "metrics-that-matter",
    title: "Metrics That Matter: Measuring What Drives Performance",
    excerpt:
      "How to develop performance measurement systems that provide actionable insights and drive the right behaviors.",
    author: "James Richardson",
    date: "December 15, 2025",
    readTime: "9 min read",
    category: "Performance",
  },
  {
    id: 6,
    slug: "change-leadership-transformation",
    title: "Leading Change in Complex Organizations",
    excerpt:
      "Practical strategies for leading transformation initiatives that address both the technical and human dimensions of change.",
    author: "Sarah Mitchell",
    date: "December 10, 2025",
    readTime: "8 min read",
    category: "Leadership",
  },
];

export default function Blog() {
  return (
    <PageLayout>
      <PageHero
        title="Blog"
        subtitle="Insights, perspectives, and practical guidance on organizational excellence from our consulting team."
      />

      <ContentSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-lg border border-border overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent mb-4">
                  {post.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ContentSection>
    </PageLayout>
  );
}
