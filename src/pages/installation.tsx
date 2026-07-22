import { useSEO } from '@/lib/seo.tsx';
import { QuickStart } from '@/components/sections/quick-start.tsx';
import { Downloads } from '@/components/sections/downloads.tsx';
import { Section } from '@/components/section.tsx';
import { Link } from 'dirty-react-router';

export const InstallationPage = () => {
  useSEO({
    title: 'Installation',
    description:
      'Install Gisto on macOS via Homebrew, or download builds for Windows, macOS, and Linux from GitHub Releases.',
    canonical: 'https://gisto.org/installation',
  });

  return (
    <>
      <div className="pt-20" />

      <QuickStart />

      <Section className="py-4">
        <div className="h-px bg-border" />
      </Section>

      <Downloads />

      <Section className="py-16">
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-4">Not sure what to expect?</p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-bold rounded-xl text-sm hover:bg-muted/50 transition-colors"
            >
              See all features
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
