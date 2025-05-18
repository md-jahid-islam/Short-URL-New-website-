// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// // ========== Store resumes in localStorage since we don't have a backend ======== //
// const getStoredResumes = () => {
//   const stored = localStorage.getItem('storedResumes');
//   return stored ? JSON.parse(stored) : [];
// };

// const saveResumesToStorage = (resumes) => {
//   localStorage.setItem('storedResumes', JSON.stringify(resumes));
// };

// const ResumeStoragePage: React.FC = () => {
//   const [resumes, setResumes] = useState([]);
//   const [activePreview, setActivePreview] = useState(null);

//   useEffect(() => {
//     setResumes(getStoredResumes());
//   }, []);

//   const handleDeleteResume = (index) => {
//     const updatedResumes = [...resumes];
//     updatedResumes.splice(index, 1);
//     setResumes(updatedResumes);
//     saveResumesToStorage(updatedResumes);
//   };

//   const handleViewResume = (index) => {
//     setActivePreview(index);
//   };

//   // =-======= In a real app, this would generate or download an actual PDF ========== //
//   const handleDownloadPdf = (resume) => {
    
//     const resumeContent = `
//       ${resume.name}
//       ${resume.email}
//       Position Applied: ${resume.position}
      
//       Cover Letter:
//       ${resume.coverLetter}
//     `;
//     // ============= Create a blob with the resume content ================ //
//     const blob = new Blob([resumeContent], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
    
//     // =========== Create a temporary link to trigger the download ========== //
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${resume.name.replace(/\s+/g, '_')}_resume.pdf`;
//     document.body.appendChild(a);
//     a.click();
    
//     // ========= Clean up ========== //
//     setTimeout(() => {
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
//     }, 100);
//   };

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl font-bold mb-4">Resume Database</h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//         All submitted resumes are stored here for review.
//         </p>
//       </div>

//       {resumes.length === 0 ? (
//         <div className="text-center py-16">
//         <p className="text-xl text-gray-500">No resumes have been submitted yet.</p>
//         </div>
//         ) : (
//         <div className="space-y-8">
//           {resumes.map((resume, index) => (
//             <Card key={index}>
//               <CardHeader>
//                 <CardTitle className="flex justify-between items-center">
//                 <span>{resume.name}</span>
//                 <div className="flex gap-2">
//                 <Button variant="outline" size="sm" onClick={() => handleViewResume(index)}> Preview Resume</Button>
//                 <Button variant="outline" size="sm" onClick={() => handleDownloadPdf(resume)}className="bg-guardian-primary text-white hover:bg-guardian-secondary">Download PDF</Button>
//                 <Button variant="destructive" size="sm" onClick={() => handleDeleteResume(index)}>Delete</Button>
//                 </div>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <h3 className="font-semibold mb-2">Contact Information</h3>
//                     <p className="mb-1"><span className="font-medium">Email:</span> {resume.email}</p>
//                     <p className="mb-4"><span className="font-medium">Position Applied:</span> {resume.position}</p>
                    
//                     <h3 className="font-semibold mb-2">Cover Letter</h3>
//                     <div className="bg-gray-50 p-4 rounded-md">
//                     <p className="whitespace-pre-wrap">{resume.coverLetter}</p>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <h3 className="font-semibold mb-2">Resume Preview</h3>
//                     {activePreview === index ? (
//                       <div className="border border-gray-200 rounded-md p-4 bg-white">
//                         <div className="mb-4 pb-4 border-b">
//                         <h3 className="text-xl font-bold">{resume.name}</h3>
//                         <p className="text-gray-600">{resume.email}</p>
//                         </div>
//                         <div className="mb-4">
//                           <h4 className="font-semibold mb-2">Objective</h4>
//                           <p className="text-gray-700">
//                           Seeking a position as {resume.position} where I can utilize my skills and experience.
//                           </p>
//                         </div>
//                         <div className="mb-4">
//                           <h4 className="font-semibold mb-2">Summary</h4>
//                           <p className="text-gray-700">
//                           {resume.coverLetter.substring(0, 150)}...
//                           </p>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center h-full bg-gray-50">
//                         <p className="text-gray-500 italic mb-2">
//                         Click "Preview Resume" to view resume content
//                         </p>
//                       </div>
//                     )}
                    
//                     <div className="mt-4">
//                       <h3 className="font-semibold mb-2">Application Status</h3>
//                       <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
//                       <p className="text-yellow-700">Under Review</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//    );
//  };

//  export default ResumeStoragePage;


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
  const [activePreviewIndex, setActivePreviewIndex] = useState<number | null>(null);

  useEffect(() => {
    setResumes(getStoredResumes());
  }, []);

  const handleDeleteResume = (index: number) => {
    const updatedResumes = [...resumes];
    updatedResumes.splice(index, 1);
    setResumes(updatedResumes);
    saveResumesToStorage(updatedResumes);
    setActivePreviewIndex(null);
  };

  const handleViewResume = (index: number) => {
  setActivePreviewIndex(index);
  };

  const handleClosePreview = () => {
  setActivePreviewIndex(null);
  };

  const handleDownloadText = (resume: any) => {
    const resumeContent = `
      ${resume.name}
      ${resume.email}
      Position Applied: ${resume.position}
      Cover Letter:
      ${resume.coverLetter}
    `;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${resume.name.replace(/\s+/g, '_')}_resume.txt`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  };

  // =-======= In a real app, this would generate or download an actual PDF ========== //
  const handleDownloadPdf = (resume: any) => {
  alert('PDF download functionality would be implemented in a real application.');
  console.log('Attempting to download PDF for:', resume.name);

  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-2">Resume Database</h1>
      <p className="text-lg text-gray-600">All submitted resumes are stored here.</p>
      </div>

      {resumes.length === 0 ? (
        <div className="text-center py-8">
        <p className="text-lg text-gray-500">No resumes have been submitted yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {resumes.map((resume, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{resume.name}</span>
                  <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => handleViewResume(index)}>Preview</Button>
                  <Button variant="outline" size="sm" onClick={() => handleDownloadText(resume)}>Download Text</Button>
                  <Button variant="outline" size="sm" onClick={() => handleDownloadPdf(resume)}>Download PDF</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDeleteResume(index)}>Delete</Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Contact Information</h3>
                  <p className="mb-1"><span className="font-medium">Email:</span> {resume.email}</p>
                  <p className="mb-2"><span className="font-medium">Position:</span> {resume.position}</p>
                  <h3 className="font-semibold mb-2">Cover Letter</h3>
                  <div className="bg-gray-50 p-3 rounded-md">
                  <p className="text-sm whitespace-pre-wrap">{resume.coverLetter.substring(0, 200)}...</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Resume Preview</h3>
                  {activePreviewIndex === index ? (
                    <div className="border border-gray-200 rounded-md p-4 bg-white">
                      <div className="mb-4 pb-4 border-b">
                      <h4 className="text-lg font-bold">{resume.name}</h4>
                      <p className="text-gray-600 text-sm">{resume.email}</p>
                      </div>
                      <div className="mb-2">
                      <h5 className="font-semibold text-sm">Objective</h5>
                      <p className="text-gray-700 text-xs">{`Seeking a position as ${resume.position} where I can utilize my skills.`}</p>
                      </div>
                      <div>
                      <h5 className="font-semibold text-sm">Summary</h5>
                      <p className="text-gray-700 text-xs">{resume.coverLetter}</p>
                      </div>
                      <Button size="sm" className="mt-2" onClick={handleClosePreview}>Close Preview</Button>
                    </div>
                  ) : (
                    <div className="border border-gray-200 rounded-md p-4 flex items-center justify-center bg-gray-50 h-32">
                    <p className="text-gray-500 italic text-sm">Click "Preview" to view full resume</p>
                    </div>
                  )}
                  <div className="mt-2">
                  <h3 className="font-semibold mb-1 text-sm">Application Status</h3>
                  <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-3 py-2 rounded-md text-xs">Under Review                      
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
