import React from 'react';
import { Separator } from '@/components/ui/separator';
const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-6">Last Updated: May 1, 2023</p>
        
        <div className="prose prose-slate max-w-none">
          <p className="mb-6"> Please read these Terms of Service ("Terms") carefully before using the LinkShort website and URL shortening service operated by LinkShort, Inc.</p>
          <p className="mb-6"> Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
          <p className="mb-6">By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">1. Accounts</h2>
          <Separator className="mb-6" />
          
          <p className="mb-4"> When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
          <p className="mb-4"> You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>
          <p className="mb-6">You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">2. Acceptable Use</h2>
          <Separator className="mb-6" />
          
          <p className="mb-4"> You may not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
          <p className="mb-4"> You agree not to:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Create or transmit short links to any material that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, or otherwise objectionable</li>
            <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
            <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
            <li>Attempt to gain unauthorized access to any portion of the Service or any other systems or networks connected to the Service</li>
            <li>Use the Service for spamming, phishing, or distributing malware</li>
            <li>Use the Service to collect or harvest user data without proper authorization</li>
            <li>Use the Service in a manner that could disable, overburden, damage, or impair the Service</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">3. Intellectual Property</h2>
          <Separator className="mb-6" />
          
          <p className="mb-4"> The Service and its original content, features, and functionality are and will remain the exclusive property of LinkShort, Inc. and its licensors.</p>
          <p className="mb-6"> The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of LinkShort, Inc.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">4. Links to Other Web Sites</h2>
          <Separator className="mb-6" />
          
          <p className="mb-4"> Our Service may contain links to third-party web sites or services that are not owned or controlled by LinkShort, Inc.</p>
          <p className="mb-6">LinkShort, Inc. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that LinkShort, Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">5. Termination</h2>
          <Separator className="mb-6" />
          
          <p className="mb-4"> We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          <p className="mb-6">Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">6. Limitation of Liability</h2>
          <Separator className="mb-6" />
          
          <p className="mb-6">In no event shall LinkShort, Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">7. Disclaimer</h2>
          <Separator className="mb-6" />
          
          <p className="mb-6"> Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">8. Governing Law</h2>
          <Separator className="mb-6" />
          
          <p className="mb-6"> These Terms shall be governed and construed in accordance with the laws of the United States of America, without regard to its conflict of law provisions.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">9. Changes to Terms</h2>
          <Separator className="mb-6" />
          
          <p className="mb-6"> We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">10. Contact Us</h2>
          <Separator className="mb-6" />
          
          <p className="mb-6"> If you have any questions about these Terms, please contact us at:</p>
          <p className="mb-1">Email: jahidulislamweb2003@gmail.com</p>
          <p>
            LinkShort, Inc.<br />
            123 Tech Avenue<br />
            San Bangladesh, CA 1210<br />
          </p>
        </div>
      </div>
    </div>
  );
 };

 export default TermsPage;
