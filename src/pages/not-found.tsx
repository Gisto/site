import { useEffect } from 'react';
import { Section } from '../components/section.tsx';
import { useRouter } from 'dirty-react-router';

export const NotFound = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'prerender-status-code';
    meta.content = '404';
    document.head.appendChild(meta);
    return () => {
      meta.remove();
    };
  }, []);

  useEffect(() => {
    document.title = '404 - Page Not Found | Gisto';
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.setAttribute('href', window.location.href);
  }, []);

  return (
    <Section className="py-24 relative min-h-[60vh] flex items-center justify-center">
      <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
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
