import React, { useEffect, useState } from 'react';
import { Section } from '../section.tsx';
import { HelpCircle, Sparkles } from 'lucide-react';
import { FAQItem } from '../ui/faq-item.tsx';

interface DocPage {
  default: React.ComponentType;
  frontmatter: {
    title: string;
    category?: string;
  };
}

export const FAQ = () => {
  const [faqs, setFaqs] = useState<{ q: string; a: string }[]>([]);
  const markdownFiles = import.meta.glob('../../pages/docs/**/*.mdx');

  useEffect(() => {
    const loadFaqs = async () => {
      const allDocs = await Promise.all(
        Object.entries(markdownFiles).map(async ([, loader]) => {
          const module = (await loader()) as DocPage;
          return {
            q: module.frontmatter.title,
            a: module.default, // The component itself as answer
            category: module.frontmatter.category || '',
          };
        })
      );

      const filteredFaqs = allDocs
        .filter((doc) => doc.category.toLowerCase().includes('f.a.q'))
        .map((doc) => ({
          q: doc.q,
          a: doc.q, // Just placeholder if we need strings, but we'll render the component
          Component: doc.a,
        }));

      setFaqs(filteredFaqs as any);
    };
    loadFaqs();
  }, []);

  return (
    <Section id="faq-section" className="py-12 relative">
      <div className="glow-bg bottom-10 right-10 opacity-20 dark:opacity-30" />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
          <HelpCircle className="size-3.5" /> FAQ
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-foreground">
          Frequently <span className="text-gradient">asked questions</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Everything you need to know about Gisto’s local-first architecture, cloud sync, and
          security.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq: any, index) => (
          <FAQItem key={index} q={faq.q} a={<faq.Component />} />
        ))}
      </div>

      {/* Support Banner */}
      <div className="mt-12 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
        <Sparkles className="size-3.5 text-amber-500 animate-pulse" />
        <span>
          Still have questions? Explore the full{' '}
          <a href="/documentation" className="text-primary hover:underline font-semibold">
            Gisto Documentation
          </a>{' '}
          or join Gisto contributors on GitHub.
        </span>
      </div>
    </Section>
  );
};
