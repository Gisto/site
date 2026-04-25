import { useTheme } from '../theme/theme-provider.tsx';
import { Button } from '../ui/button.tsx';
import { Github } from './github.tsx';
import { scrollToSection, cn } from '@/lib/utils.ts';
import { useRouter } from 'dirty-react-router';
import { useEffect, useState } from 'react';

export const Hero = () => {
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
    <div className="w-full mt-16 pb-16">
      <div className="flex h-[600px]">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold md:text-6xl md:mb-8">
              Snippets made <br />
              <span className="text-primary">awesome</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Gisto brings clarity to your snippet collection, making organization second nature
            </p>
            <div className="flex justify-center mt-8 gap-4">
              <Button size="lg" onClick={() => scrollToSection('downloads-section')}>
                Downloads
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://app.gisto.org')}
              >
                Web app
              </Button>

              <Button size="lg" variant="outline" onClick={() => navigate('/documentation')}>
                Learn more
              </Button>
            </div>

            <div className="flex gap-4 mt-8 justify-center">
              <Button
                size="icon"
                variant="outline"
                onClick={() => window.open('https://github.com/Gisto/Gisto')}
                title="GitHub"
              >
                <img
                  className="size-4"
                  src="https://cdn.simpleicons.org/github/3f83a8"
                  alt="GitHub"
                />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => window.open('https://x.com/gistoapp')}
                title="X/Twitter"
              >
                <img
                  className="size-4"
                  src="https://cdn.simpleicons.org/x/3f83a8"
                  alt="X/Twitter"
                />
              </Button>

              <Github />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 relative group">
          <div
            className={cn(
              'h-full w-full transition-all duration-500 group-hover:[transform:perspective(800px)_rotateY(-8deg)] animate-tilt'
            )}
          >
            <div
              className={cn(
                'absolute inset-0 bg-cover transition-opacity duration-1000 w-full rounded shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
                imageIndex === 1 ? 'opacity-100' : 'opacity-0'
              )}
              style={{
                backgroundImage:
                  resolvedTheme === 'light' ? 'url(/app1-light.png)' : 'url(/app1-dark.png)',
              }}
            />
            <div
              className={cn(
                'absolute inset-0 bg-cover transition-opacity duration-1000 w-full rounded shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
                imageIndex === 2 ? 'opacity-100' : 'opacity-0'
              )}
              style={{
                backgroundImage:
                  resolvedTheme === 'light' ? 'url(/app2-light.png)' : 'url(/app2-dark.png)',
              }}
            />
            <div
              className={cn(
                'absolute inset-0 bg-cover transition-opacity duration-1000 w-full rounded shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
                imageIndex === 3 ? 'opacity-100' : 'opacity-0'
              )}
              style={{
                backgroundImage:
                  resolvedTheme === 'light' ? 'url(/app3-light.png)' : 'url(/app3-dark.png)',
              }}
            />
            <div
              className={cn(
                'absolute inset-0 bg-cover transition-opacity duration-1000 w-full rounded shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
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
