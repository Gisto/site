import React, { Suspense } from 'react';
import { Calendar, CircleArrowLeft, CircleUser, BookOpen } from 'lucide-react';
import { formatDate } from '../lib/utils.ts';
import { useSEO } from '@/lib/seo.tsx';
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

export const DocumentationArticlePage = () => {
  const { params } = useRouter();
  const [frontmatter, setFrontmatter] = React.useState<Frontmatter | null>(null);

  useSEO({
    title: frontmatter?.title || 'Documentation',
    description: frontmatter?.title
      ? `${frontmatter.title} - Gisto documentation`
      : 'Documentation for Gisto snippet manager.',
    canonical: `https://gisto.org/documentation/${params?.slug || ''}`,
  });

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
    ? frontmatter.category.replace(/^[0-9.]+\s*/, '').replace(/\b\w/g, (c) => c.toUpperCase())
    : '';

  return (
    <Section className="py-16 sm:py-24 min-h-[700px]">
      <div className="mb-8 flex items-center justify-between">
        <Link
          className="group inline-flex items-center gap-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          to={'/documentation'}
        >
          <CircleArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />{' '}
          Back to Docs
        </Link>

        {frontmatter?.category && (
          <span className="rounded-md border border-border px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {categoryName}
          </span>
        )}
      </div>

      <Suspense fallback={<Loading className="h-[300px]" />}>
        <div className="mx-auto max-w-4xl">
          {frontmatter?.title && (
            <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
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
              className="group inline-flex items-center gap-2 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
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
