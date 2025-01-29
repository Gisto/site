import { Section } from '../section.tsx';
import { cn } from '@/lib/utils.ts';
import { ReactNode, useEffect, useState } from 'react';
import { Button } from '../ui/button.tsx';

type DownloadLink = {
  label: string;
  link: string;
};

const DOWNLOADS: Record<string, { Icon: (props: { strokeWidth?: number; className?: string }) => ReactNode; links: DownloadLink[] }> = {
  Windows: {
    Icon: ({ strokeWidth, className }) => (
      <svg
        className={`size-16 text-primary ${className}`}
        aria-hidden="true"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          strokeWidth={strokeWidth}
          fillRule="evenodd"
          d="M3.005 12 3 6.408l6.8-.923v6.517H3.005ZM11 5.32 19.997 4v8H11V5.32ZM20.067 13l-.069 8-9.065-1.275L11 13h9.067ZM9.8 19.58l-6.795-.931V13H9.8v6.58Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    links: [],
  },
  MacOs: {
    Icon: () => (
      <svg
        className="size-16  text-primary"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
      </svg>
    ),
    links: [],
  },
  Linux: {
    Icon: () => (
      <svg className="size-16 text-primary stroke-primary fill-primary" viewBox="0 0 434 517">
        <path
          d="M236.651523,122.458353 C247.967995,127.572191 259.664025,132.934894 262.138318,133.923664 C266.824994,135.79654 265.206609,148.956904 260.860768,155.334693 C256.514927,161.712482 224.383721,180.767965 214.0698,184.00553 C203.75588,187.243096 195.725783,186.232901 187.808525,183.08338 C179.891268,179.933859 159.581075,159.989466 156.626401,155.334693 C153.671728,150.67992 153.711917,142.672506 156.626401,138.820173 C159.540886,134.967841 188.44073,113.844888 192.849942,112.040748 C197.259154,110.236608 208.460327,110.79963 214.0698,112.642385 C216.321708,113.382155 223.756989,116.655825 232.154237,120.43089 C228.168148,117.548211 225.491241,112.205397 225.491241,106.090794 C225.491241,96.9184656 231.514838,89.482824 238.945323,89.482824 C246.375808,89.482824 252.399406,96.9184656 252.399406,106.090794 C252.399406,115.263123 246.375808,122.698765 238.945323,122.698765 C238.163348,122.698765 237.396955,122.616414 236.651523,122.458353 L236.651523,122.458353 L236.651523,122.458353 Z M159.234815,164.442184 C156.546485,160.353913 154.535586,157.17523 153.73307,155.917912 C150.602445,151.013098 150.645027,142.575548 153.73307,138.51628 C154.759928,137.166463 158.831203,133.804378 163.980426,129.847648 C158.182179,124.567307 154.263745,114.490412 154.263745,102.927371 C154.263745,85.8930466 162.767648,72.083998 173.257744,72.083998 C183.747839,72.083998 192.251742,85.8930466 192.251742,102.927371 C192.251742,105.539549 192.051768,108.075882 191.675323,110.498205 L191.675323,110.498205 C191.83999,110.417001 191.986487,110.35012 192.113733,110.298341 C196.543363,108.495825 207.442727,108.935753 213.627104,110.641386 C213.105827,108.175892 212.828575,105.591064 212.828575,102.927371 C212.828575,85.8930466 224.167112,72.083998 238.153906,72.083998 C252.140701,72.083998 263.479238,85.8930466 263.479238,102.927371 C263.479238,113.16098 259.386964,122.23053 253.086694,127.841184 C259.198121,130.596787 264.007369,132.75232 265.528251,133.356744 C270.49402,135.330226 268.779259,149.197527 264.174622,155.917912 C263.708523,156.598176 262.940773,157.549832 261.925883,158.714506 C264.100206,163.571519 276.683488,191.851195 288.192454,221.357245 C300.841209,253.785419 312.728688,267.531944 315.56434,292.375163 C319.137541,323.680065 319.383621,345.357432 318.333309,359.946141 C329.109385,366.72684 320.210186,389.342102 341.477826,389.980197 C365.613392,390.70434 378.212767,361.112785 392.568602,361.616797 C395.749348,352.910741 399.625139,337.895506 397.366218,320.281403 C393.778565,292.306426 370.946505,251.311678 370.946505,251.311678 C370.946505,251.311678 324.332562,182.550911 314.508607,163.460272 C304.684653,144.369634 304.746341,132.591294 302.439504,118.183781 C300.132667,103.776268 302.439504,104.3886 302.439504,88.0818345 C302.439504,71.775069 297.170091,59.3422623 297.170091,59.3422623 C297.170091,59.3422623 279.290568,-1.89345029 215.125538,0.045073018 C150.960508,1.98359633 145.8163,59.3422618 145.8163,59.3422618 C145.8163,59.3422618 145.919118,168.386243 145.919118,177.891051 C145.919118,187.395858 142.680763,186.132802 135.517063,197.142693 C128.353364,208.152584 110.184502,228.861308 99.5416133,249.115211 C92.2056767,263.075833 88.2577435,275.004924 80.2894766,295.292227 C72.3212096,315.57953 61.1795475,328.25019 61.1795475,340.12385 C61.1795475,346.040585 62.7409369,350.27583 64.3076112,353.288865 C68.6258188,347.920115 73.7219761,344.138369 81.634285,344.138369 C93.613703,344.138369 122.467653,389.404321 145.919117,426.424029 C147.504904,428.9273 149.075874,431.372626 150.619583,433.748762 C154.245475,434.435218 166.574757,435.691239 166.574757,421.026692 C166.574757,403.834075 101.165409,358.128947 101.165409,358.128947 C101.165409,358.128947 97.7879762,326.403584 105.38063,303.037813 C112.973283,279.672042 127.259744,257.390609 127.259744,257.390609 C127.259744,257.390609 132.451057,234.950802 141.265654,215.983442 C150.080251,197.016081 158.37772,192.098672 158.37772,192.098672 L159.234815,164.442184 L159.234815,164.442184 L159.234815,164.442184 Z M170.251069,462.906988 C173.663296,467.895287 175.929578,471.279563 176.482741,472.547298 C179.549603,479.575919 177.654499,489.415989 173.746207,496.299869 C189.481212,493.138475 209.014503,490.264423 228.027442,490.264423 C245.507763,490.264423 265.650116,492.6938 283.259506,495.542312 C281.216746,480.979763 282.750465,461.818481 285.187751,440.815751 C285.60824,437.192282 285.980392,433.862958 286.310062,430.789632 C275.19586,442.833405 260.458059,453.595014 241.289427,458.877325 C197.617226,470.912099 176.000256,465.06087 170.251069,462.906988 L170.251069,462.906988 L170.251069,462.906988 Z M136.940689,516.285419 C123.777207,518.509701 121.146445,513.717991 80.6233584,501.676213 C60.5032641,495.697357 34.2216648,492.876116 22.0987145,488.908218 C9.97576423,484.94032 2.55907109,481.246803 0.268290895,475.375626 C-0.866222639,472.467914 1.92484582,462.931295 2.55907106,442.52731 C3.1932963,422.123324 0.0199898369,406.542143 2.55907121,401.677758 C9.55661594,388.271826 28.1780896,395.91625 43.8734917,383.608558 C59.5688939,371.300865 61.678823,348.96537 80.6233584,348.96537 C92.1115118,348.96537 119.782189,391.854034 142.271931,426.929534 C156.86889,449.695275 170.156719,467.402858 171.582169,470.630492 C175.20383,478.830986 171.609992,491.070714 166.080896,497.145784 C160.5518,503.220853 149.196741,514.214469 136.940689,516.285419 L136.940689,516.285419 L136.940689,516.285419 Z M159.672273,152.467841 C159.204688,153.057121 178.110141,167.260526 197.51845,164.828051 C219.462096,162.077819 253.463492,138.958921 251.378444,136.601684 C249.901494,134.931928 217.225417,160.685713 196.564731,162.077819 C175.904046,163.469926 160.139858,151.878561 159.672273,152.467841 L159.672273,152.467841 L159.672273,152.467841 Z M289.701794,439.852034 C294.288225,398.220089 292.234624,398.672771 293.543469,373.225889 C293.543469,373.225889 292.442303,359.433237 311.477895,360.505254 C330.513487,361.577271 311.459325,391.083768 339.150227,393.448893 C366.84113,395.814018 374.363068,365.634904 387.722907,367.228334 C401.082746,368.821765 390.186075,381.498278 397.14661,399.253229 C403.145276,414.554642 436.560456,425.549845 433.12039,440.212984 C429.680325,454.876122 418.400079,452.679539 383.36763,479.421333 C348.33518,506.163127 357.79322,517.531947 311.219978,516.108116 C284.288311,515.284764 285.115364,481.483979 289.701794,439.852034 L289.701794,439.852034 L289.701794,439.852034 Z M173.257744,122.698765 C179.376966,122.698765 184.337576,115.617201 184.337576,106.88165 C184.337576,98.1460989 179.376966,91.0645355 173.257744,91.0645355 C167.138521,91.0645355 162.177911,98.1460989 162.177911,106.88165 C162.177911,115.617201 167.138521,122.698765 173.257744,122.698765 L173.257744,122.698765 L173.257744,122.698765 Z M177.792932,111.334075 C180.747219,111.334075 180.124674,104.81608 177.792932,100.555963 C175.46119,96.2958457 171.520261,94.5684197 170.437935,96.6360523 C169.286749,98.8352338 172.702438,104.735867 172.702438,104.735867 C172.702438,104.735867 174.838645,111.334076 177.792932,111.334075 L177.792932,111.334075 L177.792932,111.334075 Z M245.08112,104.845042 C246.676319,104.328252 247.234607,101.877515 245.08112,97.9798892 C242.927634,94.0822634 239.727852,93.2131298 238.499765,95.0543408 C237.392319,96.7146812 240.544,100.616698 240.544,100.616698 C240.544,100.616698 243.485921,105.361832 245.08112,104.845042 L245.08112,104.845042 L245.08112,104.845042 Z"
          className="fill-primary"
        />
      </svg>
    ),
    links: [],
  },
  Releases: {
    Icon: () => (
      <svg
        className="size-16 text-primary"
        aria-hidden="true"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    links: [
      {
        label: 'Releases page',
        link: 'https://github.com/Gisto/gisto/releases',
      },
    ],
  },
};

type Asset = {
  browser_download_url: string;
  // Add other properties of the asset if needed
};

type Release = {
  prerelease: boolean;
  tag_name: string;
  published_at: string;
  assets: Asset[];
};

const getLatestPreRelease = (releases: Release[]) => {
  const release = releases.filter((release) => release.prerelease)[0];
  return {
    version: release.tag_name,
    publishedAt: new Date(release.published_at).toDateString(),

    assets: release.assets.reduce(
      (acc: Record<string, DownloadLink[]>, next) => {
        if (next.browser_download_url.endsWith('.exe')) {
          acc['Windows'].push({ label: 'exe', link: next.browser_download_url });
        }
        if (next.browser_download_url.endsWith('.msi')) {
          acc['Windows'].push({ label: 'msi', link: next.browser_download_url });
        }

        if (next.browser_download_url.endsWith('.rpm')) {
          acc['Linux'].push({ label: 'rpm', link: next.browser_download_url });
        }

        if (next.browser_download_url.endsWith('.deb')) {
          acc['Linux'].push({ label: 'deb', link: next.browser_download_url });
        }

        if (next.browser_download_url.endsWith('.AppImage')) {
          acc['Linux'].push({ label: 'AppImage', link: next.browser_download_url });
        }

        if (next.browser_download_url.endsWith('aarch64.dmg')) {
          acc['MacOs'].push({ label: 'dmg', link: next.browser_download_url });
        }

        if (next.browser_download_url.endsWith('x64.dmg')) {
          acc['MacOs'].push({ label: 'dmg (intel)', link: next.browser_download_url });
        }

        return acc;
      },
      {
        Windows: [],
        Linux: [],
        MacOs: [],
      }
    ),
  };
};

export const Downloads = ({ className }: { className?: string }) => {
  const [releases, setReleases] = useState<Release[] | null>(null);

  useEffect(() => {
    (async () => {
      const result = await fetch('https://api.github.com/repos/Gisto/Gisto/releases');
      const all = await result.json() as Release[];
      setReleases(all);
    })();
  }, []);

  if (!releases) {
    return null;
  }

  const { version, publishedAt, assets } = getLatestPreRelease(releases);

  DOWNLOADS.Linux.links = assets.Linux;
  DOWNLOADS.Windows.links = assets.Windows;
  DOWNLOADS.MacOs.links = assets.MacOs;

  return (
    <Section>
      <h1 className="mb-8 scroll-m-20 text-4xl text-muted-foreground font-light lg:text-4xl text-center">
        <span id="downloads-section" className="font-extrabold text-primary">Downloads</span> and packages
      </h1>
      <p className="mb-8 text-center">
        Latest pre-release: <strong>{version}</strong>{' '}
        <em>
          <small>({publishedAt})</small>
        </em>
      </p>

      <div className={cn('grid grid-cols-2 sm:grid-cols-4 gap-8', className)}>
        {Object.keys(DOWNLOADS).map((os) => {
          const Icon = DOWNLOADS[os].Icon;
          return (
            <div
              className={cn(
                'text-center p-8 rounded shadow-md',
                'backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#000]',
                'dark:bg-[#fff] dark:bg-opacity-10 dark:border-[#fff] dark:border-opacity-20'
              )}
            >
              <div className="flex justify-center items-center mx-auto">
                <Icon strokeWidth={1.5} className="flex-shrink-0 size-16  stroke-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">{os}</h3>
                <p className="mt-4 text-muted-foreground">
                  {DOWNLOADS[os].links.map((link) => (
                    <Button variant="ghost" size="sm" onClick={() => window.open(link.link)}>
                      {link.label}
                    </Button>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid sm:flex sm:items-center gap-2 my-8">
        <strong>Previous version: v1.13.4</strong> ({new Date('Oct 10, 2020').toDateString()}) is <span className="text-danger">deprecated</span> and will not receive updates.
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('https://github.com/Gisto/Gisto/releases/tag/v1.13.4')}
        >
          v1.13.4 Release
        </Button>
      </div>

      {/*<div className="flex items-center gap-2 my-8">*/}
      {/*  <strong>Latest stable release:</strong>*/}
      {/*  <Button*/}
      {/*    variant="outline"*/}
      {/*    size="sm"*/}
      {/*    onClick={() => window.open('https://github.com/Gisto/gisto/releases/latest')}*/}
      {/*  >*/}
      {/*    Releases*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </Section>
  );
};
