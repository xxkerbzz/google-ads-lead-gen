import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';

export const metadata = {
  title: 'Terms of Service | Google Ads Lead Generation Service',
  description: 'Terms of service for Google Ads Lead Generation service. Read our service agreement, payment terms, and cancellation policy.',
};

export default function Terms() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Terms of Service', url: '/terms' },
  ];

  return (
    <>
      <StructuredData
        schemaType="WebPage"
        data={{
          '@type': 'WebPage',
          name: 'Terms of Service',
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Service Agreement
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                By using our Google Ads lead generation service, you agree to these Terms of Service. Our service provides Google Ads campaign management, optimization, and lead generation for local service businesses.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We will provide services in accordance with industry best practices and our stated service offerings. However, we cannot guarantee specific lead volumes or results, as these depend on market competition, budget, industry, and other factors beyond our control.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Payment Terms
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Payment terms vary based on your selected pricing model:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Per Lead Pricing:</strong> Payment is due upon delivery of qualified leads that meet your criteria.</li>
                <li><strong>Monthly Management:</strong> Payment is due monthly in advance, typically on the first of each month.</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Late payments may result in service suspension. All fees are non-refundable except as required by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Service Limitations
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                While we work to optimize your campaigns and generate qualified leads, we cannot guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Specific lead volumes or conversion rates</li>
                <li>Cost per lead below a certain threshold</li>
                <li>ROI or revenue outcomes</li>
                <li>Google Ads policy compliance (though we follow best practices)</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Results depend on factors including market competition, budget, industry, service area, and client cooperation with landing page optimization and conversion tracking setup.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Cancellation Policy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We offer flexible month-to-month service with no long-term contracts. You may cancel your service at any time with 30 days written notice.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Upon cancellation, you will continue to receive services through the end of your current billing period. No refunds will be provided for services already rendered.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: legal@yourdomain.com<br />
                Phone: (123) 456-7890
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

