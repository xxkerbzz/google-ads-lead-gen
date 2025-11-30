'use client';

import { SEOData } from '../types/seo';
import { generateMetaTags } from '../lib/seo-utils';

interface SEOHeadProps {
  seo: SEOData;
  path?: string;
}

export default function SEOHead({ seo, path = '/' }: SEOHeadProps) {
  const meta = generateMetaTags(seo, path);

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={meta.robots} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.openGraph.title} />
      <meta property="og:description" content={meta.openGraph.description} />
      <meta property="og:url" content={meta.openGraph.url} />
      <meta property="og:site_name" content={meta.openGraph.siteName} />
      <meta property="og:image" content={meta.openGraph.images[0].url} />
      <meta property="og:type" content={meta.openGraph.type} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={meta.twitter.card} />
      <meta name="twitter:title" content={meta.twitter.title} />
      <meta name="twitter:description" content={meta.twitter.description} />
      <meta name="twitter:image" content={meta.twitter.images[0]} />
    </>
  );
}

