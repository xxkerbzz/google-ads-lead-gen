import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { FiArrowRight, FiBook, FiTarget, FiTrendingUp, FiBarChart2, FiDollarSign, FiSettings } from 'react-icons/fi';

export const metadata = {
  title: 'Google Ads Resources for Local Service Businesses | Guides & Tips',
  description: 'Comprehensive Google Ads resources for local service businesses. Industry-specific guides, campaign strategies, and optimization tips.',
};

export default function Resources() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Resources', url: '/resources' },
  ];

  const resourceCategories = [
    {
      title: 'Industry-Specific Google Ads Guides',
      description: 'Learn how to optimize Google Ads campaigns for your specific industry—plumbing, electrical, HVAC, roofing, and landscaping.',
      icon: FiTarget,
      url: '/resources/industry-specific-google-ads',
      topics: ['Plumbing Google Ads', 'Electrical Services', 'HVAC Campaigns', 'Roofing Ads', 'Landscaping'],
    },
    {
      title: 'Campaign Types & Strategies',
      description: 'Understand different Google Ads campaign types and strategies for local service businesses.',
      icon: FiBook,
      url: '/resources/campaign-types-strategies',
      topics: ['Search Campaigns', 'Local Service Ads', 'Display Campaigns', 'Performance Max'],
    },
    {
      title: 'Local Lead Generation Resources',
      description: 'Master local targeting and geographic optimization to reach customers in your service area.',
      icon: FiTrendingUp,
      url: '/resources/local-lead-generation',
      topics: ['Geographic Targeting', 'Local Search', 'Service Area Optimization', 'Competitor Analysis'],
    },
    {
      title: 'Conversion & Tracking Guides',
      description: 'Set up conversion tracking and optimize for lead quality to maximize ROI.',
      icon: FiBarChart2,
      url: '/resources/conversion-tracking',
      topics: ['Conversion Tracking', 'Lead Quality', 'Landing Pages', 'ROI Measurement'],
    },
    {
      title: 'Budget & Bid Management Resources',
      description: 'Learn how to allocate budget and optimize bidding strategies for maximum lead generation.',
      icon: FiDollarSign,
      url: '/resources/budget-bid-management',
      topics: ['Budget Allocation', 'Bidding Strategies', 'Cost Per Lead', 'Budget Scaling'],
    },
    {
      title: 'Account Management Best Practices',
      description: 'Best practices for structuring and managing Google Ads accounts for local service businesses.',
      icon: FiSettings,
      url: '/resources/account-management',
      topics: ['Account Structure', 'Campaign Setup', 'Ongoing Optimization', 'Performance Reporting'],
    },
  ];

  return (
    <>
      <StructuredData
        schemaType="CollectionPage"
        data={{
          '@type': 'CollectionPage',
          name: 'Google Ads Resources',
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Resources: Google Ads Guides for Local Service Businesses
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Comprehensive resources to help you understand and optimize Google Ads for your local service business. From industry-specific strategies to conversion optimization, we've got you covered.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {resourceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={index}
                    href={category.url}
                    className="block border border-gray-200 rounded-md p-8 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-light text-gray-900 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-gray-50 text-gray-600 text-sm rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                      Learn More
                      <FiArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-md p-8 text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Need Help Implementing These Strategies?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team can help you implement these strategies and generate qualified leads for your local service business.
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

