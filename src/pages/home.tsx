import { Hero } from '@/components/sections/hero.tsx';
import { Github } from '@/components/sections/github.tsx';
import { Hero2 } from '@/components/sections/hero2.tsx';
import { About } from '@/components/sections/about.tsx';
import { Features } from '@/components/sections/features.tsx';
import { Downloads } from '@/components/sections/downloads.tsx';

export const Home = () => (
  <>
    <div className="block sm:hidden overflow-hidden">
      <Hero />
      <div className="flex justify-center items-center mb-8">
        <Github />
      </div>
    </div>

    <div className="hidden sm:block overflow-hidden">
      <Hero2 />
    </div>

    <About />
    <Features />
    <Downloads />
  </>
);
