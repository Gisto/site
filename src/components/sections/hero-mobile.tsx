import { Section } from '../section.tsx';
import { useTheme } from '../theme/theme-provider.tsx';
import { Button } from '../ui/button.tsx';
import { scrollToSection, cn } from '@/lib/utils.ts';
import { useRouter } from 'dirty-react-router';
import { useEffect, useState } from 'react';
import { ArrowRight, Download, Globe } from 'lucide-react';

export const HeroMobile = () => {
  const { resolvedTheme } = useTheme();
  const { navigate } = useRouter();
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    // Preload images
    const images = [
      '/app1-light.png',
      '/app1-dark.png',
      '/app2-light.png',
      '/app2-dark.png',
      '/app3-light.png',
      '/app3-dark.png',
      '/app4-light.png',
      '/app4-dark.png',
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev === 4 ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="relative overflow-hidden mt-20 sm:mt-32">
      <div className="text-center px-4">
        {/* Headline */}
        <h1 className="mb-6 scroll-m-20 text-4xl text-foreground font-extrabold tracking-tight">
          Your snippets. <br />
          <span className="text-gradient">Finally organized.</span>
        </h1>

        {/* Description */}
        <p className="mb-8 text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
          Gisto connects to your existing{' '}
          <strong className="text-foreground font-semibold">GitHub Gists</strong>,{' '}
          <strong className="text-foreground font-semibold">GitLab Snippets</strong>, or{' '}
          <a
            href="https://github.com/sanusart/snippet-bin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 decoration-primary/30 hover:decoration-primary"
          >
            Snippet-Bin
          </a>{' '}
          and gives you search, tags, syntax highlighting, and a real code editor. Works{' '}
          <strong className="text-foreground font-semibold">offline</strong> too.
        </p>
      </div>

      {/* Multi-provider badges for crawler indexing */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-sm mx-auto">
        <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
          GitHub Gists
        </span>
        <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-2xl bg-secondary border border-border text-foreground">
          GitLab Snippets
        </span>
        <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-2xl bg-secondary border border-border text-foreground">
          Local-first
        </span>
        <a
          href="https://github.com/sanusart/snippet-bin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-2xl bg-secondary border border-border text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
        >
          Snippet-Bin
        </a>
      </div>

      {/* CTAs */}
      <div className="mt-8 gap-3 flex flex-col sm:flex-row justify-center items-center px-6">
        <Button
          className="w-full sm:w-auto bg-primary text-primary-foreground font-bold tracking-tight rounded-xl flex items-center justify-center gap-2 px-5 py-2.5 h-10 text-sm shadow-lg shadow-primary/10"
          onClick={() => scrollToSection('downloads-section')}
        >
          <Download className="size-4" /> Download for Desktop
        </Button>

        <Button
          variant="outline"
          className="w-full sm:w-auto glass-panel border-border/80 text-foreground font-bold tracking-tight rounded-xl flex items-center justify-center gap-2 px-5 py-2.5 h-10 text-sm"
          onClick={() => window.open('https://app.gisto.org')}
        >
          <Globe className="size-4" /> Launch Web App
        </Button>

        <Button
          variant="link"
          className="text-muted-foreground hover:text-primary transition-colors text-xs font-semibold flex items-center justify-center gap-1 h-10"
          onClick={() => navigate('/documentation')}
        >
          Docs <ArrowRight className="size-3.5" />
        </Button>
      </div>

      {/* Tilted Rotating Screenshot container (RESTORED EXACTLY AS ORIGINAL) */}
      <div className="mt-10 -mx-4 relative h-[250px] sm:h-[350px] mb-12">
        <img
          src="/app1-light.png"
          className="w-full h-auto opacity-0 invisible"
          aria-hidden="true"
          alt=""
        />
        <div
          className={cn(
            'absolute inset-0 bg-cover bg-no-repeat bg-left transition-opacity duration-1000 w-full shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
            imageIndex === 1 ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage:
              resolvedTheme === 'light' ? 'url(/app1-light.png)' : 'url(/app1-dark.png)',
          }}
        />
        <div
          className={cn(
            'absolute inset-0 bg-cover bg-no-repeat bg-left transition-opacity duration-1000 w-full shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
            imageIndex === 2 ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage:
              resolvedTheme === 'light' ? 'url(/app2-light.png)' : 'url(/app2-dark.png)',
          }}
        />
        <div
          className={cn(
            'absolute inset-0 bg-cover bg-no-repeat bg-left transition-opacity duration-1000 w-full shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
            imageIndex === 3 ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage:
              resolvedTheme === 'light' ? 'url(/app3-light.png)' : 'url(/app3-dark.png)',
          }}
        />
        <div
          className={cn(
            'absolute inset-0 bg-cover bg-no-repeat bg-left transition-opacity duration-1000 w-full shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
            imageIndex === 4 ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage:
              resolvedTheme === 'light' ? 'url(/app4-light.png)' : 'url(/app4-dark.png)',
          }}
        />
      </div>
    </Section>
  );
};
