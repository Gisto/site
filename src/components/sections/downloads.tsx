import { Section } from '../section.tsx';
import { cn } from '@/lib/utils.ts';
import { useEffect, useState } from 'react';
import { Download, AlertTriangle, ExternalLink, Package, Info } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover.tsx';

const FIVE_MINUTES = 5 * 60 * 1000;

type DownloadLink = {
  label: string;
  link: string;
};

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="-0.5 0 257 257" fill="currentColor">
    <path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" />
  </svg>
);

const MacOsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
  </svg>
);

const LinuxIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const DOWNLOADS: Record<
  string,
  {
    Icon: React.ComponentType<{ className?: string }>;
    links: DownloadLink[];
  }
> = {
  Windows: { Icon: WindowsIcon, links: [] },
  MacOs: { Icon: MacOsIcon, links: [] },
  Linux: { Icon: LinuxIcon, links: [] },
  'All Releases': { Icon: GitHubIcon, links: [] },
};

type Asset = { browser_download_url: string };

type Release = {
  message?: string;
  prerelease: boolean;
  tag_name: string;
  published_at: string;
  assets: Asset[];
};

const getLatestRelease = (release: Release) => ({
  version: release.tag_name,
  publishedAt: new Date(release.published_at).toDateString(),
  assets: release.assets.reduce(
    (acc: Record<string, DownloadLink[]>, next) => {
      if (next.browser_download_url.endsWith('.exe'))
        acc['Windows'].push({ label: '.exe', link: next.browser_download_url });
      if (next.browser_download_url.endsWith('.msi'))
        acc['Windows'].push({ label: '.msi', link: next.browser_download_url });
      if (next.browser_download_url.endsWith('.rpm'))
        acc['Linux'].push({ label: '.rpm', link: next.browser_download_url });
      if (next.browser_download_url.endsWith('.deb'))
        acc['Linux'].push({ label: '.deb', link: next.browser_download_url });
      if (next.browser_download_url.endsWith('.AppImage'))
        acc['Linux'].push({ label: '.AppImage', link: next.browser_download_url });
      if (next.browser_download_url.endsWith('aarch64.dmg'))
        acc['MacOs'].push({ label: '.dmg (Apple)', link: next.browser_download_url });
      if (next.browser_download_url.endsWith('x64.dmg'))
        acc['MacOs'].push({ label: '.dmg (Intel)', link: next.browser_download_url });
      return acc;
    },
    { Windows: [], Linux: [], MacOs: [] }
  ),
});

export const Downloads = ({ className }: { className?: string }) => {
  const [release, setRelease] = useState<Release | null>(null);

  useEffect(() => {
    (async () => {
      const cachedData = localStorage.getItem('latestRelease');
      const now = Date.now();
      if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        if (now - timestamp < FIVE_MINUTES) {
          setRelease(data);
          return;
        }
      }
      const result = await fetch('https://api.github.com/repos/Gisto/Gisto/releases/latest');
      const latest = (await result.json()) as Release;
      localStorage.setItem('latestRelease', JSON.stringify({ data: latest, timestamp: now }));
      setRelease(latest);
    })();
  }, []);

  if (release === null || release?.message?.startsWith('API rate limit exceeded')) {
    return (
      <Section className="mt-16 sm:mt-0">
        <h1 className="mb-8 scroll-m-20 text-4xl text-muted-foreground font-light lg:text-4xl text-center">
          Releases cannot be loaded at the moment.
        </h1>
        <p>The reason is: Github API rate limit exceeded.</p>
        <p>Please check again later, Github API rate limit resets every 1 hour.</p>
        <p>
          For now, you can check github{' '}
          <a target="_blank" href="https://github.com/Gisto/gisto/releases">
            release page
          </a>
        </p>
      </Section>
    );
  }

  const { version, publishedAt, assets } = getLatestRelease(release);
  DOWNLOADS.Linux.links = assets.Linux;
  DOWNLOADS.Windows.links = assets.Windows;
  DOWNLOADS.MacOs.links = assets.MacOs;
  DOWNLOADS['All Releases'].links = [
    { label: 'View on GitHub', link: 'https://github.com/Gisto/gisto/releases' },
  ];

  return (
    <Section className="py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-primary font-semibold mb-4 tracking-wider uppercase">
          <Package className="size-3.5" /> Downloads
        </div>
        <h2
          id="downloads-section"
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          Available for <span className="text-gradient">every platform</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Builds for macOS, Windows, and Linux. Free and open source, MIT licensed.
        </p>
      </div>

      {/* Version badge */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/20">
          <div className="size-2 rounded-full bg-primary animate-pulse" />
          <span className="text-muted-foreground font-medium">Latest</span>
          <span className="text-foreground font-bold">{version}</span>
          <span className="text-muted-foreground/40 hidden sm:inline">&middot;</span>
          <span className="text-muted-foreground/60 hidden sm:inline">{publishedAt}</span>
          <span className="text-muted-foreground/40 hidden sm:inline">&middot;</span>
          <a
            href="https://github.com/Gisto/Gisto/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary/70 hover:text-primary font-medium transition-colors flex items-center gap-1"
          >
            Changelog <ExternalLink className="size-2.5 opacity-60" />
          </a>
        </div>
      </div>

      {/* Download cards */}
      <div className={cn('grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto', className)}>
        {Object.keys(DOWNLOADS).map((os) => {
          const Icon = DOWNLOADS[os].Icon;
          const isAllReleases = os === 'All Releases';

          return (
            <div
              key={os}
              className={cn(
                'card-raised p-5 flex flex-col items-center text-center',
                isAllReleases && 'border-dashed opacity-80 hover:opacity-100'
              )}
            >
              <Icon className="size-8 text-primary mb-3" />

              <h3 className="text-sm font-bold text-foreground mb-1 flex items-center gap-1.5">
                {os === 'All Releases' ? 'GitHub' : os}
                {os === 'Windows' && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Info className="size-3.5" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-72 text-xs text-left border-border p-4 rounded-xl shadow-xl bg-white dark:bg-zinc-900">
                      <p className="mb-2 text-sm font-bold text-foreground">Security Note</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                        Not code-signed. You may see <strong>"Windows protected your PC"</strong> or{' '}
                        <strong>"Unrecognized app"</strong> warnings.
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Click <strong>More info</strong> &rarr; <strong>Run anyway</strong> to
                        proceed.
                      </p>
                    </PopoverContent>
                  </Popover>
                )}
                {os === 'MacOs' && (
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Info className="size-3.5" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 text-xs text-left border-border p-4 rounded-xl shadow-xl bg-white dark:bg-zinc-900">
                      <p className="mb-2 text-sm font-bold text-foreground">Security Note</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                        Not code-signed. You may see{' '}
                        <strong>"This app is from an unidentified developer"</strong>.
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        Go to{' '}
                        <strong>System Preferences &gt; Security &amp; Privacy &gt; General</strong>{' '}
                        and click <strong>Open Anyway</strong>.
                      </p>
                      <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">
                        Quick fix (Terminal):
                      </p>
                      <code className="block bg-muted border border-border p-2 rounded-lg font-mono text-xs text-foreground break-all select-all">
                        xattr -dr com.apple.quarantine /Applications/Gisto.app
                      </code>
                    </PopoverContent>
                  </Popover>
                )}
              </h3>

              <div className="flex flex-col gap-1.5 w-full mt-2">
                {DOWNLOADS[os].links.map((link) => (
                  <a
                    key={link.label}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all',
                      isAllReleases
                        ? 'border border-border hover:border-primary/40 text-foreground hover:bg-primary/5'
                        : 'bg-primary/10 text-primary hover:bg-primary/20 border border-primary/15'
                    )}
                  >
                    <Download className="size-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Warning */}
      <div className="flex items-start gap-3 px-5 py-4 my-10 rounded-xl border border-amber-500/20 bg-amber-500/5 max-w-5xl mx-auto">
        <AlertTriangle className="size-4 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-semibold">Previous version (v1.13.4):</span> will
            not receive updates.{' '}
            <a
              href="https://github.com/Gisto/Gisto/releases/tag/v1.13.4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              View release <ExternalLink className="size-2.5 inline opacity-60" />
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};
