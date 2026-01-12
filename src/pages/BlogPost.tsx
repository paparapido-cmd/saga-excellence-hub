import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { ContentSection } from "@/components/shared/ContentSection";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";

// Sample blog post content
const blogPostContent = {
  "building-culture-continuous-improvement": {
    title: "Building a Culture of Continuous Improvement",
    author: "James Richardson",
    date: "January 8, 2026",
    readTime: "8 min read",
    category: "Leadership",
    content: `
      <p>Creating a sustainable culture of continuous improvement is one of the most challenging—and rewarding—endeavors an organization can undertake. While many companies launch improvement initiatives, few succeed in making continuous improvement a natural part of how work gets done every day.</p>
      
      <h2>The Foundation: Leadership Commitment</h2>
      <p>Any successful improvement culture begins with genuine commitment from senior leadership. This doesn't mean simply endorsing initiatives or allocating resources, though both are necessary. True commitment means leaders actively demonstrating the behaviors they want to see throughout the organization.</p>
      
      <p>Leaders in improvement-focused cultures spend time at the gemba—the place where work actually happens. They ask questions, listen to frontline employees, and show genuine interest in understanding challenges and opportunities. They celebrate improvement efforts, not just results, and they create psychological safety that enables people to identify problems without fear.</p>
      
      <h2>Building Capability at Every Level</h2>
      <p>Sustainable improvement requires capability throughout the organization. Everyone—from the C-suite to the frontline—needs to understand the principles of continuous improvement and have the skills to apply them in their daily work.</p>
      
      <p>This means investing in training and development, but it also means creating opportunities for people to practice and develop their skills. Improvement projects become learning opportunities, with coaching that helps teams develop proficiency while delivering results.</p>
      
      <h2>Systems That Support Improvement</h2>
      <p>Culture is sustained by systems. Organizations with strong improvement cultures have management systems that make improvement visible, create accountability for results, and provide regular forums for reviewing progress and solving problems.</p>
      
      <p>Daily management routines, tiered escalation processes, and regular improvement reviews all play important roles. These systems ensure that improvement isn't something that happens when there's time—it's an integral part of how the organization operates.</p>
      
      <h2>The Journey Never Ends</h2>
      <p>Perhaps the most important lesson is that building an improvement culture is itself a continuous improvement journey. The best organizations are never satisfied with their current state—they're always looking for ways to strengthen their culture and accelerate their improvement efforts.</p>
      
      <p>This mindset of perpetual evolution is what separates truly excellent organizations from those that achieve temporary success before reverting to old patterns.</p>
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPostContent[slug as keyof typeof blogPostContent] || {
    title: "Blog Post",
    author: "Saga Excellence",
    date: "January 2026",
    readTime: "5 min read",
    category: "Insights",
    content: `
      <p>This is a sample blog post. In a production environment, this content would be loaded from a database or content management system.</p>
      
      <h2>Sample Section</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <h2>Another Section</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `,
  };

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

          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent mb-4">
            {post.category}
          </span>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
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

          <div className="mt-16 pt-8 border-t border-border">
            <div className="bg-secondary rounded-lg p-8 text-center">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
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
