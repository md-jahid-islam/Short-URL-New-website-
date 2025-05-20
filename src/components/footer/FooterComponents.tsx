// import React, { useState, useEffect, useRef } from 'react';
// import { FaWhatsapp, FaFacebookMessenger, FaComment, FaTimes, FaMicrophone, FaHistory, FaGoogle, FaMicrosoft, FaEnvelope, FaPastafarianism, FaDailymotion } 
// from 'react-icons/fa';
// import { Label } from 'recharts';
// import { Input } from '../ui/input';
// import { Button } from 'react-day-picker';

// const FooterComponents = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const fabRef = useRef(null);

//   // Handle click outside to close
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (fabRef.current && !fabRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Prevent body scroll when open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [isOpen]);

//   const socialActions = [
//     {
//       icon: <FaWhatsapp className="text-2xl" />,
//       label: 'WhatsApp',
//       url: 'https://wa.me/message/O3CTLULQDASLC1',
//       color: 'bg-green-500 hover:bg-green-600',
//     },
//     {
//       icon: <FaFacebookMessenger className="text-2xl" />,
//       label: 'Messenger',
//       url: 'https://m.me/jahidul.islam.98621',
//       color: 'bg-blue-500 hover:bg-blue-600',
//     },
//   ];

//   return (
//     <section>
//       <div ref={fabRef} className="fixed bottom-6 right-6 z-50">
//         <FaPastafarianism>
//           {isOpen && (
//             <FaDailymotion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               transition={{ type: 'spring', damping: 20 }}
//               className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl p-4 z-50 flex flex-col">
//               {/* Header with Close Button */}
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800">How can we help?</h3>
//                 <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
//                   <FaTimes className="text-xl" />
//                 </button>
//               </div>

//               {/* Profile Image and Name */}
//               <div className="flex items-center gap-3 mb-4">
//                 <img
//                   src="https://via.placeholder.com/40" // Replace with actual profile image URL
//                   alt="Sarah's profile"
//                   className="w-10 h-10 rounded-full object-cover"/>
//                 <span className="text-gray-700 font-medium">Sarah</span>
//               </div>

//               {/* Chat Input */}
//               <div className="mb-4">
//                 <Label className="sr-only">Chat with us</Label>
//                 <Input
//                   id="chat-input"
//                   placeholder="Chat type here..."
//                   className="w-full text-black"/>
//               </div>

//               {/* Voice and History Buttons */}
//               <div className="flex flex-col gap-3 mb-4">
//                 <Button className="w-full justify-start text-gray-700 hover:bg-gray-100">
//                   <FaMicrophone className="mr-2" /> Talk to Sarah (voice)
//                 </Button>
//                 <Button className="w-full justify-start text-gray-700 hover:bg-gray-100">
//                   <FaHistory className="mr-2" /> Voice history
//                 </Button>
//               </div>

//               {/* OR Separator */}
//               <div className="flex items-center my-4">
//                 <hr className="flex-grow border-t border-gray-300" />
//                 <span className="px-3 text-gray-500 text-sm">OR</span>
//                 <hr className="flex-grow border-t border-gray-300" />
//               </div>

//               {/* Social Media Links (moved inside the chat modal for a unified experience) */}
//               <div className="flex flex-col gap-3 mb-4">
//                 {socialActions.map((action, index) => (
//                   <a
//                     key={action.label}
//                     href={action.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`flex items-center justify-start py-2 px-4 rounded-md shadow-sm ${action.color} text-white transition-all hover:shadow-lg hover:scale-[1.02]`}
//                     aria-label={action.label}>
//                     {action.icon}
//                     <span className="ml-3 font-medium">{action.label}</span>
//                   </a>
//                 ))}
//               </div>


//               {/* Sign-up/Login Buttons */}
//               <div className="flex flex-col gap-3">
//                 <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
//                   <FaGoogle className="mr-2" /> Continue with Google
//                 </Button>
//                 <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
//                   <FaMicrosoft className="mr-2" /> Continue with Microsoft
//                 </Button>
//                 <Button className="w-full text-gray-700 hover:bg-gray-100">
//                   <FaEnvelope className="mr-2" /> Sign up with Email
//                 </Button>
//               </div>
//             </FaDailymotion.div>
//           )}
//         </FaPastafarianism>

//         {/* "Visit now!!" text - remains outside the modal */}
//         <div>
//           <span className='text-center text-[#FF0075]'> visit now!! </span>
//         </div>

//         {/* Main FAB Button */}
//         <FaDailymotion.button
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsOpen(!isOpen)}
//           className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl ${
//             isOpen ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-500 to-green-500'
//           } text-white transition-all`}
//           aria-label={isOpen ? 'Close social menu' : 'Open social menu'}
//         >
//           {isOpen ? <FaTimes className="text-xl" /> : <FaComment className="text-xl" />}
//         </FaDailymotion.button>
//       </div>
//     </section>
//   );
// };

// export default FooterComponents;


import React, { useState, useEffect, useRef } from 'react';
import {
 FaComment,FaTimes,FaMicrophone,FaHistory,FaUserPlus,FaSignInAlt,FaRobot,FaUserCircle,FaEdit,FaSave,FaTrashAlt,FaEnvelope,FaGoogle,FaMicrosoft,FaWhatsapp, FaFacebookMessenger, FaTelegramPlane, FaArrowLeft,} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../ui/input'; 
import { Button } from '../ui/button'; 
import { Label } from '../ui/label'; 

 const FooterComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef(null);
  const [activeTab, setActiveTab] = useState('chat'); 
  const [currentView, setCurrentView] = useState('agent');

 // =========== Profile Management States ========= // 
  const [profileImage, setProfileImage] = useState('');
  const [userName, setUserName] = useState('Jahidul Islam'); 
  const [userEmail, setUserEmail] = useState('jahidul.islam@example.com'); 
  const [isEditingProfile, setIsEditingProfile] = useState(false);
 // --- End Profile Management States ---

 // ========= Handle click outside to close =========== // 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fabRef.current && !fabRef.current.contains(event.target)) {
        setIsOpen(false);
        setCurrentView('agent'); 
        setActiveTab('chat');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ========== Prevent body scroll when open ============= // 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // =========== Handle profile image upload ============= // 
  const handleImageUpload = (event) => { 
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // =========== Handle saving profile changes =========== // 
  const handleSaveProfile = () => {
    console.log("Profile saved:", { userName, userEmail, profileImage });
    setIsEditingProfile(false);
    // Show a toast notification
  };

  // Handle deleting profile
  const handleDeleteProfile = () => {
    if (window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      setProfileImage('https://via.placeholder.com/100/A0B2C3/FFFFFF?text=User'); // Reset to default
      setUserName('Guest User'); 
      setUserEmail('');
      setIsEditingProfile(false);
      // ========= Show a success message ========= //
      console.log("Profile deleted.");
    }
  };

  return (
    <section>
      <div ref={fabRef} className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="fixed bottom-24 right-6 w-72 md:w-80 lg:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 flex flex-col border border-gray-200 dark:border-gray-700 max-h-[80vh] overflow-y-auto">
            
              {/* Header with Close Button and View Toggle/Back */}              
              <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700 mb-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                  {currentView === 'agent' && 'AI Agent Support'}
                  {currentView === 'profile' && 'Manage Profile'}
                  {currentView === 'historyOptions' && 'Access History & Connect'}
                </h3>
                <div className="flex items-center gap-2">
                  {currentView === 'agent' && (
                    <Button variant="ghost" onClick={() => setCurrentView('profile')} className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 p-1 rounded-full"title="Manage Profile">
                    <FaUserCircle className="text-xl" />
                    </Button>
                  )}
                  {currentView !== 'agent' && ( 
                    <Button variant="ghost" onClick={() => setCurrentView('agent')}
                    className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 p-1 rounded-full"title="Back to AI Agent">
                    <FaArrowLeft className="text-xl" />
                    </Button>
                  )}
                  <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                  <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Conditional Rendering based on currentView */}
              {currentView === 'agent' && (
                <>
                  {/* Interaction Options: Voice, Chat, Voice History */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <Button onClick={() => setActiveTab('chat')} className={`w-full justify-center py-2 px-3 rounded-md transition-colors duration-200 ${activeTab === 'chat'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'}`}>
                      <FaComment className="mr-2" /> Chat
                    </Button>
                    <Button onClick={() => setActiveTab('voice')} className={`w-full justify-center py-2 px-3 rounded-md transition-colors duration-200 ${activeTab === 'voice'
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'}`}>
                      <FaMicrophone className="mr-2" /> Voice
                    </Button>
                  </div>

                  {/* Dynamic Content based on activeTab */}
                  {activeTab === 'chat' && (
                    <div className="mb-4">
                      <Label htmlFor="chat-input" className="sr-only">Chat type here</Label>
                      <Input id="chat-input"placeholder="Type your message here..." className="w-full text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2"/>
                    </div>
                  )}

                  {activeTab === 'voice' && (
                    <div className="mb-4 text-center text-gray-600 dark:text-gray-300">
                    <p>Click the microphone to start talking.</p>
                    <FaMicrophone className="text-4xl text-green-500 mx-auto my-4 animate-pulse" />
                    </div>
                  )}

                  {/* Click to show history options */}
                  <Button onClick={() => setCurrentView('historyOptions')} className="w-full justify-start text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 transition-colors duration-200 mb-4">
                  <FaHistory className="mr-2 text-purple-500" /> Voice History
                  </Button>

                  {/* AI Terms of Use and Powered by */}
                  <div className="text-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <p className="mb-1">By chatting, you agree to <a href="/ai-terms-of-use" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">AI Terms of Use</a>.</p>
                    <p className="flex items-center justify-center">
                    Powered by <FaRobot className="ml-1 text-blue-500" /> **Jahidul AI Agent Specialist**
                    </p>
                  </div>

                  {/* Signup and Login Buttons (moved here to prevent duplication for now) */}
                  <div className="flex flex-col gap-3">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <FaUserPlus className="mr-2" /> Signup
                    </Button>
                    <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                    <FaSignInAlt className="mr-2" /> Login
                    </Button>
                  </div>
                </>
              )}

              {currentView === 'profile' && (
                // ========= Profile Management Interface ========== // 
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-3">
                    <img src={profileImage} alt="User Profile" className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg"/>
                    {isEditingProfile && (
                      <>
                        <label htmlFor="profile-image-upload" className="cursor-pointer text-blue-600 hover:underline text-sm font-medium">Change Image
                        <input id="profile-image-upload" type="file" accept="image/*" className="hidden"onChange={handleImageUpload}/>
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Max file size: 2MB</p>
                      </>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-name" className="text-gray-700 dark:text-gray-200">Name</Label>
                    <Input id="user-name" value={userName} onChange={(e) => setUserName(e.target.value)} readOnly={!isEditingProfile}
                    className={`w-full text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-2 rounded-md ${isEditingProfile ? 'focus:ring-blue-500 focus:border-blue-500' : 'cursor-default'}`}/>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-email" className="text-gray-700 dark:text-gray-200">Email</Label>
                    <Input id="user-email" type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} readOnly={!isEditingProfile}
                    className={`w-full text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-2 rounded-md ${isEditingProfile ? 'focus:ring-blue-500 focus:border-blue-500' : 'cursor-default'}`}/>
                  </div>

                  {isEditingProfile ? (
                    <div className="flex gap-2">
                      <Button onClick={handleSaveProfile} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                      <FaSave className="mr-2" /> Save
                      </Button>
                      <Button onClick={() => setIsEditingProfile(false)} className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow-md">Cancel
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Button onClick={() => setIsEditingProfile(true)} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                      <FaEdit className="mr-2" /> Edit Profile
                      </Button>
                      <Button onClick={handleDeleteProfile} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                      <FaTrashAlt className="mr-2" /> Delete Profile
                      </Button>
                    </div>
                  )}
                </div>
              )}

              {currentView === 'historyOptions' && (
                // --- History Options Interface ---
                <div className="space-y-4">
                  <p className="text-center text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                  Connect to access your history or continue your journey!
                  </p>

                  <div className="flex flex-col gap-3">
                    {/* Authentication Options */}
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    <FaGoogle className="mr-2" /> Continue with Google
                    </Button>
                    <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                    <FaMicrosoft className="mr-2" /> Continue with Microsoft
                    </Button>
                    <Button className="w-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                    <FaEnvelope className="mr-2" /> Sign up with Email
                    </Button>
                  </div>

                  <div className="flex items-center my-4">
                  <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
                  <span className="px-3 text-gray-500 dark:text-gray-400 text-sm font-medium">OR</span>
                  <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
                  </div>

                  {/* Social Communication Options */}
                  <div className="flex flex-col gap-3">
                    <a href="https://wa.me/message/O3CTLULQDASLC1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-start py-2 px-4 rounded-md shadow-sm bg-green-500 hover:bg-green-600 text-white transition-all hover:shadow-lg hover:scale-[1.02] transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
                    <FaWhatsapp className="mr-2" /> WhatsApp
                    </a>
                    <a href="https://m.me/jahidul.islam.98621" target="_blank" rel="noopener noreferrer" className="flex items-center justify-start py-2 px-4 rounded-md shadow-sm bg-blue-500 hover:bg-blue-600 text-white transition-all hover:shadow-lg hover:scale-[1.02] transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                    <FaFacebookMessenger className="mr-2" /> Messenger
                    </a>
                    <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-start py-2 px-4 rounded-md shadow-sm bg-blue-400 hover:bg-blue-500 text-white transition-all hover:shadow-lg hover:scale-[1.02] transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
                    <FaTelegramPlane className="mr-2" /> Telegram
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* "Visit now!!" text - remains outside the modal */}
        <div className="flex justify-end mt-2">
        <span className='text-center text-[#FF0075] text-sm font-medium animate-pulse'>visit now!!</span>
        </div>

        {/* Main FAB Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl ${
            isOpen ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-500 to-green-500'
          } text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400`}
          aria-label={isOpen ? 'Close AI chat window' : 'Open AI chat window'}>
          {isOpen ? <FaTimes className="text-xl" /> : <FaComment className="text-xl" />}
        </motion.button>
      </div>
    </section>
  );
 };

 export default FooterComponents;