import { SEOData } from '../types/seo';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
const siteName = 'Google Ads Local Lead Generation';

export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
}

export function generateMetaTags(seo: SEOData, path: string = '/'): {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Array<{ url: string }>;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
  robots: string;
} {
  const canonical = seo.canonical || generateCanonicalUrl(path);
  const ogTitle = seo.ogTitle || seo.title;
  const ogDescription = seo.ogDescription || seo.description;
  const ogImage = seo.ogImage || `${siteUrl}/og-image.jpg`;
  const ogUrl = seo.ogUrl || canonical;
  const ogType = seo.ogType || 'website';

  const robots = [
    seo.noindex ? 'noindex' : 'index',
    seo.nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  return {
    title: seo.title,
    description: seo.description,
    canonical,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      siteName,
      images: [{ url: ogImage }],
      type: ogType,
    },
    twitter: {
      card: seo.twitterCard || 'summary_large_image',
      title: seo.twitterTitle || ogTitle,
      description: seo.twitterDescription || ogDescription,
      images: [seo.twitterImage || ogImage],
    },
    robots,
  };
}

