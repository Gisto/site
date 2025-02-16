import React, { Suspense } from 'react';

import { Badge } from '../components/ui/badge.tsx';
import { Calendar, CircleArrowLeft, CircleUser } from 'lucide-react';

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

  return (
    <Section>
      <Link className="flex gap-2 items-center mb-8" to={'/documentation'}>
        <CircleArrowLeft className="size-4" /> Back to Documentation
      </Link>

      <Suspense fallback={<Loading className="h-[300px]" />}>
        {frontmatter?.category && (
          <Badge variant="primary-outline" key={frontmatter?.category}>
            {upperCaseFirst(frontmatter.category)}
          </Badge>
        )}

        {frontmatter?.title && <h1 className="text-4xl my-4 text-primary">{frontmatter.title} </h1>}

        <MDXLayout>
          <div>
            {frontmatter?.author && (
              <div className="flex gap-2 items-center text-xs mb-2">
                <CircleUser className="size-3" /> {frontmatter.author}
              </div>
            )}

            {frontmatter?.published && (
              <div className="flex gap-2 items-center  text-xs">
                <Calendar className="size-3" />{' '}
                {formatDate({ dateTime: frontmatter.published, withTime: false })}
              </div>
            )}
          </div>

          <div className="mt-8">
            <Content />
          </div>
        </MDXLayout>
      </Suspense>
    </Section>
  );
};
