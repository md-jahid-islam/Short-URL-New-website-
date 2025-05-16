import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

 const DomainPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly' | '2yearly' | '3yearly' | '4yearly'>('yearly');
  const [contactFormData, setContactFormData] = useState({
    name: 'Jahidul Islam',
    email: 'jahidulislamweb2003@gmail.com',
    phone: '0154057085',
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  // ====== Pricing for different periods ========== //
  const domainPricing = {
    '.com': {
      monthly: 1.49,
      yearly: 12.99,
      '2yearly': 23.99,
      '3yearly': 33.99,
      '4yearly': 42.99
    },
    '.net': {
      monthly: 1.79,
      yearly: 14.99,
      '2yearly': 27.99,
      '3yearly': 38.99,
      '4yearly': 49.99
    },
    '.org': {
      monthly: 1.69,
      yearly: 13.99,
      '2yearly': 25.99,
      '3yearly': 36.99,
      '4yearly': 46.99
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
      <h1 className="text-4xl font-bold mb-4">Domain Services</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">Register and manage domains with our easy-to-use platform.</p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">How will our people use domains?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
          <p className="text-lg text-gray-600 mb-6">Domains are the foundation of your online presence. Our platform makes it easy to:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                <h3 className="font-semibold mb-1">Register New Domains</h3>
                <p className="text-gray-600">Search and register available domains with competitive pricing.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                <h3 className="font-semibold mb-1">Transfer Existing Domains</h3>
                <p className="text-gray-600">Easily transfer your domains from other registrars to our platform.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Manage DNS Settings</h3>
                  <p className="text-gray-600">Update your domain's DNS records with our user-friendly interface.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                <h3 className="font-semibold mb-1">Auto-Renewal</h3>
                <p className="text-gray-600">Never lose your domain with our automatic renewal system.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Domain Management" className="w-full h-auto object-cover"/>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mb-16">
        <Card className="border shadow-sm">
          <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Your domain registration details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" value={contactFormData.name} onChange={handleContactChange} className="text-black"/>
              </div>
              <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" value={contactFormData.email} onChange={handleContactChange}className="text-black"/>
              </div>
            </div>
            <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" value={contactFormData.phone} onChange={handleContactChange}className="text-black"/>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Billing period selector */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-gray-100 rounded-lg">
          <button onClick={() => setBillingPeriod('monthly')} className={`px-4 py-2 text-sm rounded-md transition ${billingPeriod === 'monthly' ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>Monthly
          </button>
          <button onClick={() => setBillingPeriod('yearly')} className={`px-4 py-2 text-sm rounded-md transition ${
          billingPeriod === 'yearly' ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>1 Year
          </button>
          <button onClick={() => setBillingPeriod('2yearly')}className={`px-4 py-2 text-sm rounded-md transition ${billingPeriod === '2yearly' ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>2 Years
          </button>
          <button onClick={() => setBillingPeriod('3yearly')}className={`px-4 py-2 text-sm rounded-md transition ${billingPeriod === '3yearly' ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>3 Years
          </button>
          <button onClick={() => setBillingPeriod('4yearly')}className={`px-4 py-2 text-sm rounded-md transition ${billingPeriod === '4yearly' ? 'bg-white shadow' : 'text-gray-600 hover:text-gray-900'}`}>4 Years
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
          <CardTitle>.com Domains</CardTitle>
          <CardDescription>Most popular domain extension</CardDescription>
          </CardHeader>
          <CardContent>
          <p className="text-3xl font-bold mb-4"> ${domainPricing['.com'][billingPeriod]}
          <span className="text-sm text-gray-500">
          /{billingPeriod === 'monthly' ? 'month' : billingPeriod === 'yearly' ? 'year' : billingPeriod.replace('yearly', ' years')}
          </span>
          </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Free WHOIS Privacy
              </li>
              <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>DNS Management
              </li>
              <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Email Forwarding
              </li>
            </ul>
            <Link to="/register-domain">
            <Button className="w-full bg-guardian-primary hover:bg-guardian-secondary text-white">Register Now</Button>
            </Link>
          </CardContent>
        </Card>       
        <Card>
          <CardHeader>
          <CardTitle>.net Domains</CardTitle>
          <CardDescription>Perfect for network businesses</CardDescription>
          </CardHeader>
          <CardContent>
          <p className="text-3xl font-bold mb-4"> ${domainPricing['.net'][billingPeriod]}
          <span className="text-sm text-gray-500">
          /{billingPeriod === 'monthly' ? 'month' : billingPeriod === 'yearly' ? 'year' : billingPeriod.replace('yearly', ' years')}
          </span>
          </p>
          <ul className="space-y-2 mb-6">
          <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Free WHOIS Privacy
          </li>
              <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>DNS Management
              </li>
              <li className="flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Email Forwarding
              </li>
            </ul>
            <Link to="/register-domain">
            <Button className="w-full bg-guardian-primary hover:bg-guardian-secondary text-white">Register Now</Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>.org Domains</CardTitle>
            <CardDescription>Ideal for organizations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-4">${domainPricing['.org'][billingPeriod]}
            <span className="text-sm text-gray-500">
            /{billingPeriod === 'monthly' ? 'month' : billingPeriod === 'yearly' ? 'year' : billingPeriod.replace('yearly', ' years')}
            </span>
            </p>
            <ul className="space-y-2 mb-6">
            <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Free WHOIS Privacy
            </li>
            <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>DNS Management
            </li>
            <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Email Forwarding
            </li>
            </ul>
            <Link to="/register-domain">
            <Button className="w-full bg-guardian-primary hover:bg-guardian-secondary text-white">Register Now</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Need help choosing the right domain?</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
        Our domain experts are here to help you select the perfect domain name for your business or personal project.</p>
        <Link to="/contact-specialists">
        <Button size="lg" className="bg-guardian-primary hover:bg-guardian-secondary text-white">Contact Our Domain Specialists
        </Button>
        </Link>
      </div>
    </div>
  );
 };

 export default DomainPage;
