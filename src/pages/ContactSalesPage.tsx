import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
 } from '@/components/ui/select';
 import { toast } from 'sonner';
 import { CreditCard, Mail, Phone, User, Users, Bitcoin } from 'lucide-react';

 const ContactSalesPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: 'Jahidul Islam',
    company: 'Jahid International Technology',
    email: 'jahidulislamweb2003@gmail.com',
    phone: '0154057085',
    interest: 'hosting',
    budget: '',
    message: 'Mongodb data storage',
    paymentMethod: 'bikash',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
   setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
  setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
    
    // ============ Basic validation ========== //
    if (!formData.name || !formData.email || !formData.message) {
    toast.error('Please fill in all required fields');
    return;
    }
    
    // =========== Email validation ========== //
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
    toast.error('Please enter a valid email address');
    return;
    }   
    setIsSubmitting(true);
    
    // ======== In a real app, this would be an API call ========= //
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Your message has been sent! Our sales team will contact you shortly.');
    } catch (error) {
      toast.error('Failed to send your message. Please try again.');
    } finally {
    setIsSubmitting(false);
    }

    };
   return (
    <div className="container mx-auto px-4 py-16">
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Contact Our Sales Team</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Let us help you find the perfect solution for your business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
          <Card>
          <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below and our sales team will get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2"> <User className="h-4 w-4" />
                    Full Name <span className="text-red-500">*</span></Label>                      
                    <Input id="name"name="name"value={formData.name}onChange={handleChange}placeholder="John Doe"className="text-black"required/>
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2"><Users className="h-4 w-4" />Company/Organization</Label>
                    <Input id="company"name="company"value={formData.company}onChange={handleChange}placeholder="Acme Inc."className="text-black"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input id="email"name="email"type="email"value={formData.email}onChange={handleChange}placeholder="john@example.com"className="text-black"required/>
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2"> <Phone className="h-4 w-4" />Phone Number</Label>
                    <Input id="phone"name="phone"value={formData.phone}onChange={handleChange}placeholder="+1 (555) 123-4567"className="text-black"/>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in</Label>
                      <Select value={formData.interest}onValueChange={(value) => handleSelectChange('interest', value)}>
                        <SelectTrigger id="interest">
                        <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="hosting">Web Hosting</SelectItem>
                        <SelectItem value="domains">Domain Services</SelectItem>
                        <SelectItem value="cloud">Cloud Solutions</SelectItem>
                        <SelectItem value="enterprise">Enterprise Hosting</SelectItem>
                        <SelectItem value="other">Other Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                      <Select value={formData.budget}onValueChange={(value) => handleSelectChange('budget', value)}>                      
                        <SelectTrigger id="budget">
                        <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="under-1k">Under $1,000</SelectItem>
                        <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-plus">Over $25,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="paymentMethod">Preferred Payment Method</Label>
                     <Select value={formData.paymentMethod} onValueChange={(value) => handleSelectChange('paymentMethod', value)}>
                      <SelectTrigger id="paymentMethod">
                      <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                      <SelectItem value="bikash">Bikash (01540587085)</SelectItem>
                      <SelectItem value="nagad">Nagad</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="creditcard">Credit Card</SelectItem>
                      <SelectItem value="debitcard">Debit Card</SelectItem>
                      <SelectItem value="payoneer">Payoneer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                  <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                  <Textarea id="message"name="message"value={formData.message}onChange={handleChange}placeholder="Please describe your requirements in detail..."className="min-h-[150px] text-black"required/>
                  </div>
                  <Button type="submit" className="w-full bg-guardian-primary hover:bg-guardian-secondary text-white"disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
         <div>
            <Card>
              <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Get in touch with our sales team directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">jahidulislamweb2003@gmail.com</p>
                </div>
                <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">0154057085</p>
                </div>
                <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">Hours</h3>
                <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 9AM - 5PM EST</p>
                </div>

                <div className="border-t pt-4 mt-6">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Our Office</h3>
                  <address className="not-italic text-gray-600 dark:text-gray-400">
                  Bangladesh<br />
                  Dhaka<br />
                  Uttara<br />
                  </address>
                </div>

                <div className="border-t pt-4 mt-6">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Payment Methods</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                    <CreditCard className="h-6 w-6 text-gray-700" />
                    <span className="text-xs mt-1">Credit Card</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                    <CreditCard className="h-6 w-6 text-gray-700" />
                    <span className="text-xs mt-1">Debit Card</span>
                    </div>             
                    <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                    <Bitcoin className="h-6 w-6 text-gray-700" />
                    <span className="text-xs mt-1">Bikash</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                    <Bitcoin className="h-6 w-6 text-gray-700" />
                    <span className="text-xs mt-1">Nagad</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                    <CreditCard className="h-6 w-6 text-gray-700" />
                    <span className="text-xs mt-1">Payoneer</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
 };

 export default ContactSalesPage;
