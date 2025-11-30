import { SEOData, BreadcrumbItem } from '../types/seo';

interface StructuredDataProps {
  schemaType: string | string[];
  data?: Record<string, any>;
  breadcrumbs?: BreadcrumbItem[];
}

export default function StructuredData({ schemaType, data, breadcrumbs }: StructuredDataProps) {
  const types = Array.isArray(schemaType) ? schemaType : [schemaType];
  
  const schemas = types.map((type) => {
    switch (type) {
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Google Ads Local Lead Generation',
          url: 'https://yourdomain.com',
          logo: 'https://yourdomain.com/logo.png',
          description: 'Google Ads management service for local service businesses',
          ...data,
        };
      
      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Google Ads Local Lead Generation',
          url: 'https://yourdomain.com',
          ...data,
        };
      
      case 'Article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          ...data,
        };
      
      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data?.faqs || [],
        };
      
      case 'BreadcrumbList':
        if (!breadcrumbs) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: `https://yourdomain.com${item.url}`,
          })),
        };
      
      default:
        return null;
    }
  }).filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

