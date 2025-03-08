import { Separator } from '../ui/separator.tsx';
import { Section } from '../section.tsx';
import { scrollToSection } from '@/lib/utils.ts';
import { Button } from '@/components/ui/button.tsx';
import { Heart } from 'lucide-react';
import { useRouter } from 'dirty-react-router';

export const Footer = () => {
  const { navigate } = useRouter();
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
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              scrollToSection('about-section');
            }, 300);
          }}
          className="underline underline-offset-2 hover:underline-offset-4 transition-all"
        >
          About
        </a>
        {/*<Separator orientation="vertical" />*/}
        {/*<a className="underline underline-offset-2 hover:underline-offset-4 transition-all">Docs</a>*/}
        <Separator orientation="vertical" />
        <a
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              scrollToSection('features-section');
            }, 300);
          }}
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
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              scrollToSection('downloads-section');
            }, 300);
          }}
          className="underline underline-offset-2 hover:underline-offset-4 transition-all"
        >
          Downloads
        </a>
        <Separator orientation="vertical" />
        <a
          onClick={() => navigate('/documentation')}
          className="underline underline-offset-2 hover:underline-offset-4 transition-all"
        >
          Docs
        </a>
        <Separator orientation="vertical" />
        <Button
          size="icon"
          title="X/Twitter"
          variant="link"
          onClick={() => window.open('https://x.com/gistoapp')}
        >
          <img className="size-4" src="https://cdn.simpleicons.org/x/3f83a8" alt="X/Twitter" />
        </Button>
        <Separator orientation="vertical" />
        <Button
          size="icon"
          variant="link"
          onClick={() => window.open('https://github.com/Gisto/Gisto')}
          title="GitHub"
        >
          <img className="size-4" src="https://cdn.simpleicons.org/github/3f83a8" alt="GitHub" />
        </Button>
        <Separator orientation="vertical" className="hidden sm:block" />
        <a
          target="_blank"
          className="underline hover:underline-offset-4 hidden sm:block"
          href="https://github.com/sponsors/Gisto"
        >
          <div className="flex items-center gap-2">
            <Heart className="text-danger size-4" /> Sponsor Gisto
          </div>
        </a>
      </div>
      <div className="mt-4 visible sm:hidden">
        <Separator orientation="vertical" />
        <a
          target="_blank"
          className="underline hover:underline-offset-4"
          href="https://github.com/sponsors/Gisto"
        >
          <div className="flex items-center gap-2">
            <Heart className="text-danger size-4" /> Sponsor Gisto
          </div>
        </a>
      </div>
    </Section>
  );
};
