import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

 const ChoosePlanPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly' | '2yearly' | '3yearly' | '4yearly'>('yearly');

  // =========== Calculate pricing with discount based on billing period ============ //
  const getPricing = (basePrice: number) => {
  const discounts = {
  'monthly': 1,
  'yearly': 0.9,  
  '2yearly': 0.85, 
  '3yearly': 0.8,  
  '4yearly': 0.75  
  };
    
  const price = basePrice * discounts[billingPeriod];    
    if (billingPeriod === 'monthly') {
    return price.toFixed(2);
    } else {
    // =========== For yearly plans, show the total ============ //
    const years = billingPeriod === 'yearly' ? 1 : parseInt(billingPeriod);
    return (price * 12 * years).toFixed(2);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
    <div className="text-center mb-10">
    <h1 className="text-4xl font-bold mb-4">Choose Your Hosting Plan</h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Select the perfect hosting solution for your website or application
    </p>
    </div>  

      {/* Billing period selector */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 bg-gray-100 rounded-lg">
        <button onClick={() => setBillingPeriod('monthly')}className={`px-4 py-2 text-sm rounded-md transition ${
        billingPeriod === 'monthly' ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>Monthly</button>
        <button onClick={() => setBillingPeriod('yearly')}className={`px-4 py-2 text-sm rounded-md transition ${
        billingPeriod === 'yearly' ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>1 Year</button>
        <button onClick={() => setBillingPeriod('2yearly')}className={`px-4 py-2 text-sm rounded-md transition
        ${billingPeriod === '2yearly' ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>2 Years</button>
        <button onClick={() => setBillingPeriod('3yearly')} className={`px-4 py-2 text-sm rounded-md transition ${
        billingPeriod === '3yearly' ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>3 Years</button>
        <button onClick={() => setBillingPeriod('4yearly')}className={`px-4 py-2 text-sm rounded-md transition ${
        billingPeriod === '4yearly' ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>4 Years</button>
        </div>
        {billingPeriod !== 'monthly' && (
        <div className="ml-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Save up to 25% with longer plans
        </div>)}
      </div>  

      <div className="grid md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <Card className="relative overflow-hidden">
          <CardHeader>
            <CardTitle>Basic Hosting</CardTitle>
            <CardDescription>Perfect for small websites</CardDescription>
            <div className="mt-4 text-3xl font-bold">
            ${getPricing(9.99)}
            <span className="text-sm text-gray-500">{billingPeriod === 'monthly' ? '/month' : ' total'}</span>
            </div>
            {billingPeriod !== 'monthly' && (
            <p className="text-sm text-green-600 mt-1">
            {billingPeriod === 'yearly' ? '12' : billingPeriod === '2yearly' ? '24' : billingPeriod === '3yearly' ? '36' : '48'} months</p>
            )}
           </CardHeader>

           <CardContent>
            <ul className="space-y-3">
            <li className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span>1 Website</span>
            </li>
            <li className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" /><span>10 GB SSD Storage</span>
            </li>
            <li className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span>Unmetered Bandwidth</span>
            </li>
            <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /><span>Free SSL Certificate</span>
            </li>
            <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" /><span>24/7 Support</span>
            </li>
            </ul>
           </CardContent>
           <CardFooter>
          <Button className="w-full bg-guardian-primary hover:bg-guardian-secondary text-white"onClick={() => toast.success('Basic plan selected. Redirecting to checkout...')}>Choose Basic</Button>
          </CardFooter>
        </Card>       
        {/* Premium Plan */}
        <Card className="relative overflow-hidden border-blue-500 shadow-lg">
          <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">POPULAR
          </div>

          <CardHeader>
          <CardTitle>Premium Hosting</CardTitle>
          <CardDescription>Great for growing businesses</CardDescription>
          <div className="mt-4 text-3xl font-bold">
          ${getPricing(19.99)}
          <span className="text-sm text-gray-500">
          {billingPeriod === 'monthly' ? '/month' : ' total'}
          </span>
          </div>
          {billingPeriod !== 'monthly' && (
          <p className="text-sm text-green-600 mt-1">
          {billingPeriod === 'yearly' ? '12' : billingPeriod === '2yearly' ? '24' : billingPeriod === '3yearly' ? '36' : '48'} months</p>)}
          </CardHeader>

          <CardContent>
          <ul className="space-y-3">
          <li className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>10 Websites</span>
          </li>
          <li className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>50 GB SSD Storage</span>
          </li>
         <li className="flex items-center">
         <Check className="h-5 w-5 text-green-500 mr-2" />
        <span>Unmetered Bandwidth</span>
        </li>
        <li className="flex items-center">
        <Check className="h-5 w-5 text-green-500 mr-2" />
        <span>Free SSL Certificate</span>
        </li>
        <li className="flex items-center">
        <Check className="h-5 w-5 text-green-500 mr-2" />
        <span>24/7 Priority Support</span>
        </li>
        <li className="flex items-center">
        <Check className="h-5 w-5 text-green-500 mr-2" />
        <span>Free Domain for 1 Year</span>
        </li>
        </ul>
        </CardContent>
        <CardFooter>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white"onClick={() => toast.success('Premium plan selected. Redirecting to checkout...')}>Choose Premium</Button>
        </CardFooter>
        </Card>
        
        {/* Business Plan */}
        <Card className="relative overflow-hidden">
          <CardHeader>
            <CardTitle>Business Hosting</CardTitle>
            <CardDescription>For high-traffic websites</CardDescription>
            <div className="mt-4 text-3xl font-bold">
            ${getPricing(39.99)}
            <span className="text-sm text-gray-500">
            {billingPeriod === 'monthly' ? '/month' : ' total'}
            </span>
            </div>
            {billingPeriod !== 'monthly' && (
            <p className="text-sm text-green-600 mt-1">
            {billingPeriod === 'yearly' ? '12' : billingPeriod === '2yearly' ? '24' : billingPeriod === '3yearly' ? '36' : '48'} months</p>)}
          </CardHeader>

          <CardContent>
          <ul className="space-y-3">
          <li className="flex items-center"><Check className="h-5 w-5 text-green-500 mr-2" />
          <span>Unlimited Websites</span>
          </li>
          <li className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>100 GB SSD Storage</span>
          </li>
          <li className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>Unmetered Bandwidth</span>
          </li>
          <li className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>Free SSL Certificate</span>
          </li>
          <li className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>24/7 Priority Support</span>
          </li>
          <li className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>Free Domain for 1 Year</span>
          </li>
          <li className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>Dedicated IP Address</span>
          </li>
          </ul>
          </CardContent>

          <CardFooter>
          <Button className="w-full bg-guardian-primary hover:bg-guardian-secondary text-white"onClick={() => toast.success('Business plan selected. Redirecting to checkout...')}>Choose Business</Button>
          </CardFooter>
        </Card>
      </div>      
      <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
      <p className="text-gray-600 mb-4">
      Our enterprise plans offer advanced features like load balancing, automatic scaling,
      and dedicated resources to support your mission-critical applications.</p>
      <Link to="/contact-sales"><Button size="lg" variant="outline" className="bg-guardian-primary hover:bg-guardian-secondary text-white">Contact Sales</Button>
      </Link>
      </div>
     </div>
  );
 };

 export default ChoosePlanPage;
