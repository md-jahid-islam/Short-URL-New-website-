import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { UrlShortener } from '@/components/url/UrlShortener';

 const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6"> Shorten URLs, Expand Possibilities</h1>
              <p className="text-xl mb-8 text-white/90">Create short, memorable links that redirect anywhere. Track clicks, analyze data, and manage all your links from one dashboard.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register"><Button className="bg-white text-brand-600 hover:bg-gray-100 hover:text-brand-700 border-2 border-white px-8 py-6">Get Started - It's Free</Button></Link>
                <Link to="/features"> <Button variant="outline" className="text-white border-white hover:bg-blue-500 blue-hover px-8 py-6">Learn More</Button></Link>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Shorten a URL</h2>
              <UrlShortener />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
          <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Everyone</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Whether you're a marketer, developer, or casual user, our link shortening platform offers everything you need.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="h-12 w-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600"> Generate short links instantly and enjoy rapid redirection times to enhance user experience.</p>
            </div>
            
            <div className="feature-card">
              <div className="h-12 w-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-gray-600"> Track clicks, monitor traffic sources, and gain valuable insights into link performance.</p>
            </div>
            
            <div className="feature-card">
              <div className="h-12 w-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Industry-standard security measures to protect your links and data with 99.9% uptime.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="h-12 w-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Aliases</h3>
              <p className="text-gray-600">Create branded, memorable short links with your own custom aliases to boost recognition.</p>
            </div>
            
            <div className="feature-card">
              <div className="h-12 w-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Plans</h3>
              <p className="text-gray-600"> From free personal use to enterprise solutions, we have plans to fit every need and budget.</p>
            </div>
            
            <div className="feature-card">
              <div className="h-12 w-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Developer API</h3>
              <p className="text-gray-600">Easily integrate our URL shortening service into your applications with our comprehensive API.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to start shortening?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Join thousands of users who trust our platform for all their link shortening needs.</p>
        <Link to="/register"> <Button className="px-8 py-6 text-lg"> Sign Up Now - Free Forever</Button></Link>
        </div>
      </section>
    </div>
  );
 };

 export default HomePage;
