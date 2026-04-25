import { Section } from '../section.tsx';
import { useTheme } from '../theme/theme-provider.tsx';
import { Button } from '../ui/button.tsx';
import { scrollToSection, cn } from '@/lib/utils.ts';
import { useRouter } from 'dirty-react-router';
import { useEffect, useState } from 'react';

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
      <div className="text-center">
        <h1 className="mb-8 scroll-m-20 text-4xl text-primary font-extrabold lg:text-5xl">
          Snippets made awesome
        </h1>

        <p className="mb-8 text-xl text-muted-foreground">
          Gisto brings clarity to your snippet collection, making organization second nature
        </p>

        <small></small>
      </div>

      <div className="mt-8 gap-4 flex justify-center">
        <Button size="lg" onClick={() => scrollToSection('downloads-section')}>
          Downloads
        </Button>
        <Button size="lg" variant="outline" onClick={() => navigate('/documentation')}>
          Learn more
        </Button>
      </div>

      <div className="m-10 relative max-w-5xl mx-auto">
        <img
          src="/app1-light.png"
          className="w-full h-auto opacity-0 invisible"
          aria-hidden="true"
          alt=""
        />
        <div
          className={cn(
            'absolute inset-0 bg-contain bg-no-repeat bg-center transition-opacity duration-1000 w-full rounded shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
            imageIndex === 1 ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage:
              resolvedTheme === 'light' ? 'url(/app1-light.png)' : 'url(/app1-dark.png)',
          }}
        />
        <div
          className={cn(
            'absolute inset-0 bg-contain bg-no-repeat bg-center transition-opacity duration-1000 w-full rounded shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
            imageIndex === 2 ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage:
              resolvedTheme === 'light' ? 'url(/app2-light.png)' : 'url(/app2-dark.png)',
          }}
        />
        <div
          className={cn(
            'absolute inset-0 bg-contain bg-no-repeat bg-center transition-opacity duration-1000 w-full rounded shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
            imageIndex === 3 ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage:
              resolvedTheme === 'light' ? 'url(/app3-light.png)' : 'url(/app3-dark.png)',
          }}
        />
        <div
          className={cn(
            'absolute inset-0 bg-contain bg-no-repeat bg-center transition-opacity duration-1000 w-full rounded shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]',
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
