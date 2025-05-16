import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

 const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">We'd love to hear from you. Get in touch with our team.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
      <div>
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <p className="text-gray-600 mb-8">Have questions about LinkShort? Need help with your account? Or maybe you just want to say hello. Whatever it is, we're here to help.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 text-left">First Name</label>
            <Input id="firstName" placeholder="John" className="text-center" />
            </div>
            <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 text-left">Last Name</label>
            <Input id="lastName" placeholder="Doe" className="text-center" />
            </div>
            </div>

            <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">Email</label>
            <Input id="email" type="email" placeholder="jahidulislamweb2003@gmail.com" className="text-center" />
            </div>
            <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 text-left">Subject</label>
            <Input id="subject" placeholder="How can we help?" className="text-center" />
            </div>
          
            <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-left">Message </label>
            <Textarea id="message" rows={5} placeholder="Tell us how we can help..." className="text-center" />
            </div>
           <Button type="submit" size="lg" className="w-full">Submit</Button>
          </form>
        </div>
        <div>
          <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>            
            <div className="space-y-6">
            <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">jahidulislamweb2003@gmail.com</p>
            </div>              
            <div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+880 1540601832</p>
            </div>              
            <div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-600">
            LinkShort HQ<br />
            Uttara<br />
            Dhaka<br />
            Bangladesh
            </p>
            </div>             
            <div>
            <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
            <p className="text-gray-600">
            Sunday - Monday: 9:00 AM - 6:00 PM<br />
            Touesday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday - Sunday: Closed</p>
            </div>
            </div>
            </div>         
          <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <div className="flex items-center p-6">
                  <div className="mr-4">
                    <Avatar className="h-20 w-20 border-2 border-brand-100">
                    <AvatarImage src="/lovable-uploads/fd1110b1-a6da-45aa-a018-d4f4963f690c.png" alt="Jahidul Islam" />
                    <AvatarFallback>JI</AvatarFallback>
                    </Avatar>
                    </div>
                    <div>
                    <h3 className="font-bold text-lg">Jahidul Islam</h3>
                    <p className="text-brand-600">CEO & Founder</p>
                  </div>
                </div>
              </Card>             
              <Card className="overflow-hidden">
                <div className="flex items-center p-6">
                <div className="mr-4">
                <Avatar className="h-20 w-20 border-2 border-brand-100">
                <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Tamim Al Hridoy" />
                <AvatarFallback>TH</AvatarFallback>
                </Avatar>
                </div>
                <div>
                <h3 className="font-bold text-lg">Tamim Al Hridoy</h3>
                <p className="text-brand-600">Chief Technology Officer</p>
                </div>
                </div>
               </Card>             
              <Card className="overflow-hidden">
                <div className="flex items-center p-6">
                <div className="mr-4">
                <Avatar className="h-20 w-20 border-2 border-brand-100">
                <AvatarImage src="https://i.pravatar.cc/150?img=8" alt="Rezwan Islam" />
                <AvatarFallback>RI</AvatarFallback>
                </Avatar>
                </div>
                <div>
                <h3 className="font-bold text-lg">Rezwan Islam</h3>
                <p className="text-brand-600">Chief Product Officer</p>
                </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 };

 export default ContactPage;
