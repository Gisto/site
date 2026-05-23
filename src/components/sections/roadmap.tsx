import { Section } from '../section.tsx';
import { CheckCircle2, CircleDot, Circle, Calendar, ListTodo, Sparkles } from 'lucide-react';

const ROADMAP_ITEMS = [
  {
    phase: 'Phase 1: Foundation',
    timeline: 'Completed',
    title: 'Tauri Desktop Core Upgrades',
    desc: 'Upgraded native desktop bridges to Tauri core. Drastically optimized performance, reduced active RAM footprint under 40MB, and locked sandboxed system file channels.',
    status: 'completed',
  },
  {
    phase: 'Phase 2: Documents',
    timeline: 'Active Development',
    title: 'Advanced Markdown & Templates',
    desc: 'Adding advanced structured templates for Markdown documents, prompt engineering interpolation, and multi-file code editing views.',
    status: 'active',
  },
  {
    phase: 'Phase 3: Encryption',
    timeline: 'Planned',
    title: 'Local Vault AES-256 Encryption',
    desc: 'Zero-knowledge database locking. Secure your personal tokens, database files, and private workspace workflows on your hard drive with custom passwords.',
    status: 'planned',
  },
  {
    phase: 'Phase 4: Spotlight Launcher',
    timeline: 'Upcoming',
    title: 'Global Keyboard Palette',
    desc: 'Launch a floating snippet/search panel instantly via hotkey (`Option + Space`) to query and copy code snippets without opening Gisto GUI.',
    status: 'upcoming',
  },
];

export const Roadmap = () => {
  return (
    <Section className="py-12 relative">
      <div className="glow-bg top-10 left-10 opacity-15 dark:opacity-20" />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
          <Calendar className="size-3.5" /> Product Roadmap
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-foreground">
          Active <span className="text-gradient">development pipeline</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Gisto is actively maintained and evolved by contributors worldwide. Explore what features
          we are shipping next.
        </p>
      </div>

      <div className="relative px-4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/60 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {ROADMAP_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.title}
                className={`flex flex-col md:flex-row items-center relative ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center bullet (desktop only) */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
                  {item.status === 'completed' && (
                    <div className="p-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-500">
                      <CheckCircle2 className="size-5 fill-background" />
                    </div>
                  )}
                  {item.status === 'active' && (
                    <div className="p-1 rounded-full bg-primary/20 border border-primary/40 text-primary animate-pulse">
                      <CircleDot className="size-5" />
                    </div>
                  )}
                  {item.status === 'planned' && (
                    <div className="p-1 rounded-full bg-muted border border-border text-muted-foreground">
                      <Circle className="size-5" />
                    </div>
                  )}
                  {item.status === 'upcoming' && (
                    <div className="p-1 rounded-full bg-muted border border-border text-muted-foreground">
                      <ListTodo className="size-5" />
                    </div>
                  )}
                </div>

                {/* Card side */}
                <div className="w-full md:w-1/2 flex justify-center px-4 md:px-8">
                  <div className="glass-panel p-6 rounded-2xl border border-border bg-card w-full hover:border-primary/45 transition-all duration-300 relative group overflow-hidden shadow-sm dark:shadow-xl">
                    <div className="flex items-center justify-between mb-3 border-b border-border/50 pb-2">
                      <span className="text-[10px] tracking-widest font-extrabold uppercase text-muted-foreground">
                        {item.phase}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded border ${
                          item.status === 'completed'
                            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                            : item.status === 'active'
                              ? 'bg-primary/10 border-primary/20 text-primary animate-pulse'
                              : 'bg-muted border-border text-muted-foreground'
                        }`}
                      >
                        {item.timeline}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed mt-2.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Contribute box */}
      <div className="mt-20 glass-panel p-8 rounded-2xl border border-dashed border-border bg-card/25 text-center relative group shadow-sm dark:shadow-xl">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-sky-400/30 to-purple-500/30" />
        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
          <Sparkles className="size-5 text-amber-500 animate-pulse" /> Build with us
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
          Gisto is built on absolute collaboration. Have ideas for an integration, custom editor
          views, or keyboard layouts? We welcome contributors of all levels.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/Gisto/Gisto"
            target="_blank"
            className="px-4 py-2.5 text-xs font-bold rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-md shadow-primary/10"
          >
            Contribute on GitHub
          </a>
          <a
            href="/documentation"
            className="px-4 py-2.5 text-xs font-bold rounded-lg glass-panel border-border hover:border-zinc-300 text-muted-foreground hover:text-foreground transition-all"
          >
            Read Dev Docs
          </a>
        </div>
      </div>
    </Section>
  );
};
