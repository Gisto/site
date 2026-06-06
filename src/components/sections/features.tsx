import {
  Search,
  Tags,
  Zap,
  SwatchBook,
  Globe,
  LayoutDashboard,
  FilePenLine,
  Eye,
  Leaf,
  Lightbulb,
  GitBranch,
  HardDrive,
  BarChart3,
} from 'lucide-react';
import { Section } from '../section.tsx';
import { cn } from '../../lib/utils.ts';
import { useTheme } from '../theme/theme-provider.tsx';
import { Button } from '@/components/ui/button.tsx';

const FEATURES = [
  {
    name: 'Advanced search',
    Icon: Search,
    text: 'Snippets can be found quickly using our search and can be filtered by snippet description, file names, tags and more',
    image: {
      light: '/features/advanced-search-light.png',
      dark: '/features/advanced-search-dark.png',
    },
  },
  {
    name: 'Tags',
    Icon: Tags,
    text: 'Gisto allows you to tag snippets with custom tags to help you find your snippets easily.',
    image: {
      light: '/features/tags-light.png',
      dark: '/features/tags-dark.png',
    },
  },
  {
    name: 'Syntax highlight',
    Icon: Zap,
    text: 'Rich syntax highlighting for all major programming languages makes your code readable at a glance.',
    image: {
      light: '/features/quick-actions-light.png',
      dark: '/features/quick-actions-dark.png',
    },
  },
  {
    name: 'Grouping by language',
    Icon: LayoutDashboard,
    text: 'Snippets are automatically grouped by programming language for easier navigation and discovery.',
    image: {
      light: '/features/dashboard-light.png',
      dark: '/features/dashboard-dark.png',
    },
  },
  {
    name: 'Quick snippet actions',
    Icon: Globe,
    text: (
      <span>
        Quickly download, copy to clipboard, copy file contents, open in external tools like{' '}
        <a className="underline underline-offset-2" href="https://app.gisto.org" target="_blank">
          plunkr, carbon.now.sh, jsfiddle
        </a>{' '}
        and more.
      </span>
    ),
    link: (
      <Button
        variant="outline"
        size="sm"
        className="rounded-xl font-bold bg-white/20 border-white/40 hover:bg-white/30 text-white transition-all shadow-xl backdrop-blur-md"
        onClick={() => window.open('https://app.gisto.org')}
      >
        app.gisto.org
      </Button>
    ),
    image: {
      light: '/features/web-app-light.png',
      dark: '/features/web-app-dark.png',
    },
  },
  {
    name: 'Theme color changer',
    Icon: SwatchBook,
    text: 'Gisto can be set to dark or light theme, or adapt to the theme preferred by the system',
    image: {
      light: '/features/theme-light.png',
      dark: '/features/theme-dark.png',
    },
  },
  {
    name: 'Rich code editor',
    Icon: FilePenLine,
    text: 'Monaco editor with syntax highlighting, auto-completion, Emmet, and more for seamless snippet editing.',
    image: {
      light: '/features/code-light.png',
      dark: '/features/code-dark.png',
    },
  },
  {
    name: 'Editor settings',
    Icon: Eye,
    text: 'Customize your editing experience with configurable editor settings, font size, tab size, and more.',
    image: {
      light: '/features/preview-light.png',
      dark: '/features/preview-dark.png',
    },
  },
  {
    name: 'Web app',
    Icon: Leaf,
    text: (
      <span>
        Gisto is available as a full featured web app at{' '}
        <a className="underline underline-offset-2" href="https://app.gisto.org" target="_blank">
          app.gisto.org
        </a>
        .
      </span>
    ),
  },
  {
    name: 'Copy to clipboard',
    Icon: GitBranch,
    text: 'Copy snippets or individual file contents to clipboard with a single click.',
  },
  {
    name: 'Local storage mode',
    Icon: HardDrive,
    text: 'Use IndexedDB to store snippets locally without a GitHub/GitLab account. Perfect for offline access and privacy.',
  },
  {
    name: 'Open source',
    Icon: BarChart3,
    text: 'Gisto is licensed under the MIT License. The entire codebase is open source and auditable on GitHub.',
  },
];

export const Features = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useTheme();
  return (
    <Section id="features-section" className="py-12 relative">
      <div className="glow-bg top-1/3 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="scroll-m-20 text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
          Feature <span className="text-gradient">highlights</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Hover over each feature card to flip it and reveal Gisto’s live interface.
        </p>
      </div>

      <div className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10', className)}>
        {FEATURES.map((feature) => {
          const Icon = feature.Icon;

          return (
            <div key={feature.name} className="group perspective-1000 h-80">
              <div className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180 cursor-pointer">
                {/* Front (Glassmorphism & Icons) */}
                <div className="absolute inset-0 backface-hidden p-8 rounded-2xl border border-border hover:border-primary/30 flex flex-col justify-center items-center text-center shadow-md transition-all duration-300 glass-panel">
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 group-hover:scale-110 transition-all duration-300">
                    <Icon strokeWidth={1.5} className="size-12 stroke-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[260px]">
                    {feature.text}
                  </p>
                </div>

                {/* Back (Feature Screenshots) */}
                {feature.image ? (
                  <div
                    className="absolute inset-0 backface-hidden bg-cover bg-left rounded-2xl shadow-md transform rotate-y-180 border border-border overflow-hidden glass-panel"
                    style={{
                      backgroundImage:
                        resolvedTheme === 'light'
                          ? `url(${feature.image.light})`
                          : `url(${feature.image.dark})`,
                    }}
                  >
                    {feature?.link && (
                      <div className="flex items-center h-full content-center justify-center bg-black/60 backdrop-blur-[2px]">
                        {feature?.link}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="absolute inset-0 p-8 backface-hidden rounded-2xl transform rotate-y-180 border border-border flex flex-col justify-center items-center text-center shadow-md glass-panel">
                    <div className="p-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-6">
                      <Lightbulb className="size-10 stroke-amber-500" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{feature.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.text ||
                        'Stay organized with Gisto by using tags, precise searches, correct file extensions and any other means.'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
