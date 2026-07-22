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
  Layers,
} from 'lucide-react';
import { Section } from '../section.tsx';
import { cn } from '../../lib/utils.ts';

const FEATURES = [
  {
    name: 'Full-text search',
    Icon: Search,
    text: 'Find snippets by content, filename, tags, or description. Combine operators like tag: and lang: for precise results.',
    color: 'from-blue-500/20 to-blue-600/10',
    iconBg: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
  },
  {
    name: 'Custom tags',
    Icon: Tags,
    text: 'Tag snippets with #labels for instant organization. Filter by any tag to find exactly what you need.',
    color: 'from-emerald-500/20 to-emerald-600/10',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  },
  {
    name: 'Monaco editor',
    Icon: Code2,
    text: 'The same editor powering VS Code — syntax highlighting, autocomplete, Emmet, and configurable settings.',
    color: 'from-violet-500/20 to-violet-600/10',
    iconBg: 'bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400',
  },
  {
    name: 'Markdown support',
    Icon: FileText,
    text: 'Write and preview Markdown, HTML, JSON, CSV, and PDF files. Full GitHub Flavored Markdown with live preview.',
    color: 'from-orange-500/20 to-orange-600/10',
    iconBg: 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400',
  },
  {
    name: 'Multi-provider',
    Icon: Link,
    text: 'Connect GitHub Gists, GitLab Snippets, Snippet-Bin, or go local-only. Switch anytime — your data stays put.',
    color: 'from-teal-500/20 to-teal-600/10',
    iconBg: 'bg-teal-500/10 border-teal-500/20 text-teal-600 dark:text-teal-400',
  },
  {
    name: 'AI descriptions',
    Icon: Sparkles,
    text: 'Connect your AI API key and auto-generate descriptions and tags from your snippet content.',
    color: 'from-pink-500/20 to-pink-600/10',
    iconBg: 'bg-pink-500/10 border-pink-500/20 text-pink-600 dark:text-pink-400',
  },
  {
    name: 'Language grouping',
    Icon: LayoutDashboard,
    text: 'Snippets auto-grouped by programming language. Browse your Python stuff without scrolling through everything else.',
    color: 'from-cyan-500/20 to-cyan-600/10',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400',
  },
  {
    name: 'Themes',
    Icon: SwatchBook,
    text: 'Pick a theme or let Gisto follow your system preference. Dark and light modes, both done right.',
    color: 'from-amber-500/20 to-amber-600/10',
    iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
  },
  {
    name: 'Multi-file snippets',
    Icon: Files,
    text: 'Bundle multiple files under one snippet — code with docs, configs with READMEs, all searchable together.',
    color: 'from-indigo-500/20 to-indigo-600/10',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400',
  },
  {
    name: 'Quick actions',
    Icon: ExternalLink,
    text: 'Copy to clipboard, download, or open in Plunker, Carbon, JSFiddle and more — one click away.',
    color: 'from-rose-500/20 to-rose-600/10',
    iconBg: 'bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400',
  },
  {
    name: 'Lightweight',
    Icon: Zap,
    text: 'Built with Tauri, not Electron. Under 40 MB RAM, under 10 MB download. Starts instantly.',
    color: 'from-lime-500/20 to-lime-600/10',
    iconBg: 'bg-lime-500/10 border-lime-500/20 text-lime-600 dark:text-lime-400',
  },
  {
    name: 'Offline ready',
    Icon: WifiOff,
    text: 'Local-only mode — no internet, no sync. Create, edit, and query snippets offline. Export and import as JSON anytime.',
    color: 'from-slate-500/20 to-slate-600/10',
    iconBg: 'bg-slate-500/10 border-slate-500/20 text-slate-600 dark:text-slate-400',
  },
];

const MINI_FEATURES = [
  {
    name: 'Web app',
    Icon: Globe,
    text: 'Full-featured version at app.gisto.org. No install required.',
  },
  {
    name: 'One-click copy',
    Icon: Copy,
    text: 'Copy any snippet or individual file to your clipboard.',
  },
  {
    name: 'Local storage',
    Icon: HardDrive,
    text: 'No account needed. Snippets stored in your browser via IndexedDB. Export/import as JSON.',
  },
  {
    name: 'Open source',
    Icon: GitBranch,
    text: 'Free and MIT licensed. Read the code, file issues, or contribute.',
  },
];

export const Features = ({ className }: { className?: string }) => {
  return (
    <Section id="features-section" className="py-12 relative">
      <div className="glow-bg top-1/3 left-1/2 -translate-x-1/2 opacity-15" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
          <Layers className="size-3.5" /> Features
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
          What you <span className="text-gradient">get</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Everything you need to manage snippets, nothing you don't.
        </p>
      </div>

      <div
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto',
          className
        )}
      >
        {FEATURES.map((feature) => {
          const Icon = feature.Icon;
          return (
            <div
              key={feature.name}
              className="glass-panel rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div
                className={cn(
                  'absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity',
                  feature.color
                )}
              />
              <div
                className={cn(
                  'p-2.5 rounded-xl border w-fit mb-4 group-hover:scale-110 transition-transform duration-300',
                  feature.iconBg
                )}
              >
                <Icon strokeWidth={1.5} className="size-5" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1.5">{feature.name}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{feature.text}</p>
            </div>
          );
        })}
      </div>

      {/* Mini features strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-6xl mx-auto">
        {MINI_FEATURES.map((feature) => {
          const Icon = feature.Icon;
          return (
            <div
              key={feature.name}
              className="glass-panel rounded-xl p-5 group hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary w-fit mb-3 group-hover:bg-primary/15 transition-colors">
                <Icon strokeWidth={1.5} className="size-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-1">{feature.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.text}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
