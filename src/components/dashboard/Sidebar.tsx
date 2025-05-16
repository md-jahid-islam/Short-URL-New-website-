import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface SidebarProps {
isOpen: boolean;
setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: DashboardIcon },
    { name: 'URLs', href: '/dashboard/urls', icon: LinksIcon },
    { name: 'Analytics', href: '/dashboard/analytics', icon: AnalyticsIcon },
    { name: 'Profile', href: '/dashboard/profile', icon: UserIcon },
    { name: 'Settings', href: '/dashboard/settings', icon: SettingsIcon },
  ];

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div
        className={`fixed inset-0 z-20 transition-opacity bg-gray-500 bg-opacity-75 lg:hidden ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}onClick={() => setIsOpen(false)}/>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transition duration-300 transform bg-sidebar border-r border-sidebar-border lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
            <Link to="/dashboard" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V8.625M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19" />
               <path d="M9 17L15 17" />
              <path d="M9 13L15 13" />
              <path d="M9 9L11 9" />
              </svg>
              <span className="ml-2 text-xl font-semibold text-sidebar-foreground">LinkShort</span>
            </Link>
            <button className="p-1 lg:hidden"onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sidebar-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href} className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:bg-opacity-50'}`}>
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      isActive ? 'text-sidebar-accent-foreground' : 'text-sidebar-foreground'}`}/>
                  {item.name}
                </Link>
              );
            })}
          </div>
          
          {/* Logout */}
          <div className="p-4 border-t border-sidebar-border">
            <Button variant="outline" className="w-full justify-start text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent"
            onClick={handleLogout}><LogoutIcon className="mr-3 h-5 w-5" /> Logout</Button>
          </div>
        </div>
      </div>
    </>
  );
 };

 // ========== Icons ======= // 
 function DashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round"strokeWidth={2}
    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
    </svg>
  );
}

 function LinksIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24"stroke="currentColor">
    <path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2}
    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
    </svg>
  );
}

 function AnalyticsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}xmlns="http://www.w3.org/2000/svg"
    fill="none"viewBox="0 0 24 24"stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round"strokeWidth={2}
    d="M9 19v-6a2 2 0 01-2-2H5a2 2 0 01-2 2v6a2 2 0 01-1 1H6a2 2 0 01-1-1V5m6 0a2 2 0 012 2h2a2 2 0 012-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    </svg>
  );
}

 function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}xmlns="http://www.w3.org/2000/svg"
    fill="none"viewBox="0 0 24 24"stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  );
 }

 function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}xmlns="http://www.w3.org/2000/svg"
    fill="none"viewBox="0 0 24 24"stroke="currentColor">
    <path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2}
    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
    <path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2}
    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  );
 }

 function LogoutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}xmlns="http://www.w3.org/2000/svg"
    fill="none"viewBox="0 0 24 24"stroke="currentColor">
    <path strokeLinecap="round"strokeLinejoin="round"
    strokeWidth={2}d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
    </svg>
  );
 }
