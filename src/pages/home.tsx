import { useEffect } from 'react';
import { usePageTitle, useCanonical } from '@/lib/seo.tsx';
import { Hero } from '@/components/sections/hero.tsx';
import { HeroMobile } from '@/components/sections/hero-mobile.tsx';
import { About } from '@/components/sections/about.tsx';
import { Features } from '@/components/sections/features.tsx';
import { UseCases } from '@/components/sections/use-cases.tsx';
import { Comparison } from '@/components/sections/comparison.tsx';
import { QuickStart } from '@/components/sections/quick-start.tsx';
import { FAQ } from '@/components/sections/faq.tsx';

import { Downloads } from '@/components/sections/downloads.tsx';
import { Link } from 'dirty-react-router';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  usePageTitle('Gisto | Your snippets, finally organized');
  useCanonical('https://gisto.org/');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);

  return (
    <>
      <div className="block lg:hidden overflow-hidden">
        <HeroMobile />
      </div>

      <div className="hidden lg:block overflow-hidden">
        <Hero />
      </div>

      <About />

      <UseCases />
      <div className="text-center -mt-6 mb-12">
        <Link
          to="/use-cases"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 transition-colors"
        >
          View all use cases <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <Comparison />

      <Features />
      <div className="text-center -mt-6 mb-12">
        <Link
          to="/features"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 transition-colors"
        >
          View all features <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <QuickStart />

      <FAQ />
      <Downloads />
    </>
  );
};
