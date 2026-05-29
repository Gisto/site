import { useTheme } from '../theme/theme-provider.tsx';
import { Button } from '../ui/button.tsx';
import { scrollToSection, cn } from '@/lib/utils.ts';
import { useRouter } from 'dirty-react-router';
import { useEffect, useState } from 'react';
import { Star, GitFork, ArrowRight, Download, Globe, Layers, Laptop } from 'lucide-react';

export const Hero = () => {
  const { resolvedTheme } = useTheme();
  const { navigate } = useRouter();
  const [imageIndex, setImageIndex] = useState(1);
  const [githubStats, setGithubStats] = useState({ stars: 1650, forks: 240 });

  useEffect(() => {
    // Dynamic GitHub API stats
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

    // Preload rotating app images
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
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-16 pb-16 overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="glow-bg top-[-50px] left-[50%] -translate-x-1/2 opacity-50 dark:opacity-60" />

      <div className="flex h-[600px]">
        {/* Left Side copy and actions */}
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 z-10">
          <div>
            {/* GitHub Stats Badge */}
            <div className="flex justify-center lg:justify-start mb-6">
              <a
                href="https://github.com/Gisto/Gisto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl glass-panel border border-border/80 hover:border-primary/50 text-xs font-semibold text-foreground transition-all hover:scale-[1.02] shadow-sm"
              >
                <img
                  className="size-3.5"
                  src="https://cdn.simpleicons.org/github/38bdf8"
                  alt="GitHub Logo"
                />
                <span className="text-muted-foreground/60">|</span>
                <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Star className="size-3.5 fill-amber-500 stroke-amber-500 animate-pulse" />
                  <span>{githubStats.stars.toLocaleString()} Stars</span>
                </div>
                <span className="text-muted-foreground/60">•</span>
                <div className="flex items-center gap-1.5 text-muted-foreground font-mono">
                  <GitFork className="size-3.5" />
                  <span>{githubStats.forks.toLocaleString()} Forks</span>
                </div>
              </a>
            </div>

            {/* Headline and Tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground font-body">
              Snippets & documents <br className="hidden sm:inline" />
              made <span className="text-gradient">awesome</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              A beautiful, local-first code snippet vault and document manager with Markdown
              support. Keep your engineering workflows organized and synced with your choice of{' '}
              <strong className="text-foreground font-semibold text-primary">GitHub Gists</strong>,{' '}
              <strong className="text-foreground font-semibold text-primary">
                GitLab Snippets
              </strong>
              , or{' '}
              <strong className="text-foreground font-semibold text-primary">Local Storage</strong>.
            </p>

            {/* Multi-provider badges for bot crawler indexation */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                GitHub Gists Sync
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-2xl bg-secondary border border-border text-foreground">
                GitLab Snippets Sync
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-2xl bg-secondary border border-border text-foreground">
                Local Offline Storage
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-2xl bg-secondary border border-border text-foreground">
                AI-ready templates
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10 items-center">
              <Button
                className="bg-primary hover:bg-primary/95 text-primary-foreground font-bold tracking-tight rounded-xl shadow-lg shadow-primary/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group px-5 py-2.5 h-10 text-sm"
                onClick={() => scrollToSection('downloads-section')}
              >
                <Download className="size-4" /> Download Desktop App
              </Button>

              <Button
                variant="outline"
                className="glass-panel border-border/80 hover:border-primary/45 hover:bg-muted/30 text-foreground font-bold tracking-tight rounded-xl transition-all flex items-center justify-center gap-2 px-5 py-2.5 h-10 text-sm"
                onClick={() => window.open('https://app.gisto.org')}
              >
                <Globe className="size-4" /> Launch Web App
              </Button>

              <Button
                variant="link"
                className="text-muted-foreground hover:text-primary transition-all flex items-center justify-center gap-1 font-semibold text-xs h-10"
                onClick={() => navigate('/documentation')}
              >
                Documentation <ArrowRight className="size-3.5" />
              </Button>
            </div>

            {/* Technical Architecture & Platform Badges */}
            <div className="border-t border-border/60 pt-8 mt-4">
              <div className="flex items-center justify-center lg:justify-start gap-2.5 text-xs text-muted-foreground mb-4 font-semibold tracking-wide uppercase">
                <Layers className="size-4 text-primary" /> Technical Architecture
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 opacity-75 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <Laptop className="size-4" />
                  <span>Local-First & Offline</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <img
                    className="size-4"
                    src="https://cdn.simpleicons.org/tauri/38bdf8"
                    alt="Tauri logo"
                  />
                  <span>Tauri Engine</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <img
                    className="size-4"
                    src="https://cdn.simpleicons.org/react/38bdf8"
                    alt="React logo"
                  />
                  <span>React & TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground font-mono">
                  <span>MIT Open Source</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Tilted 3D Rotating Screenshot Showcase (RESTORED EXACTLY AS ORIGINAL) */}
        <div className="hidden lg:block lg:w-1/2 relative group">
          <div
            className={cn(
              'h-full w-full transition-all duration-500 group-hover:[transform:perspective(800px)_rotateY(-8deg)] animate-tilt'
            )}
          >
            <div
              className={cn(
                'absolute inset-0 bg-cover bg-no-repeat bg-left transition-opacity duration-1000 w-full rounded-l-2xl shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
                imageIndex === 1 ? 'opacity-100' : 'opacity-0'
              )}
              style={{
                backgroundImage:
                  resolvedTheme === 'light' ? 'url(/app1-light.png)' : 'url(/app1-dark.png)',
              }}
            />
            <div
              className={cn(
                'absolute inset-0 bg-cover bg-no-repeat bg-left transition-opacity duration-1000 w-full rounded-l-2xl shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
                imageIndex === 2 ? 'opacity-100' : 'opacity-0'
              )}
              style={{
                backgroundImage:
                  resolvedTheme === 'light' ? 'url(/app2-light.png)' : 'url(/app2-dark.png)',
              }}
            />
            <div
              className={cn(
                'absolute inset-0 bg-cover bg-no-repeat bg-left transition-opacity duration-1000 w-full rounded-l-2xl shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
                imageIndex === 3 ? 'opacity-100' : 'opacity-0'
              )}
              style={{
                backgroundImage:
                  resolvedTheme === 'light' ? 'url(/app3-light.png)' : 'url(/app3-dark.png)',
              }}
            />
            <div
              className={cn(
                'absolute inset-0 bg-cover bg-no-repeat bg-left transition-opacity duration-1000 w-full rounded-l-2xl shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
                imageIndex === 4 ? 'opacity-100' : 'opacity-0'
              )}
              style={{
                backgroundImage:
                  resolvedTheme === 'light' ? 'url(/app4-light.png)' : 'url(/app4-dark.png)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
