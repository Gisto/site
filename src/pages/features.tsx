import { useSEO } from '@/lib/seo.tsx';
import { Features as FeaturesSection } from '@/components/sections/features.tsx';
import { Section } from '@/components/section.tsx';
import { Link } from 'dirty-react-router';

export const FeaturesPage = () => {
  useSEO({
    title: 'Features',
    description:
      'Full-text search, tags, syntax highlighting, language grouping, a Monaco code editor, dark/light themes, and local storage. Everything you need for snippet management.',
    canonical: 'https://gisto.org/features',
  });

  return (
    <>
      <div className="pt-20" />

      <FeaturesSection />

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
              to="/documentation"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-bold rounded-xl text-sm hover:bg-muted/50 transition-colors"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};
