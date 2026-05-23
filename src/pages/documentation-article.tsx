import React, { Suspense } from 'react';
import { Calendar, CircleArrowLeft, CircleUser, BookOpen } from 'lucide-react';
import { formatDate, upperCaseFirst } from '../lib/utils.ts';
import { MDXLayout } from '../components/mdx-layout.tsx';
import { Link, useRouter } from 'dirty-react-router';
import { Section } from '@/components/section.tsx';
import { Loading } from '@/components/loading.tsx';

interface Frontmatter {
  category: string;
  published: string;
  title?: string;
  author?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  intro: 'bg-primary/10 border-primary/20 text-primary',
  faq: 'bg-amber-500/10 border-amber-500/20 text-amber-500',
  features: 'bg-purple-500/10 border-purple-500/20 text-purple-500',
  'knowledge base': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
};

const getCategoryColor = (category: string) => {
  const lower = category.toLowerCase();
  for (const [key, color] of Object.entries(CATEGORY_COLORS)) {
    if (lower.includes(key)) return color;
  }
  return 'bg-primary/10 border-primary/20 text-primary';
};

export const DocumentationArticlePage = () => {
  const { params } = useRouter();
  const [frontmatter, setFrontmatter] = React.useState<Frontmatter | null>(null);

  if (!params?.slug) {
    return null;
  }

  const { slug } = params;

  const Content = React.lazy(() =>
    import(`./docs/${slug}.mdx`).then((module) => {
      if (module.frontmatter) {
        setFrontmatter(module.frontmatter);
      }
      return {
        default: module.default,
      };
    })
  );

  const categoryName = frontmatter?.category
    ? upperCaseFirst(frontmatter.category.replace(/^[0-9.]+\s*/, ''))
    : '';

  return (
    <Section className="py-12 relative min-h-[700px]">
      <div className="glow-bg top-[-50px] left-[50%] -translate-x-1/2 opacity-30" />
      <div className="glow-bg bottom-0 right-10 opacity-20" />

      <div className="mb-8 relative z-10 flex items-center justify-between">
        <Link
          className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors py-2 rounded-xl group"
          to={'/documentation'}
        >
          <CircleArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />{' '}
          Back to Docs
        </Link>

        {frontmatter?.category && (
          <span
            className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-lg border ${getCategoryColor(frontmatter.category)}`}
          >
            {categoryName}
          </span>
        )}
      </div>

      <Suspense fallback={<Loading className="h-[300px]" />}>
        <div className="max-w-4xl mx-auto relative z-10">
          {frontmatter?.title && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6 text-foreground">
              {frontmatter.title}
            </h1>
          )}

          <div className="flex flex-wrap gap-4 items-center pb-8 mb-10 border-b border-border text-xs text-muted-foreground">
            {frontmatter?.author && (
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-muted border border-border">
                  <CircleUser className="size-3.5" />
                </div>
                <span className="font-medium">{frontmatter.author}</span>
              </div>
            )}

            {frontmatter?.published && (
              <div className="flex items-center gap-2">
                <Calendar className="size-3.5" />
                <span className="font-medium">
                  {formatDate({ dateTime: frontmatter.published, withTime: false })}
                </span>
              </div>
            )}

            <div className="flex items-center gap-2 ml-auto">
              <BookOpen className="size-3.5" />
              <span className="font-medium">Technical Guide</span>
            </div>
          </div>

          <div className="relative">
            <MDXLayout>
              <div className="mt-2 relative">
                <Content />
              </div>
            </MDXLayout>
          </div>

          <div className="mt-16 pt-10 border-t border-border text-center">
            <Link
              className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors py-2 rounded-xl group"
              to={'/documentation'}
            >
              <CircleArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />{' '}
              Back to all documentation
            </Link>
          </div>
        </div>
      </Suspense>
    </Section>
  );
};
