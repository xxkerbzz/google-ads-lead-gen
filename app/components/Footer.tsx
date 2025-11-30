import Link from 'next/link';

const footerLinks = [
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
  { label: 'FAQ', url: '/faq' },
  { label: 'Privacy Policy', url: '/privacy' },
  { label: 'Terms of Service', url: '/terms' },
  { label: 'Resources', url: '/resources' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-light text-gray-900 mb-4">
              Google Ads Lead Gen
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Transform your ad spend from wasted clicks into qualified, ready-to-hire leads.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.url}>
                  <Link
                    href={link.url}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-4">Contact</h4>
            <p className="text-sm text-gray-600">
              Get started with qualified lead generation
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Google Ads Lead Gen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

