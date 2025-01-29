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
} from 'lucide-react';
import { Section } from '../section.tsx';
import { cn } from '../../lib/utils.ts';
import { useTheme } from '../theme/theme-provider.tsx';

const FEATURES = [
  {
    name: 'Advanced search',
    Icon: Search,
    text: 'Gists can be found quickly using our search and can be filtered by gist description, file names, tags and more',
    image: {
      light: '/features/advanced-search-light.png',
      dark: '/features/advanced-search-dark.png',
    },
  },
  {
    name: 'Gist tagging',
    Icon: Tags,
    text: 'Gisto allows you to tag Gists with custom tags to help you find your Gists easily.',
    image: {
      light: '/features/tags-light.png',
      dark: '/features/tags-dark.png',
    },
  },
  {
    name: 'Quick actions',
    Icon: Zap,
    text: 'Gisto lets you quickly download, copy, and view Gists on GitHub, generate embed links or preview them, and more',
    image: {
      light: '/features/quick-actions-light.png',
      dark: '/features/quick-actions-dark.png',
    },
  },
  {
    name: 'Dashboard',
    Icon: LayoutDashboard,
    text: 'A feature-rich dashboard displays snippet counts, tags, languages, and starred items with some informative charts',
    image: {
      light: '/features/dashboard-light.png',
      dark: '/features/dashboard-dark.png',
    },
  },
  {
    name: 'Web app',
    Icon: Globe,
    text: (
      <span>
        Gisto available as a full featured web app. You can check{' '}
        <a className="underline underline-offset-2" href="https://app.gisto.org" target="_blank">
          app.gisto.org
        </a>{' '}
        to access it.
      </span>
    ),
    image: {
      light: '/features/web-app-light.png',
      dark: '/features/web-app-dark.png',
    },
  },
  {
    name: 'Light/Dark theme',
    Icon: SwatchBook,
    text: 'Gisto can be set to dark or light theme, or adapt to them preferred by the system',
    image: {
      light: '/features/theme-light.png',
      dark: '/features/theme-dark.png',
    },
  },
  {
    name: 'Rich editor',
    Icon: FilePenLine,
    text: 'We use Monaco editor with syntax highlighting, auto-completion, Emmet, and more for seamless Gist editing',
    image: {
      light: '/features/code-light.png',
      dark: '/features/code-dark.png',
    },
  },
  {
    name: 'File previews',
    Icon: Eye,
    text: 'Some files like HTML, PDFs, JSON, Markdown and more are available to preview by toggling the editor',
    image: {
      light: '/features/preview-light.png',
      dark: '/features/preview-dark.png',
    },
  },
  {
    name: 'Stay organized',
    Icon: Leaf,
    text: 'Gisto brings clarity to your code collection, making organization second nature',
  },
];

export const Features = ({ className }: { className?: string }) => {
  const { resolvedTheme } = useTheme();
  return (
    <Section>
      <h1 className="mb-8 scroll-m-20 text-4xl text-muted-foreground font-light lg:text-4xl text-center">
        <span id="features-section" className="font-extrabold text-primary">Feature</span> highlights
      </h1>
      <div className={cn('grid sm:grid-cols-2 lg:grid-cols-3 gap-16', className)}>
        {FEATURES.map((feature) => {
          const Icon = feature.Icon;

          return (
            <div key={feature.name} className="group perspective-1000">
              <div className="relative w-full h-80 transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden p-8 rounded shadow-md backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#000] dark:bg-[#fff] dark:bg-opacity-10 dark:border-[#fff] dark:border-opacity-20 text-center">
                  <div className="flex justify-center items-center mx-auto">
                    <Icon strokeWidth={1.5} className="flex-shrink-0 size-20 stroke-primary" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-primary">{feature.name}</h3>
                    <p className="mt-4 text-muted-foreground text-sm">{feature.text}</p>
                  </div>
                </div>

                {/* Back */}
                {feature.image ? (
                  <div
                    className="absolute inset-0 backface-hidden bg-cover bg-left rounded shadow-md transform rotate-y-180 border"
                    style={{
                      backgroundImage:
                        resolvedTheme === 'light'
                          ? `url(${feature.image.light})`
                          : `url(${feature.image.dark})`,
                    }}
                  ></div>
                ) : (
                  <div className="absolute inset-0 p-8 backface-hidden rounded shadow-md transform rotate-y-180 border backdrop-blur-[4px] backdrop-saturate-[100%] bg-opacity-10 bg-[#ffffff]">
                    <div className="flex items-center justify-center">
                      <Lightbulb className="size-28 stroke-yellow-500 mb-8" />
                    </div>
                    Stay organized with Gisto by using tags, precise searches, correct file
                    extensions and any other means.
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
