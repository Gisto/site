import { Section } from '../section.tsx';
import { Info } from 'lucide-react';

export const About = () => {
  return (
    <Section className="py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
            <Info className="size-3.5" /> About
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight" id="about-section">
            About <span className="text-gradient">Gisto</span>
          </h2>
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            We built Gisto because we were tired of losing snippets across a dozen browser tabs,
            random text files, and Slack messages. Your code snippets deserve better than a "notes"
            app.
          </p>
          <p className="text-lg">
            Gisto connects to{' '}
            <strong className="text-foreground font-semibold">GitHub Gists</strong>,{' '}
            <strong className="text-foreground font-semibold">GitLab Snippets</strong>,{' '}
            <strong>
              <a
                href="https://github.com/sanusart/snippet-bin"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-primary/30 hover:decoration-primary text-foreground font-semibold"
              >
                Snippet-Bin
              </a>
            </strong>{' '}
            (self-hosted), or stores everything locally in your browser. You get real search, tags,
            syntax highlighting, and a proper code editor — all backed by tools you already use.
          </p>
          <p className="text-lg">
            Version 2.x is a ground-up rewrite. We dropped Electron for{' '}
            <strong className="text-foreground font-semibold">Tauri</strong> — the app is now a
            fraction of the size and uses way less RAM. Under the hood: React, Monaco Editor,
            Tailwind, Vite.
          </p>
        </div>
      </div>
    </Section>
  );
};
