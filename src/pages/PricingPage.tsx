import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

 const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const getPriceForPlan = (basePriceMonthly: number): string => {
    if (billingCycle === 'yearly') {
    const yearlyPrice = (basePriceMonthly * 0.8).toFixed(0); 
    return yearlyPrice;
    }
    return basePriceMonthly.toString();
  };
  
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Transparent Pricing for Every Need</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the perfect plan for your link shortening needs. No hidden fees, no surprises.
        </p>
      </div>

      {/* Pricing Toggle - Monthly/Annual */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-md shadow-sm bg-gray-100 p-1">
          <button className={`px-6 py-2 text-sm font-medium rounded-md ${ billingCycle === 'monthly' ?
          'bg-white text-brand-600 shadow' : 'text-gray-700'}`}onClick={() => setBillingCycle('monthly')}>Monthly</button>
    
          <button className={`px-6 py-2 text-sm font-medium rounded-md ${
          billingCycle === 'yearly' ? 'bg-white text-brand-600 shadow' : 'text-gray-700'}`}onClick={() => setBillingCycle('yearly')}>
           Annual (Save 20%) </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p className="text-gray-600 mb-4">Perfect for personal use</p>
            <div className="mb-4">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
            </div>
            <Link to="/register" className="block w-full">
            <Button variant="outline" className="w-full mb-6">Get Started</Button>
            </Link>
            <ul className="space-y-3">
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>50 links per month</span>
              </li>
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Basic analytics</span>
              </li>
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Link history for 30 days</span>
              </li>
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Standard short URLs</span>
              </li>
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Email support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Plan - Highlighted */}
        <div className="bg-white rounded-lg shadow-lg border-2 border-brand-500 overflow-hidden transform scale-105">
          <div className="bg-brand-500 text-white text-center py-2">
          <span className="text-sm font-medium">MOST POPULAR</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-gray-600 mb-4">For professionals and small teams</p>
            <div className="mb-4">
            <span className="text-4xl font-bold">${getPriceForPlan(19)}</span>
            <span className="text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
            </div>
            <Link to="/register" className="block w-full">
            <Button className="w-full mb-6">Get Started</Button>
            </Link>
            <ul className="space-y-3">
            <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Unlimited links</span>
            </li>
            <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Advanced analytics</span>
            </li>
            <li className="flex items-start"><Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Custom aliases</span>
            </li>
            <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Password protected links</span>
            </li>
            <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>QR code generation</span>
            </li>
            <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Link expiration options</span>
            </li>
            <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Priority support</span>
            </li>
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-4">For large organizations</p>
            <div className="mb-4">
            <span className="text-4xl font-bold">${getPriceForPlan(99)}</span>
            <span className="text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
            </div>
            <Link to="/contact" className="block w-full">
            <Button variant="outline" className="w-full mb-6">Contact Sales</Button>
            </Link>
            <ul className="space-y-3">
            <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <span>Everything in Pro plan</span>
              </li>
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Custom domains</span>
              </li>
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Team management</span>
              </li>
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>API access with higher limits</span>
              </li>
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>SSO & SAML integration</span>
              </li>
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>SLA guarantees</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Compare Features</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-center">Free</th>
                <th className="py-4 px-6 text-center bg-brand-50">Pro</th>
                <th className="py-4 px-6 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-4 px-6">Monthly link limit</td>
                <td className="py-4 px-6 text-center">50</td>
                <td className="py-4 px-6 text-center bg-brand-50">Unlimited</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
              </tr>
              <tr>
                <td className="py-4 px-6">Analytics retention</td>
                <td className="py-4 px-6 text-center">30 days</td>
                <td className="py-4 px-6 text-center bg-brand-50">1 year</td>
                <td className="py-4 px-6 text-center">Forever</td>
              </tr>
              <tr>
                <td className="py-4 px-6">Custom aliases</td>
                <td className="py-4 px-6 text-center">❌</td>
                <td className="py-4 px-6 text-center bg-brand-50">✓</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr>
                <td className="py-4 px-6">Custom domains</td>
                <td className="py-4 px-6 text-center">❌</td>
                <td className="py-4 px-6 text-center bg-brand-50">❌</td>
                <td className="py-4 px-6 text-center">✓</td>
              </tr>
              <tr>
                <td className="py-4 px-6">API access</td>
                <td className="py-4 px-6 text-center">❌</td>
                <td className="py-4 px-6 text-center bg-brand-50">Basic</td>
                <td className="py-4 px-6 text-center">Advanced</td>
              </tr>
              <tr>
                <td className="py-4 px-6">Support</td>
                <td className="py-4 px-6 text-center">Email</td>
                <td className="py-4 px-6 text-center bg-brand-50">Priority</td>
                <td className="py-4 px-6 text-center">Dedicated</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade at any time?</h3>
          <p className="text-gray-600">Yes, you can change your plan at any time. When you upgrade, you'll be charged the prorated amount for the remainder of your billing cycle. When you downgrade, the new rate will apply at the start of your next billing cycle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
          <p className="text-gray-600">We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team within 14 days of your purchase for a full refund.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
           <p className="text-gray-600">We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal for annual subscriptions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-2">Do you offer discounts for nonprofits or educational institutions?</h3>
          <p className="text-gray-600">Yes, we offer special pricing for qualified nonprofit organizations and educational institutions. Please contact our sales team for more information.</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-brand-50 p-8 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">Choose the plan that's right for you and start shortening URLs today. All plans come with a 14-day free trial, no credit card required.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link to="/register"><Button size="lg">Sign Up Now</Button></Link>
      <Link to="/contact"><Button variant="outline" size="lg">Contact Sales</Button></Link>
        </div>
      </div>
    </div>
  );
 };

 export default PricingPage;
