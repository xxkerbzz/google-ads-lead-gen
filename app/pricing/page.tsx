import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Google Ads Lead Generation Pricing | Transparent Pricing Plans',
  description: 'Transparent pricing for Google Ads lead generation. Flexible month-to-month service with performance-based pricing options. No long-term contracts.',
};

export default function Pricing() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Pricing', url: '/pricing' },
  ];

  return (
    <>
      <StructuredData
        schemaType="Product"
        data={{
          '@type': 'Product',
          name: 'Google Ads Lead Generation Service',
          description: 'Google Ads management service for local service businesses',
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Transparent Pricing for Google Ads Lead Generation
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We offer flexible pricing models designed to align with your business goals. You only pay for leads that meet your criteria, with full transparency on performance.
            </p>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Pricing Models: Per Lead vs. Monthly Management
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="border border-gray-200 rounded-md p-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-4">Per Lead Pricing</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Pay only for qualified leads that meet your criteria. Ideal for businesses that want to control costs and only pay for results.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Pay only for qualified leads</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">No monthly management fees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Full transparency on lead quality</span>
                    </li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-md p-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-4">Monthly Management</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Fixed monthly fee for comprehensive campaign management. Ideal for businesses that want predictable costs and ongoing optimization.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Fixed monthly fee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Comprehensive campaign management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">Ongoing optimization included</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Pricing varies based on your industry, service area, budget, and lead volume goals. Contact us for a customized quote tailored to your specific needs.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                What's Included in Each Plan
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-md p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Industry-specific campaign setup and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Local targeting and geographic optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Lead qualification and conversion optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Landing page setup and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Conversion tracking setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Monthly performance reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                ROI & Cost Per Lead Expectations
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Cost per lead varies by industry, service area, and competition level. Here are typical ranges:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Plumbing & Electrical</h3>
                  <p className="text-gray-600">$50 - $150 per qualified lead</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">HVAC</h3>
                  <p className="text-gray-600">$75 - $200 per qualified lead</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Roofing</h3>
                  <p className="text-gray-600">$100 - $250 per qualified lead</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Landscaping</h3>
                  <p className="text-gray-600">$40 - $120 per qualified lead</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Costs vary based on market competition, service area, and lead quality requirements. Contact us for a customized estimate.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                No Long-Term Contracts: Flexible Month-to-Month Service
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We believe in earning your business every month. That's why we offer flexible month-to-month service with no long-term contracts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                You can cancel at any time, though we recommend at least 3 months to see optimal results as campaigns need time to optimize and gather performance data.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our performance-based pricing options ensure you only pay for results, with full transparency on what you're getting for your investment.
              </p>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-8 text-center">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Get Started: Choose Your Plan
              </h2>
              <p className="text-gray-600 mb-8">
                Contact us for a customized quote based on your industry, service area, and lead generation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Request Quote
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

