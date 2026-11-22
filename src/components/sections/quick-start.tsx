import { useState } from 'react';
import { Section } from '../section.tsx';
import { Reveal } from '../reveal.tsx';
import { Copy, Check, Info, Download, ShieldAlert } from 'lucide-react';
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
    <Section id="quick-start-section" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-chart-2/10 rounded-full blur-[100px] float-delayed"></div>

      <Reveal className="max-w-2xl">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Quick Start
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Install in one command
          </h2>
          <p className="mt-3 text-muted-foreground">
            macOS users can install with Homebrew. Everyone else — grab a build below.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        <Reveal delay={150}>
          <div className="flex flex-col h-full justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl">
            <div>
              <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                <span className="text-sm font-medium text-foreground">macOS (Homebrew)</span>
                <span className="pill-primary">Brew Cask</span>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                One-liner install via Homebrew Cask:
              </p>

              <div className="mb-6 rounded-xl border border-border bg-muted p-5 font-mono text-xs">
                <div className="mb-4 flex select-none items-center justify-between border-b border-border pb-3">
                  <span className="text-[11px] text-muted-foreground">terminal</span>
                  <button
                    onClick={handleCopy}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    title="Copy command"
                  >
                    {copied ? <Check className="size-5 text-success" /> : <Copy className="size-5" />}
                  </button>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 select-none font-bold text-primary">$</span>
                  <span className="break-all font-mono leading-normal text-foreground select-all">
                    {brewCommand}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-border pt-6 text-xs text-muted-foreground">
              <Info className="size-4 text-primary" />
              <span>Updates are automatic through the Homebrew tap.</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="flex flex-col h-full justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl">
            <div>
              <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                <span className="text-sm font-medium text-foreground">Manual Packages</span>
                <span className="pill border border-border text-muted-foreground">
                  Direct Download
                </span>
              </div>
              <p className="mb-8 text-sm text-muted-foreground">
                Builds for macOS (.dmg), Windows (.exe/.msi), and Linux (.deb/.rpm/.AppImage). All
                built with Tauri.
              </p>

              <Button
                variant="outline"
                className="w-full justify-between btn-sweep"
                onClick={() => scrollToSection('downloads-section')}
              >
                <span className="flex items-center gap-2">
                  <Download className="size-5" />
                  <span>Choose platform package</span>
                </span>
                <span className="text-[11px] text-muted-foreground">&rarr;</span>
              </Button>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldAlert className="size-5 shrink-0 text-amber-500" />
                <span>Not code-signed: install warnings may apply.</span>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="shrink-0 text-xs font-medium text-primary hover:underline">
                    Read info
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-80 rounded-xl border-border p-4 text-left text-xs shadow-lg">
                  <p className="mb-2 text-sm font-medium text-foreground">Security note</p>
                  <p className="mb-2 text-xs leading-relaxed text-muted-foreground">
                    This app is not code-signed. You may see a warning like &quot;Windows protected
                    your PC&quot; or &quot;This app is from an unidentified developer.&quot;
                  </p>
                  <p className="mb-2 text-xs leading-relaxed text-muted-foreground">
                    <strong>Windows:</strong> Click &quot;More Info&quot; then &quot;Run Anyway&quot;.
                  </p>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <strong>macOS:</strong> Go to System Settings &rarr; Privacy &amp; Security and
                    click &quot;Open Anyway&quot;.
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
