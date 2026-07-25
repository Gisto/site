import { Separator } from '../ui/separator.tsx';
import { Section } from '../section.tsx';
import { scrollToSection } from '@/lib/utils.ts';
import { Button } from '@/components/ui/button.tsx';
import { Heart } from 'lucide-react';
import { useRouter } from 'dirty-react-router';

export const Footer = () => {
  const { navigate } = useRouter();
  return (
    <Section className="!mb-0 !pb-6 mt-8 sm:mt-0">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-1">
          <h4 className="text-sm leading-none">
            &copy; <strong>Gisto</strong> 2014 - {new Date().getFullYear()}
          </h4>
          <p className="text-sm text-muted-foreground">Your snippets, finally organized.</p>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center space-x-2 sm:space-x-4 text-sm flex-wrap gap-y-2">
          <a
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                scrollToSection('about-section');
              }, 300);
            }}
            className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            About
          </a>
          <Separator orientation="vertical" />
          <a
            onClick={() => navigate('/features')}
            className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            Features
          </a>
          <Separator orientation="vertical" />
          <a
            onClick={() => navigate('/installation')}
            className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            Downloads
          </a>
          <Separator orientation="vertical" />
          <a
            onClick={() => navigate('/documentation')}
            className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
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
            className="text-muted-foreground hover:text-foreground hidden sm:flex items-center gap-2 transition-colors"
            href="https://github.com/sponsors/Gisto"
          >
            <Heart className="text-danger size-4" /> Sponsor Gisto
          </a>
        </div>
        <div className="mt-4 visible sm:hidden">
          <a
            target="_blank"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
            href="https://github.com/sponsors/Gisto"
          >
            <Heart className="text-danger size-4" /> Sponsor Gisto
          </a>
        </div>
      </div>
    </Section>
  );
};
