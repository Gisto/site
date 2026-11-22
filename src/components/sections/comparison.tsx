import { Section } from '../section.tsx';
import { Reveal } from '../reveal.tsx';
import { ShieldCheck, Zap, RefreshCw, FileText, Layers } from 'lucide-react';

export const Comparison = () => {
  return (
    <Section id="comparison-section" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-chart-4/10 rounded-full blur-[100px] float-delayed"></div>

      <Reveal className="max-w-2xl">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Comparison
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Why Gisto?</h2>
          <p className="mt-3 text-muted-foreground">
            Gisto doesn't replace GitHub Gists — it improves them.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal delay={150}>
          <div className="flex flex-col h-full justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl">
            <div>
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Zap strokeWidth={1.5} className="size-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-foreground">Why Gisto?</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Gisto doesn't replace GitHub Gists — it improves them. Connect your account and you
                get search, tags, language grouping, and a code editor on top of what you already
                have.
              </p>

              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>
                    Search, tag, browse by language, and use structured snippet types (to-do, kanban,
                    docs, flashcards)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCw className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>GitHub Gists, GitLab Snippets, Snippet-Bin, or local-only</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>Built-in editor, clipboard copy, quick actions</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
              <Layers className="size-5 text-primary" />
              <span>Uses Tauri instead of Electron — under 40 MB RAM.</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="flex flex-col h-full justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl">
            <div>
              <div className="p-3 rounded-xl bg-muted text-muted-foreground">
                <RefreshCw strokeWidth={1.5} className="size-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-foreground">Why not plain Gists?</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                GitHub Gists are fine for quick sharing, but they're missing basics like search,
                tags, and grouping. Gisto adds all of that without moving your data anywhere.
              </p>

              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                  <span>Tags, language grouping, full-text search</span>
                </li>
                <li className="flex items-start gap-3">
                  <RefreshCw className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                  <span>Works with your existing Gists — nothing to migrate</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                  <span>No account? Use local storage mode</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
              <ShieldCheck className="size-5 text-primary" />
              <span>Your token stays in your browser. No backend server.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
