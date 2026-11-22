import React, { useEffect, useState } from 'react';
import { Link } from 'dirty-react-router';
import { Section } from '@/components/section.tsx';
import { useSEO } from '@/lib/seo.tsx';
import { ArrowRight, Search } from 'lucide-react';

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
  useSEO({
    title: 'Documentation',
    description:
      'Learn how to use Gisto: search snippets, add tags, use snippet types, connect GitHub Gists and GitLab Snippets, use local storage, and more.',
    canonical: 'https://gisto.org/documentation',
  });
  const [docs, setDocs] = useState<
    {
      Component: React.ComponentType;
      frontmatter: DocPage['frontmatter'];
      path: string;
    }[]
  >([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const markdownFiles = import.meta.glob('./docs/**/*.mdx');
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

  const normalizeCategory = (raw: string) => raw.replace(/^[0-9.]+\s*/, '').toLowerCase();

  const getDisplayName = (raw: string) => raw.replace(/^[0-9.]+\s*/, '');

  const sortPagesIntoCategories = docs.reduce<
    {
      displayName: string;
      pages: typeof docs;
    }[]
  >((acc, next) => {
    if (next.frontmatter.category) {
      const key = normalizeCategory(next.frontmatter.category);
      const existing = acc.find((g) => g.displayName.toLowerCase() === key);
      if (existing) {
        existing.pages.push(next);
      } else {
        acc.push({
          displayName: getDisplayName(next.frontmatter.category),
          pages: [next],
        });
      }
    }
    return acc;
  }, []);

  const filtered = sortPagesIntoCategories
    .sort((a, b) => {
      const preferredOrder = ['intro', 'knowledge base'];
      const aName = a.displayName.toLowerCase();
      const bName = b.displayName.toLowerCase();

      const aIndex = preferredOrder.indexOf(aName);
      const bIndex = preferredOrder.indexOf(bName);

      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;

      return a.displayName.localeCompare(b.displayName);
    })
    .map((group) => [
      group.displayName,
      search
        ? group.pages.filter((p) =>
            p.frontmatter.title.toLowerCase().includes(search.toLowerCase())
          )
        : group.pages,
    ])
    .filter(([, pages]) => (pages as typeof docs).length > 0) as [string, typeof docs][];

  return (
    <Section className="py-16 sm:py-24 min-h-[700px]">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Docs</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Documentation</h1>
        <p className="mt-3 text-muted-foreground">
          Guides, answers, and reference material for Gisto.
        </p>
      </div>

      <div className="relative mt-8 max-w-md">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search documentation..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border border-border bg-background py-2.5 pl-10 pr-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-foreground/30 focus:outline-none"
        />
      </div>

      <div className="mt-12 space-y-10">
        {filtered.map(([category, pages]) => (
          <div key={category}>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-base font-medium text-foreground">{category}</h2>
              <span className="font-mono text-xs text-muted-foreground">
                {pages.length} {pages.length === 1 ? 'article' : 'articles'}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((page) => {
                const path = page.path.replace('./docs', '/documentation').replace('.mdx', '');

                return (
                  <Link
                    key={page.frontmatter.title}
                    to={path}
                    className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/20"
                  >
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        {page.frontmatter.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {page.frontmatter.published &&
                          `Updated ${new Date(page.frontmatter.published).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
                      </p>
                    </div>
                    <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <Search className="mx-auto mb-4 size-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">No articles found matching "{search}"</p>
          </div>
        )}
      </div>
    </Section>
  );
};
