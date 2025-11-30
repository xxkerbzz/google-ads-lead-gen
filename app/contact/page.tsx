'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StructuredData from '../components/StructuredData';
import { FiMail, FiPhone, FiArrowRight, FiCheck } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  };

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Contact', url: '/contact' },
  ];

  return (
    <>
      <StructuredData
        schemaType="ContactPage"
        data={{
          '@type': 'ContactPage',
          name: 'Contact Us',
        }}
      />
      <Navigation />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Contact Us: Get Started with Qualified Lead Generation
            </h1>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Get Started: Request a Consultation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Ready to transform your ad spend into qualified leads? Fill out the form below and we'll get back to you within 24 hours to discuss how we can help grow your local service business.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-8 text-center">
                  <FiCheck className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-light text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Type *
                      </label>
                      <select
                        id="business"
                        required
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select...</option>
                        <option value="plumbing">Plumbing</option>
                        <option value="electrical">Electrical</option>
                        <option value="hvac">HVAC</option>
                        <option value="roofing">Roofing</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Submit
                    <FiArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </section>

            <section className="mb-16 grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <FiMail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@yourdomain.com" className="text-gray-600 hover:text-blue-600">
                        info@yourdomain.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FiPhone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  What Happens Next
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium text-sm">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">We Review Your Request</h3>
                      <p className="text-gray-600">We'll review your information and get back to you within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium text-sm">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Initial Consultation</h3>
                      <p className="text-gray-600">We'll schedule a call to discuss your business goals and how we can help.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-medium text-sm">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Custom Proposal</h3>
                      <p className="text-gray-600">We'll create a customized proposal based on your specific needs and goals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

