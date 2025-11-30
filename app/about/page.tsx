import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { FiArrowRight, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi';

export const metadata = {
  title: 'About Us | Google Ads Lead Generation Specialists',
  description: 'Learn about our mission to transform ad spend into qualified leads for local service businesses. Industry expertise, lead quality focus, and transparent reporting.',
};

export default function About() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
  ];

  return (
    <>
      <StructuredData
        schemaType="Organization"
        data={{
          '@type': 'Organization',
          name: 'Google Ads Lead Generation',
          url: 'https://yourdomain.com',
          description: 'Google Ads management service for local service businesses',
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              About Our Google Ads Lead Generation Service
            </h1>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Our Mission: Transform Ad Spend Into Qualified Leads
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We exist to solve a critical problem facing local service businesses: wasted ad spend and unqualified leads. Our mission is to transform every dollar of advertising budget into qualified, ready-to-hire leads that actually book jobs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that local service business owners should focus on what they do best—serving customers—while we handle the complexity of Google Ads optimization, campaign management, and lead generation.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Why We Built This: Solving the Local Service Business Lead Generation Problem
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                After years of working with local service businesses, we saw a consistent pattern: business owners struggling with Google Ads, wasting budget on unqualified clicks, and unable to measure what actually generates revenue.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Most Google Ads agencies offer generic PPC services that don't understand the unique challenges of local service businesses. They optimize for clicks and impressions, not qualified leads that convert into booked jobs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We built this service to bridge that gap—combining deep industry expertise in local service verticals with a laser focus on lead quality and conversion optimization.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Our Values: Industry Expertise, Lead Quality, and Transparency
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                    <FiTarget className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Industry Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Deep expertise in local service verticals—plumbing, electrical, HVAC, roofing, landscaping—not generic PPC.
                  </p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                    <FiTrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Lead Quality Focus</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We optimize for qualified leads, not just clicks or impressions. Every lead meets your criteria.
                  </p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                    <FiUsers className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3">Transparency</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clear metrics on what you're paying for and what you're getting. Full transparency on performance.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Our Team: Dedicated Account Managers, Not Call Centers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                When you work with us, you get direct access to your dedicated campaign manager—not a call center or automated system. Your account manager understands your business, your goals, and your unique challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We believe in building long-term relationships with our clients, not just managing campaigns. That's why we offer flexible month-to-month service with no long-term contracts, so you can focus on what matters: growing your business.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team combines deep Google Ads expertise with industry-specific knowledge, ensuring your campaigns are optimized for your unique market and service area.
              </p>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-8 text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Ready to Transform Your Ad Spend Into Qualified Leads?
              </h3>
              <p className="text-gray-600 mb-6">
                Get started with industry-specific Google Ads campaigns that generate qualified leads for your local service business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

