import React, { useEffect, useState } from 'react';
import { Section } from '../section.tsx';
import { HelpCircle } from 'lucide-react';
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
    <Section id="faq-section" className="py-20 section-alt">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
          <HelpCircle className="size-3.5" /> FAQ
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
          Frequently <span className="text-gradient">asked</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          The short answers.
        </p>
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} q={faq.q} a={<faq.Component />} />
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
        <span>
          Still curious? Check the{' '}
          <a href="/documentation" className="text-primary hover:underline font-semibold">
            full docs
          </a>{' '}
          or open an issue on GitHub.
        </span>
      </div>
    </Section>
  );
};
