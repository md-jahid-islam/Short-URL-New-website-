import React, { useState, useEffect, useRef } from 'react';
import {
  FaComment, FaTimes, FaMicrophone, FaHistory, FaUserPlus, FaSignInAlt, 
  FaRobot, FaUserCircle, FaEdit, FaSave, FaTrashAlt, FaEnvelope, 
  FaGoogle, FaMicrosoft, FaWhatsapp, FaFacebookMessenger, FaTelegramPlane, 
  FaArrowLeft, FaLock, FaEye, FaEyeSlash, FaCheck, FaSpinner } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
 
// ========= FooterComponents  ========== //
 const FooterComponents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef(null);
  const [activeTab, setActiveTab] = useState('chat');
  const [currentView, setCurrentView] = useState('agent'); 

  // ========= Profile Management States ========== //
  const [profileImage, setProfileImage] = useState('');
  const [userName, setUserName] = useState('Jahidul Islam');
  const [userEmail, setUserEmail] = useState('jahidul.islam@example.com');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  
  // ========= Authentication States ========== //
  const [authMode, setAuthMode] = useState(null); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  
  // ============== Chat States ================== //
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // ================ Handle click outside to close =========== //
  useEffect(() => { 
    const handleClickOutside = (event) => {
      if (fabRef.current && !fabRef.current.contains(event.target)) {
        setIsOpen(false);
        setCurrentView('agent');
        setActiveTab('chat');
        resetAuthStates();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ================ Prevent body scroll when open ================= //
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

  // =========== Reset authentication states ================== //
  const resetAuthStates = () => {
    setAuthMode(null);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setShowPassword(false);
    setIsLoading(false);
    setAuthSuccess(false);
  };

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

  // ================== Handle saving profile changes ================= //
  const handleSaveProfile = () => {
    console.log("Profile saved:", { userName, userEmail, profileImage });
    setIsEditingProfile(false);
  };

  // =========== Handle deleting profile ========== //
  const handleDeleteProfile = () => {
    if (window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      setProfileImage('');
      setUserName('Guest User');
      setUserEmail('');
      setIsEditingProfile(false);
      console.log("Profile deleted.");
    }
  };

  // =========== Handle authentication submission =========== //
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // ============ Simulate API call ============ //
    setTimeout(() => {
      setIsLoading(false);
      setAuthSuccess(true);
      
      // =========== After successful auth, open new chat ========== //
      setTimeout(() => {
        handleNewChat();
      }, 1500);
    }, 2000);
  };

  // ========== Handle new chat ============ //
  const handleNewChat = () => {
    setCurrentView('newChat');
    setActiveTab('chat');
    resetAuthStates();
    
    // =========== Sample welcome message ========= //
    setMessages([
      {
        id: 1,
        text: "Welcome to Jahid AI Agent Specialist! How can I assist you today?",
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
  };

  // ============= Handle sending a new message =========== //
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // ============ Add user message ============ //
    const userMsg = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages([...messages, userMsg]);
    setNewMessage('');
    
    // ============ Simulate AI typing =========== //
    setIsTyping(true);
    
    // ============ Simulate AI response after delay ========== //
    setTimeout(() => {
      const aiResponses = [
        "I understand your question. Let me help with that.",
        "That's an interesting point. Here's what I can tell you...",
        "Based on my knowledge, I'd recommend the following...",
        "I'm analyzing your request. Please wait a moment...",
        "Thanks for your question. Here's the information you need:"
      ];
      
      const aiMsg = {
        id: messages.length + 2,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  // ========== Render authentication form based on mode =========== //
  const renderAuthForm = () => {
    return (
      <>            
      <div className="space-y-4">
        {authSuccess ? (
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <FaCheck className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-green-600 mb-2">Success!</h3>
            <p className="text-gray-600 dark:text-gray-300">
            {authMode === 'login' ? 'Login successful!' : 'Account created successfully!'}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Redirecting to chat...
            </p>
          </div>
          ) : (
          <>
            <h3 className="text-xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
              {authMode === 'login' ? 'Login to Your Account' : 'Create an Account'}
            </h3>
            
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="auth-email" className="text-gray-700 dark:text-gray-200">
                Email Address
                </Label>
                <Input id="auth-email"type="email"value={email}onChange={(e) => setEmail(e.target.value)}required placeholder="your@email.com"className="w-full"/>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="auth-password" className="text-gray-700 dark:text-gray-200">
                Password
                </Label>
                <div className="relative">
                  <Input id="auth-password"type={showPassword ? 'text' : 'password'}value={password} onChange={(e) => setPassword(e.target.value)}required minLength={8}placeholder="••••••••"className="w-full pr-10"/>
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {authMode !== 'login' && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                  Password must be at least 8 characters
                  </p>
                )}
              </div>
              
              {authMode !== 'login' && (
                <div className="space-y-2">
                  <Label htmlFor="auth-confirm-password" className="text-gray-700 dark:text-gray-200">
                  Confirm Password
                  </Label>
                  <Input id="auth-confirm-password"type={showPassword ? 'text' : 'password'}value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}required minLength={8}placeholder="••••••••"className="w-full"/>
                </div>
              )}
              
              <Button type="submit" disabled={isLoading || (authMode !== 'login' && password !== confirmPassword)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    {authMode === 'login' ? 'Logging in...' : 'Creating account...'}
                  </>
                ) : (
                  <>
                    <FaLock className="mr-2" />
                    {authMode === 'login' ? 'Login' : 'Sign Up'}
                  </>
                )}
              </Button>
            </form>
            
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              {authMode === 'login' ? (
                <p>Don't have an account?{' '}
                  <button onClick={() => setAuthMode('signup')}className="text-blue-600 hover:underline dark:text-blue-400">Sign up
                  </button>
                </p>
              ) : (
                <p>Already have an account?{' '}
                  <button onClick={() => setAuthMode('login')}className="text-blue-600 hover:underline dark:text-blue-400">Login
                  </button>
                </p>
              )}
            </div>
            
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
              <span className="px-3 text-gray-500 dark:text-gray-400 text-sm font-medium">OR</span>
              <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
            </div>
            
            <div className="flex flex-col gap-3">
              <Button onClick={() => { setAuthMode('google');
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    setAuthSuccess(true);
                  }, 1500);
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                <FaGoogle className="mr-2" /> Continue with Google
              </Button>
              
              <Button onClick={() => {setAuthMode('microsoft');
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    setAuthSuccess(true);
                  }, 1500);
                }}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                <FaMicrosoft className="mr-2" /> Continue with Microsoft
              </Button>
            </div>
          </>
        )}
      </div>      
      </>
    );
  };

  return (
    <>
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
                  {currentView === 'newChat' && 'Jotform AI Agent Specialist'}
                  {authMode && (authMode === 'login' ? 'Login' : 'Sign Up')}
                </h3>
                <div className="flex items-center gap-2">
                  {currentView === 'agent' && !authMode && (
                    <Button variant="ghost" onClick={() => setCurrentView('profile')}
                      className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 p-1 rounded-full"
                      title="Manage Profile">
                      <FaUserCircle className="text-xl" />
                    </Button>
                  )}
                  {(currentView !== 'agent' || authMode) && (
                    <Button variant="ghost" onClick={() => {
                        setCurrentView('agent');
                        resetAuthStates();
                      }}
                      className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 p-1 rounded-full"
                      title="Back to AI Agent">
                      <FaArrowLeft className="text-xl" />
                    </Button>
                  )}
                  <button onClick={() => {
                      setIsOpen(false);
                      resetAuthStates();
                    }}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Conditional Rendering based on currentView */}
              {authMode ? (
              renderAuthForm()
              ) : currentView === 'agent' ? (
                <>
                  {/* Interaction Options: Voice, Chat, Voice History */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <Button onClick={() => setActiveTab('chat')}
                      className={`w-full justify-center py-2 px-3 rounded-md transition-colors duration-200 ${
                        activeTab === 'chat'
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'
                      }`}>
                      <FaComment className="mr-2" /> Chat
                    </Button>
                    <Button onClick={() => setActiveTab('voice')}
                      className={`w-full justify-center py-2 px-3 rounded-md transition-colors duration-200 ${
                        activeTab === 'voice'
                          ? 'bg-green-600 hover:bg-green-700 text-white shadow-md'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'
                      }`}>
                      <FaMicrophone className="mr-2" /> Voice
                    </Button>
                  </div>

                  {/* Dynamic Content based on activeTab */}
                  {activeTab === 'chat' && (
                    <div className="mb-4">
                      <Label htmlFor="chat-input" className="sr-only">Chat type here</Label>
                      <Input id="chat-input" placeholder="Type your message here..."className="w-full text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2"/>
                    </div>
                  )}

                  {activeTab === 'voice' && (
                    <div className="mb-4 text-center text-gray-600 dark:text-gray-300">
                      <p>Click the microphone to start talking.</p>
                      <FaMicrophone className="text-4xl text-green-500 mx-auto my-4 animate-pulse" />
                    </div>
                  )}

                  {/* Click to show history options */}
                  <Button onClick={() => setCurrentView('historyOptions')}className="w-full justify-start text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 transition-colors duration-200 mb-4">
                  <FaHistory className="mr-2 text-purple-500 animate-pulse" /> I am ready for your help.!!
                  </Button>

                  {/* AI Terms of Use and Powered by */}
                  <div className="text-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <p className="mb-1">
                      By chatting, you agree to{' '}
                      <a href="/ai-terms-of-use" target="_blank"rel="noopener noreferrer"className="text-blue-600 hover:underline dark:text-blue-400">
                        AI Terms of Use
                      </a>
                      .
                    </p>
                    <p className="flex items-center justify-center">
                      Powered by <FaRobot className="ml-1 text-blue-500" /> Jahidul AI Agent Specialist
                    </p>
                  </div>

                  {/* Signup and Login Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button onClick={() => {
                        setCurrentView('agent');
                        setAuthMode('signup');
                      }}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <FaUserPlus className="mr-2" /> Signup
                    </Button>
                    <Button  onClick={() => {
                        setCurrentView('agent');
                        setAuthMode('login');
                      }}
                      className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                      <FaSignInAlt className="mr-2" /> Login
                    </Button>
                  </div>
                </>
              ) : currentView === 'profile' ? (
                // Profile Management Interface
                <div className="space-y-4">
                  <div className="flex flex-col items-center gap-3">
                    <img src={profileImage || 'https://via.placeholder.com/100/A0B2C3/FFFFFF?text=User'} alt="User Profile" className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg"/>
                    {isEditingProfile && (
                      <>
                        <label htmlFor="profile-image-upload"className="cursor-pointer text-blue-600 hover:underline text-sm font-medium">
                          Change Image
                          <input id="profile-image-upload" type="file"
                          accept="image/*" className="hidden"onChange={handleImageUpload}/>
                        </label>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Max file size: 2MB</p>
                      </>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-name" className="text-gray-700 dark:text-gray-200">
                    Name
                    </Label>
                    <Input id="user-name" value={userName} onChange={(e) => setUserName(e.target.value)} readOnly={!isEditingProfile} className={`w-full text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-2 rounded-md ${
                    isEditingProfile ? 'focus:ring-blue-500 focus:border-blue-500' : 'cursor-default'}`}/>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="user-email" className="text-gray-700 dark:text-gray-200">
                      Email
                    </Label>
                    <Input id="user-email"type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}readOnly={!isEditingProfile} className={`w-full text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-2 rounded-md ${
                    isEditingProfile ? 'focus:ring-blue-500 focus:border-blue-500' : 'cursor-default'
                      }`}/>
                  </div>

                  {isEditingProfile ? (
                    <div className="flex gap-2">
                      <Button onClick={handleSaveProfile} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                      <FaSave className="mr-2" /> Save
                      </Button>
                      <Button onClick={() => setIsEditingProfile(false)} className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                      Cancel
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
                  )};
                </div>
              ) : currentView === 'historyOptions' ? (
                // =========== History Options Interface ========== //
                <div className="space-y-4">
                  <p className="text-center text-gray-700 dark:text-gray-200 text-lg font-semibold mb-4">
                  Connect to access your history or continue your journey!
                  </p>

                  <div className="flex flex-col gap-3">
                    {/* Authentication Options */}
                    <Button onClick={() => {setAuthMode('google'); setIsLoading(true);
                        setTimeout(() => {
                          setIsLoading(false);
                          setAuthSuccess(true);
                        }, 1500);
                      }}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      <FaGoogle className="mr-2" /> Continue with Google
                    </Button>
                    <Button onClick={() => {setAuthMode('microsoft');
                        setIsLoading(true);
                        setTimeout(() => {
                          setIsLoading(false);
                          setAuthSuccess(true);
                        }, 1500);
                      }}
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                      <FaMicrosoft className="mr-2" /> Continue with Microsoft
                    </Button>
                    <Button onClick={() => {setCurrentView('agent');
                      setAuthMode('signup');
                      }}
                      className="w-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
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
                    <a href="https://wa.me/message/O3CTLULQDASLC1"target="_blank"rel="noopener noreferrer"className="flex items-center justify-start py-2 px-4 rounded-md shadow-sm bg-green-500 hover:bg-green-600 text-white transition-all hover:shadow-lg hover:scale-[1.02] transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
                    <FaWhatsapp className="mr-2" /> WhatsApp
                    </a>
                    <a href="https://m.me/jahidul.islam.98621"target="_blank"rel="noopener noreferrer"className="flex items-center justify-start py-2 px-4 rounded-md shadow-sm bg-blue-500 hover:bg-blue-600 text-white transition-all hover:shadow-lg hover:scale-[1.02] transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                    <FaFacebookMessenger className="mr-2" /> Messenger
                    </a>
                    <a href="https://web.telegram.org/a/"target="_blank"rel="noopener noreferrer"className="flex items-center justify-start py-2 px-4 rounded-md shadow-sm bg-blue-400 hover:bg-blue-500 text-white transition-all hover:shadow-lg hover:scale-[1.02] transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300">
                    <FaTelegramPlane className="mr-2" /> Telegram
                    </a>
                  </div>
                </div>
              ) : currentView === 'newChat' ? (
                // ============ New Chat Interface ============= //
                <div className="flex flex-col h-full">
                  <div className="flex-grow overflow-y-auto p-2 border border-gray-300 dark:border-gray-600 rounded-md mb-4 bg-gray-50 dark:bg-gray-700 max-h-[50vh]">
                    {messages.length > 0 ? (
                      messages.map((message) => (
                        <div key={message.id} className={`flex mb-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user'
                            ? 'bg-blue-500 text-white rounded-br-none'
                            : 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100 rounded-bl-none'
                            }`}>
                            {message.text}
                            <div className="text-xs mt-1 opacity-70">
                            {message.timestamp}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500 dark:text-gray-400 italic py-4">
                      Welcome to the Jahid AI Agent Specialist chat! How can I assist you today?
                      </p>
                    )}
                    {isTyping && (
                      <div className="flex justify-start mb-3">
                        <div className="bg-gray-200 text-gray-800 p-3 rounded-lg rounded-bl-none dark:bg-gray-600 dark:text-gray-100">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* New Chat Message */}
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Label htmlFor="new-chat-input" className="sr-only">
                    New Chat Message
                    </Label>
                    <Input id="new-chat-input"value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Ask the AI Agent..."className="flex-grow text-black dark:text-white bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-md p-2"/>
                    <Button type="submit"disabled={!newMessage.trim()} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md disabled:opacity-50">
                    <FaComment className="text-lg" />
                    </Button>
                  </form>
                </div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>

        {/* "Visit now!!" text - remains outside the modal */}
        <div className="flex justify-end mt-2">
        <span className="text-center text-[#F7418F] text-sm font-medium mb-4"> Visit Now!!</span>
        </div>

        {/* Main FAB Button */}
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(!isOpen)} className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl ${
          isOpen ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-500 to-green-500'
          } text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400`}
          aria-label={isOpen ? 'Close AI chat window' : 'Open AI chat window'}>
          {isOpen ? <FaTimes className="text-xl" /> : <FaComment className="text-xl" />}
        </motion.button>
      </div>
    </section>   
    </>
  );
 };

 export default FooterComponents;
//  fsaetawerw