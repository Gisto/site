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
    <Section className="py-24 relative min-h-[60vh] flex items-center justify-center">
      <div className="text-center relative z-10 max-w-lg">
        <div className="text-8xl font-extrabold text-gradient mb-4">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-4">Page not found</h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all text-sm"
        >
          Back to home
        </button>
      </div>
    </Section>
  );
};
