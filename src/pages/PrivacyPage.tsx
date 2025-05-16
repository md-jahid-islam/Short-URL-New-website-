import React from 'react';
import { Separator } from '@/components/ui/separator';
 const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">Last Updated: May 1, 2023</p>
        
        <div className="prose prose-slate max-w-none">
        <p className="mb-6"> At LinkShort, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our URL shortening service.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Information We Collect</h2>
          <Separator className="mb-6" />
          
          <h3 className="text-xl font-bold mb-3">Personal Information</h3>
          <p className="mb-4"> When you create an account, we may collect certain personal information, including:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Password (encrypted)</li>
            <li>Profile information you choose to provide</li>
          </ul>
          
          <h3 className="text-xl font-bold mb-3">Usage Information</h3>
          <p className="mb-4"> When you use our service to shorten URLs or click on shortened URLs, we may collect:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>The original long URL</li>
            <li>The shortened URL</li>
            <li>Click data (time, IP address, browser information, referrer)</li>
            <li>Device information</li>
            <li>Geographic location (city/country level)</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">How We Use Your Information</h2>
          <Separator className="mb-6" />
          
          <p className="mb-4">We use the information we collect for various purposes, including:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Providing and maintaining our service</li>
            <li>Improving, personalizing, and expanding our service</li>
            <li>Understanding how users use our service</li>
            <li>Developing new products, services, features, and functionality</li>
            <li>Communicating with you about our service</li>
            <li>Providing customer support</li>
            <li>Ensuring the security of our service</li>
            <li>Detecting and preventing fraud</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Data Sharing and Disclosure</h2>
          <Separator className="mb-6" />
          
          <p className="mb-4">We may share your information in the following situations:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>With service providers who help us operate our business</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>In connection with a business transfer or transaction</li>
            <li>With your consent or at your direction</li>
          </ul>
          <p className="mb-6">We do not sell your personal information to third parties.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Cookies and Tracking Technologies</h2>
          <Separator className="mb-6" />
          
          <p className="mb-4"> We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          <p className="mb-6">
          We use the following types of cookies:
          </p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Essential cookies: Necessary for the operation of our website</li>
            <li>Analytical cookies: Help us understand how visitors interact with our website</li>
            <li>Functional cookies: Allow us to remember your preferences</li>
            <li>Targeting cookies: Record your visit to our website and your browsing habits</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Data Security</h2>
          <Separator className="mb-6" />          
          <p className="mb-6">We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Your Rights</h2>
          <Separator className="mb-6" />
          
          <p className="mb-4"> Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Access to the personal information we have about you</li>
            <li>Correction of inaccurate personal information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction or objection to our processing of your personal information</li>
            <li>Portability of your personal information</li>
            <li>Withdrawal of consent</li>
          </ul>
          <p className="mb-6"> To exercise these rights, please contact us using the information provided below.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Changes to This Privacy Policy</h2>
          <Separator className="mb-6" />
          
          <p className="mb-6">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
          <Separator className="mb-6" />
          
          <p className="mb-6">If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mb-1">Email: jahidulislamweb2003@gmail.com</p>
          <p>
            LinkShort, Inc.<br />
            123 Tech Avenue<br />
            Bangladesh, CA 1210<br />
          </p>
        </div>
      </div>
    </div>
  );
 };

 export default PrivacyPage;
