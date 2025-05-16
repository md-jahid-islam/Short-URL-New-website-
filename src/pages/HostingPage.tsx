import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Server, Shield, Zap, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

 const HostingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Web Hosting Solutions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Fast, secure, and reliable hosting for your website or application
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link to="/choose-plan"> <Button size="lg" className="bg-guardian-primary hover:bg-guardian-secondary text-white">Choose Your Plan</Button></Link>
          <Link to="/contact-sales"><Button size="lg" variant="outline" className="bg-guardian-primary text-white hover:bg-guardian-secondary">Contact Sales</Button></Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle>Lightning Fast</CardTitle>
            <CardDescription>Optimized for performance</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
          <p className="text-gray-600">
          Our SSD-powered infrastructure ensures your website loads quickly,
          providing a seamless experience for your visitors.
          </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>Ultra Secure</CardTitle>
            <CardDescription>Protection you can trust</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600"> Advanced security features including free SSL, DDoS protection,and automatic backups keep your website safe.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle>99.9% Uptime</CardTitle>
            <CardDescription>Reliability guaranteed</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">We guarantee 99.9% uptime with our redundant infrastructure and24/7 server monitoring systems.</p>
          </CardContent>
        </Card>
      </div>

      {/* How will our people use hosting section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">How will our people use hosting?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">Our hosting solutions are designed to meet the needs of various use cases:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                </div>
                <div>
                <h3 className="font-semibold mb-1">Small Business Websites</h3>
                <p className="text-gray-600">Perfect for company websites, portfolios, and small online stores.</p>
                </div>
              </li>
              <li className="flex items-start">
              <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              </div>
              <div>
              <h3 className="font-semibold mb-1">E-commerce Platforms</h3>
              <p className="text-gray-600">Optimized for WooCommerce, Shopify, and other online store platforms.</p>
              </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                <h3 className="font-semibold mb-1">Content Management Systems</h3>
                <p className="text-gray-600">Optimized for WordPress, Joomla, Drupal, and other popular CMS platforms.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                </div>
                <div>
                <h3 className="font-semibold mb-1">Enterprise Solutions</h3>
                <p className="text-gray-600">Custom hosting configurations for high-traffic websites and complex applications.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Server Infrastructure" className="w-full h-auto object-cover"/>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"The speed and reliability of this hosting service is outstanding. Our website has never been faster!"</p>
              <div>
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-gray-500">CEO, TechStart Inc.</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Customer support is amazing. They helped me migrate my complex website with zero downtime."</p>
              <div>
              <p className="font-semibold">Michael Brown</p>
              <p className="text-sm text-gray-500">Web Developer, CreativeDesign</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
              <div className="flex text-yellow-400"> {[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>))}
              </div>
              </div>
              <p className="text-gray-600 mb-4">"Since moving to this hosting provider, our e-commerce site conversion rate has increased by 30%."</p>
              <div>
              <p className="font-semibold">Jennifer Lee</p>
              <p className="text-sm text-gray-500">Owner, FashionBoutique Online</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">Choose the perfect hosting solution for your website and enjoy lightning-fast performance, top-notch security, and 24/7 support.</p>
        <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/choose-plan"> <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">Choose Your Plan</Button></Link>
        <Link to="/contact-sales"> <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">Talk to Sales</Button>
        </Link>
        </div>
      </div>
    </div>
  );
 };

 export default HostingPage;
