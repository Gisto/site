import { useTheme } from '../theme/theme-provider.tsx';
import { Button } from '../ui/button.tsx';
import { Github } from './github.tsx';
import { scrollToSection } from '@/lib/utils.ts';

export const Hero2 = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="w-full mt-16 pb-16">
      <div className="flex h-[600px]">
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-semibold md:text-6xl md:mb-8">
              Snippets made <span className="text-primary">awesome</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              Gisto brings clarity to your snippet collection, making organization second nature
            </p>
            <div className="flex justify-center lg:justify-start mt-8 gap-4">
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
        <div className="hidden lg:block lg:w-1/2">
          <div
            className="h-full bg-cover transition-all hover:[transform:perspective(800px)_rotateY(-8deg)] w-full animate-tilt  rounded shadow-[0px_0px_45px_10px_rgba(186,186,186,1)] dark:shadow-[0px_0px_45px_10px_rgba(97,97,97,1)]"
            style={{
              backgroundImage:
                resolvedTheme === 'light' ? 'url(/app-light.png)' : 'url(/app-dark.png)',
            }}
          >
            {/*<div className="h-full bg-black opacity-25"></div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
