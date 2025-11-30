'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';

const navigation = [
  { label: 'Home', url: '/' },
  { label: 'Services', url: '/services' },
  { label: 'How It Works', url: '/how-it-works' },
  { label: 'Pricing', url: '/pricing' },
  {
    label: 'Resources',
    url: '/resources',
    dropdown: true,
    items: [
      { label: 'All Resources', url: '/resources' },
      { label: 'Industry-Specific Google Ads', url: '/resources/industry-specific-google-ads' },
      { label: 'Campaign Types & Strategies', url: '/resources/campaign-types-strategies' },
      { label: 'Local Lead Generation', url: '/resources/local-lead-generation' },
      { label: 'Conversion & Tracking', url: '/resources/conversion-tracking' },
      { label: 'Budget & Bid Management', url: '/resources/budget-bid-management' },
      { label: 'Account Management', url: '/resources/account-management' },
    ],
  },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-light text-gray-900">
              Google Ads Lead Gen
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.url} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    onMouseEnter={() => setOpenDropdown(item.url)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <span>{item.label}</span>
                    <FiChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown && openDropdown === item.url && (
                  <div
                    className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50"
                    onMouseEnter={() => setOpenDropdown(item.url)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.url}
                        href={subItem.url}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navigation.map((item) => (
              <div key={item.url}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.url ? null : item.url
                        )
                      }
                      className="w-full flex items-center justify-between px-4 py-2 text-gray-600 hover:text-gray-900"
                    >
                      <span>{item.label}</span>
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.url ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.url && (
                      <div className="pl-4">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.url}
                            href={subItem.url}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.url}
                    className="block px-4 py-2 text-gray-600 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

