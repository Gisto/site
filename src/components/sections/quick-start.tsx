import { useState } from 'react';
import { Section } from '../section.tsx';
import { Terminal, Copy, Check, Info, Download, ShieldAlert } from 'lucide-react';
import { Button } from '../ui/button.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover.tsx';
import { scrollToSection } from '@/lib/utils.ts';

export const QuickStart = () => {
  const [copied, setCopied] = useState(false);
  const brewCommand = 'brew install --cask Gisto/tap/gisto';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(brewCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Section id="quick-start-section" className="py-12 relative">
      <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 dark:opacity-30" />

      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
          <Terminal className="size-3.5" /> Installation
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-foreground">
          Get started with <span className="text-gradient">Gisto</span>
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Install instantly via Homebrew Cask on macOS, or get manual installation packages for
          Windows, macOS, and Linux.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* macOS Homebrew Terminal Box */}
        <div className="glass-panel rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between shadow-sm dark:shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-border/60">
              <span className="text-xs font-bold text-foreground">macOS (Homebrew)</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                Brew Cask
              </span>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4">
              If you use Homebrew, you can install the Gisto desktop package directly via cask:
            </p>

            {/* Minimal Terminal */}
            <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 rounded-2xl p-4 font-mono text-xs text-left relative group select-all mb-4 overflow-hidden">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-300 dark:border-zinc-900 select-none">
                <span className="text-[10px] text-zinc-500">bash - terminal</span>
                <button
                  onClick={handleCopy}
                  className="text-zinc-500 hover:text-primary transition-colors"
                  title="Copy command"
                >
                  {copied ? (
                    <Check className="size-4 text-emerald-500" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2 select-none">$</span>
                <span className="text-zinc-800 dark:text-zinc-200 select-all font-mono break-all leading-normal">
                  {brewCommand}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-muted-foreground pt-4 border-t border-border/60">
            <Info className="size-3.5 text-primary" />
            <span>Updates are pushed automatically to the Homebrew Cask tap.</span>
          </div>
        </div>

        {/* Windows, Linux, and direct macOS Downloads */}
        <div className="glass-panel rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between shadow-sm dark:shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-border/60">
              <span className="text-xs font-bold text-foreground">Manual Packages</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 px-2.5 py-0.5 rounded bg-muted border border-border">
                Direct Download
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-6">
              Download Gisto for macOS, Windows, Linux from the releases tab. The desktop app is
              built with <strong>Tauri</strong> for a smaller file size.
            </p>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-between border-border/80 hover:border-primary/50 text-foreground text-[11px] py-4 rounded-xl font-bold transition-all hover:bg-primary/5"
                onClick={() => scrollToSection('downloads-section')}
              >
                <div className="flex items-center gap-2">
                  <Download className="size-3.5 text-primary" />
                  <span>Choose Platform Package</span>
                </div>
                <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-tighter">
                  Exe, Dmg, Deb, Rpm &rarr;
                </span>
              </Button>
            </div>
          </div>

          {/* Honest security popup block (Signing warnings) */}
          <div className="flex items-center justify-between gap-3 text-[11px] text-muted-foreground pt-4 border-t border-border/60 mt-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-4 text-amber-500 shrink-0" />
              <span>App is not code-signed: installation warnings may apply.</span>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-xs font-bold text-primary hover:underline shrink-0">
                  Read Info
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 text-xs text-left glass-panel border-border/80 bg-white/90 dark:bg-zinc-900/90 p-4 rounded-2xl shadow-xl backdrop-blur-xl">
                <p className="mb-2 text-sm font-bold text-foreground">Security Note:</p>
                <p className="mb-2 text-xs text-muted-foreground leading-relaxed">
                  This app is not code-signed. You may see a warning like &quot;Windows protected
                  your PC&quot; or &quot;This app is from an unidentified developer.&quot;
                </p>
                <p className="mb-2 text-xs text-muted-foreground leading-relaxed">
                  <strong>Windows:</strong> Click &quot;More Info&quot; then &quot;Run Anyway&quot;.
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>macOS:</strong> Go to System Preferences &rarr; Security &amp; Privacy
                  &rarr; General and click &quot;Open Anyway&quot;.
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </Section>
  );
};
