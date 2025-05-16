
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">Powerful URL Shortening Features</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover all the tools and features that make LinkShort the preferred choice for URL shortening.</p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Lightning Fast Shortening</h3>
          <p className="text-gray-600 mb-4"> Create shortened URLs in milliseconds. Our optimized infrastructure ensures your links are ready instantly.</p>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Instant link generation
            </li>
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Fast redirection
            </li>
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>99.9% uptime guarantee
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
          <p className="text-gray-600 mb-4">Gain valuable insights into how your links are performing with comprehensive analytics.</p>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Click tracking
            </li>
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Geographic data
            </li>
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Device and browser info
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Security Features</h3>
          <p className="text-gray-600 mb-4">Keep your links and data secure with our industry-standard security measures.</p>
          <ul className="text-gray-600 space-y-2 mb-4">
          <li className="flex items-start">
          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> SSL encryption
          </li>
         <li className="flex items-start">
          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Password protection
          </li>
          <li className="flex items-start">
          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path> </svg>Expiration dates
          </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Custom Aliases</h3>
        <p className="text-gray-600 mb-4">Create branded, memorable links with your own custom aliases.</p>
          <ul className="text-gray-600 space-y-2 mb-4">
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Branded short links
            </li>
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Custom back-halves
            </li>
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>QR code generation
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Flexible Plans</h3>
        <p className="text-gray-600 mb-4">
        Choose the perfect plan for your link shortening needs, from personal to enterprise.
        </p>
        <ul className="text-gray-600 space-y-2 mb-4">
        <li className="flex items-start">
        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Free basic tier
        </li>
        <li className="flex items-start">
        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Pro accounts
       </li>
        <li className="flex items-start">
        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path> </svg> Enterprise solutions
        </li>
        </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Developer API</h3>
          <p className="text-gray-600 mb-4"> Integrate our URL shortening service directly into your own applications.</p>
          <ul className="text-gray-600 space-y-2 mb-4">
          <li className="flex items-start">
          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>RESTful API
            </li>
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Webhooks
            </li>
            <li className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>SDKs for multiple languages
            </li>
          </ul>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-50 p-8 rounded-lg text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Ready to experience these features?</h2>
        <p className="text-lg text-gray-600 mb-6">Create your free account today and start shortening URLs with LinkShort.</p>
        <Link to="/register">
        <Button size="lg" className="px-8">Get Started</Button>
        </Link>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">How long do shortened links last?</h3>
          <p className="text-gray-600">Free links never expire unless explicitly deleted. Premium plans offer additional control over link expiration.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">Is there a limit to how many links I can create?</h3>
          <p className="text-gray-600"> Free accounts can create up to 50 links per month. Premium plans offer higher or unlimited quotas depending on your subscription.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">Can I edit a destination URL after creating a short link?</h3>
          <p className="text-gray-600">Yes, you can edit the destination of your short links at any time from your dashboard without changing the short URL itself.
          </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">Do you offer custom domains?</h3>
          <p className="text-gray-600"> Yes, our Pro and Enterprise plans allow you to use your own custom domain for branded short links.</p>
          </div>
        </div>
      </div>
    </div>
  );
 };

 export default FeaturesPage;
