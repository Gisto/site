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
              Gisto sits right at the intersection of local-first security and seamless cloud
              synchronization. It packages the raw backend power of GitHub Gists & GitLab into a
              native, high-performance desktop vault. Keep your code snippets, system commands, and
              markdown documents cached locally on your machine for zero-latency searching, offline
              editing, and immediate clipboard actions.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span>Local-first storage works fully offline</span>
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="size-4 text-primary" />
                <span>Choose your provider: GitHub Gists, GitLab, or local</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="size-4 text-primary" />
                <span>Rich Monaco code editor with Markdown previews</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground border-t border-border/60 pt-4 mt-2">
            <Layers className="size-4 text-emerald-500" />
            <span>Secure sandboxed Tauri desktop app architecture.</span>
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
              Plain GitHub Gists are great but extremely limited. There is no native offline
              support, no tag-based organizations, no interactive dashboard insights, and the
              standard web interface lacks rapid keyboard hotkeys or multi-file editing. Gisto
              elevates your existing Gists, providing tag filters, folder structures, GitLab
              snippets integration, and a beautiful editor overlay right in your workspace.
            </p>

            <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" />
                <span>Advanced tags, filters, and full-text search</span>
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw className="size-4 text-primary" />
                <span>Automatic background sync back to your clouds</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="size-4 text-primary" />
                <span>Integrate smart AI assistance for quick tags</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground border-t border-border/60 pt-4 mt-2">
            <ShieldCheck className="size-4 text-primary" />
            <span>Your code remains 100% yours, synced via official APIs.</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
