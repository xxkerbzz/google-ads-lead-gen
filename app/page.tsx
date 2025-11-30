import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import StructuredData from './components/StructuredData';
import { FiCheck, FiArrowRight, FiTrendingUp, FiTarget, FiBarChart2, FiUsers } from 'react-icons/fi';

export const metadata = {
  title: 'Google Ads Local Lead Generation Service | Qualified Leads That Book Jobs',
  description: 'Stop wasting ad spend on clicks that don\'t convert. Get qualified local leads that actually book jobs through industry-specific, conversion-optimized Google Ads campaigns.',
};

export default function Home() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
  ];

  return (
    <>
      <StructuredData
        schemaType={['Organization', 'WebSite']}
        data={{
          '@type': 'Organization',
          name: 'Google Ads Local Lead Generation',
          url: 'https://yourdomain.com',
          description: 'Google Ads management service for local service businesses',
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Stop Wasting Ad Spend on Clicks That Don't Convert.
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 mb-8 leading-relaxed">
              Get Qualified Local Leads That Actually Book Jobs.
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your ad spend from wasted clicks into qualified, ready-to-hire leads. We handle everything—campaign setup, keyword research, ad copy, landing pages, and ongoing optimization—so you get more jobs booked while we manage the complexity behind the scenes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">
                The Problem: Wasted Ad Spend and Unqualified Leads
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Lack of Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Most local service business owners don't understand Google Ads optimization, keyword research, or conversion tracking.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Budget Waste</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Without proper targeting and optimization, ad spend goes to unqualified clicks or competitors.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Poor Lead Quality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Generic campaigns attract tire-kickers, price-shoppers, and out-of-area inquiries instead of ready-to-buy customers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">No Tracking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Many businesses can't measure which ads generate actual revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                The Solution: Industry-Specific Google Ads That Generate Qualified Leads
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We specialize in Google Ads for local service businesses. Our industry-specific expertise means we understand your unique challenges and optimize campaigns specifically for your vertical.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                  <FiTarget className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4">Industry Specialization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deep expertise in local service verticals—plumbing, electrical, HVAC, roofing, landscaping—not generic PPC.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                  <FiTrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4">Lead Quality Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  We optimize for qualified leads, not just clicks or impressions. Every lead meets your criteria.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                  <FiBarChart2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4">Transparent Reporting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clear metrics on what you're paying for and what you're getting. Full transparency on performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                How It Works: From Campaign Setup to Lead Delivery
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Campaign Setup & Strategy</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We analyze your business, service area, and competition to create industry-specific campaign structures optimized for your goals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Industry-Specific Optimization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Keyword research, ad copy, and landing pages tailored to your industry and local market dynamics.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Lead Qualification & Delivery</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Landing pages and forms filter for serious customers. Qualified leads delivered via email, SMS, or CRM integration.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Ongoing Optimization & Reporting</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Monthly bid adjustments, keyword refinement, ad copy testing, and performance reports showing leads generated, cost per lead, and ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Why Choose Us: Industry Expertise and Lead Quality Focus
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Industry Specialization</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Deep expertise in local service verticals, not generic PPC.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Lead Quality Focus</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We optimize for qualified leads, not just clicks or impressions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Local Expertise</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Understanding of local search behavior, competitor landscape, and service area dynamics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Transparent Reporting</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Clear metrics on what you're paying for and what you're getting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Long-Term Contracts</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Flexible month-to-month service with performance-based pricing options.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Dedicated Account Management</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Direct access to your campaign manager, not a call center.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Get Started: Transform Your Ad Spend Into Booked Jobs
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              You only pay for leads that meet your criteria, with full transparency on performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-gray-50 transition-colors font-medium"
              >
                Get Started
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
