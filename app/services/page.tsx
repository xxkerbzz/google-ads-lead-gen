import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { FiCheck, FiArrowRight, FiTarget, FiMapPin, FiFilter, FiBarChart2, FiSettings } from 'react-icons/fi';

export const metadata = {
  title: 'Google Ads Services for Local Service Businesses | Lead Generation',
  description: 'Industry-specific Google Ads services for local service businesses. Campaign setup, local targeting, lead qualification, and ongoing optimization.',
};

export default function Services() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
  ];

  return (
    <>
      <StructuredData
        schemaType="Service"
        data={{
          '@type': 'Service',
          name: 'Google Ads Lead Generation Services',
          provider: {
            '@type': 'Organization',
            name: 'Google Ads Lead Generation',
          },
          areaServed: 'Local Service Businesses',
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Google Ads Services That Generate Qualified Leads for Local Service Businesses
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We provide comprehensive Google Ads management services specifically designed for local service businesses. Our industry-specific expertise ensures your campaigns are optimized to generate qualified leads that actually book jobs.
            </p>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full">
                  <FiTarget className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-light text-gray-900">
                  Industry-Specific Campaign Setup
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We don't use generic PPC templates. Instead, we create custom campaign structures tailored to your specific industry—whether you're a plumber, electrician, HVAC contractor, roofer, or landscaper.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Pre-built campaign structures for plumbing, electrical, HVAC, roofing, landscaping</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Industry-specific keyword research and ad copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Account structure optimized for your business model</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Competitor analysis and market positioning</span>
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full">
                  <FiMapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-light text-gray-900">
                  Local Targeting & Geographic Optimization
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Geographic targeting to your exact service area ensures your ad spend reaches customers who can actually use your services.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">City, county, or radius-based targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Location-specific ad copy and landing pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Local competitor analysis and positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Service area optimization</span>
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full">
                  <FiFilter className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-light text-gray-900">
                  Lead Qualification & Conversion Optimization
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We optimize for qualified leads, not just clicks. Our landing pages and forms filter for serious customers who are ready to book.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Landing pages that filter for serious customers (budget, timeline, project type)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Conversion tracking setup for calls, forms, and appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">A/B testing of landing pages and ad copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Lead quality scoring and optimization</span>
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full">
                  <FiSettings className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-light text-gray-900">
                  Ongoing Campaign Management & Optimization
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Campaign optimization is ongoing, not a one-time setup. We continuously refine your campaigns to improve performance and ROI.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Monthly bid adjustments and keyword refinement</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Ad copy testing and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Performance monitoring and adjustments</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Dedicated account manager for direct communication</span>
                </li>
              </ul>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full">
                  <FiBarChart2 className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-light text-gray-900">
                  Performance Reporting & Transparency
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                You deserve to know exactly what you're paying for and what you're getting. Our transparent reporting shows clear metrics on performance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Monthly reports showing leads generated, cost per lead, and ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Clear metrics on ad spend and results</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Access to campaign dashboard (if desired)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Regular check-ins with your account manager</span>
                </li>
              </ul>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-8 text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                See how our industry-specific Google Ads services can generate qualified leads for your local service business.
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
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
                >
                  View Pricing
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

