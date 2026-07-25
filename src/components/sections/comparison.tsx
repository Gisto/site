import { Section } from '../section.tsx';
import { ShieldCheck, Zap, RefreshCw, FileText, Layers, ArrowLeftRight } from 'lucide-react';

export const Comparison = () => {
  return (
    <Section id="comparison-section" className="py-20 section-alt">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
          <ArrowLeftRight className="size-3.5" /> Comparison
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
          Why <span className="text-gradient">Gisto</span>?
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Gisto doesn't replace GitHub Gists - it improves them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {/* Why Gisto */}
        <div className="card-deep p-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2.5 p-3 rounded-2xl bg-primary/10 text-primary mb-6">
              <Zap className="size-5" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Gisto?</h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Gisto doesn't replace GitHub Gists - it improves them. Connect your account and you
              get search, tags, language grouping, and a code editor on top of what you already
              have.
            </p>

            <ul className="space-y-4 mb-6 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <ShieldCheck className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>Search, tag, and browse snippets by language</span>
              </li>
              <li className="flex items-start gap-3">
                <RefreshCw className="size-4 text-primary mt-0.5 shrink-0" />
                <span>GitHub Gists, GitLab Snippets, Snippet-Bin, or local-only</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="size-4 text-primary mt-0.5 shrink-0" />
                <span>Built-in editor, clipboard copy, quick actions</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground border-t border-border pt-5">
            <Layers className="size-4 text-emerald-500" />
            <span>Uses Tauri instead of Electron - under 40 MB RAM.</span>
          </div>
        </div>

        {/* Why not plain Gists */}
        <div className="card-deep p-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2.5 p-3 rounded-2xl bg-amber-500/10 text-amber-500 mb-6">
              <RefreshCw className="size-5" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Why not plain Gists?</h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              GitHub Gists are fine for quick sharing, but they're missing basics like search, tags,
              and grouping. Gisto adds all of that without moving your data anywhere.
            </p>

            <ul className="space-y-4 mb-6 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <ShieldCheck className="size-4 text-primary mt-0.5 shrink-0" />
                <span>Tags, language grouping, full-text search</span>
              </li>
              <li className="flex items-start gap-3">
                <RefreshCw className="size-4 text-primary mt-0.5 shrink-0" />
                <span>Works with your existing Gists - nothing to migrate</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="size-4 text-primary mt-0.5 shrink-0" />
                <span>No account? Use local storage mode</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground border-t border-border pt-5">
            <ShieldCheck className="size-4 text-primary" />
            <span>Your token stays in your browser. No backend server.</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
