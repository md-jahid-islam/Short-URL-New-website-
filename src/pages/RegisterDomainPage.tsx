import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const RegisterDomainPage: React.FC = () => {
  const [domainName, setDomainName] = useState('');
  const [extension, setExtension] = useState('.com');
  const [billingPeriod, setBillingPeriod] = useState<'1' | '2' | '3' | '4'>('1');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!domainName) {
      toast.error('Please enter a domain name');
      return;
    }
    
    setLoading(true);
    
    // ============ This would be an API call in a real app ========= //
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success(`Domain ${domainName}${extension} registered successfully!`);
      setDomainName('');
    } catch (error) {
      toast.error('Failed to register domain. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // =========== Calculate pricing based on extension and billing period =========== //
  const getPricing = () => {
    const basePrices = {
      '.com': 12.99,
      '.net': 14.99,
      '.org': 13.99
    };
    
    const discountFactors = {
      '1': 1,
      '2': 0.9,
      '3': 0.85,
      '4': 0.8
    };
    
    const basePrice = basePrices[extension as keyof typeof basePrices];
    return (basePrice * parseInt(billingPeriod) * discountFactors[billingPeriod as keyof typeof discountFactors]).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Register Your Domain</h1>
          <p className="text-xl text-gray-600">
          Secure your online presence with a domain name that represents your brand
          </p>
        </div>

        <Card>
          <CardHeader>
          <CardTitle>Domain Registration</CardTitle>
          <CardDescription>Enter your domain details below</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="domainName">Domain Name</Label>
                  <Input id="domainName" value={domainName} onChange={(e) => setDomainName(e.target.value)} placeholder="yourdomain" className="text-black" required/>
                </div>
                <div>
                  <Label htmlFor="extension">Extension</Label>
                  <Select value={extension} onValueChange={setExtension}>
                    <SelectTrigger id="extension">
                    <SelectValue placeholder=".com" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value=".com">.com</SelectItem>
                      <SelectItem value=".net">.net</SelectItem>
                      <SelectItem value=".org">.org</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="billingPeriod">Registration Period</Label>
                <Select value={billingPeriod} onValueChange={(value) => setBillingPeriod(value as '1' | '2' | '3' | '4')}>
                  <SelectTrigger id="billingPeriod">
                  <SelectValue placeholder="1 Year" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="1">1 Year</SelectItem>
                    <SelectItem value="2">2 Years</SelectItem>
                    <SelectItem value="3">3 Years</SelectItem>
                    <SelectItem value="4">4 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex justify-between items-center">
                <span className="text-lg">Total Price:</span>
                <span className="text-2xl font-bold">${getPricing()}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                For {billingPeriod} {parseInt(billingPeriod) === 1 ? 'year' : 'years'}
                </p>
              </div>
              <div className="space-y-4">
                <Button type="submit" className="w-full bg-guardian-primary hover:bg-guardian-secondary text-white" disabled={loading}>
                {loading ? 'Processing...' : 'Register Now'}
                </Button>
                <Link to="/domain">
                <Button type="button" variant="outline" className="w-full">Back to Domains
                </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterDomainPage;
