import React, { useEffect, useState } from 'react';
import { Section } from '../section.tsx';
import { FAQItem } from '../ui/faq-item.tsx';

interface DocPage {
  default: React.ComponentType;
  frontmatter: {
    title: string;
    category?: string;
  };
}

interface FAQItemData {
  q: string;
  Component: React.ComponentType;
}

export const FAQ = () => {
  const [faqs, setFaqs] = useState<FAQItemData[]>([]);

  useEffect(() => {
    const markdownFiles = import.meta.glob('../../pages/docs/**/*.mdx');
    const loadFaqs = async () => {
      const allDocs = await Promise.all(
        Object.entries(markdownFiles).map(async ([, loader]) => {
          const module = (await loader()) as DocPage;
          return {
            q: module.frontmatter.title,
            a: module.default,
            category: module.frontmatter.category || '',
          };
        })
      );

      const filteredFaqs = allDocs
        .filter((doc) => doc.category.toLowerCase().includes('f.a.q'))
        .map((doc) => ({
          q: doc.q,
          Component: doc.a,
        }));

      setFaqs(filteredFaqs);
    };
    loadFaqs();
  }, []);

  return (
    <Section id="faq-section" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-4/10 rounded-full blur-[100px] float-delayed"></div>

      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">FAQ</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Frequently asked</h2>
        <p className="mt-3 text-muted-foreground">The short answers.</p>
      </div>

      <div className="mt-10 max-w-3xl space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            q={faq.q}
            a={<faq.Component />}
            className="rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg"
          />
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
        Still curious? Check the{' '}
        <a href="/documentation" className="font-medium text-primary hover:underline">
          full docs
        </a>{' '}
        or open an issue on GitHub.
      </p>
    </Section>
  );
};
