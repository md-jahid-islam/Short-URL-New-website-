import React, { useState, useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Camera, UserRound } from 'lucide-react';
import { toast } from 'sonner';

interface DashboardHeaderProps {
setSidebarOpen: (isOpen: boolean) => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ setSidebarOpen }) => {
  const { user } = useAuth();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB");
      return;
      }
      
      const reader = new FileReader();
      reader.onload = () => {
      setProfileImage(reader.result as string);
      toast.success("Profile image updated");
      };
      reader.readAsDataURL(file);
    }
  };
  
  const triggerFileInput = () => {
  fileInputRef.current?.click();
  };
  
  return (
    <header className="sticky top-0 z-10 flex h-16 bg-white border-b border-gray-200">
      <div className="flex-1 flex justify-between items-center px-4">
        <button
          type="button" className="text-gray-500 hover:text-gray-900 lg:hidden"onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </button>
        
        <div className="flex-1 flex justify-between items-center">
          <div>
          <h1 className="text-xl font-semibold lg:hidden">LinkShort</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>Help
            </Button>
            
            <div className="flex items-center">
              <div className="relative group">
                <Avatar className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity" onClick={triggerFileInput}>
                  <AvatarImage src={profileImage || ""} alt={user?.name || 'User'} />
                  <AvatarFallback className="bg-brand-500 text-white">
                  {user?.name ? user.name.charAt(0).toUpperCase() : <UserRound className="h-4 w-4" />}
                  </AvatarFallback>
                  <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <Camera className="h-4 w-4 text-white" />
                  </div>
                </Avatar>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*"onChange={handleImageUpload}/>
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
              {user?.name || 'User'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
   );
 };
