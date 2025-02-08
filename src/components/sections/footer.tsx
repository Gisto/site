import { Separator } from '../ui/separator.tsx';
import { Section } from '../section.tsx';
import { scrollToSection } from '@/lib/utils.ts';
import { Button } from '@/components/ui/button.tsx';

export const Footer = () => {
  return (
    <Section className="!mb-0 !pb-4 mt-8 sm:mt-0">
      <div className="space-y-1">
        <h4 className="text-sm leading-none">
          &copy; <strong>Gisto</strong> 2014 - {new Date().getFullYear()}
        </h4>
        <p className="text-sm text-muted-foreground">Snippets made awesome</p>
      </div>
      <Separator className="my-2.5" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <a
          onClick={() => scrollToSection('about-section')}
          className="underline underline-offset-2 hover:underline-offset-4 transition-all"
        >
          About
        </a>
        {/*<Separator orientation="vertical" />*/}
        {/*<a className="underline underline-offset-2 hover:underline-offset-4 transition-all">Docs</a>*/}
        <Separator orientation="vertical" />
        <a
          onClick={() => scrollToSection('features-section')}
          className="underline underline-offset-2 hover:underline-offset-4 transition-all"
        >
          Features
        </a>

        {/*<Separator orientation="vertical" />*/}
        {/*<a className="underline underline-offset-2 hover:underline-offset-4 transition-all">*/}
        {/*  F.A.Q.*/}
        {/*</a>*/}

        <Separator orientation="vertical" />
        <a
          onClick={() => scrollToSection('downloads-section')}
          className="underline underline-offset-2 hover:underline-offset-4 transition-all"
        >
          Downloads
        </a>
        <Separator orientation="vertical" />
        <Button
          size="sm"
          className="!m-0 !px-3 !pr-0"
          variant="link"
          onClick={() => window.open('https://x.com/gistoapp')}
        >
          <img
            className="size-4"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/x.svg"
            alt="X/Twitter"
          />
        </Button>
        <Separator orientation="vertical" />
        <Button
          size="sm"
          className="!m-0 !px-3 !pr-0"
          variant="link"
          onClick={() => window.open('https://github.com/Gisto/Gisto')}
        >
          <img
            className="size-4"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/github.svg"
            alt="GitHub"
          />
        </Button>
      </div>
    </Section>
  );
};
