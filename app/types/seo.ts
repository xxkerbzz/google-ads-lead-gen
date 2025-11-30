export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  schemaType?: string | string[];
  noindex?: boolean;
  nofollow?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  url: string;
}

