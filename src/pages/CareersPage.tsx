import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

 const CareersPage: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isGeneralApplicationOpen, setIsGeneralApplicationOpen] = useState(false);
  
  // ============ Form state ============ //
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resumeFile, setResumeFile] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const navigate = useNavigate();
  const openPositions = [
    {
      id: 1,
      title: "React Developer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Optional)",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Next.js Developer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Optional)",
      type: "Full-time"
    },
    {
      id: 3,
      title: "TypeScript Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 4,
      title: "Backend Developer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Optional)",
      type: "Full-time"
    },
    {
      id: 5,
      title: "Node.js Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 6,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 7,
      title: "MERN Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Optional)",
      type: "Full-time"
    },
    {
      id: 8,
      title: "Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Remote Optional)",
      type: "Full-time"
    }
  ];

  const handleApplyNow = (position: string) => {
  setSelectedPosition(position);
  setIsDialogOpen(true);
  };

  const handleSubmitResume = () => {
  setIsGeneralApplicationOpen(true);
  };

  // ============ Validate form ============ // 
  const handleSubmitApplication = () => {
    if (!name || !email || !coverLetter) {
    toast.error("Please fill out all required fields");
    return;
    }
    
    // =========== Store the resume data in localStorage =========== //
    const existingResumes = JSON.parse(localStorage.getItem('storedResumes') || '[]');   
    const newResume = {
    name, email, position: selectedPosition || 'General Application',resumeFile, coverLetter };
    
    existingResumes.push(newResume);
    localStorage.setItem('storedResumes', JSON.stringify(existingResumes));
    
    // =========== Close dialogs and reset form =============== //
    setIsDialogOpen(false);
    setIsGeneralApplicationOpen(false);
    setSelectedPosition(null);
    
    // ================= Show success message ================== // 
    toast.success(`Application submitted successfully!`);    
    // =============== Navigate to resume storage page after a short delay ================= //
    setTimeout(() => {
    navigate('/resume-storage');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">Careers at LinkShort</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Join our team and help shape the future of link shortening and management.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
          <p className="text-lg text-gray-600 mb-6">
          At LinkShort, we're building the next generation of link management tools that help businesses and individuals connect with their audiences more effectively.</p>
          <p className="text-lg text-gray-600 mb-6">We're a remote-first company with team members across the globe, united by our mission to make the web more accessible through better link sharing.</p>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
              <h3 className="font-semibold mb-1">Remote-First Culture</h3>
              <p className="text-gray-600 text-sm">Work from anywhere in the world</p>
              </div>
            </div>            
            <div className="flex items-start">
            <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
            <h3 className="font-semibold mb-1">Competitive Salary</h3>
            <p className="text-gray-600 text-sm">We pay above market rates</p>
            </div>
            </div>
            
           <div className="flex items-start">              
           <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center mr-4">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
           </div>
           <div>
           <h3 className="font-semibold mb-1">Health Benefits</h3>
           <p className="text-gray-600 text-sm">Medical, dental, and vision</p>
           </div>
          </div>
            
            <div className="flex items-start">
            <div className="h-12 w-12 rounded-full bg-brand-100 flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
            <h3 className="font-semibold mb-1">Unlimited PTO</h3>
            <p className="text-gray-600 text-sm">Take time off when you need it</p>
            </div>
            </div>
          </div>
         </div>        
        <div className="rounded-lg overflow-hidden">
      <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="LinkShort Team" className="w-full h-80 object-cover"/>
      </div>
      </div>
      <div className="mb-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Open Positions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {openPositions.map(position => (
        <Card key={position.id}>
        <CardHeader className="pb-2">
        <CardTitle>{position.title}</CardTitle>
        <CardDescription>{position.department}</CardDescription>
        </CardHeader>
        <CardContent>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {position.location}
              </div>
                  <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {position.type}
                  </div>
                </div>
                <Button onClick={() => handleApplyNow(position.title)}>Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 p-8 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Don't See a Position That Fits?</h2>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute.</p>
      <Button size="lg" onClick={handleSubmitResume}>Submit Your Resume</Button>
      </div>
      {/* Job Application Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
          <DialogTitle>Apply for {selectedPosition}</DialogTitle>
          <DialogDescription>Submit your application for this position. We'll review it and get back to you soon.</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-2">
          <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
          <input id="name"type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black"placeholder="Jahidul Islam"value={name}
          onChange={(e) => setName(e.target.value)}required/>

          </div>
          <div className="grid grid-cols-1 gap-2">
          <label htmlFor="email" className="text-sm font-medium">Email *</label>
          <input id="email" type="email"  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black"
          placeholder="jahid@gmali.com"value={email}onChange={(e) => setEmail(e.target.value)}required/>
          </div>

          <div className="grid grid-cols-1 gap-2">
          <label htmlFor="resume" className="text-sm font-medium">Resume *</label>
          <input id="resume"type="file"className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          onChange={(e) => setResumeFile(e.target.value)}required/>
          </div>

            <div className="grid grid-cols-1 gap-2">
            <label htmlFor="cover" className="text-sm font-medium">Cover Letter *</label>
            <textarea  id="cover"className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black"
            placeholder="Tell us why you're a great fit for this role..."value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}required/>
            </div>
          </div>
          <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button type="button" onClick={handleSubmitApplication}>Submit Application</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* General Application Dialog */}
      <Dialog open={isGeneralApplicationOpen} onOpenChange={setIsGeneralApplicationOpen}>
      <DialogContent className="sm:max-w-md">
      <DialogHeader>
      <DialogTitle>Submit Your Resume</DialogTitle>
      <DialogDescription>Send us your information and we'll keep you in mind for future opportunities.</DialogDescription>
      </DialogHeader>

      <div className="grid gap-4 py-4">
      <div className="grid grid-cols-1 gap-2">
      <label htmlFor="gen-name" className="text-sm font-medium">Full Name *</label>
      <input id="gen-name"type="text"className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black"placeholder="Jahidul Islam"
      value={name}onChange={(e) => setName(e.target.value)}required/>
      </div>

      <div className="grid grid-cols-1 gap-2">
      <label htmlFor="gen-email" className="text-sm font-medium">Email *</label>
      <input id="gen-email"type="email"className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black"
      placeholder="jahidulislamweb2003@gmail.com"value={email}onChange={(e) => setEmail(e.target.value)}required/>
      </div>

      <div className="grid grid-cols-1 gap-2">
      <label htmlFor="gen-resume" className="text-sm font-medium">Resume *</label>
      <input id="gen-resume"type="file" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      onChange={(e) => setResumeFile(e.target.value)}required/>
      </div>

      <div className="grid grid-cols-1 gap-2">
      <label htmlFor="gen-interests" className="text-sm font-medium">Areas of Interest *</label>
      <textarea id="gen-interests"className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black"
      placeholder="What roles or departments are you interested in?"value={coverLetter}
      onChange={(e) => setCoverLetter(e.target.value)}required/>
      </div>
      </div>

      <DialogFooter>
      <Button type="button" variant="outline" onClick={() => setIsGeneralApplicationOpen(false)}>Cancel</Button>
      <Button type="button" onClick={handleSubmitApplication}>Submit</Button>
      </DialogFooter>
      </DialogContent>
      </Dialog>
      </div>
  );
 };

 export default CareersPage;
