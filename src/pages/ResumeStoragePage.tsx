import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// ========== Store resumes in localStorage since we don't have a backend ======== //
const getStoredResumes = () => {
  const stored = localStorage.getItem('storedResumes');
  return stored ? JSON.parse(stored) : [];
};

const saveResumesToStorage = (resumes) => {
  localStorage.setItem('storedResumes', JSON.stringify(resumes));
};

const ResumeStoragePage: React.FC = () => {
  const [resumes, setResumes] = useState([]);
  const [activePreview, setActivePreview] = useState(null);

  useEffect(() => {
    setResumes(getStoredResumes());
  }, []);

  const handleDeleteResume = (index) => {
    const updatedResumes = [...resumes];
    updatedResumes.splice(index, 1);
    setResumes(updatedResumes);
    saveResumesToStorage(updatedResumes);
  };

  const handleViewResume = (index) => {
    setActivePreview(index);
  };

  // =-======= In a real app, this would generate or download an actual PDF ========== //
  const handleDownloadPdf = (resume) => {
    
    const resumeContent = `
      ${resume.name}
      ${resume.email}
      Position Applied: ${resume.position}
      
      Cover Letter:
      ${resume.coverLetter}
    `;
    // ============= Create a blob with the resume content ================ //
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // =========== Create a temporary link to trigger the download ========== //
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resume.name.replace(/\s+/g, '_')}_resume.pdf`;
    document.body.appendChild(a);
    a.click();
    
    // ========= Clean up ========== //
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Resume Database</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        All submitted resumes are stored here for review.
        </p>
      </div>

      {resumes.length === 0 ? (
        <div className="text-center py-16">
        <p className="text-xl text-gray-500">No resumes have been submitted yet.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {resumes.map((resume, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{resume.name}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleViewResume(index)}> Preview Resume</Button>
                    <Button variant="outline" size="sm" onClick={() => handleDownloadPdf(resume)}className="bg-guardian-primary text-white hover:bg-guardian-secondary">
                      Download PDF
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteResume(index)}>Delete</Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Contact Information</h3>
                    <p className="mb-1"><span className="font-medium">Email:</span> {resume.email}</p>
                    <p className="mb-4"><span className="font-medium">Position Applied:</span> {resume.position}</p>
                    
                    <h3 className="font-semibold mb-2">Cover Letter</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                    <p className="whitespace-pre-wrap">{resume.coverLetter}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Resume Preview</h3>
                    {activePreview === index ? (
                      <div className="border border-gray-200 rounded-md p-4 bg-white">
                        <div className="mb-4 pb-4 border-b">
                        <h3 className="text-xl font-bold">{resume.name}</h3>
                        <p className="text-gray-600">{resume.email}</p>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Objective</h4>
                          <p className="text-gray-700">
                          Seeking a position as {resume.position} where I can utilize my skills and experience.
                          </p>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Summary</h4>
                          <p className="text-gray-700">
                          {resume.coverLetter.substring(0, 150)}...
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center h-full bg-gray-50">
                        <p className="text-gray-500 italic mb-2">
                        Click "Preview Resume" to view resume content
                        </p>
                      </div>
                    )}
                    
                    <div className="mt-4">
                      <h3 className="font-semibold mb-2">Application Status</h3>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <p className="text-yellow-700">Under Review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
   );
 };

 export default ResumeStoragePage;
