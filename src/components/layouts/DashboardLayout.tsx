import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../dashboard/Sidebar';
import { DashboardHeader } from '../dashboard/DashboardHeader';
import FooterComponents from '../footer/FooterComponents';

 export const DashboardLayout: React.FC = () => {
 const [sidebarOpen, setSidebarOpen] = React.useState(false);
  
 return (
 <div className="min-h-screen bg-gray-50">
 <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
 <div className="lg:pl-64 flex flex-col h-screen">
 <DashboardHeader setSidebarOpen={setSidebarOpen} />
        
 <main className="flex-1 p-4 md:p-6 overflow-y-auto">
 <Outlet />
 <FooterComponents/>
 </main>
 </div>
 </div>
  );
 };

 export default DashboardLayout;
