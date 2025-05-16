import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

 const HelpCenterPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">Help Center</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions and learn how to get the most out of LinkShort.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
        <Card>
            <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Get quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I create a short URL?</AccordionTrigger>
                  <AccordionContent>
                  To create a short URL, simply paste your long URL in the input field on your dashboard, 
                  customize your link if desired, and click "Shorten URL". Your new shortened link will be 
                  instantly created and ready to use.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I customize my short links?</AccordionTrigger>
                  <AccordionContent>
                  Yes! LinkShort allows you to create custom aliases for your links. When shortening a URL, 
                  simply enter your preferred custom text in the "Custom Alias" field. If the alias is available, 
                  your shortened URL will use that customized text.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I track link performance?</AccordionTrigger>
                  <AccordionContent>
                  All shortened links automatically include analytics tracking. To view your link performance, 
                  go to the Analytics section in your dashboard. You'll see metrics including clicks, geographic 
                  data, device information, and referral sources.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What is the QR code feature?</AccordionTrigger>
                  <AccordionContent>
                  Each shortened link automatically generates a QR code that you can download and share. 
                  To access your link's QR code, click on the QR code icon next to any of your shortened URLs. 
                  You can then download the QR code in PNG format or share it directly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I enable two-factor authentication?</AccordionTrigger>
                  <AccordionContent>
                  To enable two-factor authentication, go to your Profile page, find the "Account Security" 
                  section and click on "Enable Two-Factor Authentication". Follow the instructions to scan 
                  the QR code with your authenticator app and enter the verification code to complete the setup.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I export my shortened URLs?</AccordionTrigger>
                  <AccordionContent>
                  Yes, you can export all your URLs from the dashboard. Go to the URLs page and click on 
                  the "Export URLs" button. You can download your URLs data in CSV format for your records 
                  or for import into other systems.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>       
        <div>
          <Card className="mb-8">
            <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>We're here to help</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">Can't find what you're looking for? Our support team is ready to assist you.</p>
            <Link to="/contact">
            <Button className="w-full">Contact Support</Button>
            </Link>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Explore our guides</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">Check out our comprehensive documentation and step-by-step guides.</p>
              <Link to="/guides">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2"> View Guides <ArrowRight className="h-4 w-4" /></Button>
              </Link>
              <Link to="/documentation">
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">View Documentation <ArrowRight className="h-4 w-4" /></Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
 };

 export default HelpCenterPage;
