import { Section } from '../section.tsx';
import { Reveal } from '../reveal.tsx';

export const About = () => {
  return (
    <Section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-chart-4/10 rounded-full blur-[100px] float-delayed"></div>
      <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
        <Reveal className="mb-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">About</p>
            <h2 id="about-section" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              About Gisto
            </h2>
          </div>
        </Reveal>

        <Reveal className="mt-8 max-w-2xl space-y-4 text-muted-foreground" delay={150}>
          <p className="leading-relaxed">
            We built Gisto because we were tired of losing snippets across a dozen browser tabs,
            random text files, and Slack messages. Your code snippets deserve better than a notes
            app.
          </p>
          <p className="leading-relaxed">
            Gisto connects to <strong className="font-medium text-foreground">GitHub Gists</strong>,{' '}
            <strong className="font-medium text-foreground">GitLab Snippets</strong>,{' '}
            <a
              href="https://github.com/sanusart/snippet-bin"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              Snippet-Bin
            </a>{' '}
            (self-hosted), or stores everything locally in your browser. You get real search, tags,
            syntax highlighting, a proper code editor, and structured snippet types (to-do lists,
            kanban boards, docs, flashcards) — all backed by tools you already use.
          </p>
          <p className="leading-relaxed">
            Version 2.x is a ground-up rewrite. We dropped Electron for{' '}
            <strong className="font-medium text-foreground">Tauri</strong> — the app is now a
            fraction of the size and uses way less RAM. Under the hood: React, Monaco Editor,
            Tailwind, Vite.
          </p>
        </Reveal>
      </div>
    </Section>
  );
};
