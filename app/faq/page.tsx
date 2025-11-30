'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';

export default function FAQ() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const faqs = [
    {
      section: 'Service & Process Questions',
      questions: [
        {
          q: 'How does your Google Ads lead generation service work?',
          a: 'We handle everything from campaign setup to lead delivery. We create industry-specific campaigns, optimize for qualified leads, and deliver leads that meet your criteria via email, SMS, or CRM integration. You focus on serving customers while we manage your Google Ads.',
        },
        {
          q: 'What industries do you work with?',
          a: 'We specialize in local service businesses including plumbing, electrical, HVAC, roofing, landscaping, and home remodeling. Our industry-specific expertise ensures campaigns are optimized for your unique market.',
        },
        {
          q: 'How long does it take to see results?',
          a: 'Most clients see qualified leads within 2-4 weeks of campaign launch. However, optimization is ongoing, and results typically improve over the first 3 months as we refine campaigns based on performance data.',
        },
        {
          q: 'Do I need to have a Google Ads account already?',
          a: 'No, we can set up a new Google Ads account for you or work with your existing account. We handle all account setup and management.',
        },
      ],
    },
    {
      section: 'Pricing & ROI Questions',
      questions: [
        {
          q: 'How much does your service cost?',
          a: 'We offer flexible pricing models: per-lead pricing or monthly management fees. Pricing depends on your industry, service area, and lead volume goals. Contact us for a customized quote.',
        },
        {
          q: 'What is your minimum budget?',
          a: 'We work with businesses with advertising budgets ranging from $500 to $5,000+ per month. We\'ll work with you to create a budget that aligns with your goals and ROI expectations.',
        },
        {
          q: 'How do you measure ROI?',
          a: 'We track leads generated, cost per lead, and conversion rates. Monthly reports show exactly what you\'re paying for and what you\'re getting, with full transparency on performance metrics.',
        },
        {
          q: 'Are there any long-term contracts?',
          a: 'No, we offer flexible month-to-month service with no long-term contracts. You can cancel at any time, though we recommend at least 3 months to see optimal results.',
        },
      ],
    },
    {
      section: 'Lead Quality & Qualification Questions',
      questions: [
        {
          q: 'How do you ensure lead quality?',
          a: 'We optimize for qualified leads, not just clicks. Our landing pages and forms filter for serious customers by asking about budget, timeline, and project type. We also use industry-specific targeting to reach customers in your service area.',
        },
        {
          q: 'What makes a lead "qualified"?',
          a: 'A qualified lead meets your criteria: they\'re in your service area, have a genuine need for your services, have a budget, and are ready to take action. We work with you to define what "qualified" means for your business.',
        },
        {
          q: 'How are leads delivered?',
          a: 'Qualified leads are delivered via email, SMS, or CRM integration (if you use one). You\'ll receive lead information immediately so you can follow up quickly.',
        },
        {
          q: 'What if I get unqualified leads?',
          a: 'We continuously optimize campaigns to improve lead quality. If you receive unqualified leads, we\'ll adjust targeting, keywords, and landing pages to better filter for qualified prospects.',
        },
      ],
    },
    {
      section: 'Industry-Specific Questions',
      questions: [
        {
          q: 'Do you have experience with [my industry]?',
          a: 'We specialize in local service businesses including plumbing, electrical, HVAC, roofing, and landscaping. Our industry-specific expertise means we understand your unique challenges and optimize campaigns accordingly.',
        },
        {
          q: 'Can you target specific geographic areas?',
          a: 'Yes, we specialize in local targeting. We can target your exact service area—city, county, or radius—ensuring your ads reach customers who can actually use your services.',
        },
        {
          q: 'How do you handle seasonal fluctuations?',
          a: 'We adjust campaigns based on seasonal demand patterns. For example, HVAC campaigns may focus on heating in winter and cooling in summer. We monitor trends and optimize accordingly.',
        },
      ],
    },
  ];

  const faqSchema = faqs.flatMap((section) =>
    section.questions.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    }))
  );

  return (
    <>
      <StructuredData
        schemaType="FAQPage"
        data={{
          faqs: faqSchema,
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'FAQ', url: '/faq' }]} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Frequently Asked Questions About Google Ads Lead Generation
            </h1>

            <div className="space-y-8">
              {faqs.map((section) => (
                <div key={section.section} className="border-b border-gray-200 pb-8">
                  <h2 className="text-3xl font-light text-gray-900 mb-6">
                    {section.section}
                  </h2>
                  <div className="space-y-4">
                    {section.questions.map((faq, index) => {
                      const isOpen = openSection === `${section.section}-${index}`;
                      return (
                        <div key={index} className="border border-gray-200 rounded-md">
                          <button
                            onClick={() =>
                              setOpenSection(
                                isOpen ? null : `${section.section}-${index}`
                              )
                            }
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-lg font-medium text-gray-900 pr-8">
                              {faq.q}
                            </span>
                            <FiChevronDown
                              className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-blue-50 border border-blue-200 rounded-md p-8 text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Get in touch and we\'ll answer any questions you have about our Google Ads lead generation service.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Us
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

