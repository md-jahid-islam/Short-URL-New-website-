import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

 const ContactSpecialistsPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
    
    // ========= Simple validation ========== //
    if (!name || !email || !message) {
    toast.error('Please fill out all required fields');
    return;
    }
    
    // ======== Email validation ============ //
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    toast.error('Please enter a valid email address');
    return;
    }  
    setLoading(true);  
    // ============ This would be an API call in a real app =========== // 
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      toast.success('Your message has been sent! Our specialists will contact you shortly.');
    } catch (error) {
      toast.error('Failed to send your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-6">
              <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold">Thank You for Contacting Us!</h2>
              <p className="text-gray-600">Your message has been received. One of our domain specialists will get back to you within 24 hours.</p>
              <Link to="/domain"><Button className="bg-guardian-primary hover:bg-guardian-secondary text-white">Return to Domain Services</Button></Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Contact Our Domain Specialists</h1>
        <p className="text-xl text-gray-600">Have questions about our domain services? Our specialists are ready to help!</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
            <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
            </CardHeader>
            <CardContent>
                 <form onSubmit={handleSubmit} className="space-y-4">
                  <div><Label htmlFor="name">Full Name *</Label>
                  <Input id="name"value={name}onChange={(e) => setName(e.target.value)}placeholder="John Doe"className="text-black"required/>
                  </div>                 
                  <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email"type="email"value={email}onChange={(e) => setEmail(e.target.value)}placeholder="john@example.com"className="text-black"required/>
                  </div>
                  <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone"value={phone}onChange={(e) => setPhone(e.target.value)}placeholder="+1 (555) 123-4567"className="text-black"/>
                  </div>
                  
                  <div><Label htmlFor="message">Your Message *</Label>
                  <Textarea id="message"value={message} onChange={(e) => setMessage(e.target.value)}placeholder="I'd like to know more about domain services..."rows={4}className="resize-none text-black"required/>
                  </div>         
                  <Button type="submit" className="w-full bg-guardian-primary hover:bg-guardian-secondary text-white"disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>         
          <div>
          <Card>
              <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Other ways to reach our specialists</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
              <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-blue-600">domains@example.com</p>
              </div>
              <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+880 1540601832</p>
              </div>
              <div>
              <h3 className="font-semibold">Hours</h3>
              <p>Mon-Fri: 9am - 5pm EST</p>
              </div>
              <div className="pt-4">
              <Link to="/domain"><Button variant="outline" className="w-full">Back to Domains</Button></Link>
              </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
   );
   };
   export default ContactSpecialistsPage;
