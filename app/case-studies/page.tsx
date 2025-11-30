import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { FiArrowRight, FiTrendingUp, FiTarget, FiDollarSign } from 'react-icons/fi';

export const metadata = {
  title: 'Google Ads Lead Generation Case Studies | Success Stories',
  description: 'Real results from our Google Ads lead generation service. See how we helped local service businesses generate qualified leads and grow their revenue.',
};

export default function CaseStudies() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Case Studies', url: '/case-studies' },
  ];

  const caseStudies = [
    {
      industry: 'Plumbing',
      title: 'Plumbing Company Case Study',
      results: {
        leads: '45 qualified leads/month',
        costPerLead: '$85',
        roi: '320%',
        timeframe: '3 months',
      },
      challenge: 'A local plumbing company was spending $3,000/month on Google Ads but only getting 8-10 leads, most of which were unqualified or out of their service area.',
      solution: 'We restructured their campaigns with industry-specific keywords, improved local targeting, and created landing pages that filtered for serious customers.',
      outcome: 'Within 3 months, they were generating 45 qualified leads per month at an average cost of $85 per lead, resulting in a 320% ROI.',
    },
    {
      industry: 'HVAC',
      title: 'HVAC Contractor Case Study',
      results: {
        leads: '62 qualified leads/month',
        costPerLead: '$120',
        roi: '280%',
        timeframe: '4 months',
      },
      challenge: 'An HVAC contractor was struggling with high cost per lead ($200+) and low conversion rates. Many leads were price-shoppers or not ready to book.',
      solution: 'We implemented lead qualification forms, optimized for emergency HVAC services, and refined targeting to focus on customers with immediate needs.',
      outcome: 'Cost per lead dropped to $120, and lead quality improved significantly. They now generate 62 qualified leads per month with a 280% ROI.',
    },
    {
      industry: 'Electrical',
      title: 'Electrical Services Case Study',
      results: {
        leads: '38 qualified leads/month',
        costPerLead: '$95',
        roi: '350%',
        timeframe: '3 months',
      },
      challenge: 'An electrical services company had inconsistent lead flow and couldn\'t track which ads were generating revenue.',
      solution: 'We set up conversion tracking, created industry-specific ad copy, and implemented proper lead qualification to filter for serious customers.',
      outcome: 'They now generate 38 qualified leads per month at $95 per lead, with full visibility into which campaigns generate the most revenue.',
    },
    {
      industry: 'Roofing',
      title: 'Roofing Company Case Study',
      results: {
        leads: '28 qualified leads/month',
        costPerLead: '$150',
        roi: '250%',
        timeframe: '4 months',
      },
      challenge: 'A roofing company was competing against larger companies with bigger budgets and struggling to get visibility for their services.',
      solution: 'We focused on local targeting, created service-area-specific campaigns, and optimized for high-intent keywords like "roof replacement" and "roof repair."',
      outcome: 'They now generate 28 qualified leads per month at $150 per lead, competing effectively against larger companies in their market.',
    },
    {
      industry: 'Landscaping',
      title: 'Landscaping Business Case Study',
      results: {
        leads: '52 qualified leads/month',
        costPerLead: '$65',
        roi: '380%',
        timeframe: '3 months',
      },
      challenge: 'A landscaping business was getting many inquiries but few that converted into booked jobs. Most leads were just "tire-kickers."',
      solution: 'We created landing pages that qualified leads by project type and budget, and optimized campaigns for customers ready to book landscaping services.',
      outcome: 'Lead quality improved dramatically. They now generate 52 qualified leads per month at $65 per lead, with a 380% ROI.',
    },
  ];

  return (
    <>
      <StructuredData
        schemaType="Article"
        data={{
          '@type': 'Article',
          headline: 'Google Ads Lead Generation Case Studies',
          description: 'Real results from our Google Ads lead generation service',
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Real Results: Google Ads Lead Generation Case Studies
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              See how we've helped local service businesses transform their ad spend into qualified leads that actually book jobs. All results are from real clients using our industry-specific Google Ads management service.
            </p>

            <div className="space-y-16 mb-16">
              {caseStudies.map((study, index) => (
                <article key={index} className="border-b border-gray-200 pb-16 last:border-0">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                      {study.industry}
                    </span>
                    <h2 className="text-3xl font-light text-gray-900 mb-6">
                      {study.title}
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Results</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <FiTrendingUp className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-600"><strong className="text-gray-900">Leads:</strong> {study.results.leads}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <FiDollarSign className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-600"><strong className="text-gray-900">Cost per Lead:</strong> {study.results.costPerLead}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <FiTarget className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-600"><strong className="text-gray-900">ROI:</strong> {study.results.roi}</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          Timeframe: {study.results.timeframe}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">The Challenge</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {study.challenge}
                      </p>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Our Solution</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {study.solution}
                      </p>
                      <h3 className="text-lg font-medium text-gray-900 mb-3">The Outcome</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-8 text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Ready to Get Similar Results?
              </h3>
              <p className="text-gray-600 mb-6">
                See how our industry-specific Google Ads service can generate qualified leads for your local service business.
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
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
                >
                  View Services
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

