import { useEffect } from 'react';

const SITE_NAME = 'Gisto';
const SITE_URL = 'https://gisto.org';

function upsertMeta(attr: string, value: string, attribute = 'name') {
  let el = document.querySelector(`meta[${attribute}="${attr}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, attr);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export function useSEO(opts: {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}) {
  const { title, description, canonical, image } = opts;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = canonical || (typeof window !== 'undefined' ? window.location.href : SITE_URL);
  const ogImage = image || `${SITE_URL}/app-dark.png`;

  useEffect(() => {
    document.title = fullTitle;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    if (description) {
      upsertMeta('description', description);
      upsertMeta('og:description', description, 'property');
      upsertMeta('twitter:description', description, 'name');
    }

    upsertMeta('og:title', fullTitle, 'property');
    upsertMeta('og:url', url, 'property');
    upsertMeta('twitter:title', fullTitle, 'name');
    upsertMeta('twitter:url', url, 'name');
    upsertMeta('og:image', ogImage, 'property');
    upsertMeta('twitter:image', ogImage, 'name');
  }, [fullTitle, description, url, ogImage]);
}

export function useCanonical(url?: string) {
  useEffect(() => {
    const href = url || window.location.href;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }, [url]);
}

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
