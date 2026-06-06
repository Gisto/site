import { Section } from '../section.tsx';
import { ShieldCheck, Zap, RefreshCw, FileText, Layers } from 'lucide-react';

export const Comparison = () => {
  return (
    <Section id="comparison-section" className="py-12 relative">
      <div className="glow-bg bottom-1/4 left-0 -translate-x-1/2 opacity-35 dark:opacity-50" />

      {/* Grid explaining Why Gisto & Why Gists are better with Gisto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Why Gisto Panel */}
        <div className="glass-panel p-8 rounded-2xl border border-border/80 bg-card hover:border-primary/45 transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 p-2 rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-6">
              <Zap className="size-5" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Why Gisto?</h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Gisto is a code snippet manager that runs on GitHub Gists / GitLab Snippets / local
              in-browser database and adds additional features such as searching, tagging and
              sharing snippets while including a rich code editor. All your data is stored on
              GitHub/GitLab and you can access it from GitHub Gists or GitLab Snippets at any time
              with changes carrying over to Gisto.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span>Advanced search, tagging, and syntax highlighting</span>
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="size-4 text-primary" />
                <span>Choose your provider: GitHub Gists, GitLab Snippets, or local</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="size-4 text-primary" />
                <span>Rich code editor with copy to clipboard and quick actions</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground border-t border-border/60 pt-4 mt-2">
            <Layers className="size-4 text-emerald-500" />
            <span>Built with Tauri instead of Electron for a smaller file size.</span>
          </div>
        </div>

        {/* Why not plain Gists Panel */}
        <div className="glass-panel p-8 rounded-2xl border border-border/80 bg-card hover:border-primary/45 transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 p-2 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-6">
              <RefreshCw className="size-5" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Why not plain GitHub Gists?</h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Plain GitHub Gists are great but limited. Gisto elevates your existing Gists,
              providing tagging, grouping by language, quick snippet actions, copy to clipboard,
              editor settings, theme color changer, and a web app — all on top of your existing
              GitHub Gists or GitLab Snippets infrastructure.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" />
                <span>Tags, grouping by language, and advanced search</span>
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="size-4 text-primary" />
                <span>Use all your existing snippets by connecting your account</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="size-4 text-primary" />
                <span>Local storage mode — no account required</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground border-t border-border/60 pt-4 mt-2">
            <ShieldCheck className="size-4 text-primary" />
            <span>Gisto only saves the Access token in your local storage and nothing else.</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
