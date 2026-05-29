import React, { useEffect, useState } from 'react';
import { Link } from 'dirty-react-router';
import { Section } from '@/components/section.tsx';
import { BookOpen, ArrowRight, Search } from 'lucide-react';

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
  const [search, setSearch] = useState('');
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
    <Section className="py-12 relative min-h-[700px]">
      <div className="glow-bg top-[-80px] left-[50%] -translate-x-1/2 opacity-50" />
      <div className="glow-bg bottom-0 right-10 opacity-20" />

      <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
          <BookOpen className="size-3.5" /> Docs
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
          Gisto <span className="text-gradient">documentation</span>
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
          Everything you need to get the most out of Gisto.
        </p>
      </div>

      <div className="relative max-w-md mx-auto mb-14 z-20">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground z-30" />
        <input
          type="text"
          placeholder="Search documentation..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-2xl glass-panel border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
        />
      </div>

      <div className="space-y-10 relative z-10">
        {filtered.map(([category, pages]) => (
          <div key={category}>
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-xl font-bold text-foreground">{category}</h2>
              <span className="text-xs text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full border border-border">
                {pages.length} {pages.length === 1 ? 'article' : 'articles'}
              </span>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {pages.map((page) => {
                const path = page.path.replace('./docs', '/documentation').replace('.mdx', '');

                return (
                  <Link
                    key={page.frontmatter.title}
                    to={path}
                    className="group glass-panel p-5 rounded-2xl border-border hover:border-primary/40 transition-all duration-200 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {page.frontmatter.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {page.frontmatter.published &&
                          `Updated ${new Date(page.frontmatter.published).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`}
                      </p>
                    </div>
                    <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-auto" />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Search className="size-10 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">No articles found matching "{search}"</p>
          </div>
        )}
      </div>
    </Section>
  );
};
