import Link from 'next/link';
import { BreadcrumbItem } from '../types/seo';
import StructuredData from './StructuredData';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length <= 1) return null;

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <StructuredData
        schemaType="BreadcrumbList"
        breadcrumbs={items}
      />
    </>
  );
}

