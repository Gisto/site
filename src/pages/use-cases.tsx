import { useSEO } from '@/lib/seo.tsx';
import { UseCases as UseCasesSection } from '@/components/sections/use-cases.tsx';
import { Section } from '@/components/section.tsx';
import { Link } from 'dirty-react-router';

export const UseCasesPage = () => {
  useSEO({
    title: 'Use Cases',
    description:
      'Store code snippets, shell scripts, SQL queries, markdown docs, AI prompts, and more. Anything you copy-paste regularly belongs in Gisto.',
    canonical: 'https://gisto.org/use-cases',
  });

  return (
    <>
      <div className="pt-20" />

      <UseCasesSection />

      <Section className="py-16">
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-4">Ready to try it?</p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/installation"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl text-sm hover:bg-primary/90 transition-colors"
            >
              Get Gisto
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-bold rounded-xl text-sm hover:bg-muted/50 transition-colors"
            >
              See all features
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};
