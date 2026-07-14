import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
};

const siteUrl = 'https://ahmetle-y-z-yorum.vercel.app';

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function SEO({ title, description, path, keywords }: SEOProps) {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${path}`;
    document.title = title;
    setMeta('description', description);
    if (keywords) {
      setMeta('keywords', keywords);
    }
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', canonicalUrl, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, keywords, path, title]);

  return null;
}
