import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

 const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">About LinkShort</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">Making the web more accessible, one shortened URL at a time.</p>
      </div>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 md:order-1">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-lg text-gray-600 mb-4">LinkShort was founded in 2020 with a simple mission: to make sharing links easier for everyone. What started as a small project has grown into a trusted platform used by millions worldwide.</p>
        <p className="text-lg text-gray-600 mb-4">We believe that the web should be accessible and easy to navigate. Long, complex URLs create barriers to sharing and accessing information. Our platform breaks down those barriers by creating short, memorable links that anyone can share effortlessly.</p>
        <p className="text-lg text-gray-600">Today, LinkShort processes millions of links monthly, helping businesses, content creators, and everyday users share content more effectively.</p>
        </div>
        <div className="order-1 md:order-2">
          <div className="bg-brand-50 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-brand-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17L15 17" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 13L15 13" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9L11 9" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">LinkShort</h3>
              <p className="text-brand-600">Est. 2020</p>
            </div>
          </div>
        </div>
      </div>
      {/* Mission & Values Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">We're guided by a clear mission and a set of core values that influence everything we do.</p>
        </div>       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Trust & Security</h3>
        <p className="text-gray-600">We prioritize the security of our platform and the trust of our users above all else. Your data and links are safe with us.</p>
        </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
          <p className="text-gray-600">We believe in making technology accessible. Our platform is designed to be intuitive and easy to use for everyone.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">We constantly evolve our platform to meet the changing needs of our users and stay ahead of industry trends.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer First</h3>
          <p className="text-gray-600">Our users are at the center of everything we do. We actively listen to feedback and continuously improve our services.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Global Accessibility</h3>
          <p className="text-gray-600">We're committed to making the internet more accessible globally, breaking down barriers to information sharing.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="h-14 w-14 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Transparency</h3>
          <p className="text-gray-600">We believe in clear communication and honest business practices. No hidden fees, no surprises, just straightforward service.</p>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="mb-20">
      <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">The dedicated professionals who guide our mission and help us serve you better.</p>
      </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className="h-64 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" alt="Jahidul Islam" className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Jahidul Islam</h3>
            <p className="text-brand-600 mb-4">CEO & Founder</p>
            <p className="text-gray-600">With 15+ years of experience in tech, Jahidul founded LinkShort with a vision to simplify link sharing for everyone.
            </p>
            </div>
            </div>
          
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
            <div className="h-64 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Rezwan Islam" className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Rezwan Islam</h3>
            <p className="text-brand-600 mb-4">Chief Technology Officer</p>
            <p className="text-gray-600">Rezwan leads our engineering team, ensuring our platform remains fast, secure, and innovative.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
          <div className="h-64 bg-gray-200">
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Michael Chen" className="w-full h-full object-cover"/>
          </div>
            <div className="p-6">
            <h3 className="text-xl font-bold mb-1">Tamim Al Hridoy</h3>
            <p className="text-brand-600 mb-4">Chief Product Officer</p>
            <p className="text-gray-600">Michael oversees product development, focusing on creating intuitive and powerful features.</p>
            </div>
          </div>
        </div>
      </div>      
      {/* Stats Section */}
      <div className="mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
      <div className="text-4xl font-bold text-brand-600 mb-2">10M+</div>
      <div className="text-gray-600">Links Created</div>
      </div>         
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
          <div className="text-4xl font-bold text-brand-600 mb-2">2.5B+</div>
          <div className="text-gray-600">Clicks Tracked</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
          <div className="text-4xl font-bold text-brand-600 mb-2">195</div>
          <div className="text-gray-600">Countries Served</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
          <div className="text-4xl font-bold text-brand-600 mb-2">99.9%</div>
          <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </div>      
      {/* Contact CTA Section */}
      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">We'd love to hear from you! Reach out to our team with any questions or schedule a demo to see LinkShort in action.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/contact"><Button size="lg">Contact Us</Button></Link>
        <Link to="/register"><Button variant="outline" size="lg">Try For Free</Button></Link>
        </div>
      </div>
    </div>
  );
 };

 export default AboutPage;
