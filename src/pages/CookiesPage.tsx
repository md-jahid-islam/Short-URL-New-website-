import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';

 type CookiePreferences = {
  essential: boolean;
  performance: boolean;
  functionality: boolean;
  targeting: boolean;
 };
 // ======== Essential cookies are always required =========-= //
 const CookiesPage: React.FC = () => {
  const [isCustomizeDialogOpen, setIsCustomizeDialogOpen] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
  essential: true, 
  performance: false,
  functionality: false,
  targeting: false,
  });

  const handleAcceptAll = () => {
    setCookiePreferences({
    essential: true,
    performance: true,
    functionality: true,
    targeting: true,
    });
    // ========= In a real implementation, this would save to localStorage or cookies ========= //
    toast.success("All cookies accepted");
    console.log("Accepted all cookies", {
    essential: true,
    performance: true,
    functionality: true,
    targeting: true,
    });
  };

   const handleEssentialOnly = () => {
    setCookiePreferences({
    essential: true,
    performance: false,
    functionality: false,
    targeting: false,
    });

    // =========== In a real implementation, this would save to localStorage or cookies ========== //
    toast.success("Only essential cookies accepted");
    console.log("Accepted essential cookies only", {
    essential: true,
    performance: false,
    functionality: false,
    targeting: false,
    });
  };

  const handleCustomizeSettings = () => {
  setIsCustomizeDialogOpen(true);
  };

  const handleSavePreferences = () => {
  toast.success("Cookie preferences saved");
  setIsCustomizeDialogOpen(false);
  console.log("Saved cookie preferences", cookiePreferences);
  };

  const handleCheckboxChange = (type: keyof CookiePreferences) => {
  if (type === 'essential') return; // Essential cookies cannot be toggled
  setCookiePreferences(prev => ({...prev,[type]: !prev[type],}));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="text-gray-600 mb-6">Last Updated: May 1, 2023</p>       
        <div className="prose prose-slate max-w-none">

        <p className="mb-6">This Cookie Policy explains how LinkShort, Inc. ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at linkshort.com. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>         
        <h2 className="text-2xl font-bold mt-10 mb-4">What are cookies?</h2>
        <Separator className="mb-6" />  

        <p className="mb-6">Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
        <p className="mb-6">Cookies set by the website owner (in this case, LinkShort, Inc.) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).</p>
          
        <h2 className="text-2xl font-bold mt-10 mb-4">Why do we use cookies?</h2>
        <Separator className="mb-6" />
          
        <p className="mb-6">We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes.</p>       
        <h2 className="text-2xl font-bold mt-10 mb-4">Types of cookies we use</h2>
        <Separator className="mb-6" />          
        <p className="mb-4">The specific types of first and third-party cookies served through our website and the purposes they perform are described below:</p>
          
        <Table className="mb-8">
        <TableHeader>
        <TableRow>
        <TableHead className="w-[250px]">Type of Cookie</TableHead>
        <TableHead>Purpose</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        <TableRow>
        <TableCell className="font-medium">Essential Cookies</TableCell>
        <TableCell>
        These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell className="font-medium">Performance Cookies</TableCell>
        <TableCell>
        These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell className="font-medium">Functionality Cookies</TableCell>
        <TableCell>
        These cookies allow our website to remember choices you make when you use our website, such as remembering your language preferences or login information. The purpose of these cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you visit our website.
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell className="font-medium">Targeting/Advertising Cookies</TableCell>
        <TableCell>
        These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
        </TableCell>
        </TableRow>
        </TableBody>
        </Table>
          
        <h2 className="text-2xl font-bold mt-10 mb-4">How can you control cookies?</h2>
        <Separator className="mb-6" />          
        <p className="mb-4">You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie table above.</p>
        <p className="mb-4">You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.</p>
        <p className="mb-6">In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit</p>
          
        <h2 className="text-2xl font-bold mt-10 mb-4">Cookie preferences</h2>
        <Separator className="mb-6" />          
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Manage Cookie Preferences</h3>
            <p className="mb-6">You can change your cookie preferences at any time by clicking the buttons below.</p>
            <div className="space-x-4">
            <Button onClick={handleAcceptAll}>Accept All Cookies</Button>
            <Button variant="outline" onClick={handleEssentialOnly}>Essential Cookies Only</Button>
            <Button variant="outline" onClick={handleCustomizeSettings}>Customize Settings</Button>
            </div>
            </div>         
            <h2 className="text-2xl font-bold mt-10 mb-4">Updates to this Cookie Policy</h2>
            <Separator className="mb-6" />          
            <p className="mb-6"> We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
           </p>        
           <h2 className="text-2xl font-bold mt-10 mb-4">Contact us</h2>
           <Separator className="mb-6" />         
           <p className="mb-6">If you have any questions about our use of cookies or other technologies, please contact us at:</p>
           <p className="mb-1">Email: privacy@linkshort.com</p><p>
           LinkShort, Inc.<br />
           123 Tech Avenue<br />
           San Bangladesh, Dhaka , 1210<br />
          </p>
          </div>
          </div>
      {/* Customize Cookies Dialog */}
      <Dialog open={isCustomizeDialogOpen} onOpenChange={setIsCustomizeDialogOpen}>
      <DialogContent className="sm:max-w-md">
          <DialogHeader>
          <DialogTitle>Cookie Preferences</DialogTitle>
          <DialogDescription> 
          Customize which cookies you want to allow. Essential cookies cannot be disabled as they are necessary for the website to function.
          </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-2">
          <Checkbox id="essential-cookies" checked={cookiePreferences.essential} disabled />
          <label htmlFor="essential-cookies"className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Essential Cookies (Required)</label>
            </div>
            <div className="flex items-center space-x-2">
            <Checkbox id="performance-cookies" checked={cookiePreferences.performance} onCheckedChange={() => handleCheckboxChange('performance')}/><label
            htmlFor="performance-cookies"className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Performance Cookies</label>
            </div>
            <div className="flex items-center space-x-2">
            <Checkbox id="functionality-cookies" checked={cookiePreferences.functionality} 
            onCheckedChange={() => handleCheckboxChange('functionality')}/>
            <label htmlFor="functionality-cookies"className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Functionality Cookies</label>
            </div>
            <div className="flex items-center space-x-2">
            <Checkbox id="targeting-cookies" checked={cookiePreferences.targeting}onCheckedChange={() => handleCheckboxChange('targeting')}/>
            <label htmlFor="targeting-cookies"  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Targeting/Advertising Cookies
            </label>
            </div>
          </div>
          <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setIsCustomizeDialogOpen(false)}>Cancel</Button>
          <Button type="button" onClick={handleSavePreferences}>Save Preferences</Button>
          </DialogFooter>
          </DialogContent>
         </Dialog>
    </div>
  );
 };

 export default CookiesPage;
