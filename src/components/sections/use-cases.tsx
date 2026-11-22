import { Link } from 'dirty-react-router';
import { Section } from '../section.tsx';
import { Reveal } from '../reveal.tsx';
import {
  BookOpen,
  Code2,
  Terminal,
  Database,
  Users,
  Sparkles,
  ListTodo,
  SquareKanban,
  GalleryVerticalEnd,
  ArrowRight,
} from 'lucide-react';

const USE_CASES = [
  {
    title: 'Code Snippets & Boilerplates',
    description:
      'Stop retyping that React hook or API wrapper. Store your go-to snippets and find them in seconds.',
    Icon: Code2,
    badge: 'Code',
    color: 'text-primary',
  },
  {
    title: 'Markdown Notes & Docs',
    description:
      'Write setup guides, architecture notes, or quick wikis right alongside your code. Preview markdown inline or use the Doc snippet type for structured procedures.',
    Icon: BookOpen,
    badge: 'Markdown',
    color: 'text-chart-4',
  },
  {
    title: 'To-do Lists',
    description:
      'Keep checklists for tasks, releases, and personal workflows. Track progress with a dedicated checklist view.',
    Icon: ListTodo,
    badge: 'Tasks',
    color: 'text-chart-3',
  },
  {
    title: 'Kanban Boards',
    description:
      'Organize work in columns with cards, labels, and priorities. Move items across stages without leaving your snippets.',
    Icon: SquareKanban,
    badge: 'Boards',
    color: 'text-chart-2',
  },
  {
    title: 'Flashcards',
    description:
      'Turn notes into study cards with optional multiple choice, time limits, and spaced-repetition review.',
    Icon: GalleryVerticalEnd,
    badge: 'Study',
    color: 'text-chart-5',
  },
  {
    title: 'Shell Scripts & Configs',
    description:
      'Deployment scripts, docker-compose files, terminal aliases — keep them all in one place instead of scattered across your home directory.',
    Icon: Terminal,
    badge: 'DevOps',
    color: 'text-primary',
  },
  {
    title: 'SQL Queries',
    description:
      'That one complex join you always have to re-derive. Save it here, copy it next time.',
    Icon: Database,
    badge: 'Queries',
    color: 'text-chart-4',
  },
  {
    title: 'AI Prompts & Templates',
    description:
      'Your best prompt templates with variable slots, ready to reuse across projects and tools.',
    Icon: Sparkles,
    badge: 'Prompts',
    color: 'text-chart-3',
  },
];

export const UseCases = ({ showAll }: { showAll?: boolean }) => {
  return (
    <Section id="use-cases-section" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-[100px] float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-chart-2/10 rounded-full blur-[100px] float-delayed"></div>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal className="max-w-2xl">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Use Cases
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Not just code snippets
            </h2>
            <p className="mt-3 text-muted-foreground">
              Anything you copy-paste regularly belongs in Gisto. Code, configs, docs, tasks, boards,
              flashcards, queries, prompts.
            </p>
          </div>
        </Reveal>
        {showAll && (
          <Reveal delay={200}>
            <Link
              to="/use-cases"
              className="inline-flex items-center gap-1.5 pb-1 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              View all use cases <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {USE_CASES.map((useCase, index) => {
          const Icon = useCase.Icon;
          return (
            <Reveal key={useCase.title} delay={index * 100}>
              <div
                className="flex flex-col h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon strokeWidth={1.5} className={`size-6 ${useCase.color}`} />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {useCase.badge}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="mt-4 text-base font-medium text-foreground">{useCase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}

        <Link
          to="/documentation"
          className="group flex flex-col h-full justify-between rounded-xl border border-dashed border-border p-6 transition-all hover:border-primary hover:bg-primary/5"
        >
          <div>
            <Users strokeWidth={1.5} className="size-6 text-muted-foreground" />
            <h3 className="mt-4 text-base font-medium text-foreground">Pick your provider</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              GitHub, GitLab, local-only, or your own Snippet-Bin server. Switch whenever — your
              data stays put.
            </p>
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
            Read the docs <ArrowRight className="size-3.5" />
          </span>
        </Link>
      </div>
    </Section>
  );
};
