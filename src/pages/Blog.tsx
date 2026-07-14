import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { ContentSection } from "@/components/shared/ContentSection";
import { Calendar, User, Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/notion?type=posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Blog"
        subtitle="Insights, perspectives, and practical guidance on organizational excellence from our consulting team."
      />

      <ContentSection>
        {loading && (
          <div className="text-center py-20 text-muted-foreground">
            Loading posts...
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-muted-foreground">
            Unable to load posts. Please try again later.
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No posts published yet.
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="area-card group bg-card rounded-sm border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
              >
                <div className="p-6">
                  <span className="font-mono-brand inline-block text-[10.5px] uppercase tracking-[0.22em] text-accent mb-4">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" />
                      Saga Excellence Team
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
        )}
      </ContentSection>
    </PageLayout>
  );
}
