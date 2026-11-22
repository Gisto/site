import { Section } from '../section.tsx';
import { scrollToSection } from '@/lib/utils.ts';
import { Github, Twitter, Heart } from 'lucide-react';
import { useRouter } from 'dirty-react-router';

export const Footer = () => {
  const { navigate } = useRouter();

  const links = [
    {
      label: 'About',
      onClick: () => {
        navigate('/');
        setTimeout(() => scrollToSection('about-section'), 300);
      },
    },
    { label: 'Features', onClick: () => navigate('/features') },
    { label: 'Use Cases', onClick: () => navigate('/use-cases') },
    { label: 'Downloads', onClick: () => navigate('/installation') },
    { label: 'Docs', onClick: () => navigate('/documentation') },
  ];

  return (
    <footer className="border-t border-border overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] float"></div>
      <Section className="!mb-0 !mt-0 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-foreground">&copy; {new Date().getFullYear()} Gisto</p>
            <p className="mt-1 text-sm text-muted-foreground">Your snippets, finally organized.</p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={link.onClick}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://github.com/Gisto/Gisto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://x.com/gistoapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="X / Twitter"
            >
              <Twitter className="size-5" />
            </a>
            <a
              href="https://github.com/sponsors/Gisto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Heart className="size-5 text-danger" /> Sponsor
            </a>
          </nav>
        </div>
      </Section>
    </footer>
  );
};
