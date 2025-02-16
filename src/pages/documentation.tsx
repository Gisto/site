import React, { useEffect, useState } from 'react';

import { Card, CardContent, CardTitle, CardHeader } from '../components/ui/card';

import { Link } from 'dirty-react-router';
import { upperCaseFirst } from '@/lib/utils.ts';
import { Section } from '@/components/section.tsx';

interface DocPage {
  default: React.ComponentType;
  frontmatter: {
    title: string;
    author: string;
    published: string;
    image?: string;
    category?: string;
  };
}

export const DocumentationPage = () => {
  const [docs, setDocs] = useState<
    {
      Component: React.ComponentType;
      frontmatter: DocPage['frontmatter'];
      path: string;
    }[]
  >([]);
  const markdownFiles = import.meta.glob('./docs/**/*.mdx');

  useEffect(() => {
    const loadDocs = async () => {
      const postComponents = await Promise.all(
        Object.entries(markdownFiles).map(async ([path, loader]) => {
          const module = (await loader()) as DocPage;
          return { path, Component: module.default, frontmatter: module.frontmatter };
        })
      );

      setDocs(postComponents);
    };
    loadDocs();
  }, []);

  const sortPagesIntoCategories = docs.reduce<Record<string, typeof docs>>((acc, next) => {
    if (next.frontmatter.category) {
      if (!acc[next.frontmatter.category]) {
        acc[next.frontmatter.category] = [];
      }
      acc[next.frontmatter.category].push(next);
    }
    return acc;
  }, {});

  return (
    <Section>
      <h2 className="font-bold text-2xl mb-4">Documentation</h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Object.keys(sortPagesIntoCategories).map((category) => {
          return (
            <Card key={category}>
              <CardHeader>
                <CardTitle>
                  <h2 className="mb-0">{upperCaseFirst(category)}</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {sortPagesIntoCategories[category].map((page) => {
                  const path = page.path.replace('./docs', '/documentation').replace('.mdx', '');

                  return (
                    <p key={page.frontmatter.title}>
                      <Link className="hover:underline underline-offset-2" to={path}>
                        {page.frontmatter.title}
                      </Link>
                    </p>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
