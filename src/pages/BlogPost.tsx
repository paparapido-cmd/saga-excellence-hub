import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Post {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/notion?type=post&slug=${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (post?.title) {
      document.title = `${post.title} | Saga Excellence`;
    }
  }, [post]);

  return (
    <PageLayout>
      <ContentSection>
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {loading && (
            <div className="text-center py-20 text-muted-foreground">
              Loading post...
            </div>
          )}

          {error && (
            <div className="text-center py-20 text-muted-foreground">
              Post not found.
            </div>
          )}

          {!loading && !error && post && (
            <>
              <span className="font-mono-brand inline-block text-[10.5px] uppercase tracking-[0.22em] text-accent mb-4">
                {post.category}
              </span>

              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Saga Excellence Team
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              <article
                className="prose-consulting"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </>
          )}

          <div className="mt-16 pt-8 border-t border-border">
            <div className="bg-secondary border border-border rounded-sm p-8 md:p-10 text-center">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                Ready to Start Your Excellence Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help your organization achieve sustainable improvement.
              </p>
              <Button asChild variant="gold" size="lg">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageLayout>
  );
}
