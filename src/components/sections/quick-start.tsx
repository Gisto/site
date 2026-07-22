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
    <Section id="quick-start-section" className="py-20 section-gradient">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
          <Terminal className="size-3.5" /> Quick Start
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
          Install in <span className="text-gradient">one command</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          macOS users can install with Homebrew. Everyone else — grab a build below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto items-stretch">
        {/* Homebrew */}
        <div className="card-raised p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
              <span className="text-sm font-bold text-foreground">macOS (Homebrew)</span>
              <span className="pill-primary text-[10px] py-0.5 px-2">Brew Cask</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              One-liner install via Homebrew Cask:
            </p>

            <div className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 font-mono text-xs select-all mb-4">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-200 dark:border-zinc-800 select-none">
                <span className="text-[10px] text-zinc-400 font-medium">terminal</span>
                <button
                  onClick={handleCopy}
                  className="text-zinc-400 hover:text-primary transition-colors"
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
                <span className="text-primary mr-2 select-none font-bold">$</span>
                <span className="text-zinc-800 dark:text-zinc-200 select-all font-mono break-all leading-normal">
                  {brewCommand}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-muted-foreground pt-4 border-t border-border/60">
            <Info className="size-3.5 text-primary" />
            <span>Updates are automatic through the Homebrew tap.</span>
          </div>
        </div>

        {/* Manual */}
        <div className="card-raised p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
              <span className="text-sm font-bold text-foreground">Manual Packages</span>
              <span className="pill text-[10px] bg-muted border border-border text-muted-foreground">
                Direct Download
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Builds for macOS (.dmg), Windows (.exe/.msi), and Linux (.deb/.rpm/.AppImage). All
              built with Tauri.
            </p>

            <Button
              variant="outline"
              className="w-full justify-between border-border hover:border-primary/40 hover:bg-primary/5 text-foreground text-sm py-6 rounded-xl font-semibold transition-colors"
              onClick={() => scrollToSection('downloads-section')}
            >
              <div className="flex items-center gap-2">
                <Download className="size-4 text-primary" />
                <span>Choose Platform Package</span>
              </div>
              <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                Exe, Dmg, Deb, Rpm &rarr;
              </span>
            </Button>
          </div>

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
              <PopoverContent className="w-80 text-xs text-left border-border bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-xl">
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
