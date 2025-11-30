import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export const metadata = {
  title: 'How Our Google Ads Lead Generation Service Works | Step-by-Step Process',
  description: 'Learn how we generate qualified leads for your local service business. From campaign setup to lead delivery, we handle everything.',
};

export default function HowItWorks() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'How It Works', url: '/how-it-works' },
  ];

  const steps = [
    {
      number: 1,
      title: 'Campaign Setup & Strategy',
      description: 'We analyze your business, service area, and competition to create industry-specific campaign structures optimized for your goals.',
      details: [
        'Initial consultation to understand your business and goals',
        'Service area analysis and competitor research',
        'Industry-specific keyword research',
        'Campaign structure design and setup',
        'Account configuration and optimization settings',
      ],
    },
    {
      number: 2,
      title: 'Industry-Specific Optimization',
      description: 'Keyword research, ad copy, and landing pages tailored to your industry and local market dynamics.',
      details: [
        'Keyword research for your specific industry and service area',
        'Ad copy creation optimized for local service businesses',
        'Landing page design and setup',
        'Conversion tracking implementation',
        'Initial campaign launch and monitoring',
      ],
    },
    {
      number: 3,
      title: 'Lead Qualification & Delivery',
      description: 'Landing pages and forms filter for serious customers. Qualified leads delivered via email, SMS, or CRM integration.',
      details: [
        'Lead qualification forms that filter for serious customers',
        'Budget, timeline, and project type qualification',
        'Immediate lead delivery via your preferred method',
        'Lead quality monitoring and feedback',
        'Continuous optimization based on lead quality',
      ],
    },
    {
      number: 4,
      title: 'Ongoing Optimization & Reporting',
      description: 'Monthly bid adjustments, keyword refinement, ad copy testing, and performance reports showing leads generated, cost per lead, and ROI.',
      details: [
        'Monthly bid adjustments and budget optimization',
        'Keyword refinement based on performance data',
        'Ad copy A/B testing and optimization',
        'Landing page performance improvements',
        'Monthly performance reports with clear metrics',
      ],
    },
  ];

  return (
    <>
      <StructuredData
        schemaType="HowTo"
        data={{
          '@type': 'HowTo',
          name: 'How Our Google Ads Lead Generation Service Works',
          step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.title,
            text: step.description,
          })),
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              How We Generate Qualified Leads for Your Local Service Business
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We handle everything—campaign setup, keyword research, ad copy, landing pages, and ongoing optimization—so you get more jobs booked while we manage the complexity behind the scenes.
            </p>

            <div className="space-y-16 mb-16">
              {steps.map((step) => (
                <section key={step.number} className="border-b border-gray-200 pb-16 last:border-0">
                  <div className="flex gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-light">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-light text-gray-900 mb-4">
                        {step.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <FiCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                What Makes Our Process Different
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Industry Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We don't use generic PPC templates. Every campaign is tailored to your specific industry and local market.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Lead Quality Focus</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We optimize for qualified leads, not just clicks. Every lead meets your criteria and is ready to book.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Transparent Process</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You only pay for leads that meet your criteria, with full transparency on performance and results.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Dedicated Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Direct access to your campaign manager, not a call center. We're here to help you succeed.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-8 text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                See how our process can generate qualified leads for your local service business.
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

