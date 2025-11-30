import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';

export const metadata = {
  title: 'Privacy Policy | Google Ads Lead Generation Service',
  description: 'Privacy policy for Google Ads Lead Generation service. Learn how we collect, use, and protect your information.',
};

export default function Privacy() {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Privacy Policy', url: '/privacy' },
  ];

  return (
    <>
      <StructuredData
        schemaType="WebPage"
        data={{
          '@type': 'WebPage',
          name: 'Privacy Policy',
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />

          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Information We Collect
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Name and contact information (email address, phone number)</li>
                <li>Business information (business name, industry, service area)</li>
                <li>Information you provide when contacting us or requesting services</li>
                <li>Information about your Google Ads account (if you choose to share it)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                How We Use Your Information
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your requests and respond to your inquiries</li>
                <li>Send you service-related communications</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Information Sharing
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>With service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger (with notice to you)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Your Rights
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: privacy@yourdomain.com<br />
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

