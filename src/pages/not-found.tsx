import { useEffect } from 'react';
import { Section } from '../components/section.tsx';
import { useRouter } from 'dirty-react-router';

export const NotFound = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = '404 - Page Not Found | Gisto';

    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    meta.content = 'noindex, nofollow';

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.href);

    return () => {
      meta!.content = 'index, follow';
    };
  }, []);

  return (
    <Section className="flex min-h-[60vh] items-center justify-center py-24">
      <div className="max-w-lg text-center">
        <div className="mb-4 font-mono text-7xl font-semibold text-muted-foreground">404</div>
        <h1 className="mb-3 text-2xl font-semibold text-foreground">Page not found</h1>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to home
        </button>
      </div>
    </Section>
  );
};
