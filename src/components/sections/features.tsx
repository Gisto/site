import {
  Search,
  Tags,
  Code2,
  FileText,
  Link,
  Sparkles,
  LayoutDashboard,
  SwatchBook,
  Files,
  ExternalLink,
  Zap,
  WifiOff,
  Globe,
  Copy,
  HardDrive,
  GitBranch,
  Shapes,
  ArrowRight,
} from 'lucide-react';
import { Link as RouterLink } from 'dirty-react-router';
import { Section } from '../section.tsx';
import { Reveal } from '../reveal.tsx';
import { cn } from '../../lib/utils.ts';

const FEATURES = [
  {
    name: 'Full-text search',
    Icon: Search,
    text: 'Find snippets by content, filename, tags, or description. Combine operators like tag: and lang: for precise results.',
    color: 'text-primary',
  },
  {
    name: 'Custom tags',
    Icon: Tags,
    text: 'Tag snippets with #labels for instant organization. Filter by any tag to find exactly what you need.',
    color: 'text-chart-4',
  },
  {
    name: 'Monaco editor',
    Icon: Code2,
    text: 'The same editor powering VS Code — syntax highlighting, autocomplete, Emmet, and configurable settings.',
    color: 'text-chart-2',
  },
  {
    name: 'Markdown support',
    Icon: FileText,
    text: 'Write and preview Markdown, HTML, JSON, CSV, and PDF files. Full GitHub Flavored Markdown with live preview.',
    color: 'text-chart-3',
  },
  {
    name: 'Multi-provider',
    Icon: Link,
    text: 'Connect GitHub Gists, GitLab Snippets, Snippet-Bin, or go local-only. Switch anytime — your data stays put.',
    color: 'text-chart-5',
  },
  {
    name: 'AI descriptions',
    Icon: Sparkles,
    text: 'Connect your AI API key and auto-generate descriptions and tags from your snippet content.',
    color: 'text-primary',
  },
  {
    name: 'Language grouping',
    Icon: LayoutDashboard,
    text: 'Snippets auto-grouped by programming language. Browse your Python stuff without scrolling through everything else.',
    color: 'text-chart-4',
  },
  {
    name: 'Themes',
    Icon: SwatchBook,
    text: 'Pick a theme or let Gisto follow your system preference. Dark and light modes, both done right.',
    color: 'text-chart-3',
  },
  {
    name: 'Snippet types',
    Icon: Shapes,
    text: 'Go beyond plain snippets with to-do lists, kanban boards, structured docs, and flashcards — each with a dedicated editor and view.',
    color: 'text-chart-2',
  },
  {
    name: 'Multi-file snippets',
    Icon: Files,
    text: 'Bundle multiple files under one snippet — code with docs, configs with READMEs, all searchable together.',
    color: 'text-chart-5',
  },
  {
    name: 'Quick actions',
    Icon: ExternalLink,
    text: 'Copy to clipboard, download, or open in Plunker, Carbon, JSFiddle and more — one click away.',
    color: 'text-primary',
  },
  {
    name: 'Lightweight',
    Icon: Zap,
    text: 'Built with Tauri, not Electron. Under 40 MB RAM, under 10 MB download. Starts instantly.',
    color: 'text-chart-4',
  },
  {
    name: 'Offline ready',
    Icon: WifiOff,
    text: 'Local-only mode — no internet, no sync. Create, edit, and query snippets offline. Export and import as JSON anytime.',
    color: 'text-chart-3',
  },
];

const MINI_FEATURES = [
  {
    name: 'Web app',
    Icon: Globe,
    text: 'Full-featured version at app.gisto.org. No install required.',
    color: 'text-primary',
  },
  {
    name: 'One-click copy',
    Icon: Copy,
    text: 'Copy any snippet or individual file to your clipboard.',
    color: 'text-chart-2',
  },
  {
    name: 'Local storage',
    Icon: HardDrive,
    text: 'No account needed. Snippets stored in your browser via IndexedDB. Export/import as JSON.',
    color: 'text-chart-3',
  },
  {
    name: 'Open source',
    Icon: GitBranch,
    text: 'Free and MIT licensed. Read the code, file issues, or contribute.',
    color: 'text-chart-5',
  },
];

export const Features = ({ className, showAll }: { className?: string; showAll?: boolean }) => {
  return (
    <Section id="features-section" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-4/10 rounded-full blur-[100px] float-delayed"></div>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal className="max-w-2xl">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Features
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">What you get</h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to manage snippets, nothing you don't.
            </p>
          </div>
        </Reveal>
        {showAll && (
          <Reveal delay={200}>
            <RouterLink
              to="/features"
              className="inline-flex items-center gap-1.5 pb-1 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              View all features <ArrowRight className="size-3.5" />
            </RouterLink>
          </Reveal>
        )}
      </div>

      <div className={cn('mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3', className)}>
        {FEATURES.map((feature, index) => {
          const Icon = feature.Icon;
          return (
            <Reveal key={feature.name} delay={index * 80}>
              <div
                className="flex flex-col h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon strokeWidth={1.5} className={`size-6 mb-2 ${feature.color}`} />
                <div className="flex-1">
                  <h3 className="mt-4 text-sm font-medium text-foreground">{feature.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {MINI_FEATURES.map((feature, index) => {
          const Icon = feature.Icon;
          return (
            <Reveal key={feature.name} delay={index * 100 + 200}>
              <div key={feature.name} className="flex flex-col h-full rounded-xl border border-border p-4">
                <Icon strokeWidth={1.5} className={`size-5 mb-2 ${feature.color}`} />
                <h4 className="mt-3 text-sm font-medium text-foreground">{feature.name}</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{feature.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
