import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

 const GuidesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">Guides</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">Step-by-step tutorials to help you get the most out of LinkShort.</p>
      </div>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Maximize Click-through Rates</h2>
            <p className="text-gray-600 mb-4">Learn strategies to increase your link click-through rates by up to 40%. This comprehensive guide covers best practices for link sharing across different platforms.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
            <li>Optimizing link previews on social media</li>
            <li>Choosing the right time to share</li>
            <li>A/B testing your shortened links</li>
            </ul>
            <Link to="/documentation">
              <Button variant="outline" className="mt-2 flex items-center gap-2">
              Read Guide <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <img src="https://source.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Guide Illustration" className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"/>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <img src="https://source.unsplash.com/photo-1498050108023-c5249f4df085" alt="Guide Illustration" className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"/>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Integrating with Marketing Tools</h2>
            <p className="text-gray-600 mb-4">Seamlessly connect LinkShort with your existing marketing stack. This guide shows you how to integrate with popular email marketing platforms, CRMs, and social media management tools.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
            <li>Email marketing platform integration</li>
            <li>CRM workflows with LinkShort</li>
            <li>Social media scheduling</li>
            </ul>
            <Link to="/documentation">
            <Button variant="outline" className="mt-2 flex items-center gap-2">
            Read Guide <ArrowRight className="h-4 w-4" />
            </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Advanced Analytics Dashboard</h2>
            <p className="text-gray-600 mb-4"> Get the most out of LinkShort's powerful analytics dashboard. Learn how to interpret data, create custom reports, and make data-driven decisions.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
            <li>Understanding click patterns and user behavior</li>
            <li>Creating custom analytics dashboards</li>
            <li>Exporting and sharing reports</li>
            </ul>
            <Link to="/documentation">
              <Button variant="outline" className="mt-2 flex items-center gap-2">
              Read Guide <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <img src="https://source.unsplash.com/photo-1473091534298-04dcbce3278c" alt="Guide Illustration" className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"/>
          </div>
        </div>
      </div>
    </div>
  );
 };
 export default GuidesPage;
