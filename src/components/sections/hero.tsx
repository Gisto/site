import { useTheme } from '../theme/theme-provider.tsx';
import { Button } from '../ui/button.tsx';
import { Section } from '../section.tsx';
import { scrollToSection } from '@/lib/utils.ts';
import { cn } from '@/lib/utils';
import { useRouter } from 'dirty-react-router';
import { useEffect, useState, useCallback } from 'react';
import { Star, GitFork, ArrowRight } from 'lucide-react';

const SCREENSHOTS = [
  { id: 1, label: 'Dashboard' },
  { id: 2, label: 'Editor' },
  { id: 3, label: 'Search' },
  { id: 4, label: 'Tags' },
];

export const Hero = () => {
  const { resolvedTheme } = useTheme();
  const { navigate } = useRouter();
  const [imageIndex, setImageIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [githubStats, setGithubStats] = useState({ stars: 1650, forks: 240 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('https://api.github.com/repos/Gisto/Gisto');
        if (res.ok) {
          const data = await res.json();
          if (data.stargazers_count && data.forks_count) {
            setGithubStats({
              stars: data.stargazers_count,
              forks: data.forks_count,
            });
          }
        }
      } catch (err) {
        console.warn('Could not fetch dynamic repo stats: ', err);
      }
    };
    fetchStats();

    const images = SCREENSHOTS.map((s) => `/app${s.id}-${resolvedTheme}.png`);
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const next = () => {
      setIsFading(true);
      setTimeout(() => {
        setImageIndex((prev) => (prev === SCREENSHOTS.length ? 1 : prev + 1));
        setIsFading(false);
      }, 300);
    };

    const interval = setInterval(next, 8000);

    return () => clearInterval(interval);
  }, [resolvedTheme]);

  const theme = resolvedTheme === 'light' ? 'light' : 'dark';

  const handleThumbClick = useCallback(
    (id: number) => {
      if (id === imageIndex) return;
      setIsFading(true);
      setTimeout(() => {
        setImageIndex(id);
        setIsFading(false);
      }, 300);
    },
    [imageIndex]
  );

  return (
    <div className="relative border-b border-border overflow-hidden min-h-[70vh]">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] float"></div>
      <div className="absolute top-1/3 right-1/5 w-80 h-80 bg-chart-4/20 rounded-full blur-[100px] float-delayed"></div>
      <div className="absolute bottom-0 left-1/5 w-72 h-72 bg-chart-2/20 rounded-full blur-[80px] bounce-soft"></div>
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-chart-3/20 rounded-full blur-[90px] float-delayed"></div>

      <Section className="relative py-8 sm:py-16 lg:py-28 flex flex-col justify-center items-center">
        <div className="mx-auto max-w-3xl text-center z-10 px-2 sm:px-0">
          <a
            href="https://github.com/Gisto/Gisto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
          >
            <Star className="size-3.5" />
            <span className="font-medium text-foreground">
              {githubStats.stars.toLocaleString()}
            </span>
            <span className="text-border">|</span>
            <GitFork className="size-3.5" />
            <span>{githubStats.forks.toLocaleString()}</span>
            <span className="text-border">|</span>
            <span>Star on GitHub</span>
          </a>

          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-primary animate-in fade-in slide-in-from-bottom duration-700">
              Your snippets, finally organized.
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base sm:mt-4 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
              Gisto connects to your existing GitHub Gists, GitLab Snippets, or Snippet-Bin and gives
              you search, tags, a real code editor, and structured snippet types. Works offline too.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-1000">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 py-3 no-lift"
              onClick={() => scrollToSection('downloads-section')}
            >
              Download for desktop
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-3 no-lift"
              onClick={() => window.open('https://app.gisto.org')}
            >
              Open web app
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground animate-in fade-in slide-in-from-bottom duration-700 delay-1200">
            Free and open source · MIT licensed · Built with Tauri
          </p>

          <button
            onClick={() => navigate('/documentation')}
            className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline underline-offset-4 animate-in fade-in slide-in-from-bottom duration-700 delay-1400"
          >
            Read the documentation <ArrowRight className="size-3" />
          </button>
        </div>

        <div className="mx-auto mt-8 sm:mt-24 max-w-5xl relative z-10">
          <div
            className="overflow-hidden rounded-xl border border-border bg-card shadow-xl relative"
          >
            <img
              src={`/app${imageIndex}-${theme}.png`}
              alt="Gisto desktop app"
              className={`w-full h-auto block transition-opacity duration-300 ease-in-out ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
              loading="eager"
            />
            <div className="absolute inset-0 pointer-events-none rounded-xl border border-white/10 shadow-[0_0_40px_hsl(var(--primary)/10)]" />
          </div>

          <div className="mt-4 sm:mt-6 flex justify-center items-center gap-1.5 sm:gap-2">
            {SCREENSHOTS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleThumbClick(s.id)}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-300',
                  imageIndex === s.id
                    ? 'bg-primary'
                    : 'bg-border/50 hover:bg-primary/40'
                )}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
