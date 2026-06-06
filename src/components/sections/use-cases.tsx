import { Section } from '../section.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card.tsx';
import { BookOpen, Code2, Terminal, Database, Users, Sparkles, Layout } from 'lucide-react';

const USE_CASES = [
  {
    title: 'Code Snippets & Boilerplates',
    description:
      'Consolidate frequently repeated setup code, custom React hooks, API wrapper calls, and syntax-highlighted configurations. Zero distraction, instantly searchable.',
    Icon: Code2,
    badge: 'Code Vault',
    gradient: 'from-blue-500/10 to-sky-500/10 border-blue-500/20 text-blue-500 dark:text-blue-400',
  },
  {
    title: 'Documents & Markdown Notes',
    description:
      'Create rich architectural logs, quick markdown wikis, setup tutorials, and technical guidelines alongside your code. Structured, previewable, and highly readable.',
    Icon: BookOpen,
    badge: 'Markdown Support',
    gradient:
      'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-500 dark:text-emerald-400',
  },
  {
    title: 'Shell Scripts & Automation',
    description:
      'Archive server startup scripts, complex deployment shell loops, docker-compose configuration files, and terminal aliases. Maintain command logs easily.',
    Icon: Terminal,
    badge: 'DevOps & SysOps',
    gradient:
      'from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400',
  },
  {
    title: 'SQL & Database Queries',
    description:
      'Save complex joins, reporting scripts, database migration queries, and seeding templates. Copy them in one click next time you need to audit tables.',
    Icon: Database,
    badge: 'Database Vault',
    gradient:
      'from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-indigo-500 dark:text-indigo-400',
  },
  {
    title: 'System Prompts & Templates',
    description:
      'Store structured LLM prompt skeletons, system guidance rules, and template variables to organize your workspace for smart integrations and AI assistance.',
    Icon: Sparkles,
    badge: 'AI Enhancements',
    gradient:
      'from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-500 dark:text-purple-400',
  },
];

export const UseCases = () => {
  return (
    <Section id="use-cases-section" className="py-12 relative overflow-hidden">
      <div className="glow-bg top-1/4 right-0 translate-x-1/2 opacity-40 dark:opacity-60" />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
          <Layout className="size-3.5" /> Use Cases
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
          More than a <span className="text-gradient">simple snippet manager</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Gisto is a code snippet manager that runs on GitHub Gists / GitLab Snippets / local
          in-browser database with features such as searching, tagging and sharing snippets while
          including a rich code editor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {USE_CASES.map((useCase) => {
          const Icon = useCase.Icon;
          return (
            <Card
              key={useCase.title}
              className="glass-panel border border-border/80 hover:border-primary/40 bg-card hover:bg-muted/10 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group overflow-hidden relative"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${useCase.gradient} filter blur-[24px] opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              />

              <CardHeader className="relative z-10 p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-2xl bg-gradient-to-br ${useCase.gradient} border flex items-center justify-center`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-muted/40 border border-border text-muted-foreground">
                    {useCase.badge}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold tracking-tight text-foreground mt-2 group-hover:text-primary transition-colors">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 p-6 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </CardContent>
            </Card>
          );
        })}

        {/* Collaborative & Multi-provider Card */}
        <Card className="glass-panel border-dashed border-border bg-card/20 flex flex-col items-center justify-center p-8 text-center relative group min-h-[250px] hover:border-primary/40 transition-colors">
          <div className="p-3 rounded-full border border-border text-muted-foreground mb-4 group-hover:border-primary group-hover:text-primary transition-all">
            <Users className="size-6" />
          </div>
          <h3 className="text-lg font-bold text-zinc-700 dark:text-zinc-350 mb-2">
            Team Sync-Share
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px] mb-4">
            Choose your provider — GitHub Gists, GitLab Snippets, or local in-browser database.
            Switch anytime and keep your data in sync.
          </p>
          <span className="text-xs text-primary font-semibold group-hover:underline underline-offset-4 cursor-pointer">
            Explore Documentation &rarr;
          </span>
        </Card>
      </div>
    </Section>
  );
};
