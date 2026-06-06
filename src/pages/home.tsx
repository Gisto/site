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

export const Home = () => {
  usePageTitle('Gisto | Cross-platform snippets management application');
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
      {/* Mobile Screen Hero Layout */}
      <div className="block lg:hidden overflow-hidden">
        <HeroMobile />
      </div>

      {/* Desktop Screen Hero Layout with Tilted 3D screenshot viewer */}
      <div className="hidden lg:block overflow-hidden">
        <Hero />
      </div>

      <About />
      <UseCases />
      <Comparison />
      <Features />
      <QuickStart />

      <FAQ />
      <Downloads />
    </>
  );
};
